'use server';

import axios from "axios";
import { BASEURL_PROD, COLLECTIONS } from "../constants";

const retryFetch = async (url, options = {}, retries = 5, delay = 1000) => {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Network response was not ok`);
            }
            return await response.json();
        } catch (error) {
            if (i < retries - 1) {
                console.warn(
                    `Retrying after ${delay} fetch (${i + 1
                    }/${retries}) for ${url} due to error:`,
                    error
                );
                await new Promise((res) => setTimeout(res, delay)); // wait before retrying
                delay *= 1.5;
            } else {
                throw error; // Throw error after exhausting retries
            }
        }
    }
};

const fetchAndSaveData = async (city, entities) => {
    try {
        const promises = entities.map((entity) => {
            const apiEndpoint = `${BASEURL_PROD}api/search/?&city=${city}&entity=${entity}`;
            return retryFetch(apiEndpoint).then((data) => ({ [entity]: data }));
        });

        const allData = await Promise.all(promises);
        const combinedData = Object.assign({}, ...allData);
        const exploreData = Object.values(combinedData).flat();
        const isEmpty =
            exploreData.length === 0 ||
            exploreData.every((obj) => Object.keys(obj).length === 0);
            console.log("from server action isEmpty", isEmpty);
        return combinedData;
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};

const fetchIdNameMp = async (city) => {
    try {
        const apiEndpoint = `${BASEURL_PROD}api/autocomplete/?&city=${city}`;
        return await retryFetch(apiEndpoint);
    } catch (error) {
        console.error("Error in processing:", error);
        throw error;
    }
};

export const fetchData = async (filterLocation = "New Delhi") => {
    try {
        const entities = [
            COLLECTIONS.STUDIO,
            COLLECTIONS.WORKSHOPS,
            COLLECTIONS.COURSES,
            COLLECTIONS.OPEN_CLASSES,
        ];

        // Fetch both `fetchIdNameMp` and `fetchAndSaveData` concurrently
        const [studioIdNameData, exploreEntityData] = await Promise.all([
            fetchIdNameMp(filterLocation),
            fetchAndSaveData(filterLocation, entities),
        ]);

        return {
            studioIdNameData,
            exploreEntityData,
        };
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export const fetchImages = async () => {
    try {        
        const response = await axios.get(`${BASEURL_PROD}api/landingPageImages/`);
        const data = response.data.signed_urls;

        if (Array.isArray(data)) {
            const imageUrlsArray = data;
            const filteredImages = imageUrlsArray.filter(image => typeof image === 'string' && !image.includes("LandingPageImages/?Expire"));

            return filteredImages;
        } else {
            console.error("Expected an array but got:", data);
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

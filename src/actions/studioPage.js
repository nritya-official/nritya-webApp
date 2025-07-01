'use Server';
import axios from "axios";
import { BASEURL_PROD, COLLECTIONS } from '../constants';

const BASEURL_STUDIO = `${BASEURL_PROD}api/studio/`

export const fetchStudioData = async (studioId) => {
    try {
        // setIsLoading(true);
        // if (JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).UserId) {
        //     //const UserId = JSON.parse(localStorage.getItem('userInfo')).UserId
        //     console.log("Recently watched disabled")
        //     //updateRecentlyWatchedInFirebase(UserId, studioId);
        // }
        // setCarouselLoading(true);
        const responseText = await axios.get(`${BASEURL_STUDIO}${studioId}/text/`);
        const dataText = responseText.data;
        return dataText;    
    } catch (error) {
        console.error(error);
    }
};

export const fetchStudioImages = async (studioId) => {
    try {
        const responseImages = await axios.get(`${BASEURL_STUDIO}${studioId}/images/`);
        const returnObj = {};
        const dataImages = responseImages.data;
        if (dataImages && dataImages.StudioImages) {
            const responseImages = dataImages.StudioImages;
            const filteredImages = Array.isArray(responseImages)
                ? responseImages.filter(image => typeof image === 'string' && !image.includes(`${studioId}/?Expire`))
                : [];
            // setCarouselImages(filteredImages);
            returnObj.StudioImages = filteredImages;            
        }

        if (dataImages && dataImages.StudioAnnouncements) {
            returnObj.StudioAnnouncements = dataImages.StudioAnnouncements;
        }

        return returnObj;
    } catch (error) {
        console.error(error);
    } 
}

const fetchStudioEntities = async (studioId, entityType) => {
    const BASE_URL = BASEURL_PROD;
    try {
        const url = `${BASE_URL}crud/${studioId}/${entityType}/`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.success){
            return data.data;
        } else {
            console.error(`Error fetching ${entityType}:`, data.message);
            return [];
        }
    } catch (error) {
        console.error(`Error fetching ${entityType}:`, error);
    }
}

export const fetchStudioEntitiesData = async (studioId) => {
    try {
        const data = await Promise.all([
              fetchStudioEntities(studioId, COLLECTIONS.OPEN_CLASSES),
              fetchStudioEntities(studioId, COLLECTIONS.WORKSHOPS),
              fetchStudioEntities(studioId, COLLECTIONS.COURSES),
            ])
        return data;
    } catch (error) {
        console.error(error);
    }
}
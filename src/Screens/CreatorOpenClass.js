import React from "react";
import { useState, useEffect } from "react";
import { db } from "../config";
import {doc, getDoc, collection, where, getDocs, query, updateDoc} from "firebase/firestore";
import { COLLECTIONS } from "../constants";
import { useSelector } from "react-redux";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";
import { useAuth } from "../context/AuthContext";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/material";
import OpenClassAdd from "../Components/OpenClassAdd";
import OpenClassUpdate from "../Components/OpenClassUpdate";
import CardSlider from "../Components/OpenClassCardSlider";

function CreatorOpenClass() {
  const [studioId, setStudioId] = useState([]);
  const [workshop, setWorkshop] = useState([]);
  const [workshopId, setWorkshopId] = useState([]);
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const [instructors, setInstructors] = useState([]);
  const [isCreator, setIsCreator] = useState(false);
  const [premiumTill, setPremiumTill] = useState(-1);
  const { currentUser } = useAuth();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const activateOpenClass = async (openClassId) => {
    try {
      const docRef = doc(db, COLLECTIONS.OPEN_CLASSES, openClassId);
      await updateDoc(docRef, { active: true });

      setWorkshop((prev) =>
        prev.map((workshop) =>
          workshop.id === openClassId ? { ...workshop, active: true } : workshop
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deactivateOpenClass = async (openClassId) => {
    try {
      const docRef = doc(db, COLLECTIONS.OPEN_CLASSES, openClassId);
      await updateDoc(docRef, { active: false });

      setWorkshop((prev) =>
        prev.map((workshop) =>
          workshop.id === openClassId
            ? { ...workshop, active: false }
            : workshop
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getCreatorMode = async (event) => {
      try {
        const userRef = doc(db, "User", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          if (userSnap.data() != null) {
            setIsCreator(userSnap.data().CreatorMode);
            setPremiumTill(userSnap.data().isPremium);
          }
        }
      } catch (error) {
        console.log(" error");
      }
    };

    getCreatorMode();
  }, [isCreator]);

  useEffect(() => {
    const fetchInstructors = async () => {
      let userId = null;
      if (
        JSON.parse(localStorage.getItem("userInfo")) &&
        JSON.parse(localStorage.getItem("userInfo")).UserId
      ) {
        userId = JSON.parse(localStorage.getItem("userInfo")).UserId;
      }
      if (!userId) {
        alert("User not found");
        return;
      }

      const instructorRef = collection(db, COLLECTIONS.INSTRUCTORS);
      const q = query(instructorRef, where("createdBy", "==", userId));
      const querySnapshot = await getDocs(q);

      const instructorsList = [];
      querySnapshot.forEach((doc) => {
        instructorsList.push({
          id: doc.id,
          name: doc.data().name,
        });
      });
      setInstructors(instructorsList);
    };

    fetchInstructors();
  }, []);

  useEffect(() => {
    const getStudioCreated = async () => {
      const q = query(
        collection(db, COLLECTIONS.STUDIO),
        where(
          "UserId",
          "==",
          JSON.parse(localStorage.getItem("userInfo")).UserId
        )
      );

      const querySnapshot = await getDocs(q);
      const studiosOfUser = querySnapshot.docs
        .filter((doc) => doc.data().studioName)
        .map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        });
      setStudioId(
        studiosOfUser.map(
          (studio) => String(studio.studioName) + " :" + String(studio.id)
        )
      );
    };

    getStudioCreated();
  }, []);

  useEffect(() => {
    const getWorkshopCreated = async () => {
      const q = query(
        collection(db, COLLECTIONS.OPEN_CLASSES),
        where(
          "UserId",
          "==",
          JSON.parse(localStorage.getItem("userInfo")).UserId
        )
      );
      const querySnapshot = await getDocs(q);
      const workshopsOfUserPromise = querySnapshot.docs
        .filter((doc) => doc.data().openClassName)
        .map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
          };
        }).map(async (workshop) => {
          const docRef = doc(db, COLLECTIONS.STUDIO, workshop?.StudioId);
          const docSnap = await getDoc(docRef);
          return { ...workshop, studioDetails: docSnap.data() };
        });
      const workshopsOfUser = await Promise.all(workshopsOfUserPromise)
      localStorage.setItem("OpenCLassCreated", JSON.stringify(workshopsOfUser));
      setWorkshop(workshopsOfUser);
      setWorkshopId(
        workshopsOfUser.map(
          (workshop) =>
            String(workshop.openClassName) + " :" + String(workshop.id)
        )
      );
    };

    getWorkshopCreated();
  }, [setWorkshop]);

  useEffect(() => {
    const workshopsOfUser =
      JSON.parse(localStorage.getItem("OpenClassCreated")) || [];
    setWorkshop(workshopsOfUser);

    const workshopIdList = workshopsOfUser.map(
      (workshop) => `${workshop.openClassName} : ${workshop.id}`
    );
    setWorkshopId(workshopIdList);
  }, [setWorkshopId]);

  return (
    <div>
      <br></br>
      {isCreator ? (
        <>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  style={{ color: isDarkModeOn ? "white" : "black" }}
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    style={{ color: isDarkModeOn ? "white" : "black" }}
                    label="Add Open Class"
                    value="1"
                  />
                  <Tab
                    style={{ color: isDarkModeOn ? "white" : "black" }}
                    label="Update Open Class"
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <OpenClassAdd
                  instructors={instructors}
                  studioId={studioId}
                  setOpenClass={setWorkshop}
                />
              </TabPanel>
              <TabPanel value="2">
                <>
                  <OpenClassUpdate
                    instructors={instructors}
                    workshopId={workshopId}
                    studioId={studioId}
                  />
                </>
              </TabPanel>
            </TabContext>
          </Box>
        </>
      ) : (
        ""
      )}

      {workshop.length > 0 && (
        <>
          <h3 style={{ color: isDarkModeOn ? "white" : "black" }}>
            Your Open Classes:
          </h3>
          <CardSlider
            dataList={workshop}
            activateOpenClass={activateOpenClass}
            deactivateOpenClass={deactivateOpenClass}
            actionsAllowed
          />
        </>
      )}
    </div>
  );
}
export default CreatorOpenClass;

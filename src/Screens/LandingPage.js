'use client'
import React, { useState, useEffect, lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "@mui/material/Skeleton";
import MUIButton from "@mui/material/Button";
import Box from "@mui/material/Box";
import { COLLECTIONS } from "../constants";
import {
  faBolt,
  faMusic,
  faHiking,
  faGlassCheers,
} from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";
import LocationComponent from "../Components/LocationComponent";
import SearchIcon from "@mui/icons-material/Search";
import EntitySkeleton from "../Components/EntitySkeleon";
import { useLoader } from "../context/LoaderContext";
import NrityaLandingPage from "./NrityaLandingPage";
import ContactUsWidget from "../Components/ContactUsWidget";
import { useRouter } from "next/navigation";

const DanceCarousel = lazy(() => import("../Components/DanceCarousel"));
const CardSlider = lazy(() => import("../Components/CardSlider"));
const CardSliderNew = lazy(() => import("../Components/CardSliderNew"));

const FILTER_SEARCH_TYPE_KEY = "filterSearchType";

// Define the array of dance forms with their names and corresponding icons
const danceForms = [
  { name: "Bollywood", icon: faMusic },
  { name: "Bharatnatyam", icon: faMusic },
  { name: "Odisi", icon: faGlassCheers },
  { name: "Kathak", icon: faBolt },
  { name: "Salsa", icon: faGlassCheers },
  { name: "Hip Hop", icon: faBolt },
  { name: "Ballet", icon: faHiking },
  { name: "Jazz", icon: faHiking },
  { name: "Tango", icon: faHiking },
  { name: "Tap Dance", icon: faHiking },
];
const FILTER_DISTANCES_KEY = "filterDistances";
const FILTER_DANCE_FORMS_KEY = "filterDanceForms";

function LandingPage({ studioIdName, exploreEntity, danceImagesUrl }) {
  const { setIsLoading } = useLoader();
  // const [exploreEntity, setExploreEntity] = useState({
  //   [COLLECTIONS.STUDIO]: {},
  //   [COLLECTIONS.WORKSHOPS]: {},
  //   [COLLECTIONS.OPEN_CLASSES]: {},
  //   [COLLECTIONS.COURSES]: {},
  // });
  // const [studioIdName, setStudioIdName] = useState({});
  // const [danceImagesUrl, setDanceImagesUrl] = useState([]);
  const [showLandingPage, setShowLandingPage] = useState(false);
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const router = useRouter();

  const handleCardClick = (danceName) => {
    localStorage.removeItem(FILTER_DISTANCES_KEY);
    localStorage.setItem(FILTER_DANCE_FORMS_KEY, JSON.stringify([danceName]));
    if (localStorage.getItem(FILTER_DANCE_FORMS_KEY) === danceName) {
      //console.log("API LandingPage done", danceName);
    }
    setTimeout(() => {
      router.push("/search/studio");
    }, 100);
  };

  const navigateToSearch = (entity) => {
    localStorage.setItem(FILTER_SEARCH_TYPE_KEY, entity);
    router.push(`/search/${entity}`);
  };

  const cardStyle = {
    background: isDarkModeOn ? "#333333" : "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const buttonStyle = {
    textTransform: "none",
    borderColor: isDarkModeOn ? "white" : "black",
    color: isDarkModeOn ? "white" : "black",
    borderWidth: "1px",
    height: "2rem",
    width: "100%",
  };

  useEffect(() => {
    (async function () {
      // setIsLoading(true);
      // const filterLocation = localStorage.getItem("filterLocation") || "New Delhi";
      // const { studioIdNameData, exploreEntityData } = await fetchData(filterLocation);
      // const filteredImages = await fetchImages();

      // setStudioIdName(studioIdNameData);
      // setExploreEntity(exploreEntityData);
      // setDanceImagesUrl(filteredImages);

      // Check if the exploreEntity is empty
      const exploreData = Object.values(exploreEntity).flat();
      const isEmpty = exploreData.length === 0 || exploreData.every(
        (entity) => Object.keys(entity).length === 0
      );        
      // if (isEmpty) {
      setShowLandingPage(isEmpty);
      // } else {
      // setShowLandingPage(true);
      // }
    })();
  }, [exploreEntity]);

  console.log("exploreEntity", exploreEntity);

  return (
    <>
      {showLandingPage ? (
        <NrityaLandingPage />
      ) : (
        <>
          <div>
            <Container className="my-0">
              <Row className="pb-1 pl-0 pr-0">
                <Suspense
                  fallback={
                    <Skeleton
                      width="100%"
                      height="40vh"
                      variant="rectangular"
                    />
                  }
                >
                  {danceImagesUrl.length > 0 ? (
                    <DanceCarousel danceImages={danceImagesUrl} />
                  ) : (
                    <Skeleton
                      sx={{
                        width: "100%",
                        height: "40vh",
                        bgcolor: isDarkModeOn ? "#202020" : "gray",
                      }}
                      variant="rectangular"
                      animation="wave"
                    />
                  )}
                </Suspense>
              </Row>

              <Row className="d-lg-none pb-2">
                <MUIButton
                  endIcon={
                    <SearchIcon
                      style={{ color: isDarkModeOn ? "white" : "black" }}
                    />
                  }
                  variant="outlined"
                  className="me-2 rounded-3"
                  href="/search/studios"
                  style={buttonStyle}
                >
                  Search
                </MUIButton>
              </Row>

              <LocationComponent />
              <br />
              {/* Studios Section */}
              {exploreEntity[COLLECTIONS.STUDIO] &&
                Object.keys(exploreEntity[COLLECTIONS.STUDIO]).length > 0 && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3
                        style={{
                          color: isDarkModeOn ? "white" : "black",
                          textTransform: "none",
                        }}
                      >
                        Explore Studios
                      </h3>
                      {Object.keys(exploreEntity[COLLECTIONS.STUDIO]).length >
                        4 ? (
                        <MUIButton
                          sx={{
                            color: "white",
                            bgcolor: "#735EAB",
                            "&:hover": { bgcolor: "#735EAB" },
                            "&:active": { bgcolor: "#735EAB" },
                          }}
                          variant="text"
                          onClick={() => navigateToSearch("studio")}
                        >
                          View All
                        </MUIButton>
                      ) : null}
                    </Box>
                    <Row>
                      {/* Wrap CardSlider with Suspense */}
                      <Suspense fallback={<EntitySkeleton />}>
                        <CardSlider
                          dataList={exploreEntity[COLLECTIONS.STUDIO]}
                          imgOnly={false}
                        />
                      </Suspense>
                    </Row>
                  </>
                )}

              {/* Workshops Section */}
              {exploreEntity[COLLECTIONS.WORKSHOPS] &&
                Object.keys(exploreEntity[COLLECTIONS.WORKSHOPS]).length >
                0 && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3
                        style={{
                          color: isDarkModeOn ? "white" : "black",
                          textTransform: "none",
                        }}
                      >
                        Explore Workshops
                      </h3>
                      {Object.keys(exploreEntity[COLLECTIONS.WORKSHOPS])
                        .length > 4 ? (
                        <MUIButton
                          sx={{
                            color: "white",
                            bgcolor: "#735EAB",
                            "&:hover": { bgcolor: "#735EAB" },
                            "&:active": { bgcolor: "#735EAB" },
                          }}
                          onClick={() => navigateToSearch("workshop")}
                        >
                          View All
                        </MUIButton>
                      ) : null}
                    </Box>
                    <Row>
                      <Suspense fallback={<EntitySkeleton />}>
                        <CardSliderNew
                          dataList={exploreEntity[COLLECTIONS.WORKSHOPS]}
                          studioIdName={studioIdName}
                          type={COLLECTIONS.WORKSHOPS}
                        />
                      </Suspense>
                    </Row>
                  </>
                )}

              {/* Open Classes Section */}
              {exploreEntity[COLLECTIONS.OPEN_CLASSES] &&
                Object.keys(exploreEntity[COLLECTIONS.OPEN_CLASSES]).length >
                0 && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3
                        style={{
                          color: isDarkModeOn ? "white" : "black",
                          textTransform: "none",
                        }}
                      >
                        Explore Open Classes
                      </h3>
                      {Object.keys(exploreEntity[COLLECTIONS.OPEN_CLASSES])
                        .length > 4 ? (
                        <MUIButton
                          sx={{
                            color: "white",
                            bgcolor: "#735EAB",
                            "&:hover": { bgcolor: "#735EAB" },
                            "&:active": { bgcolor: "#735EAB" },
                          }}
                          onClick={() => navigateToSearch("openClass")}
                        >
                          View All
                        </MUIButton>
                      ) : null}
                    </Box>
                    <Row>
                      <Suspense fallback={<EntitySkeleton />}>
                        <CardSliderNew
                          dataList={exploreEntity[COLLECTIONS.OPEN_CLASSES]}
                          studioIdName={studioIdName}
                          type={COLLECTIONS.OPEN_CLASSES}
                        />
                      </Suspense>
                    </Row>
                  </>
                )}

              {/* Courses Section */}
              {exploreEntity[COLLECTIONS.COURSES] &&
                Object.keys(exploreEntity[COLLECTIONS.COURSES]).length > 0 && (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3
                        style={{
                          color: isDarkModeOn ? "white" : "black",
                          textTransform: "none",
                        }}
                      >
                        Explore Courses
                      </h3>
                      {Object.keys(exploreEntity[COLLECTIONS.COURSES]).length >
                        4 ? (
                        <MUIButton
                          sx={{
                            color: "white",
                            bgcolor: "#735EAB",
                            "&:hover": { bgcolor: "#735EAB" },
                            "&:active": { bgcolor: "#735EAB" },
                          }}
                          onClick={() => navigateToSearch("course")}
                        >
                          View All
                        </MUIButton>
                      ) : null}
                    </Box>
                    <Row>
                      <Suspense fallback={<EntitySkeleton />}>
                        <CardSliderNew
                          dataList={exploreEntity[COLLECTIONS.COURSES]}
                          studioIdName={studioIdName}
                          type={COLLECTIONS.COURSES}
                        />
                      </Suspense>
                    </Row>
                  </>
                )}

              <br />
              <h3
                style={{
                  color: isDarkModeOn ? "white" : "black",
                  textTransform: "none",
                }}
              >
                BROWSE BY DANCE FORMS
              </h3>
              <Row>
                {danceForms.map((danceForm, index) => (
                  <Col key={index} sm={6} md={4} lg={3}>
                    <Card
                      className="card-hover"
                      style={cardStyle}
                      onClick={() => handleCardClick(danceForm.name)}
                    >
                      <Card.Body style={{ textAlign: "center" }}>
                        <h4 style={{ color: isDarkModeOn ? "white" : "black" }}>
                          {danceForm.name}
                        </h4>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          <ContactUsWidget />
        </>
      )}
    </>
  );
}

export default LandingPage;

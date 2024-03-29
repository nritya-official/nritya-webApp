import React, { useState,useEffect,useRef  } from "react";
import { Container, Row, Col, Card, Button, Carousel, ButtonGroup,Image } from "react-bootstrap";
import Dance1 from "../Components/DanceImg/Dance1.jpg";
import Dance2 from "../Components/DanceImg/Dance2.jpg";
import Dance3 from "../Components/DanceImg/Dance3.jpg";
import Dance4 from "../Components/DanceImg/Dance4.jpg";
import Dance5 from "../Components/DanceImg/Dance5.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { db } from '../config';
import { doc, getDoc,setDoc,addDoc,updateDoc,collection,where,getDocs,query,limit } from "firebase/firestore";
import { COLLECTIONS } from '../constants';
import StudioCard from "../Components/StudioCard";
import { faBolt, faMusic, faHiking, faTrophy, faGlassCheers,faClock } from "@fortawesome/free-solid-svg-icons"; // Import specific icons from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudioCardIcon from "../Components/StudioCardIcon";
import './LandingPage.css'
import MapsInput from "../Components/MapsInput";
import { useSelector, useDispatch } from 'react-redux';
import { selectDarkModeStatus } from '../redux/selectors/darkModeSelector'; 
import CardSlider from "../Components/CardSlider";
import ResponsiveText from "../Components/ResponsiveText";
import { FaSearch } from 'react-icons/fa';
import LocationComponent from "../Components/LocationComponent";
import { useNavigate } from 'react-router-dom';

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
const FILTER_DISTANCES_KEY = 'filterDistances';
const FILTER_DANCE_FORMS_KEY = 'filterDanceForms';
const danceImages = [Dance3, Dance4, Dance5, Dance1, Dance2];
const overlayCards = [
  { title: "Group Style", text: "A synchronized dance performed by a group of dancers." },
  { title: "Desi Style", text: "A traditional and cultural dance style with rich cultural elements." },
  { title: "Stage Performance", text: "An energetic and captivating dance performed on stage." },
  { title: "Couple Style", text: "A romantic and coordinated dance performed by a dance couple." },
  { title: "Bar Style", text: "A trendy and upbeat dance style commonly seen in bars and clubs." },
];


function LandingPage() {
  const [exploreCards, setExploreCards] = useState([])
  const [recentlyWatchedStudios, setRecentlyWatchedStudios] = useState([]);
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const navigate = useNavigate(); 

  const handleCardClick = (danceName) => {
    localStorage.removeItem(FILTER_DISTANCES_KEY);
    localStorage.setItem(FILTER_DANCE_FORMS_KEY, danceName);
    if(localStorage.getItem(FILTER_DANCE_FORMS_KEY)==danceName){
      console.log("API LandingPage done",danceName)
    }
    setTimeout(() => {
      navigate('/search/studios');
    }, 100); 
  };


  const fetchRecentlyWatchedStudios = async (userId) => {
    try {
      const userRef = doc(db, COLLECTIONS.USER, userId);
      const userDoc = await getDoc(userRef);
      const recentlyWatchedMap = userDoc.exists() ? userDoc.data().recentlyWatched : {};
  
      // Get the studio IDs from the recentlyWatched map
      const studioIds = Object.values(recentlyWatchedMap);
      console.log("got",studioIds)
      // Fetch the studio data for each studio ID using Promise.all
      const studioDataPromises = studioIds.map(async (studioId) => {
        console.log(studioId)
        if (!studioId) {
          console.warn("Invalid studioId:", studioId);
          return null;
        }
        console.log("studioId", studioId);
        const studioRef = doc(db, COLLECTIONS.STUDIO, studioId);
        const studioDoc = await getDoc(studioRef);
        if (studioDoc.exists()) {
          console.log(studioDoc.data())
          return { id: studioId, ...studioDoc.data() };
        } else {
          console.warn(`Studio document not found for ID: ${studioId}`);
          return null;
        }
      });
  
      // Wait for all promises to resolve using Promise.all
      const studioData = await Promise.all(studioDataPromises);
  
      // Filter out any null values caused by invalid or missing studioId values
      const validStudioData = studioData.filter((studio) => studio !== null);
  
      // Update the state with the fetched studio data
      setRecentlyWatchedStudios(validStudioData);
    } catch (error) {
      console.error("Error fetching recently watched studios:", error);
    }
  };

  const overlayStyle = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 1,
    background: "rgba(255, 255, 255, 0.7)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "2px",
    width: "80%", // Set a default width for the overlay
    maxWidth: "400px", // Set a maximum width for the overlay
  };

  const titleStyle = {
    fontSize: "24px",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: "2px",
  };

  // For smaller screens (sm)
  const smallScreenMediaQuery = "@media (max-width: 768px)";
  const smallScreenOverlayStyle = {
    ...overlayStyle,
    top: "40%", // Adjust the top position for smaller screens
    width: "90%", // Adjust the width for smaller screens
  };

  // For extra-small screens (xs)
  const extraSmallScreenMediaQuery = "@media (max-width: 576px)";
  const extraSmallScreenOverlayStyle = {
    ...overlayStyle,
    top: "50%", // Adjust the top position for extra-small screens
    width: "100%", // Adjust the width for extra-small screens
  };

  // Apply the appropriate overlay styles based on the screen size
  const currentOverlayStyle =
    smallScreenMediaQuery in document.body.style
      ? smallScreenOverlayStyle
      : extraSmallScreenMediaQuery in document.body.style
      ? extraSmallScreenOverlayStyle
      : overlayStyle;

  // Adjust the font size for smaller screens using media queries
  const smallScreenTitleStyle = {
    ...titleStyle,
    fontSize: "24px", // Adjust the font size for smaller screens
  };

  // Adjust the font size for extra-small screens using media queries
  const extraSmallScreenTitleStyle = {
    ...titleStyle,
    fontSize: "10px", // Adjust the font size for extra-small screens
  };

  // Apply the appropriate title styles based on the screen size
  const currentTitleStyle =
    smallScreenMediaQuery in document.body.style
      ? smallScreenTitleStyle
      : extraSmallScreenMediaQuery in document.body.style
      ? extraSmallScreenTitleStyle
      : titleStyle;
  
  
      const subtitleStyle = {
        fontSize: "16px", // Default font size for the subtitle
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        padding: "2px",
      };
    
      // Adjust the font size for smaller screens using media queries
      const smallScreenSubtitleStyle = {
        ...subtitleStyle,
        fontSize: "10px", // Adjust the font size for smaller screens
        color: "cyan",
      };
    
      // Adjust the font size for extra-small screens using media queries
      const extraSmallScreenSubtitleStyle = {
        ...subtitleStyle,
        fontSize: "6px", // Adjust the font size for extra-small screens
        color: "cyan",
      };
    
      // Apply the appropriate subtitle styles based on the screen size
      const currentSubtitleStyle =
        smallScreenMediaQuery in document.body.style
          ? smallScreenSubtitleStyle
          : extraSmallScreenMediaQuery in document.body.style
          ? extraSmallScreenSubtitleStyle
          : subtitleStyle;

  const cardStyle = {
    background: isDarkModeOn ? '#333333' : 'white',
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    cursor: 'pointer' ,
  };

  useEffect(() => {
    const getStudios = async () => {
      const studioRef = collection(db, COLLECTIONS.STUDIO);
      const q = query(studioRef, limit(15));
      const querySnapshot = await getDocs(q);
      const exploreStudioList = querySnapshot.docs.filter(doc => doc.data().studioName).map(doc => 
        { const data = doc.data();
          return {
            id: doc.id, // Include the document ID in the data
            ...data
          };
      });
      setExploreCards(exploreStudioList)
      console.log(exploreCards)
      if (JSON.parse(localStorage.getItem('userInfo')) && JSON.parse(localStorage.getItem('userInfo')).UserId) {
        const userId = JSON.parse(localStorage.getItem('userInfo')).UserId;
        fetchRecentlyWatchedStudios(userId);
      }
    }

    getStudios();
  }, []);

    // Define a state variable to hold the dynamic image height
    const [imageHeight, setImageHeight] = useState(400);

    useEffect(() => {
      
      const calculateImageHeight = () => {
        const screenWidth = window.innerWidth;
        
        const aspectRatioWidth = 16;
        const aspectRatioHeight = 9;
        // Calculate the height based on the aspect ratio and available width
        const desiredHeight = (screenWidth * aspectRatioHeight) / aspectRatioWidth;
        setImageHeight(desiredHeight);
      };
  
      calculateImageHeight();
      window.addEventListener("resize", calculateImageHeight);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", calculateImageHeight);
      };
    }, []);

  return (
    <div className="landing-page" >
      <Container className="my-5">
        <Row>
          <Col>
            <Carousel >
              {danceImages.map((image, index) => (
                <Carousel.Item key={index}>
                {window.innerWidth > 768 && ( // Show the overlay only when the screen is larger than 768 pixels
                  <div style={currentOverlayStyle}>
                    <h1 style={currentTitleStyle}>{overlayCards[index].title}</h1>
                    <p className="carousel-text" style={currentSubtitleStyle}>
                      {overlayCards[index].text}
                    </p>
                  </div>
                )}
                <img src={image} alt={`Carousel Item ${index + 1}`} style={{ height: window.innerWidth > 768 ? '50vh' : `${imageHeight}px`, width: "100%",objectFit: "cover" }} />
                
                </Carousel.Item>
              
              ))}
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          {recentlyWatchedStudios.length > 0 && <h3 style={{color: isDarkModeOn ? 'white' : 'black'}}> <FontAwesomeIcon icon={faClock} size="1x" /> Recently Viewed</h3>}
          {recentlyWatchedStudios.length>0?(<CardSlider dataList={recentlyWatchedStudios} imgOnly={false}/>):""}
        </Row>
          <LocationComponent/>


        <br/>
        <h3 style={{color: isDarkModeOn ? 'white' : 'black'}} >Explore Studios</h3>
        <Row>
            <CardSlider dataList={exploreCards} imgOnly={false}/>
        </Row>
        <br/>
        <h3 style={{color: isDarkModeOn ? 'white' : 'black'}} >BROWSE BY DANCE FORMS</h3>
        <Row >
          {danceForms.map((danceForm, index) => (
            <Col key={index} sm={6} md={4} lg={3}>
              <Card style={cardStyle} onClick={() => handleCardClick(danceForm.name)}>
                <Card.Body>
                  <h4 style={{color: isDarkModeOn ? 'white' : 'black'}}>{danceForm.name}</h4>
                </Card.Body>
              </Card>
              <br></br>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;

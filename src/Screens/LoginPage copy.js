/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth , provider}  from './../config.js';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from '../config';
import { doc, getDoc,setDoc } from "firebase/firestore";
import { STATUSES,COLLECTIONS } from "./../constants.js";
import {  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { selectDarkModeStatus } from '../redux/selectors/darkModeSelector'; 
import localImage from '../Components/DanceImg/Dance1.jpg';
import { Box, Button, Container } from '@mui/material';
import  './LoginPage.css'



function LoginPage({onLogin,setIsLoggedIn}) {
  
  const [loginFailed, setLoginFailed] = useState(false);
  const isDarkModeOn = useSelector(selectDarkModeStatus); // Use useSelector to access isDarkModeOn

  const navigate = useNavigate();

    const addUserIfMissing = async (user) => {
      try {
        const userRef = doc(db, COLLECTIONS.USER, user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          console.log("User there");
        } else {
          // docSnap.data() will be undefined in this case
          console.log("No such document!");
          await setDoc(doc(db, COLLECTIONS.USER, user.uid), {
            Name: user.displayName,
            Email: user.email,
            DoB: null, // You may want to add user's date of birth here
            UserId: user.uid,
            WorkshopCreated: [],
            WorkshopEnrolled: [],
            Cart: [],
            CreatorMode: false,
            KycIdList:{},
            StudioCreated:[],
            premiumTill: false,
            TransactionIDs:[],
            recentlyWatched:{0:"",1:"",2:"",3:"",4:""},
          });
          console.log("User added successfully");
        }

        const userRef2 = doc(db, COLLECTIONS.USER, user.uid);
        const userSnap2 = await getDoc(userRef2);
        localStorage.setItem('userDetails',JSON.stringify({"UserId":user.uid,"email":user.email,"isPremium":userSnap2.data().isPremium,"displayName":userSnap2.data().displayName,"WorkshopCreated":userSnap2.data().WorkshopCreated,"WorkshopEnrolled":userSnap2.data().WorkshopEnrolled}));
       

        
      } catch (error) {
        console.error("Error adding user: ", error);
      }
    };

    const signin = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        console.log("Access token",accessToken)
        console.log("Id token",idToken)
        const user = result.user;
        console.log("Post login :",user);
        console.log("UserId",user.uid);
        console.log("Result ", result)
        onLogin({"UserId":user.uid,"email":user.email,"isPremium":user.isPremium,"displayName":user.displayName,"WorkshopCreated":user.WorkshopCreated,"WorkshopEnrolled":user.WorkshopEnrolled},user);
        setIsLoggedIn(true);
        await addUserIfMissing(user);

        navigate(`/profile`);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Invalid username or password');
        setLoginFailed(true);
      }
    };
    
      
    return (
      <Container fluid className='custom-container-main'>
          <Row className='padding-top-2 padding-bottom-2'>
            <Col xs={12} md={6}>
              <img src={localImage}
                      alt="Your Local Image Alt Text"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
            </Col>
            <Col xs={12} md={6}
              style={{
                backgroundColor: isDarkModeOn ? '#3a3a3a' : '#323232',
                marginLeft: '-12px'
              }}
            >
              <div className='right-login'>
              <form
                className='custom-login-form'
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent form submission
                  signin(); // Call your signin function on form submission
                }}
              >
                <Button
                  type="submit" // Add a type to the button to trigger form submission
                  style={{
                    backgroundColor: isDarkModeOn ? '#3a3a3a' : '#323232',
                    color: '#f5f5f5',
                    boxShadow: 'none',
                    borderRadius: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    textTransform: 'none',
                    border: '1px solid #777',
                    padding: '12px 24px'
                  }}
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google Icon"
                    style={{ marginRight: '10px', height: '20px' }}
                  />
                  Sign In with Google
                </Button>
              </form>
              </div>
            </Col>
          </Row>
      </Container>
    );
}

export default LoginPage;

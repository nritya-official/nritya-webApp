import { HashRouter, Route, Routes } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import LoginPage from './Screens/LoginPage';
import UserPage from './Screens/UserPage';
import LandingPage from './Screens/LandingPage'
import Header from './Components/Header';
import Footer from './Components/Footer';
import  Kyc  from './Components/Kyc';
import StudioFullPage from './Screens/StudioFullPage';
import SearchPage from './Screens/SearchPage';
import CreatorPlans from './Screens/CreatorPlans';
import Order from './Screens/Order';
import Cart from './Screens/Cart';
import Transactions from './Components/Transactions';
import AdminPage from './Screens/AdminPage';
import Trail from './Components/Trail';
import { connect } from 'react-redux';
import { toggleDarkMode } from './redux/actions/darkModeAction'; 
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { selectDarkModeStatus } from './redux/selectors/darkModeSelector'; 
import { useAuth } from './context/AuthContext';
import ProtectedRoute from './utils/ProtectedRoute';
import CreatorStudio from './Screens/CreatorStudio';
import CreatorDashboard from './Screens/CreatorDashboard';
import CreatorInstructor from './Screens/CreatorInstructor';
import LocationComponent from './Components/LocationComponent';
import {Box, Divider as MuiDivider} from '@mui/material';
import AboutUs from './Screens/About';
import ContactUs from './Screens/ContactUs';
import MyBookings from './Components/MyBookings';
import JobHire from './Screens/JobHire';
import NotFoundPage from './Screens/NotFoundPage';
import CreatorWorkshop from './Screens/CreatorWorkshop';
import CreatorOpenClass from './Screens/CreatorOpenClass';

function App() {
  const isDarkModeOn = useSelector(selectDarkModeStatus); // Use useSelector to access isDarkModeOn
  const dispatch = useDispatch(); 
  const { currentUser } = useAuth();
  

  console.log(isDarkModeOn,"From header")
  if(currentUser ){
    const { displayName, email  } = currentUser;
    console.log("Hii",displayName,email)
  }
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return storedIsLoggedIn === 'true';
  });
  const [username, setUsername] = useState(null);
  const [userID, setUserID] = useState(null);
  const [adminLoggedIn, setAdminLoggedIn] = useState(false)
  useEffect(() => {
    // Check if the URL contains 'n-admin'
    const isNAdminRoute = window.location.pathname.includes('/n-admin');
    // You can add more routes to exclude from header and footer if needed
    setAdminLoggedIn((isNAdminRoute || JSON.parse(localStorage.getItem('adminLogin'))))
    console.log("Admin n",adminLoggedIn)
  }, [adminLoggedIn]);

  const handleLogin = (UserInfo,userInfoFull) => {
    setUsername(UserInfo.displayName);
    setIsLoggedIn(true);
    setUserID(UserInfo.localId)
    localStorage.setItem('username',username);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userInfo',JSON.stringify(UserInfo));
    localStorage.setItem('userInfoFull',JSON.stringify(userInfoFull));
    console.log("User Info Full local", JSON.parse(localStorage.getItem('userInfoFull')));
  };
  
  const handleLogout = () => {
    console.log("Loggin Out")
    setUsername("");
    setIsLoggedIn(false);
    // Remove user data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userInfoFull');
    localStorage.removeItem('posts');
    localStorage.removeItem('adminLogin');
    localStorage.removeItem('userDetails');
    localStorage.removeItem('StudioCreated');
  };
 
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode()); // Dispatch the action using useDispatch
  };

  // console.log(currentUser)
  console.log("hi:",process.env.REACT_APP_TRY)
  return (
    <HashRouter  >
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header username={username} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        
        <main className='py-1 flex-grow-1' style={{backgroundColor: isDarkModeOn ? '#202020' : 'white',width: '100%'}} >
          <Container fluid>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn} />} />
              <Route path='/studio/:studioId' element={<StudioFullPage/>}/>
              <Route path='/st' element={<StudioFullPage/>}/>
              <Route path='/search/:entity' element={<SearchPage/>}/>
              <Route path='/jobs' element={<JobHire/>}/>
              <Route element={<ProtectedRoute/>}>
                <Route path='/profile' element={<UserPage/>}/>
                <Route path='/kyc' element={<Kyc/>}/>
                <Route path='/cplans' element={<CreatorPlans/>}/>
                <Route path='/orders' element={<Order/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/myBookings' element={<MyBookings/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='/creatorDashboard' element={<CreatorDashboard/>}/>
                <Route path='/modifyStudios' element={<CreatorStudio/>}/>
                <Route path='/modifyWorkshops' element={<CreatorWorkshop/>}/>
                <Route path='/modifyOpenClasses' element={<CreatorOpenClass/>}/>
                <Route path='/modifyInstructors' element={<CreatorInstructor/>}/>
              </Route>
              <Route path='/n-trail' element={<Trail/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/contactus' element={<ContactUs/>}/>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </main>

        <Footer />
      </Box>
    </HashRouter>
  );
}

export default App;

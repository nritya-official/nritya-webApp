'use client'
import { useLoader } from "../context/LoaderContext";
import { HashRouter} from 'react-router-dom';
import React, { Suspense } from "react";
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { HelmetProvider } from 'react-helmet-async';
// import './App.css';
import FullScreenLoader from '../Components/FullScreenLoader';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SnackbarProvider from "../context/SnackbarContext";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";

const MainLayout = ({ children }) => {
    const { isLoading } = useLoader();
    const isDarkModeOn = useSelector(selectDarkModeStatus);

    return (
        <HelmetProvider>
            {isLoading ? <FullScreenLoader /> : null}
            <HashRouter  >
                <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Suspense fallback={
                        <Box sx={{
                            width: '100%', height: '7vh', backgroundColor: "black",
                            position: 'sticky', top: 0, zIndex: 1000
                        }}
                        >
                            <Skeleton variant="rectangular" animation="wave" sx={{ height: '100%' }} />
                        </Box>
                    }>
                        <Header />
                    </Suspense>

                    <main className='py-1 flex-grow-1' style={{ backgroundColor: isDarkModeOn ? '#202020' : 'white', width: '100%' }} >
                        <Container fluid>
                            <SnackbarProvider>
                                <Suspense fallback={<Skeleton variant="rectangular" animation="wave" />}>
                                    {children}
                                </Suspense>
                            </SnackbarProvider>
                        </Container>
                    </main>

                    <Suspense fallback={<Skeleton variant="rectangular" animation="wave"
                        style={{
                            width: '100%',
                            height: '10vh',
                            backgroundColor: "black",
                        }}
                    />}>
                        <Footer />
                    </Suspense>
                </Box>
            </HashRouter>
        </HelmetProvider>
    );
}

export default MainLayout;
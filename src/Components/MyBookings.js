import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import { selectDarkModeStatus } from '../redux/selectors/darkModeSelector';
import { db } from '../config';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Modal, Button, Row, Col, Column, Card, Container } from 'react-bootstrap';
import Ticket from './Ticket';
import QRCode from 'react-qr-code';
import { BASEURL_PROD, COLLECTIONS } from '../constants';

function MyBookings() {
  const { currentUser } = useAuth();
  const userId = currentUser.uid;
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query_ref = query(collection(db,COLLECTIONS.FREE_TRIAL_BOOKINGS), where('user_id', '==', userId));
      const querySnapshot = await getDocs(query_ref);
    
      const bookingDataArray = [];
      querySnapshot.forEach((doc) => {
        console.log("Bookings....")
        const bookingData = doc.data();
        console.log(doc.id, ' => ', bookingData);
        bookingDataArray.push({ ...bookingData, 'id': doc.id });
      });
      bookingDataArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      //bookingDataArray.sort((a, b) => b.timestamp.toDate() - a.timestamp.toDate());
      console.log(bookingDataArray)
      setBookings(bookingDataArray);
    };

    fetchData();
  }, [userId]);

  const handleOpenModal = (bookingData) => {
    console.log(selectedBooking)
    setSelectedBooking(bookingData);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const endpoint_url = BASEURL_PROD+"bookings/availFreeTrial/"
  

  return (
    <div style={{ backgroundColor: isDarkModeOn ? "#202020" : "white" }}>
      {bookings.length === 0 ? (

        <div>
           <h2 style={{color: isDarkModeOn ? "white" : "black"}}>My Bookings</h2>
          <p style={{color: isDarkModeOn ? "white" : "black" }}>No bookings till now.</p>
        </div>
      ) : (
        <div>
          <h2 style={{color: isDarkModeOn ? "white" : "black"}}>My Bookings</h2>

          {
            bookings.map((bookingData) => (
              <div key={bookingData.id}>
                <Container fluid>

                <Card
                  style={{
                    backgroundColor: isDarkModeOn ? "black" : "white",
                    color: isDarkModeOn ? "white" : "black",
                    borderBlockColor: isDarkModeOn ? "white" : "black",
                  }}
                  onClick={() => handleOpenModal(bookingData)}
                >
                  <Row className="row-3 text-center">
                    <Col md={2} className="text-center">
                      <div style={{
                        background: "#E60023",
                        color: "white",
                        alignItems: "center", // corrected syntax
                        width: "100%", // corrected syntax
                        height: "100%",
                      }}>
    
    
                      <p style={{ fontSize: 'small' }}>
                        Booked On
                        <br />
                        <span style={{ fontSize: '3rem' }}>
                          {new Date(bookingData.timestamp * 1000).getDate()}
                        </span>
                        <br/>
                        <span style={{ fontSize: 'small' }}>
                          {new Date(bookingData.timestamp * 1000).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric',
                            timeZone: 'Asia/Kolkata', 
                          })}
                        </span>
                      </p>
                      </div>
                    </Col>
    
                    <Col md={4} className="text-center">
                      <p>{bookingData.name_class}</p>
                      <p>{bookingData.name_studio}</p>
                      <p>{bookingData.studio_address}</p>
                    </Col>
                    <Col md={2} className="text-center">
                      <div style={{ justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        paddingTop: "1rem"
                            }}>
                        <QRCode value={(endpoint_url+bookingData.id)} size={100} />
                      </div>
                    </Col>
                    <Col md={4}>
                      <p>{bookingData.name_learner}</p>
                      <p>Admit One for Once</p>
                      <h5 style={{ color: bookingData.used ? 'green' : 'inherit' }}>
                        {bookingData.used && 'Free class Availed'}
                      </h5>
                    </Col>
                  </Row>
    
                </Card>
                <p style={{ textDecoration: 'none' }}>
                    <a 
                      href={`https://nritya-official.github.io/nritya-webApp/#/studio/${bookingData.studio_id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: isDarkModeOn? 'cyan':"black" }}
                    >
                      Check out the latest class timings?
                    </a>
                  </p>

                </Container>
                <br></br>
              </div>
            ))
          }

        </div>
        
      )}


      <Modal show={showModal} onHide={handleCloseModal} >
        <Modal.Header closeButton>
          <Modal.Title>Ticket Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Ticket
              studioName={selectedBooking.name_studio}
              className={selectedBooking.name_class}
              address={selectedBooking.studio_address}
              timing={selectedBooking.studio_timing}
              days={selectedBooking.studio_days}
              customerName={selectedBooking.name_learner}
              timestamp={selectedBooking.timestamp}
              bookingId={selectedBooking.id}
            />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyBookings;

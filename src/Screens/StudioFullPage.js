import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { db,storage } from '../config';
import { getStorage, ref,listAll, getDownloadURL } from "firebase/storage";
import { doc, getDoc, setDoc, getDocs, collection } from "firebase/firestore";
import { STATUSES, COLLECTIONS } from "./../constants.js";
import Table from 'react-bootstrap/Table';

const cardStyle = {
  borderRadius: '5px',
  margin: '2px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  animation: 'glowingAnimation 2s infinite',
  height: '100%',
};

const gradientStyles = [
  { background: 'linear-gradient(to bottom right, #FFD700, #FFA500)', color: 'black' },
  { background: 'linear-gradient(to bottom right, #00BFFF, #1E90FF)', color: 'black' },
  { background: 'linear-gradient(to bottom right, #32CD32, #008000)', color: 'white' },
  { background: 'linear-gradient(to bottom right, #FFA500, #FF4500)', color: 'black' },
  { background: 'linear-gradient(to bottom right, #DC143C, #8B0000)', color: 'white' },
  { background: 'linear-gradient(to bottom right, #000000, #2F4F4F)', color: 'white' },
];


function StudioFullPage() {
  const { studioId } = useParams();
  console.log("From StudioFullPage", studioId);

  const [studioData, setStudioData] = useState(null);
  const [studioDescription, setStudioDescription] = useState(null);
  const [studioTableData, setStudioTableData] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [isLoadingImages, setIsLoadingImages] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const studioRef = doc(db, COLLECTIONS.STUDIO, studioId);
      const studioSnap = await getDoc(studioRef);
      if (studioSnap) {
        if (studioSnap.data() != null) {
          const data = studioSnap.data();
          setStudioData(data);
          console.log(studioData);

  

          // Fetch subcollection documents
          const subcollectionTableDataRef = collection(studioRef, 'TableData');
          const subcollectionTableDataSnapshot = await getDocs(subcollectionTableDataRef);

          if (!subcollectionTableDataSnapshot.empty) {
            const subcollectionTableData = subcollectionTableDataSnapshot.docs.map((doc) => doc.data());
            console.log(subcollectionTableData);
            setStudioTableData(subcollectionTableData)
          }
    

          const storageRef = ref(storage, `StudioImages/${studioId}`);
          const result = await listAll(storageRef);

          const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

          const imageUrls = await Promise.all(urlPromises);
          setCarouselImages(imageUrls);
          setIsLoadingImages(false);
        }

      }
    };

    fetchData();
   
  }, []);
console.log("StudioData",studioData)
  

  return (
    <div>
      
      {studioData && (
        <>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1>{studioData.studioName}</h1>
            <div>{studioData.address}</div>
          </div>
        </>
      )}

      <Container fluid>
        <Row>
        <Col >
        
            {isLoadingImages ? (
              <Spinner animation="border" />
            ) : (
              
              <Carousel >
                {carouselImages.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} className="d-block w-100"  style={{ height: '100vh' }}  alt={`Carousel Slide ${index}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
             
            )}
             
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={8}>
            {studioData ? (
              <Card style={{ ...cardStyle, ...gradientStyles[0] }}>
                <Card.Body>
                  <Card.Title  style={{ color: '#333', marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>Description</Card.Title>
                  <Card.Text>
                    {studioData.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
          <Col md={4}>
            {studioData ? (
              <Card style={{ ...cardStyle, ...gradientStyles[1] }}>
              <Card.Body>
                <Card.Title style={{ color: '#333', marginBottom: '20px', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  Class Details
                </Card.Title>
                <Card.Text>
                    Instructor Names: {studioData.instructors}
                     </Card.Text>
                <Card.Text>
                    <p>Price: {studioData.price}</p>
                    </Card.Text>
                <Card.Text>
                    <p>Status: {studioData.status}</p>
                    </Card.Text>
                <Card.Text>
                    <p>Dance Form: {studioData.danceStyles}</p>
                </Card.Text>
              </Card.Body>
            </Card>
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            {studioTableData ? (
              <Table bordered style={{ ...cardStyle, ...gradientStyles[5] }}>
                <thead>
                  <tr>
                    <th>Class Name</th>
                    <th>Dance Forms</th>
                    <th>Days</th>
                    <th>Time</th>
                    <th>Instructors</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {studioTableData.map((classItem, index) => (
                    <tr key={index}>
                      <td>{classItem.className}</td>
                      <td>{classItem.danceForms}</td>
                      <td>{classItem.days}</td>
                      <td>{classItem.time}</td>
                      <td>{classItem.instructors}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Spinner animation="border" />
            )}
          </Col>
        </Row>
      </Container>


      
    </div>
    
  );
}

export default StudioFullPage;
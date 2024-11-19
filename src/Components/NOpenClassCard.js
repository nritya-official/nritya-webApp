import React, { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import MUITypography  from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from "react-redux";
import { CHIP_LEVELS_DESIGN, COLLECTIONS, danceStylesColorChips, STORAGES } from "../constants";
import { readDocument, readDocumentWithImageUrl } from "../utils/firebaseUtils";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";
import dayjs from "dayjs";
import { useSnackbar } from "../context/SnackbarContext";
import { bookEntity, getYoutubeVideoId } from "../utils/common";

import whatsAppImage from '../assets/images/whatsapp.png';
import callImage from '../assets/images/india_11009487.png';

function OpenClassDetailsModal({
  open,
  handleClose,
  dataItemId,
}) {
  console.log("use effect")
  const showSnackbar = useSnackbar();
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const [imageUrl, setImageUrl] = useState(null);
  const [dataItem, setDataItem] = useState(null) 
  const [personsAllowed, setPersonsAllowed] = useState(1);

  const currentUser = JSON.parse(localStorage.getItem("userInfo"))?.UserId;
  const currentUserEmail = JSON.parse(localStorage.getItem("userInfo"))?.email;

  const handleBook = async () => {
    if(!currentUser){
      showSnackbar("Please login to book", "warning");
      return;
    }
    try {
      const bookingData = {
        userId: currentUser,
        entityType: COLLECTIONS.OPEN_CLASSES,
        entityId: dataItemId,
        associatedStudioId: dataItem.StudioId,
        emailLearner: currentUserEmail,
        personsAllowed: personsAllowed,
        pricePerPerson: dataItem.price || 0
      };
      
      const result = await bookEntity(bookingData);
      console.log("Result ", result);
      if (result && result['nSuccessCode'] === 200) {
          showSnackbar("Open Class booked", "success");
      } else if (result && result['nSuccessCode'] === 205) {
        const timestampInSeconds = result['bookedAt'];
        const timestampInMilliseconds = timestampInSeconds * 1000; 
        const date = new Date(timestampInMilliseconds);

        const formattedDate = date.toLocaleString(); 
        showSnackbar(`Open Class booked already at ${formattedDate}`, "info");

      } else{
          // Stringify the result object for display
          const errorMessage = result 
              ? `Error: ${JSON.stringify(result)}`  // Stringify for a complete view
              : "An unknown error occurred.";
          showSnackbar(errorMessage, "info");
      }
      
    } catch (error) {
      console.error(error);
      showSnackbar(error?.message || "Something went wrong", "error");
    } finally {
      
    }
  };


  useEffect(() => {
    const fetchDataUrl = async () => {
      try{
        const data = await readDocument("OpenClasses",dataItemId)
        setDataItem(data)

        if (data && data.StudioId) {
          // Fetch Studio Data using studioId from OpenClassData
          const studioDetails = await readDocument(COLLECTIONS.STUDIO, data.StudioId);
          setDataItem(prevData => ({ ...prevData, studioDetails }));
          console.log(dataItem)
        }

      } catch (error) {
        console.error("Error fetching image URL:", error);
      }

    };

    const fetchImageUrl = async () => {
      try {
        const url = await readDocumentWithImageUrl(
          STORAGES.OPENCLASSICON,
          dataItemId
        );

        setImageUrl(
          url ||
          "https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"
        );
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImageUrl();
    fetchDataUrl();
    
  }, []);

  const whatsappMessage = encodeURIComponent("Hey, I found your Studio on nritya.co.in. I'm interested");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxHeight: "90%",
          overflow: "auto",
          width: { xs: "90%", md: "60%" },
          bgcolor: isDarkModeOn ? "black" : "background.paper",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: isDarkModeOn ? "white" : "black",
          boxShadow: 24,
          p: "1rem",
          borderRadius: "8px",
        }}
      >
      {dataItem ? (
        <>
        <Grid container spacing="8px" rowGap={2}>
          <Grid item xs={12} lg={8}>
            <img
              src={imageUrl}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                height: "100%",
                bgcolor: isDarkModeOn ? "#333333" : "#efefef",
                p: 2,
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <MUITypography
                  variant="h6"
                  component="p"
                  sx={{ color: isDarkModeOn ? "white" : "black" }}
                >
                  {dayjs(dataItem.date).format("LL")}
                </MUITypography>

                <MUITypography
                  variant="h6"
                  component="p"
                  sx={{ color: isDarkModeOn ? "white" : "black" }}
                >
                  {dataItem.time}
                </MUITypography>

                <MUITypography
                  variant="body1"
                  component="p"
                  sx={{ mt: "2rem", color: isDarkModeOn ? "white" : "black" }}
                >
                  {dataItem.venue}
                </MUITypography>
              </Box>

              <Box sx={{ mt: "2rem", display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
                <MUITypography
                  variant="h5"
                  sx={{
                    alignSelf: "center",
                    color: isDarkModeOn ? "white" : "black",
                  }}
                >
                  ₹{dataItem.price || 0}
                </MUITypography>
                { <Button
                  variant="outlined"
                  onClick={handleBook}
                  sx={{
                    alignSelf: "center",
                    boxShadow: "none",
                    textTransform: "none",
                    fontSize: 16,
                    padding: "6px 12px",
                    border: "1px solid",
                    lineHeight: 1.5,
                    backgroundColor: "transparent",
                    borderColor: isDarkModeOn ? "white" : "black",
                    color: isDarkModeOn ? "white" : "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderColor: isDarkModeOn ? "white" : "black",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "transparent",
                      borderColor: isDarkModeOn ? "white" : "black",
                    },
                    "&:focus": {
                      boxShadow: "none",
                    },
                  }}
                >
                  {"Book Now"}
                </Button>}
              </Box>
            </Box>
            {currentUser && <MUITypography component={'p'} variant="caption" sx={{ my: '2px', color: isDarkModeOn ? "white" : "black", textAlign: 'center' }}>
              Book here and pay at the venue
            </MUITypography>}
          </Grid>
          <Grid item sx={{ mt: 1 }}>
            <MUITypography
              variant="h5"
              component="p"
              sx={{ color: isDarkModeOn ? "white" : "black" }}
            >
              {dataItem.openClassName || ""}
              {dataItem.danceStyles.map((dance) => ` | ${dance}`)}
            </MUITypography>
            <MUITypography
              variant="body1"
              component="p"
              sx={{ mt: 1, color: isDarkModeOn ? "white" : "black" }}
            >
              <span>By {dataItem.studioDetails?.studioName || ""}</span>
              {dataItem.studioDetails && dataItem.studioDetails?.whatsappNumber && (
                <IconButton color="success" size="small" target="_blank" href={`https://wa.me/91${dataItem.studioDetails.whatsappNumber}?text=${whatsappMessage}`}>
                  <img src={whatsAppImage} alt="Whatsapp call" style={{ width: 30, height: 28 }} />
                </IconButton>
              )}
              {dataItem.studioDetails && dataItem.studioDetails?.mobileNumber && (
                <IconButton color="primary" size="small" target="_blank" href={`tel:${dataItem.studioDetails.mobileNumber}`}>
                  <img src={callImage} alt="Phone call" style={{ width: 30, height: 28 }} />
                </IconButton>
              )}
            </MUITypography>
            <MUITypography
              variant="body1"
              component="p"
              sx={{ mt: 2, color: isDarkModeOn ? "white" : "black" }}
            >
              {dataItem.description || ""}
            </MUITypography>
          </Grid>
        </Grid>

        <Box sx={{ mt: "1rem", textAlign: "right" }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            sx={{
              color: "white",
              boxShadow: "none",
              border: "1px solid",
              backgroundColor: "transparent",
              borderColor: isDarkModeOn ? "white" : "black",
              color: isDarkModeOn ? "white" : "black",
              "&:hover": {
                backgroundColor: "transparent",
                borderColor: isDarkModeOn ? "white" : "black",
                boxShadow: "none",
              },
              "&:active": {
                boxShadow: "none",
                backgroundColor: "transparent",
                borderColor: isDarkModeOn ? "white" : "black",
              },
              "&:focus": {
                boxShadow: "none",
              },
            }}
          >
            Close
          </Button>
        </Box>
        </>

      ):(
        <Spinner/>

      )}
        
      </Box>
    </Modal>
  );
}

export default function NOpenClassCard({dataItem, studioIdName}) {
  const isDarkModeOn = useSelector(selectDarkModeStatus);
  const [isOpenClassDetailsModalOpen, setIsOpenClassDetailsModalOpen] =
    useState(false);

  const handleOpenClassDetailsModalOpen = () =>
    setIsOpenClassDetailsModalOpen(true);

  const handleOpenClassDetailsModalClose = () =>
    setIsOpenClassDetailsModalOpen(false);

  const cardStyle = {
    backgroundColor: isDarkModeOn ? "#444" : "white",
    padding: "0px",
    color: isDarkModeOn ? "white" : "black",
    marginRight: "10px",
    width: 320,
    maxWidth: "100%",
    boxShadow: "lg",
    transition: "opacity 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "scale(1.01)",
    cursor: "pointer",
  };

  let video_id = null;
  let thumbnail_url = null;
  video_id = getYoutubeVideoId(dataItem.youtubeViedoLink)
  if(video_id){
    thumbnail_url = `https://img.youtube.com/vi/${video_id}/maxresdefault.jpg`
  }

  return (
    <a
    href={`#/openClass/${dataItem.id}`}
    style={{ textDecoration: 'none', color: isDarkModeOn ? 'white' : 'black' }}>
      <Card
        variant="solid"
        sx={{
          ...cardStyle,
          flex: "none",
          '&:hover': {
            transform: "scale(1.01)",    
          }
        }}
        
      >
        <AspectRatio ratio="1.78" style={{ position: "relative" }}>
          <img
            src={thumbnail_url || dataItem.iconUrl}
            loading="lazy"
            alt="Open Class Image"
            style={{ maxWidth: "100%", objectFit: "cover", overflow: "hidden" }}
          />
          <Stack
            direction="row"
            spacing={2}
            style={{ position: "absolute", bottom: 0, left: 0, padding: "1px" }}
          >
            {dataItem && dataItem.danceStyles && Array.isArray(dataItem.danceStyles)  ? (
              dataItem.danceStyles.slice(0, 3).map((form, index) => (
                <Chip
                  key={index}
                  sx={{
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontSize: "0.8rem",
                    bgcolor: danceStylesColorChips[index].backgroundColor,
                    color: danceStylesColorChips[index].color, 
                  }}
                >
                  {form.trim()}
                </Chip>
              ))
            ) : (
              <Chip
                key={10}
                color={10 % 2 === 0 ? "danger" : "success"}
                style={{ marginBottom: "10px", fontSize: "0.8rem" }}
              >
                {"No danceforms"}
              </Chip>
            )}
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            style={{ position: "absolute", top: 0, left: 0, padding: "1px", paddingTop: "1px" }}
          >
            {dataItem && dataItem.level &&(
            
                <Chip
                  key={1}
                
                  sx={{
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontSize: "0.8rem",
                    bgcolor: CHIP_LEVELS_DESIGN[dataItem.level]?.backgroundColor,  // Set the background color
                    color: CHIP_LEVELS_DESIGN[dataItem.level]?.color,  // Set the text color
                  }}
                >
                  {dataItem.level}
                </Chip>
              
            )}
          </Stack>
        </AspectRatio>
        <CardContent style={{ padding: "10px", paddingTop: "5px" }}>
          <Box
            fontWeight="bold"
            color="neutral"
            textColor="text.primary"
            underline="none"
            overlay
            style={{
              color: isDarkModeOn ? "white" : "black",
              extDecoder: "one",
            }}
          >
            <span>
              {dataItem && dataItem.openClassName ? dataItem.openClassName : ""}
            </span>
          </Box>
          <Typography
            style={{ marginTop: 10, color: isDarkModeOn ? "white" : "black" }}
            level="body-xs"
            noWrap
          >
            {dataItem.city ? dataItem.city : ""}
          </Typography>
          <Typography
            style={{ color: isDarkModeOn ? "white" : "black" }}
            level="body-xs"
          >
            {dataItem.date || ""} | {dataItem.time || ""}
          </Typography>
          <Box mt={1} textAlign="right">
            <Button
              size='small'
              variant="contained"
              sx={{
                color: 'white',
                backgroundColor: '#735EAB',
                '&:hover': {
                  backgroundColor: '#735EAB',
                  color: 'white',
                },
                '&.Mui-disabled': {
                  backgroundColor: isDarkModeOn ? 'rgba(115, 94, 171, 0.5)' : 'rgba(115, 94, 171, 0.3)',
                  color: 'rgba(255, 255, 255, 0.5)',
                },
              }}
              type='button'
            >
              Book Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      <OpenClassDetailsModal
        dataItemId={dataItem.id }
        open={isOpenClassDetailsModalOpen}
        handleClose={handleOpenClassDetailsModalClose}
      />
    </a>
  );
}

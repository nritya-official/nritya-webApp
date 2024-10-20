import React from "react";
import { Grid, Typography as MUITypography, Box, IconButton, Chip, Button } from "@mui/material";
import { selectDarkModeStatus } from "../redux/selectors/darkModeSelector";
import whatsAppImage from "../assets/images/whatsapp.png";
import callImage from "../assets/images/india_11009487.png";
import { CHIP_LEVELS_DESIGN } from "../constants";
import { useSelector } from "react-redux";
import { FaDirections } from "react-icons/fa";


function EntityDetailsSection({dataItem, whatsappMessage}) {
    const isDarkModeOn = useSelector(selectDarkModeStatus);
  return (
    <Grid item xs={12}>
          <MUITypography variant="h4" style={{color: isDarkModeOn ? 'white' : 'black',  textTransform: 'none',textDecoration: 'none'}} gutterBottom>
            {dataItem.openClassName || dataItem.workshopName || dataItem.courseName || "Name "}
          </MUITypography>
          <MUITypography variant="subtitle1" style={{color: isDarkModeOn ? 'white' : 'black',  textTransform: 'none',textDecoration: 'none'}} gutterBottom>
            By {dataItem.studioDetails?.studioName || "Studio Name"}
            {dataItem.danceStyles && dataItem.danceStyles.length > 0 && (
              <>
                {" "}
                | {dataItem.danceStyles.join(", ")}
              </>
            )}
          </MUITypography>

            <Chip
              sx={{
                marginLeft: "10px",
                fontSize: "0.8rem",
                bgcolor: CHIP_LEVELS_DESIGN[dataItem.level]?.backgroundColor || 'grey',
                color: CHIP_LEVELS_DESIGN[dataItem.level]?.color || 'white',
              }}
              label={dataItem.level}
            />

            
          <Box sx={{ display: "flex", gap: "0.5rem", mb: "1rem" , color: isDarkModeOn ? 'white' : 'black'}}>
            {dataItem.studioDetails?.whatsappNumber && (
              <IconButton
                color="success"
                size="small"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/91${dataItem.studioDetails.whatsappNumber}?text=${whatsappMessage}`}
              >
                <Box
                  component="img"
                  src={whatsAppImage}
                  alt="WhatsApp"
                  sx={{ width: 30, height: 28 }}
                />
              </IconButton>
            )}
            {dataItem.studioDetails?.mobileNumber && (
              <IconButton
                color="primary"
                size="small"
                target="_blank"
                rel="noopener noreferrer"
                href={`tel:${dataItem.studioDetails.mobileNumber}`}
              >
                <Box
                  component="img"
                  src={callImage}
                  alt="Phone Call"
                  sx={{ width: 30, height: 28 }}
                />
              </IconButton>
            )}
          </Box>
          <MUITypography variant="body1 " style={{color: isDarkModeOn ? 'white' : 'black'}}>
            {dataItem.description || "Workshop Description"}
          </MUITypography>
          <br/>
          {dataItem?.studioDetails?.geolocation?.lat !== undefined && dataItem?.studioDetails?.geolocation?.lng !== undefined && (
              <Button
                variant="contained"
                color="primary"
                href={`https://www.google.com/maps/dir/?api=1&destination=${dataItem?.studioDetails?.geolocation?.lat},${dataItem?.studioDetails?.geolocation?.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginLeft: "10px" }}
                startIcon={<FaDirections style={{ color: isDarkModeOn ? 'white' : 'black' }} />}
              >
                Directions
              </Button>
            )}
        </Grid>
  )
}

export default EntityDetailsSection;


import React, {useEffect,useState} from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Rating from '@mui/material/Rating';
import { Stack } from '@mui/material';
import Ratings from './Ratings';
import StarRating from './StarRating';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'; // Import useSelector
import { selectDarkModeStatus } from '../redux/selectors/darkModeSelector';
import { readDocumentWithImageUrl } from '../utils/firebaseUtils';
import { STORAGES } from '../constants';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';


export default function NStudioCard({img_src,data}) {
    const isDarkModeOn = useSelector(selectDarkModeStatus);
    const [imageUrl, setImageUrl] = useState(null);
    const studioId = data.id?data.id:data.studioId;

    useEffect(() => {
      const fetchImageUrl = async () => {
        try {
          const url = await readDocumentWithImageUrl(STORAGES.STUDIOICON, studioId);
          
          setImageUrl(url);
        } catch (error) {
          console.error('Error fetching image URL:', error);
        }
      };
  
      fetchImageUrl();
    }, [data.id]);

    const cardStyle = {
      backgroundColor: isDarkModeOn ? '#444' : 'white',
      padding: '0px',
      color: isDarkModeOn ? 'white' : 'black',
      marginRight: "10px",
      width: 320,
      maxWidth: "100%",
      boxShadow: 'lg',
      transition: 'opacity 0.3s ease',
    };
  
    const cardHoverStyle = {
      transform: 'scale(1.01)',
    };
  
  return (
    <Card variant="solid" sx={{
      ...cardStyle,
      '&:hover': cardHoverStyle,
    }}>
      
        <AspectRatio ratio="1.78" style={{ position: 'relative'}}>
          <img
            src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"}
            loading="lazy"
            alt="Studio Image"
            style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}
            
          />
          <Stack direction="row" spacing={2} style={{ position: 'absolute', bottom: 0, left: 0, padding: '1px' }}>
        {data && data.danceStyles ? (data.danceStyles.split(",").slice(0, 3).map((form, index) => (
        <Chip
            key={index}
            color={index % 2 === 0 ? "danger" : "success"}  
            style={{ marginBottom: "10px", fontSize: '0.8rem' }}
        >
            {form.trim()}
        </Chip>
        ))):(
            <Chip
            key={10}
            color={10 % 2 === 0 ? "danger" : "success"} 
            style={{ marginBottom: "10px", fontSize: '0.8rem' }}
        >
            {"No danceforms"}
        </Chip>
        )}

        </Stack>

        </AspectRatio>
      <CardContent style={{padding:'10px'}}>
        <Link
          href={`#/studio/${studioId}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          underline='none'
          overlay
          style={{color: isDarkModeOn?'white':'black',extDecoder:"one"}}
        >
          {data && data.studioName?data.studioName:"    "}
        </Link>
        <Typography style={{color: isDarkModeOn?'white':'black'}} level="body-xs">{data.street?data.street:".  "}</Typography>
        <IconButton
          hidden
          aria-label="Like minimal photography"
          size="md"
          variant="solid"
          color="danger"
          sx={{
            position: 'absolute',
            zIndex: 2,
            borderRadius: '50%',
            right: '1rem',
            bottom: '2rem',
            transform: 'translateY(50%)',
          }}
        >
          <Favorite />
        </IconButton>
        <Typography style={{color: isDarkModeOn?'white':'black'}}>⭐ {data && data.avgRating? data.avgRating.toFixed(1):" Not rated yet"}</Typography>
      </CardContent>
    </Card>
  );
}
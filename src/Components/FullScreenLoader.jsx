import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectDarkModeStatus } from '../redux/selectors/darkModeSelector';
import loader from '../../public/assets/gifs/loader.gif';
import whiteLoader from '../../public/assets/gifs/white-loader.gif';

const FullScreenLoader = () => {
  const isDarkModeOn = useSelector(selectDarkModeStatus); 

  return (
    <Box sx={{ position: 'fixed', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 99 }}>
      <img src={isDarkModeOn ? whiteLoader.src : loader.src} alt='Loader' style={{ width: 200, height: 100, objectFit: "contain" }} />
    </Box>
  );
};

export default FullScreenLoader;

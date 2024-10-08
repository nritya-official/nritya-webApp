import React,{useState,useEffect} from "react";
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import LoginModalForm from "./LoginModalForm";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  }
}));

const LoginModalDailog = ({open, handleClose }) => {
  console.log("Open",open)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    return storedIsLoggedIn === 'true';
  });

  useEffect(() => {
    if (isLoggedIn && localStorage.getItem('isLoggedIn') === 'true') {
      console.log("It's logged in",isLoggedIn)
      handleClose();
    }
  }, [isLoggedIn, handleClose]);

  

    return (

        <React.Fragment>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth='xs'
            sx={{
              '& .MuiModal-backdrop': {
                backdropFilter: 'blur(8px)'
              },
            }}
          
          >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
                <CloseIcon />
          </IconButton>
            <LoginModalForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          </BootstrapDialog>
        </React.Fragment>
       
    )
}

export default LoginModalDailog;
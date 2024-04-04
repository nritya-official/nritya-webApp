import React from 'react';
import './ResponsiveHeading.css';
import './ResponsiveText.css'; 

const ResponsiveText = ({ isDarkModeOn, text, heading = true }) => {
  return (
    heading ? (
      <h2 style={{
        fontSize:'35px',
        color:"black"
        

      }}  className={`responsive-heading ${isDarkModeOn ? 'dark' : 'light'}`}>
        {text}
      </h2>
    ) : (
      <p className={`responsive-text ${isDarkModeOn ? 'dark' : 'light'}`}>
        {text}
      </p>
    )
  );
};

export default ResponsiveText;

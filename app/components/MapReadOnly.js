'use client'

import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapReadOnly = ({selectedLocationParam}) => {
  const initialCenter = { lat: 28.6139, lng: 77.2090 };
  const [center, setCenter] = useState(selectedLocationParam?selectedLocationParam:initialCenter); 
  const [selectedLocation, setSelectedLocation] = useState(selectedLocationParam?selectedLocationParam:null); 
  
  // You'll need to add your Google Maps API key here
  const gMapApiKey = process.env.NEXT_PUBLIC_GMAP_API_KEY || 'your-api-key-here';
  
  return (
    <div style={{ height: '200px', width: '100%' }}>
        <div>
        
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: gMapApiKey }}
        center={center}
        defaultZoom={15}
        
      >
        {selectedLocation && (
          <PinMarker
            lat={selectedLocation.lat}
            lng={selectedLocation.lng}
           
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

// Custom marker component
const PinMarker = ({ text }) => (
  <div style={{ position: 'relative', textAlign: 'center' }}>
    <FaMapMarkerAlt style={{ color: 'green',  fontSize: '44px' }} />
    <div style={{ position: 'absolute', top: '25px', left: '-20px', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>{text}</div>
  </div>
);

export default MapReadOnly; 
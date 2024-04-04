import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const danceForms = [
  { name: "Bollywood", icon: 'music' },
  { name: "Salsa", icon: 'glass-cheers' },
  { name: "Hip Hop", icon: 'bolt' },
  { name: "Ballet", icon: 'hiking' },
  { name: "Bharatnatyam", icon: 'music' },
  { name: "Odisi", icon: 'glass-cheers' },
  { name: "Kathak", icon: 'bolt' },
];

const CardSlider = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="card-slider" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
      {danceForms.map((danceForm, index) => (
        <div className="card" key={index} style={{ width: '200px', padding: '20px', margin: '20px', backgroundColor: '#f0f0f0', borderRadius: '10px', textAlign: 'center' }}>
          <FontAwesomeIcon icon={['fas', danceForm.icon]} size="3x" />
          <h3 style={{ marginTop: '10px', fontSize: '20px' }}>{danceForm.name}</h3>
          <div className="rating" style={{ marginTop: '20px' }}>
            {[1, 2, 3, 4, 5].map((star, index) => (
              <FontAwesomeIcon
                icon={index < rating ? solidStar : regularStar}
                key={index}
                onClick={() => handleRating(index + 1)}
                style={{ cursor: 'pointer', color: '#ffd700', margin: '0 2px' }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;

import React from 'react';
import NStudioCard from './NStudioCard';
import Link from 'next/link';

const CardSliderCard = ({ studio }) => {
  return (
    <Link href={`/studio/${studio.id}`}>
    <NStudioCard data={studio} img_src={"https://cdn.pixabay.com/photo/2016/12/30/10/03/dance-1940245_960_720.jpg"}/>
    </Link>
    
  );
};

export default CardSliderCard;

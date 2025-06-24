'use client';

import React from 'react';
import NrityaPolicyPages from'../../../Screens/NrityaPolicyPages'

const PrivacyPolicy = ({ params }) => {
  return <NrityaPolicyPages selected={params?.id}/>;
};

export default PrivacyPolicy;

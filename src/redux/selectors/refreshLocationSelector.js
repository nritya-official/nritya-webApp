'use client';
export const selectRefreshLocation = (state) => {
    const localFilterLocation = 'New Delhi';
    console.log('Type of localFilterLocation:', typeof localFilterLocation);
  
    const reduxFilterLocation = state.refreshLocation.filterLocation;
    console.log('Type of reduxFilterLocation:', typeof reduxFilterLocation,reduxFilterLocation);
  
    return reduxFilterLocation ? reduxFilterLocation : localFilterLocation;
  };

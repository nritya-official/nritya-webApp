'use client';

import React, { useEffect } from 'react';
import SearchPage from '../../../Screens/SearchPage';

const SearchEntityPage = ({ params }) => {

  useEffect(() => {
    if (params?.id) {
      const slug = params.id;
      console.log("slug",slug);
    }
  }, [params]);

  return <SearchPage/>;
};

export default SearchEntityPage;

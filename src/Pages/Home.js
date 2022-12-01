import React, { UseState } from 'react';
import { Box } from '@mui/material';
import { useState } from "react";

import HeroBanner from '../components/HeroBanner';
import SearchExcercises from '../components/SearchExcercises';
import Excercises from '../components/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState(['all']);
  const [excercise, setExcercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExcercises setBodyPart={setBodyPart} 
      setExcercises={setExcercises} 
      bodyPart={bodyPart} />
      <Excercises 
       setBodyPart={setBodyPart} 
       setExcercises={setExcercises} 
       bodyPart={bodyPart}/>
    </Box>
  );
};

export default Home;
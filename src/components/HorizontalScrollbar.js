import React from 'react';
import { Box } from '@mui/material';

import BodyPart from '../components/BodyPart';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemid={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;

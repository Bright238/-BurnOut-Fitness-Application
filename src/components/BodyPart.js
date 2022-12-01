import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

const BodyPart = () => {
  return (
    <Stack>
     <img src={Icon} alt="Dumbell" style={{width: '40px', eight: '40px'}} />
    </Stack>
  );
};

export default BodyPart;
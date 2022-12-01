import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    /*parent wrapper stack*/
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" }, justifyContent: 'none'
      }} px="80px">
      <Link to="/">
        <img
          src={Logo}
          alt="BurnOut Logo"
          style={{ width: "auto", height: "43px", margin: "0 0px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="20px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid red"
          }}
        >
          Home
        </Link>
        <a
          href="#excercises"
          style={{ textDecoration: "none", color: "black"}}
        >
          Excercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;

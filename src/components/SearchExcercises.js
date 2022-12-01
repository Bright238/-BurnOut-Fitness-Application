import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { excerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  /*useEffect function responsible for the categories*/
  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        excerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExcercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const excercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );
      const searchedExercises = excercisesData.filter(
        (excercise) =>
          excercise.name.toLowerCase().includes(search) ||
          excercise.target.toLowerCase().includes(search) ||
          excercise.equipment.toLowerCase().includes(search) ||
          excercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExcercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="25px" justifyContent="center" p="20px">
      <Typography
        fontFamily="cursive"
        fontWeight={700}
        sx={{ fontSize: { lg: "30px", xs: "24px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Excercises to Know
        <br />
        and make use of at your home
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          /*Note: .toLowerCase is a built in function and should include ()*/
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search For Execercises"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "relative",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ postion: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExcercises;

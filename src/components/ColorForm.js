import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAddColorMutation } from "../services/reqresinColorAPI";

const ColorForm = () => {
  const [colorData, setColorData] = useState({
    name: "",
    year: "",
    color: "",
    pantone_value: "",
  });

  const [addColor, result] = useAddColorMutation();

  const textFieldNameOnChangeHandler = (event) => {
    setColorData({
      ...colorData,
      name: event.target.value,
    });
  };

  const textFieldYearOnChangeHandler = (event) => {
    setColorData({
      ...colorData,
      year: event.target.value,
    });
  };

  const textFieldNumberOnChangeHandler = (event) => {
    setColorData({
      ...colorData,
      color: event.target.value,
    });
  };

  const textFieldPantoneOnChangeHandler = (event) => {
    setColorData({
      ...colorData,
      pantone_value: event.target.value,
    });
  };

  const buttonAddColorOnClickHandler = (event) => {
    addColor(colorData);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "25vw" }}
      >
        <Typography variant="h5">Using RTK Query</Typography>
        <TextField
          size="small"
          label="Name"
          onChange={textFieldNameOnChangeHandler}
          value={colorData.name}
        />
        <TextField
          size="small"
          label="Year"
          onChange={textFieldYearOnChangeHandler}
          value={colorData.year}
        />
        <TextField
          size="small"
          label="Number (hexa, e.g. #F1F1F1)"
          onChange={textFieldNumberOnChangeHandler}
          value={colorData.color}
        />
        <TextField
          size="small"
          label="pantone Value"
          onChange={textFieldPantoneOnChangeHandler}
          value={colorData.pantone_value}
        />
        <Button
          variant="outlined"
          color="success"
          onClick={buttonAddColorOnClickHandler}
        >
          Tambah Color
        </Button>

        {/* Di sini kita ingin mencetak kembalian-nya */}

        {/* Kita bisa memberikan logic ketika masih dalam tahap men-comot data (loading) */}
        {/* Kita berikan component loading, apabila sudah selesai, kita berikan hasil kembaliannya */}
        {result.isLoading ? (
          <>Loading...</>
        ) : (
          // Karena kembaliannya dalam bentuk JSON, kita stringify di sini
          <Typography variant="body1">{JSON.stringify(result.data)}</Typography>
        )}
      </Box>
    </>
  );
};

export default ColorForm;

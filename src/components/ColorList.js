import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useColorsQuery } from "../services/reqresinColorAPI";
import ColorItem from "./ColorItem";

const ColorList = () => {
  const { data, error, isLoading } = useColorsQuery();
  return (
    <>
      <Typography variant="h5">list color</Typography>
      <Box>
        {error ? (
          <p>ada error</p>
        ) : (
          data?.data?.map((warna) => (
            <ColorItem key={warna.id} objColorItem={warna} />
          ))
        )}
      </Box>
    </>
  );
};

export default ColorList;

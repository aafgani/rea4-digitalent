import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ColorItem = ({ objColorItem }) => {
  return (
    <>
      <Box sx={{ color: objColorItem.color }}>
        <Typography variant="body2">{objColorItem.name}</Typography>
      </Box>
    </>
  );
};

export default ColorItem;

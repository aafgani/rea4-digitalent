import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const CounterRedux = () => {
  const username = useSelector((state) => state.user);
  const counter = useSelector((state) => state.counter);
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Di sini kita akan memanggil dispatcher-nya,
    // jangan lupa untuk melemparkan aksi apa yang ingin dilakukan via
    // props "type"
    dispatcher({
      type: "decrement",
    });
  };

  const buttonResetOnClickHandler = () => {
    dispatcher({
      type: "reset",
    });
  };

  const buttonIncrementOnClickHandler = () => {
    dispatcher({
      type: "increment",
    });
  };
  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="body1" component="div">
          Use Redux
        </Typography>
        <Typography variant="body1" component="div">
          Name : {username}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            defaultValue="0"
            value={counter}
            size="small"
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementOnClickHandler}
          >
            -1
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonResetOnClickHandler}
          >
            0
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementOnClickHandler}
          >
            +1
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterRedux;

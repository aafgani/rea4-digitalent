import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

// import selectors yang dibutuhkan di sini
import { selectUser, selectCounter } from "../features/counter/sliceCounter";

// import actions yang dibutuhkan di sini
import {
  increment,
  decrement,
  reset,
  incrementSpec,
  decrementSpec,
} from "../features/counter/sliceCounter";

const CounterRTK = () => {
  const [currAmount, setCurrAmount] = useState(0);
  const username = useSelector(selectUser);
  const counter = useSelector(selectCounter);
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Action di sini dipanggil seperti kita memanggil fungsi biasanya
    dispatcher(decrement());
  };

  const buttonResetOnClickHandler = () => {
    // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
    dispatcher(reset());
  };

  const buttonIncrementOnClickHandler = () => {
    // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
    dispatcher(increment());
  };

  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setCurrAmount(amountFromField);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    // dispatcher({
    //   type: "decrementSpec",
    //   amount: currAmount,
    // });

    // Perhatikan di sini kita akan memanggil dispatcher
    // untuk memanggil suatu action yang memiliki payload

    // Karena tadi di dalam reducers incrementSpec
    // Kita hanya -= action.payload
    // maka di sini kita langsung passing payload angkanya saja
    dispatcher(decrementSpec(currAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    // Kita panggil dispatcher lagi !
    // dispatcher({
    //   type: "incrementSpec",
    //   amount: currAmount,
    // });

    // Sama dengan yang di atas
    dispatcher(incrementSpec(currAmount));
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
          Use Redux Toolkit
        </Typography>
        <Typography variant="body1" component="div">
          Name : {username}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            disabled
            label="Current Counter"
            // defaultValue="0"
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

        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="amount"
            size="small"
            value={currAmount}
            onChange={textFieldAmountOnChangeHandler}
          />
          <Button
            variant="outlined"
            color="success"
            onClick={buttonDecrementByAmountOnClickHandler}
          >
            - Amount
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={buttonIncrementByAmountOnClickHandler}
          >
            + Amount
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CounterRTK;

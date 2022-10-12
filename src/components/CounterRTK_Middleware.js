import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectCounter,
} from "../features/counter/sliceCounterUsingThunk";
import {
  ditambah,
  dikurang,
  balikNol,
  ditambahDengan,
  dikurangDengan,
  userAsync,
} from "../features/counter/sliceCounterUsingThunk";

const CounterRTK_Middleware = () => {
  const [currAmount, setCurrAmount] = useState(0);
  const user = useSelector(selectUser);
  const counter = useSelector(selectCounter);
  const dispatcher = useDispatch();

  const buttonDecrementOnClickHandler = () => {
    // Action di sini dipanggil seperti kita memanggil fungsi biasanya
    dispatcher(dikurang());
  };

  const buttonResetOnClickHandler = () => {
    // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
    dispatcher(balikNol());
  };

  const buttonIncrementOnClickHandler = () => {
    // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
    dispatcher(ditambah());
  };

  const textFieldAmountOnChangeHandler = (e) => {
    const amountFromField = isNaN(parseInt(e.target.value))
      ? 0
      : parseInt(e.target.value);

    setCurrAmount(amountFromField);
  };

  const buttonDecrementByAmountOnClickHandler = () => {
    dispatcher(dikurangDengan(currAmount));
  };

  const buttonIncrementByAmountOnClickHandler = () => {
    dispatcher(ditambahDengan(currAmount));
  };

  useEffect(() => {
    dispatcher(userAsync(3));
  }, []);

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
          Use Redux Toolkit with Middleware
        </Typography>

        <Avatar src={user.avatar} sx={{ width: 64, height: 64 }} />

        <Typography variant="body1" component="div">
          Name : {user.first_name}
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

export default CounterRTK_Middleware;

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CounterRedux from "../components/CounterRedux";
import CounterReducerComponent from "../components/CounterReducerComponent";
import { legacy_createStore as createStore } from "redux";
import { initialValue, rootReducer } from "../reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, initialValue);

const Counter = () => {
  return (
    <Provider store={store}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CounterReducerComponent />
          </Grid>
          <Grid item xs={6}>
            <CounterRedux />
          </Grid>
        </Grid>
      </Box>
    </Provider>
  );
};

export default Counter;

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CounterRedux from "../components/CounterRedux";
import CounterReducerComponent from "../components/CounterReducerComponent";
import { legacy_createStore as createStore } from "redux";
import { initialValue, rootReducer } from "../reducers/rootReducer";
import { Provider } from "react-redux";
import CounterRTK from "../components/CounterRTK";
import CounterRTK_Middleware from "../components/CounterRTK_Middleware";
import { storeRTK } from "../app/store";
import ColorList from "../components/ColorList";
import ColorForm from "../components/ColorForm";

const store = createStore(rootReducer, initialValue);

const Counter = () => {
  return (
    <>
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
      <Provider store={storeRTK}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CounterRTK />
            </Grid>
            <Grid item xs={6}>
              <CounterRTK_Middleware />
            </Grid>
            <Grid item xs={6}>
              <ColorForm />
              <ColorList />
            </Grid>
          </Grid>
        </Box>
      </Provider>
    </>
  );
};

export default Counter;

import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RepoForm from "../components/RepoForm";
import RepoList from "../components/RepoList";

const GithubRepo = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <RepoForm />
        </Grid>
        <Grid item xs={7}>
          <RepoList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default GithubRepo;

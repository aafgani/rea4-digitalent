import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import githubInstance from "../apis/github";

const RepoForm = () => {
  const [repoStatus, setRepoStatus] = useState(false);
  const [repoName, setRepoName] = useState("");

  const onChangeStatus = (e) => {
    setRepoStatus(e.target.value);
  };

  const onChangeName = (e) => {
    setRepoName(e.target.value);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(repoName + " -" + repoStatus);

    // POST /repositories
    const { data } = await githubInstance.post("/user/repos", {
      name: repoName,
      private: repoStatus,
      gitignore_template: "Node",
      license_template: "mit",
    });

    console.log(data);
    setRepoStatus("");
    setRepoName("");
  };

  return (
    <>
      <Box
        sx={{
          border: "1px dashed grey",
          p: 2,
          marginTop: 2,
        }}
      >
        <Typography variant="h5">Nambah Repo Baru Yuk</Typography>
        <form onSubmit={onFormSubmit}>
          <FormControl
            fullWidth
            sx={{
              marginTop: "1em",
              display: "flex",
              flexDirection: "column",
              gap: "0.5em",
            }}
          >
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              label="Status"
              labelId="status-label"
              id="status"
              value={repoStatus}
              onChange={onChangeStatus}
            >
              <MenuItem value={false}>Public</MenuItem>
              <MenuItem value={true}>Private</MenuItem>
            </Select>
            <TextField
              fullWidth
              label="Nama Repository"
              value={repoName}
              onChange={onChangeName}
            />
            <Button variant="contained" size="large" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default RepoForm;

import React, { useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import githubInstance from "../apis/github";
import { useGithub } from "../contexts/GithubProvider";

const RepoList = () => {
  const { repositories, setRepositories } = useGithub();
  useEffect(() => {
    const fetchGithubRepo = async () => {
      const { data } = await githubInstance.get(
        "/user/repos?per_page=999&page=1&sort=created_at"
      );
      setRepositories(data);
      console.log(
        "repo length = " +
          repositories.length +
          ", data length = " +
          data.length
      );
    };

    fetchGithubRepo();
  }, []);
  return (
    <>
      <Box sx={{ border: "1px dashed grey", p: 2, marginTop: 2 }}>
        <Typography variant="h5">Repositoriku Apa Saja?</Typography>

        <Table
          sx={{
            minWidth: 768,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Creation Time</TableCell>
              <TableCell align="center">Go To Repo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Ini nanti bisa dijadikan Component bila diperlukan */}
            {repositories.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">
                  {item.private ? "Private" : "Public"}
                </TableCell>
                <TableCell align="center">{item.created_at}</TableCell>
                <TableCell align="center">
                  <a target="_blank" rel="noreferrer" href={item.html_url}>
                    Click Me
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default RepoList;

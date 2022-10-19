// Membutuhkan state untuk meng-track value dari TextField
import React, { useState, useEffect } from "react";

// Gunakan .module.css untuk mendapatkan scoped css
import styles from "./LoginOrRegisterForm.module.css";

import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

// Karena nantinya kita bisa berpindah ke halaman LoginPage (setelah Register)
// ataupun ke halaman HomePage (setelah Login), maka kita bisa memanfaatkan useNavigate
import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  signInDenganEmaildanPassword,
  registrasiDenganEmaildanPassword,
  signInWithGoogle,
  signInWithOauth,
} from "../authentication/firebase";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  // gunakan hooks useNavigate
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const [user, isLoading, error] = useAuthState(auth);

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    signInDenganEmaildanPassword(credential.email, credential.password);
    navigate("/home");
  };

  const registerHandler = () => {
    registrasiDenganEmaildanPassword(credential.email, credential.password);
    navigate("/login");
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  const loginWithGoogle = (e) => {
    signInWithGoogle();
  };

  const loginWithOauth = (e) => {
    signInWithOauth();
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/home");
    }
  }, [user, isLoading, navigate]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Box className={styles.boxy} component="form" noValidate>
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          label="password"
          type="Password"
          variant="outlined"
          size="small"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />

        <Button
          variant="outlined"
          size="small"
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>

        {loginOrRegister === "login" ? (
          <>
            <Box>
              <IconButton onClick={loginWithGoogle}>
                <GoogleIcon />
                <span>Google</span>
              </IconButton>
              <IconButton onClick={loginWithOauth}>
                <GitHubIcon />
                <span>Github</span>
              </IconButton>
            </Box>
            <Link to="/register">
              <Typography variant="body1">or do you want Register ?</Typography>
            </Link>
          </>
        ) : (
          <Link to="/login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;

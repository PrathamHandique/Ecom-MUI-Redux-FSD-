import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/authSlice";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email: input.email,
        password: input.password,
      });
      if (response.status === 200) {
        dispatch(setLogin(true));
        alert("User successfully logged in!");
        navigate("/pol");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.log("Error during login:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h4">Login</Typography>
          <TextField
            label="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            type="email"
          />
          <TextField
            label="Password"
            name="password"
            value={input.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            type="password"
          />
          <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
            Login
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Not a user? Please Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default LoginPage;

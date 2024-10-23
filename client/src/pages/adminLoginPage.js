import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAdminLogin } from "../redux/authSlice";
const baseurl="https://back-uisx.onrender.com";
const AdminLoginPage = () => {
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
      const response = await axios.post(`${baseurl}/api/adminLogin`, {
        email: input.email,
        password: input.password,
      });
      if (response.status === 200) {
        dispatch(setAdminLogin(true));
        alert("Admin successfully logged in!");
        navigate("/adminPage");
      } else {
        alert(" Admin Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.log(err);
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
          <Typography variant="h4">Admin_Login</Typography>
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
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AdminLoginPage;

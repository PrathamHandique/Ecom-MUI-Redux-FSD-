import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
//const baseurl="https://bac2.onrender.com"; //production
const baseurl = "http://localhost:4000"; //development

const RegisterPage = () => {

  const [input, setInput] = useState({name: "",email: "",password: ""});
  const [submitMessage, setSubmitMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput({...input,[e.target.name]: e.target.value,});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${baseurl}/api/register`, {name: input.name,email: input.email,password: input.password});
      if (data.status === 201) {
        setSubmitMessage("User successfully registered!");
        alert("User successfully registered!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
        <form onSubmit={handleSubmit}>
            <Box sx={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",height: "100vh"}}>
                <Typography variant="h4">Register</Typography>
                <TextField label="Name" name="name" value={input.name} onChange={handleChange} margin="normal" variant="outlined"/>
                <TextField label="Email" name="email" value={input.email} onChange={handleChange} margin="normal" variant="outlined"/>
                <TextField label="Password" name="password" value={input.password} onChange={handleChange} margin="normal" variant="outlined"/>
                <Button type="submit" variant="contained">Register</Button>
                <Typography>{submitMessage}</Typography>
            </Box>
        </form>
    </>
  );
};

export default RegisterPage;

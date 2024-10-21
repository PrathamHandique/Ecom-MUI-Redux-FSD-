import React from "react";
//import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [value, setValue] = useState();
  const handleLogout = () => {
    dispatch(setLogout(false));
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <Button color="inherit" LinkComponent={Link} to="/">
          Home
        </Button>
        <Button color="inherit" LinkComponent={Link} to="/cartPage">
          Cart
        </Button>
        <Button color="inherit" LinkComponent={Link} to="/adminPage">
          Admin
        </Button>
        {!isLogin && (
          <>
            <Button color="inherit" LinkComponent={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" LinkComponent={Link} to="/login">
              Login
            </Button>
          </>
        )}
        {isLogin && (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

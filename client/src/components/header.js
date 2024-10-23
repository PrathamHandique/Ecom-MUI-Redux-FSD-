import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAdminLogin, setLogout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const adminLogin = useSelector((state) => state.auth.adminLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout(false));
    navigate("/login");
  };
  const handleAdminLogout = () => {
    dispatch(setAdminLogin(false)); 
    navigate("/login");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>

        {/* When neither user nor admin is logged in */}
        {!isLogin && !adminLogin && (
          <>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/adminLoginPage">
              Admin Login
            </Button>
          </>
        )}

        {/* When a regular user is logged in */}
        {isLogin && !adminLogin && (
          <>
            <Button color="inherit" component={Link} to="/pol">
              ProductPage
            </Button>
            <Button color="inherit" component={Link} to="/cartPage">
              Cart
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}

        {/* When an admin is logged in */}
        {adminLogin && (
          <>
            <Button color="inherit" component={Link} to="/pol">
              ProductPage
            </Button>
            <Button color="inherit" component={Link} to="/adminPage">
              Admin Page
            </Button>
            <Button color="inherit" onClick={handleAdminLogout}>
              Admin Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

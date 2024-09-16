import React, { useCallback, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Bars from "../../assets/bars-solid.svg";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search-solid.svg";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentuser } from "../../action/currentuser";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ handleSlidein }) => {
  const user = useSelector((state) => state.currentuserReducer);
  // console.log("user:", user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentuser(null));
  }, [dispatch, navigate]);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedtoken = jwtDecode(token);

      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentuser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch, handleLogout, user?.token]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleSlidein()}>
          <img src={Bars} alt="Bars" width="15" />
        </button>
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={Logo} alt="Logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input
              type="text"
              placeholder="Search..."
              name="Search"
              id="Search"
            />
            <img src={Search} alt="Search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {user === null ? (
            <>
              <Link to="/Auth" className="nav-item nav-links">
                Log in
              </Link>
            </>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/users/${user?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {user.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-tem nav-links" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

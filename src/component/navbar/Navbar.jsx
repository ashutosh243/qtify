import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import style from "./Navbar.module.css";
import Btn from "../Button/Btn";

function Navbar({searchData} ) {
  return (
    <nav className={style.navbar} >
      <Link to="/home">
        <Logo />
      </Link>
       <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Btn text="Give Feedback"></Btn> 
    </nav>
  );
}

export default Navbar;

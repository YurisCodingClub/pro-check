import React from "react";
import { ReactComponent as LOGO } from "../logo.svg";
import "../App.css";

// Styling Components
const headerStyle = {
    textAlign: "center",
    width: "100%",
    borderBottom: "2px solid black",
    position: "fixed",
    top: "0",
    padding: "10px 0",
    backgroundColor: "#fff",
    boxShadow: "12px 12px 5px 5px gray;",
};

const headerH1Style = {
    display: "inline",
};

// Header Component
const Header = () => {
    return (
        <header style={headerStyle}>
            <div>
                <LOGO />
                <h1 style={headerH1Style}>ProCheck</h1>
            </div>
        </header>
    );
};

export default Header;

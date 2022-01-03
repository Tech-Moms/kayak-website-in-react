import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/kayak-logo.jpg"

const Header = () => {

    const activeStyle = {fontWeight: 'bold', textDecoration: 'underline'};

    return (
        <div className="navigation-wrapper">
        <div className="left-column">
            <div className="icon-mr">
                <i className="fas fa-phone-volume icon"></i>
            </div>
            <div className="header-styles">
                <div>555-555-5555</div>
                <div>10 AM - MIDNIGHT</div>
            </div>
        </div>

        <div className="center-column">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="link-wrapper">
                <div className="nav-link">
                    <NavLink exact to="/" activeStyle={activeStyle}>
                        Home 
                    </NavLink>
                </div>
                <div className="nav-link">
                    <NavLink to="/about" activeStyle={activeStyle}>
                        About 
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink to="/adventures" activeStyle={activeStyle}>
                        Adventures 
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink to="/contact" activeStyle={activeStyle}>
                        Contact 
                    </NavLink>
                </div>
            </div>
        </div>

        <div className="right-column">
            <div className="header-styles">
                <div>123 Main Street</div>
                <div>Salt Lake City, UT, 84101</div>
            </div>
            <div className="icon-ml">
                <i className="fas fa-map-marker-alt icon"></i>
            </div>
        </div>
    </div>
    );
};

export default Header;
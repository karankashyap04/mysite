import React from "react";
import "./styles/NavbarLink.css";

function NavbarLink(props) {
    return (
        <div className="link-container">
            <a className={props.first ? "active" : null} href={props.link}>{props.text}</a>
        </div>
    );
}  

export default NavbarLink;
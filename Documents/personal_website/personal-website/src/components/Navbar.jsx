import React, { useEffect } from "react";
import "./styles/Navbar.css"
import NavbarLink from "./NavbarLink";

function Navbar() {

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const navlinks = document.querySelectorAll(".link-container a");
        window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 140) {
            current = section.getAttribute("id"); }
        });

        navlinks.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href") === "#" + current) {
                li.classList.add("active");
            }
        });
        };
    })

    return (
        <div>
            <div className="row row-eq-height fixed-navbar">
                <div className="navbar-left col-lg-3 col-md-3">
                    karan<span className="blue">.</span>
                </div>
                <div className="navbar-right col-lg-9 col-md-9">
                    <div className="navbar-links-container">
                        <NavbarLink text="About me" link="#aboutme" first="true" />
                        <NavbarLink text="Education" link="#education" />
                        <NavbarLink text="Experience" link="#experience" />
                        <NavbarLink text="Skills" link="#skills" />
                        <NavbarLink text="Projects" link="#projects" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">

            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">John Doe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    <li>Accueil</li>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/services" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    <li>Services</li>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/realisations" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    <li>Réalisations</li>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/blog" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    <li>Blog</li>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                    <li>Me contacter</li>
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
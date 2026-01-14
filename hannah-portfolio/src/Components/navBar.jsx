import React from 'react'
import { useNavigate } from 'react-router-dom'

const navBar = () => {
    const navigate = useNavigate();

    const navList = [
        { text: "About", path: "/about" },
        { text: "Experiences", path: "/experience" },
        { text: "Skills", path: "/skills" },
        { text: "Hobbies", path: "/hobbies" },
        { text: "Contact", path: "/contact" }
    ];

    return (
        <nav class="navbar">
            <div class="logo">Hannah Ziwa</div>
            <ul class="nav-links">
                {navList.map((nav) => (
                    <li
                    key={nav.text}
                    onClick={() => navigate(nav.path)}
                    style={{cursor:"pointer"}}
                    >
                        {nav.text}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default navBar

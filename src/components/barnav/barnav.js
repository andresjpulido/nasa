import React, { useState } from 'react';
import './barnav.scss'
import icon from '../../assets/images/menu-icon.png'
import icon_closed from '../../assets/images/menu-icon-close.png'
import { useHistory } from "react-router-dom";

export default function Barnav() {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [page, setpage] = useState("home");

    let history = useHistory()

    function updateIsMenuOpen() {
        setisMenuOpen(!isMenuOpen)
    }

    function updatePage(page) {
        setpage(page);
        setisMenuOpen(false)
        history.push(page);
    }

    return (
        <nav>
            <div className="menu-mobile">
                <div className="menu-mobile-title">Pocket's Astronomy</div>
                <button className="menu-mobile-icon" onClick={updateIsMenuOpen}>
                    <img src={isMenuOpen ? icon_closed : icon} width="25px" alt="Menu" />
                </button>
            </div>

            <ul className={isMenuOpen ? "dropdown-child active" : "dropdown-child"}>
                <li className={page === 'home' ? "active-item" : ""} onClick={() => updatePage("home")}>
                    <span>Home</span>
                </li>

                <li className={page === 'neofeed' ? "active-item" : ""} onClick={() => updatePage("neofeed")}>
                    <span>Neo feed</span>
                </li>

                <li className={page === 'nimages' ? "active-item" : ""} onClick={() => updatePage("nimages")}>
                    <span>Images</span>
                </li>

                <li className={page === 'mrover' ? "active-item" : ""} onClick={() => updatePage("mrover")}>
                    <span>Rovers</span>
                </li>

                <li className={page === 'weather' ? "active-item" : ""} onClick={() => updatePage("weather")}>
                    <span>Weather</span>
                </li>

            </ul>

        </nav>
    )
}

import React from 'react';
import { Link } from "react-router-dom";
import './barnav.scss'

export default function Barnav() {
    return (
        <ul className="barnav">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/neofeed" >Neo feed</Link></li>
            <li><Link to="/curiosity" >Curiosity</Link></li>
            <li><Link to="/nimages" >Images</Link></li>
            <li><Link to="/mrover" >Rovers</Link></li>
        </ul>
    )
}
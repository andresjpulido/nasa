import React from 'react';
import './home.scss'
 import Apod from '../../components/apod'

export default function Home() {

    return (
        <article>
            <h2>Picture of the day</h2>
            <Apod />
        </article>
    )
}
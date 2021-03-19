import React, { useEffect, useState } from "react";
import './weather.scss'
import Error from '../../components/error'
import constants from "../../constants"

export default function Weather() {

    const api_key = process.env.REACT_APP_API_KEY
    let url = constants.URL_WEATHER + api_key + "&feedtype=json&ver=1.0"

    const [weather, setWeather] = useState()

    useEffect(() => {

        fetchWeather();

        async function fetchWeather() {
            const res = await fetch(url).catch((error) => {
                setWeather({ error: { code: "net", message: "ERR_NAME_NOT_RESOLVED" } })
            });

            if (res) {
                const data = await res.json();
                setWeather(data);
            }
        }

        return
    }, [url])

    if (!weather) {
        return (
            <div>Loading ...</div>
        );
    }

    if (weather.error) {
        return (
            <Error code={weather.error.code} message={weather.error.message} />
        );
    }

    return (
        <article>
            <h2>Weather in Mars</h2>
            <p>{weather.sol_keys}</p>
        </article>
    )
}
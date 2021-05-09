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
                const data = await res.json(); console.log(data)
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

    const solKeys = weather.validity_checks.sols_checked
    // let solArr = solKeys.map((i)=> ( return solKeys[i]))

    let solArr = solKeys.reduce((ac, el) => {
        let item = weather.validity_checks[el];
        item["sol"] = el;
        ac.push(item)
        return ac
    }, [])

    let currentSol = solArr[solArr.length - 1]

    console.log(currentSol)

    return (
        <article>
            <h2>Weather in Mars</h2>
            <div className="mars">
                <div className="mars-title">
                    <h1 className="mars-h1">Lastest Weather at Elysium Planitia</h1>
                    <p className="mars-p">InSight is talking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars' equator.</p>
                    <div className="mars-h2">Sol {currentSol.sol}</div>
                    <div className="mars-p">{currentSol.Last_UTC} </div>
                    <div className="mars-p">High: {currentSol.PRE.mx} F | C Low: {currentSol.PRE.mn} F | C</div>
                </div>
                <ul className="weather">
                    {solArr.map((sol, index) => (
                        <li className="weather-item" key={index}>
                            <div className="features">
                                <div className="strong">Sol {sol.sol}</div>
                                <div>{sol.Last_UTC}</div>
                                <div>{sol.Month_ordinal}</div>
                                <div>{sol.Northern_season}</div>
                                <div>{sol.PRE.av}</div>
                                <div>{sol.PRE.ct}</div>
                                <div>High: {currentSol.PRE.mx} Low: {currentSol.PRE.mn} </div>
                                <div>{sol.PRE.Season}</div>
                                <div>{sol.PRE.Southern_season}</div>
                                <div>{sol.WD?sol.WD.most_common:""} </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


        </article>
    )
}
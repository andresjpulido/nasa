import React, { useState, useEffect } from "react";
import './home.scss'
import Error from '../../components/error'
import constants from "../../constants"
import Loading from '../../components/loading'
import APOD from '../../components/apod'

export default function Home() {

    const [photoData, setPhotoData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api_key = process.env.REACT_APP_API_KEY
    let url = constants.URL_APOD + api_key
    //url = "/data/apod.json"

    useEffect(() => {

        fetchPhoto();

        async function fetchPhoto() {
            setLoading(true);
            setError(null);
            setPhotoData(null);

            const res = await fetch(url).catch((error) => {
                setError({ code: "net", message: "ERR_NAME_NOT_RESOLVED" })
                setLoading(false)
            });

            if (res) {
                try {
                    const data = await res.json();
                    setPhotoData(data);
                    setError(null);

                } catch (error) {
                    setError({ code: "json", message: "ERR_NAME_NOT_RESOLVED" })
                }

                setLoading(false)
            }
        }

    }, [url]);


    return (
        <article>
            <h2>APOD: Astronomic Picture of the Day</h2>

            <APOD data={photoData} />
            <Loading isloading={loading} />
            <Error data={error} />            

        </article>
    )

}
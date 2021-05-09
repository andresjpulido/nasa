import React, { useState } from 'react';

import constants from '../../constants'
import Error from '../../components/error'
import RoverList from '../../components/roverList'
import RoverForm from '../../components/roverform'
import Loading from '../../components/loading'
import './rover.scss';

export default function Rover() {

    const [imagesList, setImagesList] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api_key = process.env.REACT_APP_API_KEY
    let url = constants.URL_ROVERS

    const search = async (dataForm) => {
 
        setImagesList(null);
        setLoading(true);
        setError(null);

        url+= dataForm.rover 
        url+= "/photos?"

        if (dataForm.period === "0") {
            url += "&sol=" + dataForm.sol_number
        }

        if (dataForm.camera !== "All")
            url += "&camera=" + dataForm.camera

        url += "&api_key=" + api_key

        const res = await fetch(url).catch((error) => {
            setError(null);
            setLoading(false)
        });

        if (res) {
            try {
                const data = await res.json();
                setImagesList(data)
                setError(null);
                console.log(data)

            } catch (error) {
                setError({ code: "json", message: "ERR_NAME_NOT_RESOLVED" })
            }

            setLoading(false)

        }

    }

    return (
        <article>

            <h2>Mars rover photos</h2>
            <p>Sol - Martian rotation or day.</p>

            <RoverForm action={search} />

            <Loading isloading={loading} />
            <Error data={error} />

            <RoverList data={imagesList} />

        </article>
    )
}
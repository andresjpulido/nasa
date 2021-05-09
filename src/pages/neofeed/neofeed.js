import React, { useState } from 'react';

import Neoform from '../../components/neoform'
import constants from '../../constants'
import NeoList2 from '../../components/neoList2'
import Paginator from '../../components/paginator'
import Loading from '../../components/loading'
import Error from '../../components/error' 

export default function Asteroids() {

    const [neo, setNeo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api_key = process.env.REACT_APP_API_KEY
    let url = constants.URL_NEO_FEED + api_key
    url = "/data/neofeed.json"

    const search = async (dataForm) => {
        setNeo(null);
        setLoading(true);        
        setError(null);        
 
        const res = await fetch(url).catch((error) => {
            setError({ code: "net", message: "ERR_NAME_NOT_RESOLVED" })            
            setLoading(false)
        });

        if (res) {
            try {
                const data = await res.json();
                setNeo(data);
                setError(null);

            } catch (error) {
                setError({ code: "json", message: "ERR_NAME_NOT_RESOLVED" })
            }

            setLoading(false)

        }

    }


    return (
        <article>

            <h2>Near Earth Object</h2>

            <p>Retrieve a list of Asteroids based on their closest approach date to Earth.</p>

            <Neoform action={search} />
            
            <Loading isloading={loading} />
            <Error data={error} />

            <NeoList2 data={neo} />

            { neo &&
                <Paginator currentPage={1} totalItems={100} itemsPerPage="10" />
            }
        </article >
    )
}
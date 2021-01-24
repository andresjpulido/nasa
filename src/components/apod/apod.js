import React, { useState, useEffect } from "react";
import './apod.scss'
import Error from '../error'

import constants from "../../constants"

export default function Apod() {

    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(constants.URL_APOD).catch((error) => {             
                setPhotoData({error:{code:"net", message:"ERR_NAME_NOT_RESOLVED"}})});
        
            if(res){
                const data = await res.json();
                setPhotoData(data);
            }
        }

    }, []);
 

    if (!photoData){ 
        return (
            <div>Loading ...</div>
        );
    }

    if (photoData.error){ 
        return (
            <Error code={photoData.error.code} message={photoData.error.message} />
        );
    }
 
    return (
        <div className="nasa-photo">
            {photoData.media_type === "image" ? (
            <img
                src={photoData.url}
                alt={photoData.title}
                className="photo"
            />
            ):(
            <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
            />
            )}
            <div className="text">
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>
        </div>
    )
}
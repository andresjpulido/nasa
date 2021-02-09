import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import "./neoList.scss"
import Error from '../error'

import constants from "../../constants"

export default function NeoList(){

    const [neo, setNeo] = useState(null);

    const api_key = process.env.REACT_APP_API_KEY
    let url = constants.URL_NEO_FEED + api_key
    url = "/data/neofeed.json"
    
    useEffect(() => {

        fetchNeoList();

        async function fetchNeoList() {
            const res = await fetch(constants.URL_NEO_FEED + api_key
            ).catch((error) => {             
                setNeo({error:{code:"net", message:"ERR_NAME_NOT_RESOLVED"}})});
        
            if(res){
                const data = await res.json();
                setNeo(data);
            }
        }

    }, []);
 
    if (!neo){ 
        return (
            <div>Loading ...</div>
        );
    }

    if (neo.error){ 
        return (
            <Error code={neo.error.code} message={neo.error.message} />
        );
    }
 
    let nclist = [];
    let neoListContent = [];

    for (let x in neo.near_earth_objects) {
        nclist.push(x.toString())
    }    

     Array.prototype.map.call(nclist, function(obj) {        
        let dateItem = neo.near_earth_objects[obj]
         
        if(Array.isArray(dateItem)){

            //dateItem.forEach(element => console.log(element));   
            let f = dateItem.map((t)=><div>{t.id}</div>);
            console.log(f);
            
            let y = [];
            dateItem.forEach(element => {y.push({element}.element)
            console.log(element)}); 

            console.log(y);

            const todoItems = [];

            neoListContent = y.map((item)=>
                <div>
                    <div>{item.name}</div>   
                    <div><a href={item.nasa_jpl_url} target="_blank">jpl</a></div>
                    <div>{item.is_potentially_hazardous_asteroid?"It is potentially hazardous.":"It is not potentially hazardous."}</div>
                    <div>Absolute magnitude {item.absolute_magnitude_h}</div>
                    <div>The estimated diameter is between [{item.estimated_diameter.kilometers.estimated_diameter_min} - {item.estimated_diameter.kilometers.estimated_diameter_max}] (Km)</div> 
                    <div>close_approach_date_full {item.close_approach_data.close_approach_date_full}</div>
                    {
                        item.close_approach_data.map((appr, index) =>
                        <div>    
                            <li key={index}>{appr.close_approach_date_full} </li>
                            <li key={index}>{appr.epoch_date_close_approach} </li>
                            <li key={index}>{appr.relative_velocity.kilometers_per_hour} Km/h</li>
                            <li key={index}>{appr.miss_distance.kilometers} Km</li>
                            <li key={index}>{appr.orbiting_body}</li>                            
                        </div>
                        )
                    }
                </div>
            );
             

        } else{
            console.log("no es array")
        }

    });

    return (
        <Fragment>
            <ul id="neolinks">
                <li key="1"><Link key="10" to="/" >Previous</Link></li>
                <li key="2"><Link key="20" to="/" >self</Link></li>
                <li key="3"><Link key="30" to="/" >Next</Link></li>
            </ul>
             <div id="neolist">{neoListContent}</div>
            Total {neo.element_count} records.
        </Fragment>
    )
}

import React, { Fragment } from "react";
import Error from '../error'
import './neolist.scss'

export default function NeoList2(props) {

    console.log(props.data)

    const neo = props.data;

    if (!neo) {
        return (
            <div></div>
        );
    }

    if (neo.error) {
        return (
            <Error code={neo.error.code} message={neo.error.message} />
        );
    }

    let nclist = [];
    let neoListContent = [];

    for (let x in neo.near_earth_objects) {
        nclist.push(x.toString())
    }

    Array.prototype.map.call(nclist, function (obj) {
        let dateItem = neo.near_earth_objects[obj]

        if (Array.isArray(dateItem)) {

            let y = [];

            dateItem.forEach(element => {
                y.push({ element }.element)
            });

            neoListContent = y.map((item, index) =>
                <li key={index} className="neo-card">
                    <div className="neo-title">{item.name}</div>
                    <div className="neo-body">
                        <div><a href={item.nasa_jpl_url} target="_blank" rel="noreferrer noopener">jpl</a></div>
                        
                        {item.is_potentially_hazardous_asteroid ? "It is potentially hazardous." : "It is not potentially hazardous."}, Absolute magnitude {item.absolute_magnitude_h}, 
                        The estimated diameter is between [{item.estimated_diameter.kilometers.estimated_diameter_min} - {item.estimated_diameter.kilometers.estimated_diameter_max}] (Km).
                        Close approach: {item.close_approach_data.close_approach_date_full}
                        {
                            item.close_approach_data.map((appr, index) =>
                                <div key={index}>
                                    {appr.close_approach_date_full},  
                                    {appr.epoch_date_close_approach}, 
                                    {appr.relative_velocity.kilometers_per_hour} Km/h, 
                                    {appr.miss_distance.kilometers} Km, 
                                    {appr.orbiting_body}
                                </div>
                            )
                        }
                    </div>
                </li>
            );


        } else {
            console.log("It isn't supported")
        }

    });

    return (
        <Fragment>
            <ul className="neolist">{neoListContent}</ul>
            <p>Total {neo.element_count} records.</p>
        </Fragment>
    )
}

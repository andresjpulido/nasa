import React from 'react';
import './roverlist.scss'

export default function RoverList(props) {

    return (

        <div className="items">
            {
                props.data.map((image) => (

                    <div key={image.id} className="item">
                        <div className="head">
                            <a href={image.img_src} rel="noreferrer noopener" target="_blank" >
                                <img src={image.img_src} alt={image.rover.name} />
                            </a>
                        </div>
                        <div className="body">
                            <p>{image.camera.full_name}</p>
                            <p><span>Earth date </span>{image.earth_date}</p>
                            <p><span>Sol </span>{image.sol}</p>
                            <p><span>Rover </span>{image.rover.name}</p>
                            <p><span>Landing date </span>{image.rover.landing_date}</p>
                            <p><span>Launch date </span>{image.rover.launch_date}</p>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}
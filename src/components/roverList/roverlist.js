import React from 'react';
import './roverlist.scss'

export default function RoverList(props) {

    const data = props.data;

    if (!data) {
        return (
            <div></div>
        )
    }

    return (

        <div className="rover-items">
            {
                data.photos.map((image) => (

                    <div key={image.id} className="rover-item">
                        <div className="rover-head">
                            <a href={image.img_src} rel="noreferrer noopener" target="_blank" >
                                <img src={image.img_src} alt={image.name} />
                            </a>
                        </div>
                        <div className="rover-body">
                            <div className="rover-title">{image.camera.full_name}</div>
                            <div className="rover-row">
                                <div className="rover-column">Earth date </div>
                                <div className="rover-label">{image.earth_date}</div>
                            </div>
                            <div className="rover-row">
                                <div className="rover-column">Sol </div>
                                <div>{image.sol}</div>
                            </div>
                            <div className="rover-row">
                                <div className="rover-column">Rover </div>
                                <div>{image.rover.name}</div>
                            </div>
                            <div className="rover-row">
                                <div className="rover-column">Landing date </div>
                                <div>{image.rover.landing_date}</div>
                            </div>
                            <div className="rover-row">
                                <div className="rover-column">Launch date </div>
                                <div>{image.rover.launch_date}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <p>Total {data.element_count} records.</p>

        </div>
    )
}
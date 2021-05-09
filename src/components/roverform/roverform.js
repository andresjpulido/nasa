import React, { useState } from 'react';
import cameras from '../../data/camera.json';

export default function RoverForm(props) {

    const [form, setForm] = useState({ "period": "0", "sol_number": 1000, "camera": "All", "rover": "curiosity" })

    const handleChange = (ev) => {
        ev.persist();
        setForm(form => ({ ...form, [ev.target.name]: ev.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.action(form)
    }

    const roverList = ["curiosity", "opportunity", "spirit"].map((rover) => (
        <option key={rover} value={rover}>{rover}</option>
    ))

    const camerasList = cameras.map((camera) =>
        <option key={camera.code} value={camera.code}>{camera.name}</option>
    )

    return (

        <form onSubmit={handleSubmit}>

            <div className="row">
                <label htmlFor="rover">Rover:</label>
                <select name="rover" id="rover" onChange={handleChange}>
                    {
                        roverList
                    }
                </select>
            </div>

            <div className="row">
                <label htmlFor="day">Day:</label>
                <div>
                    <input type="radio" id="period" name="period"
                        value="0"
                        checked={form.period === "0"}
                        onChange={handleChange} />
                    <label htmlFor="huey">Sol</label>

                    <input type="radio" id="period" name="period"
                        value="1"
                        checked={form.period === "1"}
                        onChange={handleChange} />
                    <label htmlFor="dewey">Earth date</label>
                </div>
            </div>

            {form.period === "0" &&
                <div className="row">
                    <label htmlFor="sol_number">Sol:</label>
                    <input type="number" id="sol_number" name="sol_number"
                        onChange={handleChange}
                        value={form.sol_number} />
                </div>
            }
            {form.period === "0" &&
                <div className="row">
                    <label htmlFor="cameras-select">Choose a camera:</label>
                    <select name="camera" id="cameras-select" onChange={handleChange}>
                        <option value="All">All</option>
                        {
                            camerasList
                        }
                    </select>
                </div>
            }

            {form.period === "1" &&
                <div className="row">
                    <label htmlFor="date_earth">Date</label>
                    <input type="date" id="date_earth" name="date_earth" onChange={handleChange} />
                </div>
            }

            <div className="row">
                <button type="submit">Searh</button>
            </div>

        </form>

    )
}
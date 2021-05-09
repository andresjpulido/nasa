import React, { useState } from 'react';

export default function Neoform(props) {

    const [form, setForm] = useState({startDate:new Date(), finalDate:""})
    
    const handleSubmit = (event) => {
        event.preventDefault();

        //TODO check th e period between start and final dates

        props.action(form)
    }

    const handleChange = (ev) => {
        ev.persist();
        setForm(form => ({ ...form, [ev.target.name]: ev.target.value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <label>Start date</label>
                <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required></input>

            </div>

            <div className="row">
                <label>End date</label>
                <input type="date" name="finalDate" value={form.finalDate} onChange={handleChange} required></input>

            </div>
            <div className="row">
                <button type="submit">Search</button>
            </div>

        </form>
    )
}
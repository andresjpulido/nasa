import React from 'react';
import './error.scss'

export default function Error(props) {

    const error = props.data

    if (error)
        return (
            <div className="error">
                <div>Oops!</div>
                <div>{error.code}</div>
                <div>{error.message}</div>
            </div>
        )
    else
        return (<div></div>)
}
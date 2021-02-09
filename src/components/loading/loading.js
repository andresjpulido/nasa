import React from 'react';
import './loading.scss'
import loading from '../../assets/images/loading.gif'

export default function IsLoading() {

    return (
        <div className="loading">
            <img src={loading} />
        </div>
    )
}
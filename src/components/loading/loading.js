import React from 'react';
import './loading.scss'
import loading from '../../assets/images/loading.gif'

export default function IsLoading(props) {

    const isloading = props.isloading;

    if (isloading)
        return (
            <div className="loading">
                <img src={loading} alt="loading" />
                <div>Processing ...</div>
            </div>
        )
    else
        return (<div></div>)
}
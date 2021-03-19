import React, { Component } from 'react';
import constants from '../../constants'
import Error from '../../components/error'
import NImageList from '../../components/nimagelist'
import Loading from '../../components/loading'
import './nimages.scss'

export default class NImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            imageList: [],
            isloading: false,
            hasResults: true,
            contacts: []
        };

    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleKeyDown = (event) => {

        if (event.key === 'Enter') {

            event.preventDefault();

            this.setState({
                contacs: [],
                isloading: true
            })

            let url = constants.URL_NIMAGES + "/search?q=" + this.state.value
            //url =+ "&random=" + Math.random()
            console.log(url)

            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        contacts: data,
                        isloading: false,
                        hasResults: true
                    })
                    console.log(data)
                })
                .catch(console.log)


        }
    }

    componentDidMount() {
        this.queryInput.focus();
    }

    render() {

        return (
            <article>
                <h2>Nasa Images Respository</h2>
                <form>
                    <div className="container">
                        <div className="omrs-input-group">
                            <label className="omrs-input-underlined">
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                    required
                                    name="query"
                                    ref={(input) => { this.queryInput = input; }} />
                                <span className="omrs-input-label">Search</span>
                                <span className="omrs-input-helper">Search the Nasa Collections</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
                                    <g id="layer1" transform="translate(-290.27 -334.66)">
                                        <path
                                            id="path3058-6"

                                            d="m393.36 334.66c-26.422 0-52.849 10.027-72.935 30.113-40.172 40.171-40.218 105.74-0.046 145.91 35.217 35.216 89.911 39.558 129.94 13.03l60.918 60.916c8.0386 8.0384 20.97 8.0384 29.008 0 8.0387-8.0384 8.0387-20.969 0-29.008l-60.872-60.916c26.497-40.023 22.127-94.732-13.077-129.94-20.086-20.085-46.514-30.113-72.935-30.113zm-0.046 27.166c19.371 0.009 38.738 7.4275 53.596 22.285 29.716 29.715 29.762 77.521 0.046 107.24-29.716 29.715-77.523 29.715-107.24 0-29.716-29.715-29.716-77.52 0-107.24 14.858-14.858 34.225-22.295 53.596-22.285zm-54.656 99.224a2.9472 2.9471 0 0 0 -2.5325 4.236c10.265 21.49 32.226 36.328 57.602 36.328 5.5064 0 10.842-0.71645 15.932-2.0259a2.9472 2.9471 0 0 0 -0.0921 -5.7094c-25.496-5.6948-48.907-16.882-68.975-32.231a2.9472 2.9471 0 0 0 -1.9339 -0.59857z"
                                        />
                                    </g>
                                </svg>
                            </label>
                        </div>
                    </div>
                </form>

                {
                    this.state.isloading &&
                    <Loading />
                }

                {
                    this.state.contacts &&
                    this.state.contacts.error &&
                    <Error code={this.state.contacts.error.code} message={this.state.contacts.error.message} />
                }

                {
                    (this.state.contacts && this.state.contacts.collection)
                        ?
                        <NImageList data={this.state.contacts.collection} />
                        :
                        <div>no hay resultados</div>
                }

            </article>
        );
    }

}
import React, { Component } from 'react';
import cameras from '../../data/camera.json';
import constants from '../../constants'
import Error from '../../components/error'
import RoverList from '../../components/roverList'
import Loading from '../../components/loading'

export default class rover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cameras: cameras,
            period: "0",
            imagesList: [],
            sol_number: 1000,
            camera: "All",
            isloading: false,
            roverList: ["curiosity", "opportunity", "spirit"],
            rover: "curiosity",
            page: 1
        };

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {

        event.preventDefault();

        this.setState({ isloading: true })

        //Building the request depending of the selected option
        let url = constants.URL_ROVERS + this.state.rover + "/photos?"

        if (this.state.period === "0") {
            url += "&sol=" + this.state.sol_number + "&api_key=RDoxqFAGvLbPBsCbMMPLsfBEV22Ud9xbtINCWBcO"

            if (this.state.camera !== "All")
                url += "&camera=" + this.state.camera
        } else {

        }

        url += "&page=" + this.state.page;
        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imagesList: data.photos,
                    isloading: false
                })
                console.log(this.state.imagesList)

            })
            .catch(console.log)


        if (this.state.imagesList.error) {
            return (
                <Error code={this.state.imagesList.error.code} message={this.state.imagesList.error.message} />
            );
        }

    }

    render() {

        const camerasList = cameras.map((camera) =>
            <option key={camera.code} value={camera.code}>{camera.name}</option>
        )

        const roverList = this.state.roverList.map((rover) => (
            <option key={rover} value={rover}>{rover}</option>
        ))

        return (
            <article>
                <h2>Mars rover photos</h2>
                <form>
                    <div className="form">
                        <div className="row">
                            <label htmlFor="rover">Rover:</label>
                            <select name="rover" id="rover" onChange={this.handleChange}>
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
                                    checked={this.state.period === "0"}
                                    onChange={this.handleChange} />
                                <label htmlFor="huey">Sol</label>

                                <input type="radio" id="period" name="period"
                                    value="1"
                                    checked={this.state.period === "1"}
                                    onChange={this.handleChange} />
                                <label htmlFor="dewey">Earth date</label>


                            </div>
                        </div>




                        {this.state.period === "0" &&
                            <div className="row">
                                <label htmlFor="sol_number">Sol - Martian rotation or day</label>
                                <input type="number" id="sol_number" name="sol_number"
                                    onChange={this.handleChange}
                                    value={this.state.sol_number} />
                            </div>
                        }
                        {this.state.period === "0" &&
                            <div className="row">
                                <label htmlFor="cameras-select">Choose a camera:</label>
                                <select name="camera" id="cameras-select" onChange={this.handleChange}>
                                    <option value="All">All</option>
                                    {
                                        camerasList
                                    }
                                </select>
                            </div>
                        }

                        {this.state.period === "1" &&
                            <div className="row">
                                <label htmlFor="date_earth">Date</label>
                                <input type="date" id="date_earth" name="date_earth" onChange={this.handleChange} />
                            </div>
                        }
                         
                        <div className="row">
                            <button type="submit" onClick={this.handleSubmit}>Searh</button>
                        </div>
                    </div>
                </form>
                {
                    this.state.isloading &&
                    <Loading />
                }

                {
                    this.state.imagesList &&
                    <RoverList data={this.state.imagesList} />
                }
            </article>
        )
    }
}
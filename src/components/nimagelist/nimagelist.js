import React, { Component } from 'react';
import CollectionUrl from '../collection'
import './nimages.scss';

export default class NImageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: props.data,
            showContent: false,
            idSelected:0
        };

    }

    clickDiv = id => (ev) => {        
        this.setState({
            showContent: !this.state.showContent, 
            idSelected: id
        })        
    }
 
    componentWillReceiveProps(props) {
        //const { data } = this.props;
        this.setState({contacts:props.data})
      }

    render() {
 
        if (!this.state.contacts) {
            return (<div></div>)
        }

        let imageList = [];
        let total_hits = 0;

        total_hits = this.state.contacts.metadata.total_hits;
        
        

            imageList = this.state.contacts.items.slice(0, 15).map((item, id) =>
                <li key={id}>
                    <div onClick={this.clickDiv(id)}>
                        <div id="outer-circle">
                            <div id="inner-circle">
                                <div id="inside-content">{id}</div>
                            </div>
                        </div>
                        <div id="text">{item.data[0].title}</div>
                    </div>

                    <ul style={{display: this.state.showContent &&  id===this.state.idSelected? "block" : "none"}}>
                        <div>
                            <img src={item.links[0].href} alt={item.data[0].title} />
                            <p>{item.data[0].description}</p>
                        </div>
                        <p>Location: {item.data[0].location}</p>
                        <p>Media type: {item.data[0].media_type}</p>                        
                        <p>Created at {item.data[0].date_created}</p>
                        <p>Secondary creator: {item.data[0].secondary_creator}</p>
                        <p>Photographer: {item.data[0].photographer}</p>
                        <p>Keywords:
                            {
                            item.data[0].keywords &&
                            item.data[0].keywords.map(
                                (keyword, index) => (<span key={index}>{keyword } </span>)
                            ) }
                        </p> 
                        {
                            this.state.showContent 
                            &&  id===this.state.idSelected 
                            &&                        
                            <CollectionUrl url={item.href} />    
                        }
                        
                    </ul>
                </li>
            )

            total_hits = this.state.contacts.metadata.total_hits;

        return (
            <div id="nimagelist">
                <h1>Collections</h1>
                <ul>
                    {imageList}
                </ul>
                <p>Total {total_hits} records.</p>
            </div>
        )
    }

}
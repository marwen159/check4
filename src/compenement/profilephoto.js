import React, { Component } from 'react'
import img from '../compenement/profileimg.jpg';
export default class profilephoto extends Component {
    render() {
        return (
            <div className="image">
                <img src={img} className="img-kobir"/>
            </div>
        )
    }
}

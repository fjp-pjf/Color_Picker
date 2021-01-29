import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 20,
        colorList: [ "#fca311", "#e63946", "#283618", "#3f37c9", "#9d0208", "#8338ec", "#ff006e"]
    }
    render(){
        const boxes = Array.from({ length: this.props.numBoxes }).map(
            ()=> <Box colors={ this.props.colorList } />
        )
        return(
            <div className="BoxContainer">{ boxes }</div>
        );
    }
}

export default BoxContainer;
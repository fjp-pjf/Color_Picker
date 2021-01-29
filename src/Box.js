import React, { Component } from 'react';
import './Box.css';
import { choose } from './helpers';

class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: choose(this.props.colors)
        }
        this.handleClick = this.handleClick.bind(this);
    }
    setColor(){
        let newColor;
        do{ 
            newColor = choose(this.props.colors)
        }
        while(newColor === this.state.color);

        this.setState({ color: newColor });
    }
    handleClick(){
        this.setColor();
    }
    render(){
        return(
        <div className="Box" style={{backgroundColor:this.state.color}} onClick={this.handleClick}>
                
            </div>
        );
    }
}

export default Box;
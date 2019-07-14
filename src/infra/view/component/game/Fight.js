import React, { Component } from 'react';
import './Fight.css'

class Fight extends Component {

    constructor(props){
        super(props);
        this.state = {
            game: this.props.game
        }
    }

    render() {
        return (
            <div>
                fight
            </div>
        );
    }
}

export default Fight;

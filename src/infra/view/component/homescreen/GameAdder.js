import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './GameAdder.css'
import { withRouter } from 'react-router-dom'

class GameAdder extends Component {

    addGame(){
        this.props.history.push({pathname: '/create'});
    }

    render() {
        return (
            <div className="button">
                <Button variant="contained"  color="primary" onClick={() => this.addGame()} >Nouvelle partie</Button>
            </div>
        );
    }
}

export default withRouter(GameAdder);

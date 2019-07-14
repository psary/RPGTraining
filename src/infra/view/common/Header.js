import React, { Component } from 'react';
import GameAdder from '../component/header/GameAdder.js'
import './Header.css'
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom'

class Header extends Component {
    goHome(){
        this.props.history.push({pathname: '/'});
    }
    render() {
        return (
            <div className="Header"> 
                <IconButton onClick={this.goHome.bind(this)}>
                    <HomeIcon color="primary" />
                </IconButton>
                RPG Training 
                <GameAdder />
            </div>
        );
    }
}

export default withRouter(Header);

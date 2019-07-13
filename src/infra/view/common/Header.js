import React, { Component } from 'react';
import GameAdder from '../component/homescreen/GameAdder.js'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="Header"> RPG Training <GameAdder /></div>
        );
    }
}

export default Header;
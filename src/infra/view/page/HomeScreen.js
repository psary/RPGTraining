import React, { Component } from 'react';
import Header from '../common/Header.js'
import GameAdder from '../component/homescreen/GameAdder.js'
import GameList from '../component/homescreen/GameList.js'
import './HomeScreen.css'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Header />
                <GameAdder />
                <GameList />
            </div>
        );
    }
}

export default HomeScreen;

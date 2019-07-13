import React, { Component } from 'react';
import Header from '../common/Header.js'
import GameList from '../component/homescreen/GameList.js'
import './HomeScreen.css'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="game_list">
                    <GameList />
                </div>
            </div>
        );
    }
}

export default HomeScreen;

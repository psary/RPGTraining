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
                <div className="add_button">
                    <GameAdder />
                </div>
                <div className="game_list">
                    <GameList />
                </div>
            </div>
        );
    }
}

export default HomeScreen;

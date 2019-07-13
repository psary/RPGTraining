import React, { Component } from 'react';
import './GameCard.css'
import { Link } from "react-router-dom";
import More from '@material-ui/icons/MoreHoriz';
import Game from '../../page/Game';
class GameCard extends Component {

    render() {
        const data = this.props.data
        return (
            <Link className="card_container" to={{ pathname: `/game/` + data.id, id: data.id}} >
                <div className="card_header">
                    <div className="card_header-left">
                        <p>{data.name}</p>
                        <p>ID {data.id}</p>
                    </div>
                    <div className="card_header-right">
                        <More/>
                        <p>#Status</p>
                    </div>
                </div>
                <div className="card_content">
                    <p>#Level <b>XX</b></p>
                </div>
            </Link>
        );
    }
}
export default GameCard;

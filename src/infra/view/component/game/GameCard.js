import React, { Component } from 'react';
import './GameCard.css'
import { Link } from "react-router-dom";
import More from '@material-ui/icons/MoreHoriz';
import strings from '../../../Adapter/Localisation/localisation'
class GameCard extends Component {

    render() {
        const data = this.props.data
        const worksites = this.props.worksiteList
        return (
            <Link className="card_container" to={{ pathname: `/worksite/` + data.mdm , state: [data, worksites] }} >
                <div className="card_header">
                    <div className="card_header-left">
                        <p>{data.name}</p>
                        <p>Mdm {data.mdm}</p>
                    </div>
                    <div className="card_header-right">
                        <More/>
                        <p>{strings.status}</p>
                    </div>
                </div>
                <div className="card_content">
                    <p>{strings.total_revenue} <b>{data.recettesTotales}</b></p>
                    <p>{strings.ca_cumul_go} <b>{data.caCumuleGo}</b></p>
                    <p>{strings.ca_cumul_ces}  <b>{data.caCumuleCes}</b></p>
                    <p>{strings.ca_cumul_total}  <b>{data.caCumuleTotal}</b></p>
                </div>
            </Link>
        );
    }
}
export default GameCard;

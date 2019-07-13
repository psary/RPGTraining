import React, { Component } from 'react';
import './GameCard.css'
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'
class GameCard extends Component {

    constructor(props){
        super(props);

    }
    go(id){
        this.props.history.push({pathname: '/game/'+id, id: id});
    }
  
    render() {
        const data = this.props.data
        return (
            <Card className="card_container" classses={{root: "card_container"}} >
                <div className="card_header">
                    <div className="card_header-left">
                        <p>{data.name}</p>
                        <p>ID {data.id}</p>
                    </div>
                </div>
                <div className="card_content">
                    <p>#Level <b>XX</b></p>
                </div>
                <CardActions classes={{root: "card_action"}}>
                    <IconButton>
                        <DeleteIcon color="red"/>
                    </IconButton>
                    <Button variant="contained"  color="primary" onClick={() => this.go(data.id)} >Reprendre</Button>
                </CardActions>
            </Card>
        );
    }
}
export default withRouter(GameCard);

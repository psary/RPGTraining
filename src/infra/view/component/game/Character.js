import React, { Component } from 'react';
import './Character.css'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

class Character extends Component {

    constructor(props){
        super(props);
        this.state = {
            game: this.props.game
        }
    }

    render() {
        return (
            <div className="characterContainer">
                <Card >
                    <CardContent>
                        <Typography color="textPrimary" variant="h5">
                        Personnage
                        </Typography>
                        <div className="card_content">
                            <p>#Level <b>XX</b></p>
                            <p>Caractéristiques <b>???</b></p>
                        </div>
                        <Typography variant="body2" component="p">
                        blabla
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Statistiques avancées</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Character;

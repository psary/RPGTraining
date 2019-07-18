import React, { Component } from 'react';
import './Fight.css'
import PropTypes from 'prop-types'

class Fight extends Component {

    constructor(props){
        super(props);
        this.state = {
            game: this.props.game,
            test: 0
        }
    }
    static contextTypes = {
        loop: PropTypes.object,
      };
    
      componentDidMount() {
        this.context.loop.subscribe(this.update.bind(this));
      }
    
      componentWillUnmount() {
        this.context.loop.unsubscribe(this.update.bind(this));
      }

    update() {
        this.setState({test:this.state.test+1});
      }

    render() {
        return (
            <div>
                {this.state.test}
            </div>
        );
    }
}

export default Fight;

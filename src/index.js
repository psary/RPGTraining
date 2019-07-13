import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Game from './infra/view/page/Game.js';
import * as serviceWorker from './serviceWorker';
import db from './infra/PersistanceInit.js';


const routing = (
    <MemoryRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/game/:id" component={Game} />
      </div>
    </MemoryRouter>
  )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

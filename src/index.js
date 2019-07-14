import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import db from './infra/PersistanceInit.js';
import 'moment/locale/fr';
import Create from './Create';
import Game from './Game';
import HttpsRedirect from 'react-https-redirect';

db.version(1).stores({
    games: `id++, name, createdAt`
});

const routing = (
  <HttpsRedirect>
    <MemoryRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/game/:id" component={Game} />
        <Route path="/create" component={Create} />
      </div>
    </MemoryRouter>
  </HttpsRedirect>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

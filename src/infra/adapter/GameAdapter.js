import db from '../PersistanceInit.js'

export function createGame(){
    db.games.put({name: 'test2'});
};

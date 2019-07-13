import db from '../PersistanceInit.js'

export async function createGame(){
    let id = await db.games.put({name: 'test2'});
    console.log(id)
};
export function getAllGames(){
    return db.table('games').toArray();
};

export function getGame(id){
    return db.table('games').get(id);
};

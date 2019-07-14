import db from '../PersistanceInit.js'

export async function createGame(name){
    return await db.games.put({name: name});
};
export function getAllGames(){
    return db.table('games').toArray();
};

export function getGame(id){
    return db.table('games').get(id);
};

export function deleteGame(id){
    return db.table('games').delete(id);
};

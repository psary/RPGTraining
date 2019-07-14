import db from '../PersistanceInit.js'
import moment from 'moment';

export async function createGame(name){
    let character = {
        'level' : 0, 
        'exp': 0, 
        'equipement': { 'head': undefined, 'chest': undefined, 'rightHand': undefined, 'leftHand': undefined, 'pants': undefined, 'boots': undefined},
        'stats': { 'force': 0, 'agility': 0, 'intelligence': 0, 'charisma': 0, 'luck': 0, 'constitution': 0} 
    };

    return await db.games.put({
        name: name, 
        createdAt: moment().format('DD/MM/YYYY HH:mm:ss'),
        character: character
    });
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

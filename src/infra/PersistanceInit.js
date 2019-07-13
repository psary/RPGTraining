import Dexie from 'dexie';

const db = new Dexie('rpg-training');
db.version(1).stores({
    games: `id++, name`
});
export default db;

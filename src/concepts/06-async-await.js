import { heroes } from '../data/heroes.js';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async (element ) => {
    const id1 = '5d86371f233c9f2425f16916';
    const id2 = '5d86371f25a058e5b1c8a65e';
    console.time('Start');
    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);

    //    const [hero1, hero2] = await Promise.all([
    //         findHero(id1),
    //         findHero(id2),
    //     ])
    
        element.innerHTML = `${hero1} | ${hero2}`;

    } catch (error) {
        element.innerHTML = error;
    }
    console.timeEnd('Start');
}

const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found.`;
    return hero.name;
};
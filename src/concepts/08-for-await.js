import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async (element) => {
    const heroIds = heroes.map(hero => hero.id);
    const heroesPromise = getHeroesAsync(heroIds);
    for await(const hero of heroesPromise){
        element.innerHTML += `${hero.name} <br/>`;
    }
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>} heroesPromise
 */
//?Esto devolverá un arr de heroes que obtendremos por id.
const getHeroesAsync = (heroIds) => {
    const heroesPromise = [];
    heroIds.forEach( id => {
        heroesPromise.push(getHeroAsync(id));
    });
    return heroesPromise;
}

/**
 * 
 * @param {String} id 
 */
//? Simulamos una petición http
const getHeroAsync = async(id) => {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
    return heroes.find(hero => hero.id === id);
}
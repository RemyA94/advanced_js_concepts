import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element ) => {
    const id = '5d86371f2343e37870b91ef1'
    const renderHero = (value) => {
        element.innerHTML = value;
    };
    const renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    };

    findHero(id)
        .then(({name}) => renderError(name))
        .catch(error => renderError(error));

}

/**
 * 
 * @param {String} id 
 * @return {Promise<String>} 
 */
const findHero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found.`;
    return hero;
}
 

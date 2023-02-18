import { heroes } from "../data/heroes"

//*Ejemplo de callbacks con manejo de errores.

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHero(id, (error, hero) => {
        if (error) {
            element.innerHTML = error;
            return;
        };

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            };
            element.innerHTML = `${hero.name} / ${hero2.name}`
        });
        
    });
}


/**
 * 
 * @param {String} id 
 * @param {(error: String | Null,  hero: Object ) => void} callbacks 
 */
const findHero = (id, callbacks) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) {
        callbacks(`Hero with id ${id} not found.`);
        return; // undefined
    }
    callbacks(null, hero);
}
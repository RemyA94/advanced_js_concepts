/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';
    const renderValue = (value) => {
        element.innerHTML = value;
    }

    Promise.race([
        lowPromise(),
        mediumPromise(),
        fastPromise(),
    ]).then(value => renderValue(value));

}

const lowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('lowPromise');
    }, 2000);
});

const mediumPromise = () => new Promise (resolve => {
    setTimeout(() => {
        resolve('mediumPromise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fastPromise');
    }, 1000);
});


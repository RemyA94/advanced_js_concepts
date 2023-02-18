
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async (element) => {

    console.time('Start');

    //! De esta forma dura aun mas tiempo
    // const value1 = await lowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    //? Con promise.all() podemos reducir el tiempo de espera
       const [value1, value2, value3] = await Promise.all([
            lowPromise(),
            mediumPromise(),
            fastPromise(),
        ])

    element.innerHTML = `
        value 1: ${value1} <br/>
        value 2: ${value2} <br/>
        value 3: ${value3} <br/>
    `;
    console.timeEnd('Start');

}


const lowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('lowPromise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('mediumPromise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('fastPromise');
    }, 1000);
});

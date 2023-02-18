
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const enviromentsComponents = (element) => {
    console.log(import.meta.env);

    const html = `
        DEV: ${import.meta.env.DEV} <br/>
        PROD: ${import.meta.env.PROD} <br/>
        API_KEY: ${import.meta.env.VITE_API_KEY} <br/>
        API_URL: ${import.meta.env.VITE_API_URL} <br/>
    `;
    element.innerHTML = html;
}
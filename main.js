import './style.css'
import javascriptLogo from './javascript.svg'
import { enviromentsComponents } from './src/concepts/01-environments'
import { callbacksComponent } from './src/concepts/02-callbacks'
import { promiseComponent } from './src/concepts/03-promise'
import { promiseRaceComponent } from './src/concepts/04-promise-race'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponent } from './src/concepts/06-async-await'
import { asyncAwait2Component } from './src/concepts/07-async-await-2'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generatorFuntionsComponent } from './src/concepts/09-generators'
import { generatorAsync } from './src/concepts/10-generators-async'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    </div>
  </div>
`

const element = document.querySelector('.card')

// enviromentsComponents( element );
// callbacksComponent(element);
// promiseComponent(element);
// promiseRaceComponent(element);
// asyncComponent(element);
// asyncAwaitComponent(element);
// asyncAwait2Component(element);
// forAwaitComponent(element);
// generatorFuntionsComponent(element);
generatorAsync(element);
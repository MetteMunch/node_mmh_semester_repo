/*main.js opsætter og monterer svelte-appen. Dvs. når
dette script kører, bliver App.svelte (og alle underkomponenter)
renderet i browseren */

import { mount } from 'svelte'
import './app.css'
import App from './App.svelte' /* App.svelte er en rodkomponent */

const app = mount(App, {
  target: document.getElementById('app'),
})
/*fortæller svelte, hvor app komponenten skal placeres */

export default app

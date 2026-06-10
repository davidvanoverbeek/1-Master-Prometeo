import './style.css'
import title from './title'

document.querySelector('#app').innerHTML = `
<h1>${title}</h1>
`

setupCounter(document.querySelector('#counter'))

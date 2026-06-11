import './style.css'
import Header from './components/Header/Header'
import Avatar from './components/Avatar/Avatar'

document.querySelector('#app').innerHTML = `
    ${Header("Vite Components")}
    ${Avatar("Goro Najima")}
    ${Avatar("Kazuma Kyriu", "https://fotografias-2.larazon.es/assets/videojuegos/2021/09/kazuma-kiryu-yakuza.jpg?width=800&height=450")}
    ${Avatar("Spiderman", "https://preview.redd.it/how-would-you-want-a-new-spider-man-show-to-happen-v0-ij8i3gjdicoe1.jpeg?auto=webp&s=86e21f68ceaea7dc0f9e4678cf855f2676dfcc96")}
    ${Avatar("Cloud", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQK90vRyBZZb9Eaw6vuFg9tQPeFtCz4QBkGPyxQkcFsQ4LQ41O9F-QAM_MBJdRpQyTm9sjjBCoy0jRQQjYm8gks_UTIoVpCklIEG7RlpJg&s=10")}
`
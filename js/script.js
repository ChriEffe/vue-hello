/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const app = new Vue(
    {
        el: '#app',
        data: {
            title: 'Lorem Picsum',
            image: 'https://picsum.photos/600/500'
        }
    });
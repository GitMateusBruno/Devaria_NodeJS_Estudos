//fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//.then( (data) => {
    //return data.json();
//})
//.then( (Response) => {
   // console.log(Response);
//});

import axios from 'axios';
const getCard = () => {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => {
        console.log('GET card', response.data);
    } )
    .catch(error => console.error(error));
};


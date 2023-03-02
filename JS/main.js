import getData from "./Helpers/getData.js";
import createCardNoImg from "./Helpers/createCardNoImg.js";
import createCard from "./Helpers/createCard.js";

const cardsContainer = document.querySelector('#articlesContainer');
const apiURL = 'http://localhost:3000/api/v1/posts';
//dominio de Railway/api/v1

const parseInfo = (data) => {
    const asArray = Object.entries(data);
    const newDataArray = asArray.map((element)=>{
        const parsed = {
            id: element[0],
            ...element[1]
        };
        return parsed;
    });
    return newDataArray;
}

const insertaCards = (data) => {
    // Recorre arreglo de objetos con la info de los posts
    data.forEach((article, index) =>{
        if(index > 0){
            //Insertalo sin imagen
            const newCard = createCardNoImg(article);
            cardsContainer.appendChild(newCard);
        }
        else{
            //Insertalo normal
            console.log(article);
            const newCard = createCard(article);
            cardsContainer.appendChild(newCard);
        }
    });
}

// getData(apiURL, dameDatos);
 getData(apiURL, insertaCards);

// insertaCards(articlesData);


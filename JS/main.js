import getData from "./Helpers/getData.js";
import createCardNoImg from "./Helpers/createCardNoImg.js";
import createCard from "./Helpers/createCard.js";

const cardsContainer = document.querySelector('#articlesContainer');
const apiURL = 'https://jschallengekodemia-default-rtdb.firebaseio.com/.json';

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
    const articlesArray = parseInfo(data);
    articlesArray.forEach((article, index) =>{
        if(index > 0){
            //Insertalo sin imagen
            const newCard = createCardNoImg(article);
            cardsContainer.appendChild(newCard);
        }
        else{
            //Insertalo normal
            const newCard = createCard(article);
            cardsContainer.appendChild(newCard);
        }
    });
}

getData(apiURL, insertaCards);


import getData from "./Helpers/getData.js";
import postData from "./Helpers/postData.js"
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
    articlesArray.forEach(article =>{
        const newCard = createCard(article);
        console.log(newCard);
        cardsContainer.appendChild(newCard);
    });
    console.log(articlesArray);
}


// postData(apiURL, {nombre: 'Aldo'});

// postData(apiURL,
//     {
//                 titulo: 'Titulo 3',
//                 content: 'Lorem 3',
//                 date: '3/2/2023', 
//                 coverImage: "http://4.bp.blogspot.com/-ogp9dmigd-M/UJPCwyUloPI/AAAAAAAAFKA/GhEzv5AJ_mA/s1600/pato.jpg",
//                 tags: ['js', 'tutorial', 'code'],
//             }
//     );

getData(apiURL, insertaCards);


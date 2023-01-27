import getData from "./Helpers/getData.js";
const params = new URLSearchParams(window.location.search);

//Elementos
const coverImage = document.querySelector('#coverImage');
const title = document.querySelector('#articleTitle');
const content = document.querySelector('#articleContenido');
const tagsContainer = document.querySelector('#tagsContainer');

const id = params.get('id');
const apiUrl = `https://jschallengekodemia-default-rtdb.firebaseio.com/${id}.json`;

const createTag = (tagText) => {
    const anchTag = document.createElement('a');
    anchTag.classList.add('p-1', 'me-2', 'text-decoration-none', 'text-dark');
    anchTag.textContent = `#${tagText}`;
    return anchTag;
}

const paintDetailsData = (data) => {
    // console.log(data.coverImage);
    coverImage.src = `${data.coverImage}`;
    title.textContent = data.titulo;
    content.textContent = data.content;
    data.tags.forEach(tag => {
        const newTag = createTag(tag);
        tagsContainer.appendChild(newTag);
    });
}

getData(apiUrl, paintDetailsData);
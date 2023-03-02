import getData from "./Helpers/getData.js";
import dateFormat from "./Helpers/dateFormat.js";
const params = new URLSearchParams(window.location.search);

//Elementos
const coverImage = document.querySelector('#coverImage');
const title = document.querySelector('#articleTitle');
const content = document.querySelector('#articleContenido');
const tagsContainer = document.querySelector('#tagsContainer');
const postDate = document.querySelector('#postDate');

const id = params.get('id');
const apiUrl = `http://localhost:3000/api/v1/posts/${id}`;

const createTag = (tagText) => {
    const anchTag = document.createElement('a');
    anchTag.classList.add('p-1', 'me-2', 'text-decoration-none', 'text-dark');
    anchTag.textContent = `#${tagText}`;
    return anchTag;
}

const paintDetailsData = (data) => {
    console.log(data);
    coverImage.src = `${data.coverImage}`;
    title.textContent = data.title;
    content.textContent = data.content;
    postDate.textContent = `Posted on ${dateFormat(data.createdAt)}`;
    data.tags.forEach(tag => {
        const newTag = createTag(tag);
        tagsContainer.appendChild(newTag);
    });
}

getData(apiUrl, paintDetailsData);
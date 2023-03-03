import getData from "./Helpers/getData.js";
import deletePost from "./Helpers/deletePost.js";
import dateFormat from "./Helpers/dateFormat.js";
const params = new URLSearchParams(window.location.search);

//Elementos
const coverImage = document.querySelector('#coverImage');
const title = document.querySelector('#articleTitle');
const content = document.querySelector('#articleContenido');
const tagsContainer = document.querySelector('#tagsContainer');
const postDate = document.querySelector('#postDate');
const alertaBorrado = document.querySelector('#alertaBorrado');

//Para botones de edit y delete
const btnEdit = document.querySelector('#btnEditar');
const btnDelete = document.querySelector('#btnDelete');

// btnEdit.addEventListener('click', ()=>{
//     console.log('Edit disparado');
// });

// btnEdit.href = `./article.html?id=${id}}`

const id = params.get('id');
const apiUrl = `http://localhost:3000/api/v1/posts/${id}`;

const createTag = (tagText) => {
    const anchTag = document.createElement('a');
    anchTag.classList.add('p-1', 'me-2', 'text-decoration-none', 'text-dark');
    anchTag.textContent = `#${tagText}`;
    return anchTag;
}

const paintDetailsData = (data) => {
    coverImage.src = `${data.coverImage}`;
    title.textContent = data.title;
    content.textContent = data.content;
    postDate.textContent = `Posted on ${dateFormat(data.createdAt)}`;
    data.tags.forEach(tag => {
        const newTag = createTag(tag);
        tagsContainer.appendChild(newTag);
    });
    // btnEdit.href = `./editArticle.html?id=${_id}}`
    btnEdit.href = `./editArticle.html?id=${data._id}`
}

btnDelete.addEventListener('click', ()=>{
    console.log('Delete disparado');

    //preguntar para confirmar

    //hacer el delete
    deletePost(apiUrl);
    alertaBorrado.classList.remove('ocultarAlerta');
    alertaBorrado.classList.add('mostrarAlerta');
});

getData(apiUrl, paintDetailsData);
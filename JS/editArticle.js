import getData from "./Helpers/getData.js";
import patchData from "./Helpers/patchData.js";

//imports
const params = new URLSearchParams(window.location.search);

const id = params.get('id');
const apiURL = `http://localhost:3000/api/v1/posts/${id}`;

console.log(id);

const validaCampos = (infoObj) => {
    //Validar que los campos no esten vacios
    const arrayOfValues = [];
    for(let valor in infoObj){
        // console.log(infoObj[valor]);
        arrayOfValues.push(infoObj[valor]);
    }
    return arrayOfValues.some((valor => valor === undefined || valor === ''));
}

//Elementos HTML a injectar o escuchar
const formPost = document.querySelector('#formPost');
const inputTitulo = document.querySelector('#inputTitulo');
const inputContent = document.querySelector('#inputContent');
const inputTags = document.querySelector('#inputTags');
const inputImgUrl = document.querySelector('#inputCover');

let tituloTex;
let contentText;
let tagsText;
let imgUrlText;

//Asignando los valores
const traeValores = (data) => {
    inputTitulo.value = data.title;
    inputContent.value = data.content;
    inputTags.value = data.tags.join(',');
    inputImgUrl.value = data.coverImage; 

    tituloTex = data.title;
    tagsText = data.tags;
    imgUrlText = data.coverImage;
    contentText = data.content;
}

inputTitulo.addEventListener('change',()=>{
    tituloTex = inputTitulo.value
});

inputContent.addEventListener('change',()=>{
    contentText = inputContent.value
});

inputImgUrl.addEventListener('change',()=>{
    imgUrlText = inputImgUrl.value
});

inputTags.addEventListener('change',()=>{
    const tags = inputTags.value.split(',');
    tagsText = tags.map((elem) => elem.trim());
});

formPost.addEventListener('submit', (ev)=>{
    let newEntrada = {
        title: tituloTex, 
        content: contentText,
        coverImage: imgUrlText, 
        tags: tagsText};
    ev.preventDefault();
    console.log(newEntrada);
    // validaCampos(newEntrada);
    if(!validaCampos(newEntrada)){
        patchData(apiURL, newEntrada);
    }
    else{
        console.log('Datos no validos');
    }
});

getData(apiURL, traeValores);
//patch
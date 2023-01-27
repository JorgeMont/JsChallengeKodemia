import postData from "./Helpers/postData.js";

const apiURL = 'https://jschallengekodemia-default-rtdb.firebaseio.com/.json';
const formPost = document.querySelector('#formPost');
const inputTitulo = document.querySelector('#inputTitulo');
const inputContent = document.querySelector('#inputContent');
const inputDate = document.querySelector('#inputDate');
const inputImgUrl = document.querySelector('#inputImgUrl');

let tituloTex;
let contentText;
let dateText;
let imgUrlText;

const validaCampos = (infoObj) => {
    //Validar que los campos no esten vacios
    const arrayOfValues = [];
    for(let valor in infoObj){
        // console.log(infoObj[valor]);
        arrayOfValues.push(infoObj[valor]);
    }
    return arrayOfValues.some((valor => valor === undefined || valor === ''));
}

inputTitulo.addEventListener('change',()=>{
    tituloTex = inputTitulo.value
});

inputContent.addEventListener('change',()=>{
    contentText = inputContent.value
});

inputDate.addEventListener('change',()=>{
    dateText = inputDate.value
});

inputImgUrl.addEventListener('change',()=>{
    imgUrlText = inputImgUrl.value
});

formPost.addEventListener('submit', (ev)=>{
    let newEntrada = {titulo: tituloTex, content: contentText, date: dateText, coverImage: imgUrlText, tags: ['js', 'tutorial', 'code']};
    ev.preventDefault();
    console.log(newEntrada);
    validaCampos(newEntrada);
    if(!validaCampos(newEntrada)){
        postData(apiURL, newEntrada);
    }
    else{
        console.log('Datos no validos');
    }
});

// https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjooinn.com%2Fimages%2Fconfused-dog.jpg&f=1&nofb=1&ipt=52e126066189292647a2f17ed0ce7edb3d9323b53ef054280bd3f8391f7a7544&ipo=images

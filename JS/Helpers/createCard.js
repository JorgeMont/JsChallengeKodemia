const createLiTag = (tagText) => {
    const liTag = document.createElement('li');
    const anchorTag = document.createElement('a');
    anchorTag.textContent = `#${tagText}`;
    liTag.appendChild(anchorTag);
    return liTag;
}

const createCard = (cardData) => {

    //console.log(cardData);
    //Create DOM elements
    const anchor = document.createElement('a');
    const card = document.createElement('article');
    const imgCover = document.createElement('img');
    const divCardBody = document.createElement('div');
    const divCardUserDetails = document.createElement('div');
    const imgProfilePic = document.createElement('img');
    imgProfilePic.src = './Assets/Imagenes/alicia.webp';
    const divContainerNameDate = document.createElement('div');
    const pName = document.createElement('p');
    pName.textContent = 'Alicia Sykes';
    const pDate = document.createElement('p');
    const hTitle = document.createElement('h3');
    const tagList = document.createElement('ul');
    const divContainerBtns = document.createElement('div');
    const divCntLikeComment = document.createElement('div');
    const divCntReactions = document.createElement('div');
    const divCntComments = document.createElement('div');
    const iconBtnReact = document.createElement('img');
    const iconBtnLike = document.createElement('img');
    const iconBtnSave = document.createElement('img');
    const pTextBtn = document.createElement('p');
    const pTextBtnReact = document.createElement('p');
    const pTextBtnSave = document.createElement('p');
    const divCntSave = document.createElement('div');

    //Nesting elements
    //
    imgCover.src = cardData.coverImage;
    imgCover.classList.add('card-img-top');
    hTitle.textContent = cardData.titulo;
    card.appendChild(imgCover);
    card.appendChild(hTitle);
    anchor.appendChild(card);
    anchor.href = `./src/article.html?id=${cardData.id}`;
    card.appendChild(divCardBody);
    divCardBody.classList.add('card-body');
    divCardBody.appendChild(divCardUserDetails);
    divCardUserDetails.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2');
    divCardUserDetails.appendChild(imgProfilePic);
    divCardUserDetails.appendChild(divContainerNameDate);
    divContainerNameDate.classList.add('d-flex', 'flex-column');
    divContainerNameDate.appendChild(pName);
    pName.classList.add('fw-bold');
    divContainerNameDate.appendChild(pDate);
    pDate.textContent = `Posted on ${cardData.date}`;
    pDate.classList.add('time');
    divCardBody.appendChild(hTitle);
    hTitle.classList.add('card-title', 'ms-4');
    divCardBody.appendChild(tagList);
    tagList.classList.add('d-flex', 'flex-wrap', 'p-0' ,'ms-4');
    // Inserting tags
    cardData.tags.forEach(tag => {
        const newli = createLiTag(tag);
        console.log(newli);
        tagList.appendChild(newli);
    });
    divCardBody.appendChild(divContainerBtns);
    divContainerBtns.classList.add('card__buttons', 'd-flex', 'ms-4');
    divContainerBtns.appendChild(divCntLikeComment);
    divCntLikeComment.classList.add('interactions', 'd-flex');
    divCntLikeComment.appendChild(divCntReactions);
    divCntReactions.classList.add('reactions', 'd-flex', 'me-4');
    divCntReactions.appendChild(iconBtnLike);
    iconBtnLike.src = './Assets/iconos/like.svg';
    divCntReactions.appendChild(pTextBtn);
    divCntReactions.classList.add('reactions', 'd-flex', 'me-4');
    pTextBtn.textContent = '118 reactions';
    divCntReactions.appendChild(divCntComments);
    divCntComments.classList.add('comments', 'd-flex');
    divCntComments.appendChild(iconBtnReact);
    iconBtnReact.src = './Assets/iconos/comment.svg';
    divCntComments.appendChild(pTextBtnReact);
    pTextBtnReact.textContent = '9 Comments';
    divContainerBtns.appendChild(divCntSave);
    divCntSave.classList.add('tools', 'd-flex');
    divCntSave.appendChild(iconBtnSave);
    iconBtnSave.src = './Assets/iconos/save.svg';
    pTextBtnSave.textContent = '3 min read';
    divCntSave.appendChild(pTextBtnSave);


    //
    // anchor.appendChild(card);
    // card.appendChild(divCardBody);
    // divCardBody.appendChild(divCardUserDetails);
    // divCardUserDetails.appendChild(imgProfilePic);
    // divCardUserDetails.appendChild(divContainerNameDate);
    // divContainerNameDate.appendChild(pName);
    // divContainerNameDate.appendChild(pDate);
    // divCardBody.appendChild(hTitle);
    // divCardBody.appendChild(tagList);
    // liTag.appendChild(anchorTag);
    // cardData.tags.forEach(tag => {
    //     tagList.appendChild(liTag.textContent = tag);
    // });
    // divCardBody.appendChild(divContainerBtns);
    // divContainerBtns.appendChild(divCntLikeComment);
    // divCntLikeComment.appendChild(divCntReactions);
    // divCntReactions.appendChild(iconBtn);
    // divCntReactions.appendChild(pTextBtn);
    // divCntLikeComment.appendChild(divCntComments);
    // divCntComments.appendChild(iconBtn);
    // divCntComments.appendChild(pTextBtn);
    // divContainerBtns.appendChild(divCntSave);
    // divCntSave.appendChild(iconBtn);
    // divCntSave.appendChild(pTextBtn);
    // anchor.appendChild(prueba);

    // Add styles to elements
    // card.classList.add('mentorCard');
    anchor.classList.add('cardAnchor', 'm-3')
    // anchor.href = 'https://getbootstrap.com/docs/4.0/utilities/spacing/';
    
    card.classList.add('card');
    imgCover.classList.add('card-img-top');
    divCardBody.classList.add('card-body');
    divCardUserDetails.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2');
    divContainerNameDate.classList.add('d-flex', 'flex-column');
    pName.classList.add('fw-bold');
    pDate.classList.add('time');
    hTitle.classList.add('card-title', 'ms-4');
    tagList.classList.add('d-flex', 'flex-wrap', 'p-0' ,'ms-4');
    divContainerBtns.classList.add('card__buttons', 'd-flex', 'ms-4');
    divCntLikeComment.classList.add('interactions', 'd-flex');
    divCntReactions.classList.add('reactions', 'd-flex', 'me-4');
    divCntComments.classList.add('comments', 'd-flex');
    divCntSave.classList.add('tools', 'd-flex');
    
    return anchor;
}

export default createCard;
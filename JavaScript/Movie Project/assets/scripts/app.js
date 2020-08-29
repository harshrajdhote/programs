const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text')
const movies = [];
const clearMovieInput = () => {
    for(const usrInput of userInputs)
    usrInput.value = '';
}
const toggleBackdropHandler = ()=> {
    backdrop.classList.toggle('visible');
}
const toggleMovieModalHandler = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdropHandler();
};
const backdropClickHandler = ()=>{
    toggleMovieModalHandler();
}
const cancelAddMovieHandler = ()=>{
    toggleMovieModalHandler();
    clearMovieInput();
}
const addMovieHandler = ()=>{
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;
    if(titleValue.trim() === '' 
    || imageUrlValue.trim() === ''
    || ratingValue.trim() === ''
    || +ratingValue < 1
    || +ratingValue > 5){
        alert('Invalid Input');
    }
    const newMovie = {
        title : titleValue,
        image : imageUrlValue,
        rating : ratingValue
    };
    movies.push(newMovie);
    console.log(newMovie);
    toggleMovieModalHandler();
    clearMovieInput();
    renderNewMovieElement(newMovie.title,newMovie.image,newMovie.rating);
    UpdateUI();

};
const UpdateUI = () =>{
        if(movies.length === 0){
            entryTextSection.style.display = 'block';
        }
        else
        {
            entryTextSection.style.display = 'none';
        }
};

const renderNewMovieElement = (title,imageUrl,rating)=>{
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src = "${imageUrl}"  alt = "${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}<h2>
    <p>${rating}/5 Stars</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};












cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler);
backdrop.addEventListener('click',backdropClickHandler);
startAddMovieButton.addEventListener('click',toggleMovieModalHandler);
confirmAddMovieButton.addEventListener('click',addMovieHandler);
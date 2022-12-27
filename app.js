let userInput = document.querySelector('#searchbar')
let btn = document.querySelector('button')

btn.addEventListener('click',function(){
fetch(`https://api.jikan.moe/v4/anime?q=${userInput.value}&sfw`)
.then(data => data.json())
.then(AnimeData => htmlRenderer(AnimeData.data))
})
let cardsArea = document.querySelector('section');

function htmlRenderer(array){

    array.forEach(data => {
        
    cardsArea.innerHTML+=

    `<div class="card" style="width: 18rem;">
            <img src="${data.images.jpg.image_url}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">title: ${data.title}</h5>
              <p class="card-text">duration: ${data.duration}</p>
            </div>
          </div>`
    });

}
/* Consegna:
Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.
 */

const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]



const itemsGrande = document.querySelector('.container-img-grande');
const imgGrande = document.querySelector (".img-grande");
const containerMiniature = document.querySelector('.container-miniature');


/*
IMMAGINI GROSSE
FOR ciclo tutto l'array
  - metto l'immagine
SE sono al primo ciclo -> calsse active
*/

for (let index = 0; index < items.length; index++) {
  let div = `<div>
                <img src="${items[index]}" alt="">
                <h3>${title[index]}</h3>
                <p>${text[index]}</p>
              </div>`;
  if (index==0) {
    div = `<div class ="active">
              <img src="${items[index]}" alt="">
              <h3 class ="text absolute">${title[index]}</h3>
              <p class="text absolute">${text[index]}</p>
            </div>`;
  }
  console.log (div);
  imgGrande.innerHTML += div;
}

/* IMMAGINI PICCOLE
FOR ciclo tutto l'array
- creare contenitore createElement
- assegno la classe elemento.classList.add("miniatura-"+(index+1))
- ci mettimao dentro l'immagine
SE primo ciclo-> metto freccia
SE ultimo ciclo-> metto freccia
*/

for (let index = 0; index < items.length; index++) {
  let miniature = document.createElement("div");
  miniature.classList.add ("miniatura-"+(index+1));
  console.log(miniature);

  let img = `<img class="active" src="${items[index]}" alt="">`;
  miniature.innerHTML += img;
  if (index==0) {
    let arrow = `<i class="fas fa-chevron-circle-up able absolute"></i>`;
    miniature.innerHTML += arrow;
    console.log(arrow);
  } else if (index== items.length -1) {
    let arrowDown = `<i class=" fas fa-chevron-circle-down able absolute"></i>`;
    miniature.innerHTML+=arrowDown;
    console.log (arrowDown);
  }
  console.log (img);
  containerMiniature.appendChild (miniature);
}

/*
Clicco su icona next
- togli la classe active all'immagine che ha classe active
- all'immagine successiva vado a mettere la classe active
*/

const nextButton = document.querySelector('.fa-chevron-circle-down');

nextButton.addEventListener('click', function () {
  let last = false;
  for (let index = 0; index < items.length; index++) {
    console.log(index, items[index]);
    if (items[index] == items.length -1) {
      // la variabile diventa vera  
      last = true;
    }
  }
  if (last == false) { //se non sono in last
    let imgNow = document.querySelector(".active");
    imgNow.classList.remove('active');
    const nextSibling = imgNow.nextElementSibling;
    nextSibling.classList.add("active");
  } else { // se sono in last
    nextButton.classList.remove('able');
  }
});


/*
Clicco su icona prev
- tolge la classe active all'immagine che ha classe active
- all'immagine precedente vado a mettere la classe active
*/
const prevButton = document.querySelector('.fa-chevron-circle-up');

prevButton.addEventListener('click', function () {

  let last = false;
  for (let index = 0; index < items.length; index++) {
    console.log(index, items[index]);
    if (items[index] == items.length - 1) {
      // la variabile diventa vera  
      last = true;
    }
  }
  if (last == false) { //se non sono in last
    let imgNowPrev = document.querySelector(".active");
    imgNowPrev.classList.remove('active');
    let prevSibling = imgNowPrev.previousElementSibling;
    prevSibling.classList.add("active");
  } else { // se sono in first
    nextButton.classList.remove('able');
  }

});


/* 
for (let index = 0; index < items.length; index++) {
  let img = `<img src="${items[index]}" alt="">`;
  if(index==0){
    //immagine grande active
    img = `<img class="active" src="${items[index]}" alt="">`;
    let icona = `<div class="miniatura-5 prev icona relative"></div>`;
  }
  icona += `<div class="miniatura-1 next able active icona relative"></div>`;
  //inserisco immagini grande
  itemsGrande.innerHTML += img;
  //inserendo immagini piccole
  containerMiniature.innerHTML += img;
  containerMiniature.innerHTML += icona;
} */

// const itemsDom = document.querySelectorAll('.container-img-grande img');
// console.log(itemsDom);

// const iconaDom = document.querySelectorAll('.container-miniature .icona');

// itemsDom[0].classList.add('first', 'active');
// //preso elemento ultimo
// itemsDom[itemsDom.length - 1].classList.add('last');
// iconaDom[0].classList.add('first', 'active');
// iconaDom[iconaDom.length - 1].classList.add('last');

// const nextButton = document.querySelector('.container-miniature .next');
// const prevButton = document.querySelector('.container-miniature .prev');


// nextButton.addEventListener('click', function () {
//   const imgActive = document.querySelector('.container-img-grande .active');
//   const iconaActive = document.querySelector('.container-miniature .icona .active');

//   let classes = imgActive.classList;
//   // console.log(classes[1]);
//   //variabile appoggio che parte falsa
//   let last = false;
//   for (let index = 0; index < classes.length; index++) {
//     console.log(index, classes[index]);
//     if (classes[index] == 'last') {
//       // la variabile diventa vera  
//       last = true;
//     }
//   }

//   if (last == false) { //se non sono in last
//     imgActive.classList.remove('active');
//     iconaActive.classList.remove('active');
//     //elemento successivo
//     const imgNext = imgActive.nextElementSibling;
//     const iconaNext = iconaActive.nextElementSibling;
//     imgNext.classList.add('active');
//     iconaNext.classList.add('active');
//   } else { // se sono in last
//     nextButton.classList.remove('able');
//   }

// });
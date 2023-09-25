// local reviews data
const reviews = [
    {
        id:1,
        name:'roz smith',
        job:'web developer',
        img:'/home/maryam/Downloads/images.jpeg',
        text:
        "I dont know evry thing i live in Kubol. City my name is mary i born in. Afganistan i live. with my father and my mother so i have two brother.k8gcpalclveot93uroew."
    },
    {
        id:2,
        name:'mary jooooon',
        job:'web developer',
        img:'/home/maryam/Downloads/images (1).jpeg',
        text:
        " she is my sister she have two dither.  and a son she marred at. 4.5 1234 .pop music is  her favorit song." 
    },
    {
        id:3,
        name:'goly jalily',
        job:'web designer',
        img:'/home/maryam/Downloads/download.jpeg',
        text:
        "fniehte jrow9.348tyrweh lskdfniuyr kljguiow34y .kdlfjbiwg238 ksdnviuwy39 ksiqwyr. hf9qwu skfgqweu0 skdfiuwer9 sdfhgiueru"
    },
    {
        id:4,
        name:'lili koky',
        job:'web pppppp',
        img:'/home/maryam/Downloads/images (2).jpeg',
        text:
        "k;cv,ofjdg ogdgri bodjgkf bkodihfwr.  sadq0-ru0wi lckod 20eq kboer03. fkej0w8wr-0 oi3w83udf deir9tpowf skor-2wvlvfh204wfd lskpwwi.",
    }
]

// select items
const img = document.getElementById('person-img');
// img.setAttribute('src', reviews[0]['img']);

const author = document.getElementById('author');
// img.setAttribute('src', reviews[1]['img']);

const job = document.getElementById('job');
// img.setAttribute('src', reviews[2]['img']);

const info = document.getElementById('info');
// img.setAttribute('src', reviews[3]['img']);

const prevBtn= document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', function(){
    // console.log('shake and bake');
    // const item = reviews[currentItem];
    // img.src = item.img;
    // author.textContent = item.name;
    // job.textContent = item.job;
    // info.textContent = item.text;
    showPerson(currentItem);
});

// show person based on item

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
//  show prev person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
});

// show random person
randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson();
});
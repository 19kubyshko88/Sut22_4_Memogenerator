function clearAll(){
    const memeContainer = document.querySelector('.meme-content');
  memeContainer.innerHTML = "";
      const jokeContainer = document.querySelector('.joke-content');
  jokeContainer.innerHTML = "";
     const riddleContainer = document.querySelector('.riddle-content');
  riddleContainer.innerHTML = "";
       const quoteContainer = document.querySelector('.quote-content');
  quoteContainer.innerHTML = "";
}

const memes =["https://kartinkof.club/uploads/posts/2022-03/1648305469_3-kartinkof-club-p-memi-it-3.jpg","https://skillbox.ru/upload/setka_images/14055326052022_0ed1686442ac630326a48ddcef43684fa02b904b.jpg","https://avatars.dzeninfra.ru/get-zen_doc/4759087/pub_6239ec7f922ece7dd4ef90e8_6239ed45a4a5213a784d566e/scale_1200"];
const jokes =["Сколько программистов надо, чтобы вкрутить одну лампочку? – Ни одного. В этом случае отсутствие света – проблема на стороне железа.","Что нужно, чтобы всегда писать хороший код? Представляйте себе, что читать и саппортить ваш продукт будет маньяк-убийца, которому кто-то сказал, где вы живете.","Зачем нужно плохое ПО? Без него у многих программистов не будет работы."];
const quotes =[{quote: "Берегите в себе человека.", author: "А. П. Чехов"},
              {quote: "Навсегда ничего не бывает.", author: 'Л.Н.Толстой "Война и мир"'},
              {quote: "Учиться, учиться и еще раз учиться!", author: "В.И. Ленин"}
             ];
const riddles =[{question: "Коромысло на небе повисло", answer: "Радуга"},
              {question: "Сидит дед во сто шуб одет", answer: "Лук"},
              {question: "Висит груша - нельзя скушать", answer: "Лампочка"}
             ];

function rnNumb(len){
  return Math.floor(Math.random()*len);
}

function getRandomData(data){
  return data[rnNumb(data.length)];
}

function showMeme(){
  clearAll();
  const memeUrl = getRandomData(memes);
  const memeContainer = document.querySelector('.meme-content');
  const newMeme = document.createElement('img');
  newMeme.setAttribute('src', memeUrl);
  memeContainer.appendChild(newMeme);
 console.log(newMeme);
}
function showJoke(){
  clearAll();
  const joke = getRandomData(jokes);
  const jokeContainer = document.querySelector('.joke-content');
  const newJoke = document.createElement('p');
  newJoke.textContent=joke;
   // console.log(newJoke);
  jokeContainer.appendChild(newJoke);
 // console.log(jokeContainer);
}

function showRiddle(){
    clearAll();
   const riddle = getRandomData(riddles);
  const riddleContainer = document.querySelector('.riddle-content');
  const newRiddle = document.createElement('p');
  newRiddle.textContent=riddle.question;
    const newAnswer = document.createElement('p');
  newAnswer.textContent=riddle.answer;
  newAnswer.setAttribute('id', 'riddle-answer');
  newAnswer.hidden = true;
   riddleContainer.appendChild(newRiddle);
     riddleContainer.appendChild(newAnswer);
   // console.log(newAnswer);
}

function showAnswer(){
  const newAnswer = document.querySelector('#riddle-answer');
 newAnswer.hidden = false;
}
function showQuote(){
  clearAll();
   const riddle = getRandomData(riddles);
  const riddleContainer = document.querySelector('.riddle-content');
  const newRiddle = document.createElement('p');
  newRiddle.textContent=riddle.question;
    const newAnswer = document.createElement('p');
  newAnswer.textContent=riddle.answer;
  newAnswer.setAttribute('id', 'riddle-answer');
  newAnswer.hidden = true;
   riddleContainer.appendChild(newRiddle);
     riddleContainer.appendChild(newAnswer);
}

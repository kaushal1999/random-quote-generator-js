

let joke;
let texts = document.querySelectorAll(".text");
let front = 1;

let newQuote = () => {
    let fetchRes = fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    );

    fetchRes
      .then((resp) => {
        return resp.json();
      })
      .then((val) => {
        joke = val["joke"]+" ";
        texts[front].innerHTML = joke;
        front = 1 - front;
      });
  
  let box1 = document.querySelector(".block__front");
  let box2 = document.querySelector(".block__back");
  box1.classList.remove("block__front");
  box2.classList.remove("block__back");
  box1.classList.add("block__back");
  box2.classList.add("block__front");
};

newQuote();

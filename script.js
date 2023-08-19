const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const key = "4ecf954271c5aaac5c9c30b352e3";
const url = ` https://hindi-jokes-api.onrender.com/jokes?api_key=${key}`;

let getJoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.innerHTML = item.jokeContent;
    });
};

btn.addEventListener("click", getJoke);

let toogler = document.querySelector(".toggler");
toogler.addEventListener("click", () => {
  document.body.classList.toggle("active");
});

const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const namew = document.querySelector(".name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerHTML = "Loading";
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerHTML = result.content;
      namew.innerHTML = result.author;
      quoteBtn.innerHTML = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

quoteBtn.addEventListener("click", randomQuote);
soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
  speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(`${quoteText.innerHTML} Quote By: ${namew.innerHTML}`);
});
twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
  window.open(tweetUrl, "_blank");
});

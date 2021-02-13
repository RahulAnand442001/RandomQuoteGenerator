Quotes = [
  {
    text:
      "One cannot conceive anything so strange and so implausible that it has not already been said by one philosopher or another.",
    author: "Rene Descartes",
  },
  {
    text:
      "From the moment I picked up your book until I laid it down, I was convulsed with laughter. Some day I intend reading it.",
    author: "Groucho Marx",
  },
  {
    text:
      "Speak when you are angry--and you will make the best speech you'll ever regret.",
    author: "Laurence J. Peter",
  },
  {
    text:
      "Integrity combined with faithfulness is a powerful force and worthy of great respect.",
    author: "Gordon Atkinson",
  },
  {
    text: "It never hurts to ask. Unless you ask for hurt.",
    author: "Takayuki Ikkaku",
  },
  {
    text:
      "Self-control is not a problem in the future. It's only a problem NOW when the chocolates is next to us.",
    author: "Shlomo Bernartzi",
  },
  {
    text:
      "The beginning of knowledge is the discovery of something we do not understand.",
    author: "Frank Herbert",
  },
  {
    text: "The time not to become a father is eighteen years before a war.",
    author: "E. B. White",
  },
  {
    text:
      "True happiness... arises, in the first place, from the enjoyment of one's self.",
    author: "Joseph Addison",
  },
  {
    text: "History never looks like history when you are living through it.",
    author: "John W. Gardner",
  },
  {
    text:
      "The trouble with our times is that the future is not what it used to be.",
    author: "Paul Valery",
  },
];

const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const tweetButton = document.getElementById("tweet-quote");
const tumblerButton = document.getElementById("tumbler-quote");

const getRandomQuote = () => {
  var randomIndex = Math.floor(Math.random() * Quotes.length);
  return Quotes[randomIndex];
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// initially set the quote and author when document get loaded
window.onload = () => {
  var quote = getRandomQuote();
  text.textContent = quote.text;
  author.textContent = `- ${quote.author}`;
};

// eventually set the text and author on button click

newQuoteButton.onclick = () => {
  var quote = getRandomQuote();
  var color = getRandomColor();

  // set the text and author
  text.textContent = quote.text;
  author.textContent = `- ${quote.author}`;

  // change bg color
  tweetButton.style.background = color;
  tumblerButton.style.background = color;
  newQuoteButton.style.background = color;
  text.style.befo;
  text.style.color = color;
  author.style.color = color;
  document.body.style.backgroundColor = color;
};

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * List of 8 quotes
***/

const quotes = [
  {
    quote: "The biggest room in the world is room for improvement.",
    source: "Helmut Schmidt",
    citation: "",
    year: 1862
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    citation: "The Importance of Being Earnest",
    year: 1900
  },
  {
    quote: "Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    tags: ["inpirational", "weird", "random"],
    citation: "",
    year: 1862
  },
  {
    quote: "We accept the love we think we deserve.”",
    source: "Stephen Chbosky",
    citation: "The Perks of Being a Wallflower",
    year: 1999
  },
  {
    quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    source: "Albert Einstein"
  },
  {
    quote: "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten",
    tags: ["inpirational", "weird", "random"],
    source: "Neil Gaiman"
  },
  {
    quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    source: "Bill Keane"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison"
  }
]

/***
 * `getRandomQuote` function
 * This function generates a random quote based on the length of the quotes array
***/

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `newBackgroundColor` function
 * Changes the background when this function is called
 **/

function newBackgroundColor() {
  const randomNumber = () =>  Math.floor(Math.random() * 256);
  document.body.style.background = 
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}

/***
 * `printQuote` function
 * This function prints the quotes to the  #quote-box element
***/
function printQuote() {
  const randomQuote = getRandomQuote();

  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

    if(randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`
    }

    if(randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`
    }

    if(randomQuote.tags) {
      html += `<span class="year">${randomQuote.tags.join(", ")}</span>`
    }

    html += "</p>";

    newBackgroundColor();
    document.getElementById('quote-box').innerHTML = html;
}

/***
 * `autoRefresh`
 * Auto refresh every few seconds
 ***/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
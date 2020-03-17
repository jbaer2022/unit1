/******************************************
Project 1 - A Random Quote Generator
Adapted form Treehouse FSJS Techdegree
******************************************/


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

//object of quotes
var Quote={
  quote:"",
  source:"",
  citation:"",
  year:"",
  tags:""


}

//array of quotes
var quotes=[
  {quote:"I have no special talent. I am only passionately curious.", source:"Albert Einstein", citation:"", year:"", tags:"Passion"},
  {quote:"If you judge people, you have no time to love them.", source:"Mother Teresa", citation:"", year:"", tags:"Love"},
  {quote:"Wisely, and slow. They stumble that run fast.", source:"William Shakespeare ", citation:"", year:"", tags:"Smart"},
  {quote:"A great man is always willing to be little.", source:"Ralph Waldo Emerson", citation:"", year:"", tags:"Smart"},
  {quote:"I have a dream.", source:"Martin Luther King Jr.", citation:"", year:"1963", tags: "Inspirational"},
  {quote:"The thing that we are trying to do at Facebook, is just help people connect and communicate more efficiently.", source:"Mark Zuckerberg", citation:"Facebook", year:"", tags:"Zuck"}



]
console.log(quotes);




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote(qu){
  //goes through all of array to check for 
      return qu[Math.floor(Math.random()*qu.length)];

}




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML markup in the index.html file AND the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

//prints the quote
function printQuote(){

  //gets a random quote
  var el = getRandomQuote(quotes);

  var conver = `<p class = "quote">` + el.quote + `</p>`
               +`<p class = "source">` +el.source;
  
  if(el.citation!=""){conver+=`<span class ="citation">` + el.citation + `</span>`;}

  if(el.year!=""){conver+=`<span class ="year">` + el.year + `</span>`;}

  conver+=`<span class ="tag">`+el.tags+`</span>`+`<\p>`;

  document.getElementById("quote-box").innerHTML = conver;

//runs new background function
  newColorBg();

  //sets interval on when to run the function
  setInterval(printQuote, 5000);


}

//creates a new color for a background
function newColorBg(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);

  rrggbb= `rgb(` + r + `,` + g + `,` + b + `)`;

  document.body.style.background = rrggbb;


}

//creates a new color for a button
function newColorButton(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);

  rrggbb= `rgb(` + r + `,` + g + `,` + b + `)`;

  document.style.getElementById("loadQuote").id.background = rrggbb;


}





/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/


//when clicked it runs the print quote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




// Remember to delete the comments that came with this file, and replace them with your own code comments.
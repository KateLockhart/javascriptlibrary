const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //setting base URL as a varible name for the NYT API access point
const key = 'Xx4vzp7JvsAyNYui4CPCLsqWM9qBRhM7'; //identifier for user
let url; //it's "open" variable for search 

//fixed element, uses method to selector to add to (id/class of hitml) ./# searches for id or class, otherwise it searches for tag
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

//creating no display or stylling for nav bar
nav.style.display = 'none';

//variable that setting pg # at 0
let pageNumber = 0;
//variable to say display is false because there isn't one
let displayNav = false;
// console.log('PageNumber:', pageNumber); 

//event method that tells form or buttons to wait for an action/data, and gives the function to exicute said action
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

//function that grabs the results from the API and jsonifys it to interpret 
function fetchResults(e) {
  // console.log(e);
  e.preventDefault(); //stops default event; submitting a form defaults to refreshing a page so e.preventDefault(); stops that refresh *****
  //using backticks is called string interpelation
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //creating new variable to be url to process search path  
  console.log('URL:', url); //will show new URL in conosle.log

  //statement to do any value, strict unequal to blank
  if (startDate.value !== '') {
    //shows start in caonsole.log
    console.log(startDate.value)
    //adds new date data to current path, add to url path variable action, cancatination shorthand
    url += '&begin_date=' + startDate.value;
  }
//statement with strict unequal for the end date, not an empty strgin
  if (endDate.value !== '') {
    //shows us end date value in console.log
    console.log(endDate.value)
    //add the new end date value to URL variable
    url += '&end_date=' + endDate.value;
  }
//fetch uses the url provided to get the promise and response, requests/recieves info and data, fetch takes in a parametrer of URL 
  fetch(url)
  //then grabs the promise sucess case and result is the parameter(placeholder) to take response data recieved from the promise, .then is the resolver
    .then(function(result) {
      //to show result in console
      console.log(result)
      //return and chain on json to continue adding/manipulating data, translating result to json
      return result.json();
    })
    //second resolver to grab json from previous resolver 
    .then(function(json) {
      //to show json data in console.log
      console.log(json);
      //function to display the json data, sends data to the displayResults function below, connects the next function to this code
      displayResults(json);
    })
}

//function to grab json data and attaching/display data on webpage w/ html idtentifiers, tell data where to be displayed
function displayResults(json) {
  //attaches child node to section part of html by removing primary child and replacing it, either previous results or blank space
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
//creating variable name for all json data, var = articles, json = object and . digs in for response
  let articles = json.response.docs;
//creating parameters for different article links, NYT gives an array of 10 articles, here it checks if there are any/no results
  if (articles.length === 0) {
    //no results for things that don't exist
    console.log('No results');
  } else {
    //length greater than zero, till hits full length, for loop that iterates the length of the article array
    for (let i = 0; i < articles.length; i++) {
      //variables being created to label and place data from the article and API, creating elements 
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');
      //creates variable to name current articles on page
      let current = articles[i];
      //to show what your current list is called
      console.log('Current:', current);
      //creates link to current article seeing/refrencing
      link.href = current.web_url;
      //console.log new link created
      console.log(link);
      //pulls and links article content associated with each section
      link.textContent = current.headline.main;

      //adding keyword text content to the paragraph section to HTML, to replace child node with specified string
      para.textContent = 'Keywords: ';
      //allowing however many keywords there are to take over the section of paragraph, setting the length
      for (let j = 0; j < current.keywords.length; j++) {
        //span is an inline cotainer used to mark up a part of a text or document, provides no display change but can be given changes when called on
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        //attached span to paragraph section we created
        para.appendChild(span);
      }
      //setting how to organize and display media 
      if (current.multimedia.length > 0) {
        //get directory of where to pull img
        img.src = 'http://www.nytimes.com/' + current.
        //first image in array of article
        multimedia[0].url;
        //display main headline if no image
        img.alt = current.headline.main;
      }
      //naming the div and setting class
      clearfix.setAttribute('class', 'clearfix');
      //appendChild adds child as last child of the node
      article.appendChild(heading); //attach article data to heading
      heading.appendChild(link); //attach link to the heading
      article.appendChild(img); //attach the img to the article
      article.appendChild(para); //attach the paragraph
      article.appendChild(clearfix);//add onto div we created
      section.appendChild(article);//add article section
    }
  }
//only going to show 10 articles, in block per display, and stop the loop with else of none
  if (articles.length === 10) { //if else to only 
    nav.style.display = 'block'; // display 10 articles
  } else {
    nav.style.display = 'none'; //at a time
  }
}
//function to grab current page data, add one onto current page, fetch results for new page number, console log displays the page you're on
function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log('Page Number:', pageNumber);
}
//function to grab current page data, subtract one form current page place, fetch new page content data from API 
function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
    fetchResults(e);
  } else {
    //nothing is the result if the page is already at the statr
    return;
  }
  fetchResults(e);
  console.log('Page:', pageNumber);
}
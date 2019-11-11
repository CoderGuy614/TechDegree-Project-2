/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination 
******************************************/
  
// Programmed by Jonathan Lutz, November 2019

// /*** 
// Creating the global variables.
// ***/
const lis = document.getElementsByClassName("student-item cf");
const header = document.getElementsByClassName("page-header cf")[0]
const parentDiv = document.querySelector(".page");
const newDiv = document.createElement('div');
const numToShow = 10;
let matchList = document.getElementsByClassName('match')
let aTags = document.getElementsByTagName('a')
let matches = document.getElementsByClassName('match')

/*** 
  Creating the ShowPage function
***/
function showPage(list,page) {
  let startIndex = (page * numToShow) - numToShow;
  let endIndex = (page * numToShow);
  for(let i=0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex){
    list[i].style.display = '';
    } else {
      list[i].style.display = 'none'
    }
  }
}
// Calling the function to show the first page.
showPage(lis, 1);

// Creating the AppendPageLinks function.
function appendPageLinks(list) {
  newDiv.className = "pagination";
  const ul = document.createElement('ul');
  newDiv.appendChild(ul);
  parentDiv.insertBefore(newDiv,null);
  // calculating how many links to create
  let numOfLinks = Math.ceil(list.length / numToShow);
  //creating the correct number of lis and links
  for(let i = 0; i < numOfLinks; i++) {
    let li = document.createElement('li');
    let aTag = document.createElement('a');
    li.appendChild(aTag);
    ul.appendChild(li);
    aTag.textContent = i + 1;
    aTag.href = "#";
    aTag.addEventListener('click', clickedLink)
    }
  let active = document.querySelector('a')
  active.className = 'active'; 
}
// Calling the function to append the page links
appendPageLinks(lis);

// defining the link click listener callback function
function clickedLink(e){
let aTags = document.getElementsByTagName("a");
  for(let i = 0; i < aTags.length; i++) {
    aTags[i].classList.remove("active");
    let active = document.querySelector('a')
    active.className += 'active';  
  }
e.target.className = "active";
goToPage = e.target.textContent;
  if(input.value){
  showPage(matches,goToPage)
  } else {
    showPage(lis, goToPage)
  }
}

// Search bar functionality
// Dynamically adding the Search Input and Button and adding them to the DOM.
const searchDiv = document.createElement("div");
searchDiv.className = "student-search";
header.insertBefore(searchDiv,null);
let input = document.createElement('input');
input.type = "text";
input.placeholder = "Search students"
searchDiv.insertBefore(input, null);
let button = document.createElement('button');
button.textContent = "Search";
searchDiv.insertBefore(button, null);

// Selecting the names of the students and storing them as the names variable.
let names = document.getElementsByTagName("h3");
let search = document.querySelector('input')
// creating the search function and checking if the search input contains the student name
function searchFunction(searchInput, names) {
  for(let i = 0; i < names.length; i++) {
    names[i].parentNode.parentNode.classList.remove("match");
    if(searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      names[i].parentNode.parentNode.className += ' match';
    }
  }
}

// Search Event Listeners
button.addEventListener('click', (event) => {
  event.preventDefault(); 
  searchFunction(search, names)
  showResults(matchList,1)
});

input.addEventListener('keyup', () => {
  event.preventDefault(); 
  searchFunction(search, names)
  showResults(matchList,1)
});
// This function displays the search results.
  function showResults(list, page) {
    let startIndex = (page * numToShow) - numToShow;
    let endIndex = (page * numToShow);
    for(let i=0; i < lis.length; i++){
    lis[i].style.display = 'none';
    }
    // This creates a "no matches found" div if there are no matches for the search.
    if(matchList.length === 0){
      const div = document.createElement("div");
      div.className = "no-match";
      div.textContent = "No matches were found";
      div.style.margin = "20px";
      div.style.textAlign = "center";
      div.style.padding = "75px";  
      header.insertBefore(div,null);
      // Sets the correct page link to "active" class
    } else {
      showPage(matchList,1)
      appendPageLinks(matchList);
      let pagination = document.getElementById('pagination')
      let uls = document.querySelectorAll('.pagination ul')
      for (let i = 0; i < uls.length; i++){
      uls[i].style.display = 'none';
      let lastUl = document.querySelector(('.pagination ul:last-child'))
      lastUl.style.display = '';
      let active = document.querySelector('.pagination ul:last-child a')
      active.className = 'active'; 
      }
    }
  }






  



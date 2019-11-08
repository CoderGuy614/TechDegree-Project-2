/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
  
// Programmed by Jonathan Lutz, November 2019

/*** 
Creeating the two global variables.
***/
const lis = document.getElementsByClassName("student-item cf");
  for (let i = 0; i < lis.length ; i++) {
  }
const numToShow = 10;

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
// Calling the fundction to show the first page.
showPage(lis, 1);

// Creating the AppendPageLinks function.

function appendPageLinks(list) {
  let parentDiv = document.querySelector(".page");
  let newDiv = document.createElement('div');
  newDiv.className = "pagination";
  let ul = document.createElement('ul');
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
function clickedLink(e) {
let aTags = document.getElementsByTagName("a");
for(let i = 0; i < aTags.length; i++) {
  aTags[i].classList.remove("active");
}
e.target.className = "active";
let goToPage = e.target.textContent;
showPage(lis,goToPage);
}





  



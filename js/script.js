var titles = document.getElementsByClassName('title');

/* Kthejme titles ne nje array dhe me pas i afishojme */

Array.from(titles).forEach(function(item) {
      console.log(item);
});
    
var book = document.querySelector('#book-list li:nth-child(2) .name');
console.log(book);

var list = document.querySelectorAll('#book-list li .name');
console.log(list);

Array.from(list).forEach(function(numb){
    console.log(numb);
});

list.forEach(function(numb2){
   numb2.textContent += '(book title)';
}); 

const booklist = document.querySelector('#book-list');
// booklist.innerHTML = ' <p> Here is some other text. <p>';
// booklist.innerHTML += ' <p> Here is some other text. <p>';

var banner = document.querySelector('#page-banner');

console.log('page-banner node type is : '+ banner.nodeType);
console.log('page-banner node name is : '+ banner.nodeName);
console.log('page-banner node value is : '+ banner.nodeValue);
console.log('page-banner has child nodes : '+ banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);


console.log('The parent node is : '+ booklist.parentNode);
console.log('The parent element is : '+ booklist.parentElement.parentElement);
console.log(booklist.childNodes);
console.log(booklist.children);

console.log('The next sibling is : '+ booklist.nextSibling);
console.log('The next element sibling is : '+ booklist.nextElementSibling);

console.log('The previous sibling is : '+ booklist.previousSibling);
console.log('The previous element sibling is : '+ booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML += '<br /> Very important indeed!';


const link = document.querySelector('#page-banner');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Navigation to ', e.target.textContent, ' was prevented.');
});



/* The right way to delete a book */

const list1 = document.querySelector('#book-list ul');

 list1.addEventListener('click', (e) => {
   if(e.target.className == 'delete') {
      
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

var addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    const value = addForm.querySelector('input[type = "text"]').value;
    
    // Create elements

    const li = document.createElement('li');
    const bookName = document.createElement('bookName');
    const deleteBtn = document.createElement('deleteBtn');

    //add content
 
    bookName.textContent = value;
    deleteBtn.textContent = 'delete'; 

    // Add classes of style

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
   
    //append the document
   
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list1.appendChild(li);
});


// HideBox

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked)
    {
      list1.style.display = 'none';
    }
    else 
    {
      list1.style.display = 'initial';
    }
});


// Search Bar
const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){

     const term = e.target.value.toLowerCase();
     const book2 = list1.getElementsByTagName('li');

     Array.from(book2).forEach(function(book2) {
       
        const title = book2.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !=-1)
        {
            book2.style.display = 'block';
        } 
        else 
        {
            book2.style.display = 'none';
        }
     });
    });

   
    
   

    


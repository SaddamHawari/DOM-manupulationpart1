// // console.dir(document);

// console.log(document.URL);

// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[10]);

//get element by ID
// var headertitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headertitle);
// headertitle.textContent = 'Hello';
// headertitle.innerText = 'GoodBye';
// console.log(headertitle.innerText);

// headertitle.innerHTML = '<h3>Hello World</h>';
// header.style.borderBottom = 'solid 3px #000';


//GETELEMENTBYCLASSNAME//

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'blue';


// //Giveserror//
// // items.style.backgroundColor = '#ccc';//

// for (var i = 0; i < items.lenght; i++) {
//     items[i].style.backgroundColor = '#ccc';
// }

// GETELEMENTBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'blue';


// //Giveserror//
// // items.style.backgroundColor = '#ccc';//

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#ccc';
// }

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #000';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// QUERYSELECTORBOTH

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for (var i = 0; i <= odd.length; i++) {
    odd[i].style.background = 'blue';
    even[i].style.background = 'green';
}

// TRANVERSINGTHEDOM

// var itemList = document.querySelector('#item');

// parentnode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// childnode
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild didn't work
// console.log(itemList.firstChild);

// firstelementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello';

//lastChild 
// console.log(itemList.lastChild);

// //lastelementchild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// Sibling
// console.log(itemList.nextSibling);

// // SiblingChild
// console.log(itemList.nextElementSibling);

// previoussibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add Id
// newDiv.id = 'hello1';

// // Adding Title
// newDiv.setAttribute('title', 'Hello Div');

// // Create newDiv text 
// var newDivText = document.createTextNode('Hello World');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);


// EVENTS 
// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = 'green';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     // console.log(e.type);

//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);
//     console.log(e.shiftKey);
// }

// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// box.addEventListener('mouseenter', runEvent); //within div
// box.addEventListener('mouseleave', runEvent); //within div

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

select.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' + e.type);

    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '<h3>';
    //    output.innerHTML = '<h3>MouseX:' + e.offsetX + ' </h3><h3>MouseY:' + e.offsetY + '</h3>';

    // document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
}
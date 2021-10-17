/**
 * 1. add Aliases to HTML elements
 * 2. create new elements (will be triggered later by "click" event)
 * 3. add classes to them using classList.add
 * 4. add Unique id to each TodoListSpan using elem.id = "id" + Date.now()
 * 5. add inner text to elements by elem.innerText
 * 6. make list items  editable and draggable
 * 7. append our new children to container
 */

/**----------------------
 * Alias my page elements
 ------------------------*/
"use strict";

var todoInput = document.getElementById("todoInput");
var todoSubmit = document.getElementById("todoSubmit");
var todoList = document.getElementById("todoList");

var newTodoList = function newTodoList() {
  var todoItem = document.createElement("li");
  var todoItemSpan = document.createElement("span");
  var todoRemove = document.createElement("button");
  var todoEdit = document.createElement("button");
  var todoBold = document.createElement("button");
  var todoItalic = document.createElement("button");
  var todoTitle = document.createElement("button");
  var todoDone = document.createElement("button"); // Add classes to created elements

  todoItem.classList.add("todoItem");
  todoRemove.classList.add("todoRemove");
  todoEdit.classList.add("todoEdit");
  todoBold.classList.add("todoBold");
  todoItalic.classList.add("todoItalic");
  todoTitle.classList.add("todoTitle");
  todoDone.classList.add("todoDone"); // add unique id to spans

  todoItemSpan.id = "id-" + Date.now();
  todoItem.id = "item-" + Date.now(); // add inner text to created elements

  todoItemSpan.innerText = todoInput.value;
  todoRemove.innerText = "✗";
  todoEdit.innerText = "✎";
  todoItalic.innerText = " ⅈ ";
  todoBold.innerText = "B";
  todoTitle.innerText = "T";
  todoDone.innerText = "✓"; // add content editable and draggable

  todoItemSpan.setAttribute("contenteditable", true);
  todoItem.setAttribute("draggable", true);
  /**------------------------------------
   * append children todoItem, todoItemSpan etc...
   ----------------------------------------*/

  todoList.appendChild(todoItem);
  todoItem.appendChild(todoItemSpan);
  todoItem.append(todoRemove, todoBold, todoItalic, todoTitle, todoDone);
  /**--------------
   * Remobe button 
   ----------------*/
  // click to remove

  todoRemove.addEventListener("click", function () {
    todoList.removeChild(todoItem);
  });
  /* --------------------
  add some styling buttons
  ----------------------*/
  // add Bold

  todoBold.addEventListener("click", function () {
    todoItemSpan.classList.toggle("bold");
  }); // add italic

  todoItalic.addEventListener("click", function () {
    todoItemSpan.classList.toggle("italic");
  }); // make it a title

  todoTitle.addEventListener("click", function () {
    todoItemSpan.classList.toggle("title");
  }); // Done button green

  todoDone.addEventListener("click", function () {
    todoDone.classList.toggle("green");
    todoItemSpan.classList.toggle("lineThro");
  });
  /*-------------------------
  making elements draggable
    const draggable = document.getElementById(todoItem.id);
      draggable.addEventListener("dragstart", e => {
      draggable.classList.add("dragging");
      console.log("drag starts");
    });
  
    draggable.addEventListener("dragend", e => {
      draggable.classList.remove("dragging");
      console.log("dragging removed");
      });
      todoList.addEventListener("dragover", e => {
      e.preventDefault;
      const draggable = document.querySelector('.dragging');
      todoList.appendChild(draggable)
    });
    ----------------------------*/

  /*------------------------------------
   save to local storage Works partly !!!
   -------------------------------------*/
  //localStorage.setItem(todoItemSpan.id, todoItemSpan.innerHTML);
  //document.getElementById(todoItemSpan.id).innerHTML = localStorage.getItem(todoItemSpan.id);
};

todoSubmit.addEventListener("click", newTodoList);
"use strict";

var todoInput = document.getElementById("todoInput");
var todoSubmit = document.getElementById("todoSubmit");
var todoList = document.getElementById("todoList");

var newTodoList = function newTodoList() {
  // create element need just element name not html !
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
  todoDone.classList.add("todoDone"); // add inner text to created elements

  todoRemove.innerText = "✗";
  todoEdit.innerText = "✎";
  todoItalic.innerText = " ⅈ ";
  todoBold.innerText = "B";
  todoTitle.innerText = "T";
  todoDone.innerText = "✓"; // add content editable

  todoItemSpan.setAttribute("contenteditable", true);
  todoItem.setAttribute("draggable", true);
  /* 
  //todoRemove.setAttribute("contenteditable", false);
   //todoEdit.setAttribute("contenteditable", false);
   //todoItalic.setAttribute("contenteditable", false);
   //todoBold.setAttribute("contenteditable", false);
   //todoTitle.setAttribute("contenteditable", false);
   //todoDone.setAttribute("contenteditable", false);
   */
  // append child hates quotes for child !!!

  todoList.appendChild(todoItem);
  todoItem.appendChild(todoItemSpan);
  todoItemSpan.innerText = todoInput.value;
  todoItem.append(todoRemove, todoBold, todoItalic, todoTitle, todoDone); // click to remove

  todoRemove.addEventListener("click", function () {
    todoList.removeChild(todoItem);
  });
  todoBold.addEventListener("click", function () {
    todoItemSpan.classList.toggle("bold");
  });
  todoItalic.addEventListener("click", function () {
    todoItemSpan.classList.toggle("italic");
  });
  todoTitle.addEventListener("click", function () {
    todoItemSpan.classList.toggle("title");
  });
  todoDone.addEventListener("click", function () {
    todoDone.classList.toggle("green");
    todoItemSpan.classList.toggle("lineThro");
  });
  /* const editables = document.querySelectorAll("[contenteditable]");
    // save edits
  editables.forEach(el => {
    el.addEventListener("blur", () => {
      localStorage.setItem("dataStorage-" + el.id, el.innerHTML);
    })
  });
  
  // once on load
  for (var key in localStorage) {
    if (key.includes("dataStorage-")) {
      const id = key.replace("dataStorage-","");
      document.querySelector("#" + id).innerHTML = localStorage.getItem(key);
    }
  }
  */
};

todoSubmit.addEventListener("click", newTodoList);
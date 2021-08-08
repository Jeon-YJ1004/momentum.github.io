const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const TODOS_KEY = "todos"

let todoS = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoS));
}

function deleteToDo() {
  const li = event.target.parentElement;
  li.remove();
  todoS = todoS.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = newToDo.text;
  todoList.appendChild(li);
  const button = document.createElement("button");
  button.innerText = "👌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);

}

function handdleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  todoS.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

todoForm.addEventListener("submit", handdleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  todoS = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
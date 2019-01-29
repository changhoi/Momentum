const toDoForm = document.querySelector(".js-todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

let toDos = [];


function deleteTodo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveTodo();
}

function saveTodo () {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(function something(todo){
            paintTodo(todo.text);
        })
    }
}



function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;

    delBtn.addEventListener("click",deleteTodo);
    delBtn.innerText = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveTodo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value ="";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
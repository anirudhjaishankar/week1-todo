let todoInput = document.querySelector('#todo-input');
let doneButton = document.querySelector('#done-button');

var todoList = [];

function render() {
  let parentListElement = document.querySelector('.todo-list');
  parentListElement.innerHTML = "";
  todoList.forEach(todo => {
    let listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(todo));
    listElement.className = "list-item";
    let deleteButton = document.createElement('button');
    deleteButton.addEventListener('click', deleteTodo) ;
    deleteButton.textContent = "Delete";
    deleteButton.className="delete-button";
    listElement.appendChild(deleteButton);
    parentListElement.appendChild(listElement);
  });
}

function submit() {
  todoList.push(todoInput.value);
  render();
}

function deleteTodo(mouseEvent) {
  var todoDelete = mouseEvent.target.parentElement.childNodes[0].data;
  todoList = todoList.filter( todo => todo != todoDelete);
  console.log(todoList);
  render();
}



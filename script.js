const btnA = document.getElementById("#_btn1")
const input = document.querySelector(".input")
const list = document.querySelector(".list")
const validator = document.querySelector(".validator")
const btnC = document.querySelector("#_btn2")



// console.log(btnC);

// function addTodo() {
// }
// function mouseOver() {
// }

function saveAll() {
    const allTodo = JSON.stringify(list.innerHTML);
    localStorage.setItem("myTodos", allTodo)
}

function removeTodo(item) {
    console.log(item.parentNode.parentNode);
    item.parentNode.parentNode.remove();
    saveAll();
}
function clearAll() {
    // console.log(list.childElementCount);
    if (list.childElementCount === 0) {
        validator.textContent = "List is Empty";
    }else {
        list.innerHTML = "" ;
    }
    saveAll();
}

function addTodo() {
    // console.log("addTodo", input.value);
    // console.log("mouseOver", input.value);
    if (input.value !== "") {
        const li = document.createElement("li")
    // li.textContent = `abc ${input.value}`
    li.innerHTML = `<div class="myList">
    <span><h3>${input.value}</h3></span>
    <button onclick= "editTodo(this)" type= "button" class="rM_btn"><big><b>Edit</b></big></button>
    <button onclick= "removeTodo(this)" type= "button" class="rM_btn2"><big><b>Clear</b></big></button>
    </div>`
    list.appendChild(li);
    console.log(li);
    input.value = "";
    validator.textContent = "";
    } else validator.textContent = "Empty Input";
    saveAll();
}

function editTodo(item) {
    if (item.textContent === "Done") {
    const todoName = item.previousElementSibling.value;
    let span = document.createElement("span");
    span.textContent = todoName ;
    item.parentElement.replaceChild(span, item.previousElementSibling);
    item.textContent = "Edit";    
    }
    else {
    const todoName = item.previousElementSibling.textContent;
    // console.log(todoName);
    item.textContent = "Done"
    let input = document.createElement("input");
    input.type = "text";
    input.value = todoName ; 
    item.parentElement.replaceChild(input, item.previousElementSibling)
    }
    saveAll();
}

function loadAllTodos() {
    const allTodos = JSON.parse(localStorage.getItem("myTodos"));
    list.innerHTML = allTodos;
}




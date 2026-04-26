
let addBtn = document.querySelector("#addBtn");
taskInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");
addBtn.addEventListener("click", function(){
    let task = taskInput.value;

    if(taskInput.value===""){
        alert("Please enter a task!");
    }

    if(task){
        let li = document.createElement("li");
        li.textContent=task;
        taskList.appendChild(li);
        taskInput.value="";
    }
})



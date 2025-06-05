function addTasks() {
  var tasks = document.getElementById("task").value;
  var lists = document.getElementById("task-list");
  if (tasks === "") {
    alert("please enter a task");
    return;
  }
  var li = document.createElement("li");
  li.id = "li";
  var textnode = document.createTextNode(tasks);
  li.appendChild(textnode);

  var deleteBtn = document.createElement("button");
  deleteBtn.id = "delBtn";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.onclick = function () {
    lists.removeChild(li);
  };

  var completeBtn = document.createElement("button");
  completeBtn.id = "completeBtn";
  completeBtn.innerHTML = "Complete";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  li.appendChild(deleteBtn);
  li.appendChild(completeBtn);

  lists.appendChild(li);
  tasks = "";
}

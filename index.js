window.open(loa());

function loa() {
    let tasks = JSON.parse(localStorage.getItem("content"));
    document.querySelector("#task-list").innerHTML = tasks;
}

function check(x) {
    x.nextSibling.classList.toggle("checked");
    let content = document.querySelector("#task-list").innerHTML;
    localStorage.setItem("content", JSON.stringify(content));
}

function del(x) {
    x.parentNode.remove();
    let content = document.querySelector("#task-list").innerHTML;
    localStorage.setItem("content", JSON.stringify(content));
}

document.querySelector("#add-task-button").addEventListener("click", function () {
    let text = document.querySelector("#input-task").value;
    let li = "<li><input type=\"checkbox\" onclick=\"check(this)\"><span class=\"task\">" + text + "</span><button class=\"delete-btn\" onclick=\"del(this)\"></button></li>";
    document.querySelector("#task-list").innerHTML += li;
    document.querySelector("#input-task").value = "";
    let content = document.querySelector("#task-list").innerHTML;
    localStorage.setItem("content", JSON.stringify(content));
})




import User from "./model/User";

let usersElements;
let userContainer = document.querySelector("#userContainer");

let user = new User();

user.getUsers().then((users) => {
    usersElements = users.forEach((user) => {
        let para = document.createElement("p");
        para.className = "user";
        let node = document.createTextNode(user.name);
        para.appendChild(node);
        userContainer.appendChild(para);
    })
});
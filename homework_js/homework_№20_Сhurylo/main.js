let userForm = document.forms['loginForm'];
let users = [];
let table = document.querySelector('.tbody');
let userIndex;

userForm.addUser.addEventListener('click',function(){
    let login = userForm.login.value;
    let pass = userForm.password.value;
    let email = userForm.email.value;
    let newUser = new User (login, pass, email);
    users.push(newUser);
    renderUser();
    userForm.reset();
})

function renderUser(){
    table.innerHTML = '';
    for (let i=0; i<users.length; i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = i+1;
        tr.appendChild(td);

        for (let key in users[i]){
            let userTD = document.createElement('td');
            userTD.innerText = users[i][key];
            tr.appendChild(userTD)
        }

        let editTD = document.createElement('td');
        let btnEdit = document.createElement('button');
        btnEdit.innerText = 'Edit';
        btnEdit.classList.add('edit');
        btnEdit.addEventListener('click', () => editUser(i));
        editTD.appendChild(btnEdit);
        tr.appendChild(editTD);

        let deleteTD = document.createElement('td');
        let btnDelete = document.createElement('button');
        btnDelete.innerText = 'Delete';
        btnDelete.classList.add('delete');
        btnDelete.addEventListener('click', () => deleteUser(i));
        deleteTD.appendChild(btnDelete);
        tr.appendChild(deleteTD);
    
        table.appendChild(tr);
    }
}

function User(login, pass, email){
    this.login = login;
    this.password = pass;
    this.email = email;
}

function editUser(id){
    userIndex = id;
    userForm.addUser.style.display = 'none';
    userForm.editUser.style.display = 'block';
    userForm.login.value = users[id].login;
    userForm.password.value = users[id].password;
    userForm.email.value = users[id].email;
}

function saveEditUser(){
    let log = userForm.login.value;
    let pass = userForm.password.value;
    let email = userForm.email.value;
    let userChange = new User(log,pass,email);
    users.splice(userIndex,1,userChange);
}

userForm.editUser.addEventListener('click',function(){
    saveEditUser();
    userForm.editUser.style.display = 'none';
    userForm.addUser.style.display = 'block';
    userForm.reset();
    renderUser();
})

function deleteUser(id){
    users.splice(id,1);
    renderUser();
}
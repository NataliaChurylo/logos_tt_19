let createAccount = document.querySelector('.account');
let profile = document.querySelector('.profile');
let registerForm = document.forms['registration-form'];
let btnAccept = document.querySelector('.accept');

registerForm.checkAgree.addEventListener('change', function(){
    btnAccept.disabled = true;
    if(registerForm.checkAgree.checked == true){
        btnAccept.disabled = false;
        btnAccept.style.backgroundColor = 'green';
    }
    else btnAccept.style.backgroundColor = '';
});

let image = document.querySelector('.icons-person');
let name = document.querySelector('h3');
let email = document.querySelector('.email');
let position = document.querySelector('.position');
let man = document.querySelector('.man')
let woman = document.querySelector('.woman')

btnAccept.addEventListener('click',function(){
    createAccount.style.display = 'none';
    profile.style.display = 'block';
    if (man.checked) image.style.backgroundImage = `url(images/man.png)`
    else if (woman.checked) image.style.backgroundImage = `url(images/woman.png)`
    name.innerText = registerForm.fname.value + ' ' + registerForm.sname.value;
    email.innerHTML = registerForm.email.value;
    position.innerHTML = registerForm.speciality.value;
})

document.querySelector('.signOut').addEventListener('click',function(){
    profile.style.display = 'none';
    createAccount.style.display = 'block';
    registerForm.reset();
    btnAccept.style.backgroundColor = '';
    btnAccept.disabled = true;
})

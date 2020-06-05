$("#phone").mask("+38(***)-***-**-**");

const nameReg = /[a-zA-Z]{1,20}$/;
const emailReg = /^[-\.a-z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/;
const phoneReg = /^\+38\((0[679]3)|((0[69][78])|(096))\)-\d{3}-\d{2}-\d{2}$/;
const passwordReg = /[a-zA-Z0-9]{8,15}$/;

let errorMessage = document.getElementsByClassName('error-message');
let iconsTrue = document.querySelectorAll('.check');
let iconsFalse = document.querySelectorAll('.error');
let form = document.forms['signUp'];

function validation(elem, regExp, index){
    if (!regExp.test(elem.value)) {
        elem.style.border = '3px solid red';
        errorMessage[index].style.display = 'flex'; 
        iconsFalse[index].style.display = 'block';
        iconsTrue[index].style.display = 'none';
    }
    else {
        elem.style.border = '3px solid green';
        errorMessage[index].style.display = 'none'; 
        iconsTrue[index].style.display = 'block';
        iconsFalse[index].style.display = 'none';
    }
}

form.accept.addEventListener('click',function(){
    validation(form.fname,nameReg,0);
    validation(form.sname,nameReg,1);
    validation(form.email,emailReg,2);
    validation(form.phone,phoneReg,3);
    validation(form.password,passwordReg,4);
})
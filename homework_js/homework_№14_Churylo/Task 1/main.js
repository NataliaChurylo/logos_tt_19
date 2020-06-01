let moveField = document.forms['move'];

moveField.moveClick.addEventListener('click',function(){
    if (moveField.firstField.value != null) {
        moveField.secondField.value = moveField.firstField.value;
        moveField.firstField.value = '';
    }
})

let placeholderField = document.forms['plchldr'];

placeholderField.hint.addEventListener('blur',function(){
    if (placeholderField.hint.value != null) {
        placeholderField.hint.placeholder = placeholderField.hint.value;
        placeholderField.hint.value = '';
    }
})

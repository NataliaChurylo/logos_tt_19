let picture = document.querySelectorAll('.picture')

for (let i=0; i<picture.length; i++){
    $(picture[i]).css('order', (Math.random()*150).toFixed())
}

$(function(){
    $('.picture').draggable({
        containment: '.end-puzzle',
        cursor: 'pointer'
    })
    $('.end-puzzle').droppable()
})
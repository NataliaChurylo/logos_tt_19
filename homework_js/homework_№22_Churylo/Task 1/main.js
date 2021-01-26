$('.ball').click(function(){
    $color = generateColor();
    $(this).animate({
        left: (Math.random()*$(document).innerWidth()),
        top: (Math.random()*$(document).innerHeight()),
        width: (Math.random()*200),
        height: (Math.random()*200),
        backgroundColor: $color
    },1000)
})
   
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
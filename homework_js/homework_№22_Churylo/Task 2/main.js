setInterval(function(){
    let color = generateColor();
    $('.ball').animate({
        left: (Math.random()*$(document).innerWidth()),
        top: (Math.random()*$(document).innerHeight()),
        width: (Math.random()*200) + 'px',
        height: (Math.random()*200) + 'px',
        backgroundColor: color,
        borderColor: generateColor()
    },'slow').css({
        boxShadow: '0px 0px 80px '  + color
    })
},600)
   
function generateColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
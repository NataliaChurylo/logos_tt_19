$(function(){
    $('.bg-black').slideDown(60000, function(){
        $('.bg-black').slideUp(60000, function(){
            $('.minute').text('0')
        });
        $('.minute').text('1');
    })
});
$(function(){
    $('.circle').circularProgress({
        percent: 0,
        easing: 'linear'
    }).circularProgress('animate', 100, 10000);
})
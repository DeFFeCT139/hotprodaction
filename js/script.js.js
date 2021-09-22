$(document).ready(function(){
    let position = 0;
    const slydeToShow = 5;
    const slydeToScrol = 1;
    const conteyner = $('.slider-con');
    const track = $('.slider-track').style;
    const bolsh = $('.slider-item3');
    const item = $('.slider-item');
    const btnLeft = $('.btn-left');
    const btnRight = $('.btn-ritgh');

    btnLeft.click(function(){

    })
    btnRight.click(function(){
        track.left = parseFloat(track) + 200 + "px";
    })
})
var audDom = document.createElement('audio');
var timeLine = $('.player_timeLine').get(0).offsetWidth;
var t = new TimelineMax();
t.to('.CD_data',3,{
    rotation:"360deg",
    ease: Power0.easeNone,
    repeat:-1
},
"-=0.2s"
);
t.pause();
$('.control_play').click(function(){
    var player = $('.player');
    if(player.hasClass('play')){
        player.removeClass('play');
        pauseAnimation();
        audDom.pause();
    }else{
        player.addClass('play');
        playAnimation();
        songPlay();
        updateName();
        durationLine()
    }
})
function pauseAnimation(){
    TweenMax.to(
        '.CD_data',
        0.2,
       {
           scale:1,
           ease: Power0.easeNone
       }
    );
    TweenMax.to(
        '.player_backMask',
        0.2,
        {
            top:'0',
            ease: Power0.easeNone
        }
    );
    t.pause();
}
function playAnimation(){
    TweenMax.to(
        '.CD_data',
        0.2,
        {
            scale:1.1,
            ease:Power0.easeNone
        }
    );
    TweenMax.to(
        '.player_backMask',
        0.2,
        {
            top:'-50%',
            ease:Power0.easeNone
        }
    );
    t.play();
}
function songPlay(){
    audDom.setAttribute('src',$('.active').attr('data-origin'));
    audDom.play();
}
function updateName(){
    $('.songName').text($('.active').attr('data-song'));
    $('.singer').text($('.active').attr('data-singer'));
}
function durationLine(){
    audDom.addEventListener('timeupdate',function(){
        var durationTime = this.duration;
        var current = this.currentTime;
        var percent = current/durationTime;
        $('.player_bar').css({
            width:parseInt(percent*timeLine)+'px',
        })
    })
}


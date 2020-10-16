Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return this;
}
var MusicPlayer = function(){
    this.audDom = document.createElement('audio');
    this.timeLine = $('.player_timeLine').get(0).offsetWidth;
    this.clickLock = true;
    this.moveLock = false;
    this.getVoice = function(){
        var per,update,
        d = parseInt($('.moon').css('width')),
        moonL = $('.moon').offset().left,
        sunL = $('.sun').offset().left,
        dis = Math.abs(sunL-moonL);
        per = 1-dis/d;
        per<=0?update=0:update = per;
        this.change(update);
    }
    this.change = function (update){
        this.vol = update;
        this.audDom.volume = update;
        $('.rishi .pre').html("Vol:" + (update * 100).toPrecision(2) + "%");
        $('.moon').css({
            'background': "hsl(194, 56%, " + (1 - update) * 60 + "%)"
        })
        $('body').css({
            'background': "hsl(" + (194 + Math.floor(166 * update)) + ", 66%, " + (1 - update) * 50 + "%)"
        })
    }
};
MusicPlayer.method('init',function(){
    this.getVoice();
}).method('player',function(){
    var self = this;
    var t = new TimelineMax();
    t.to('.CD_data',5,{
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
            self.audDom.pause();
        }else{
            player.addClass('play');
            playAnimation();
            songPlay();
            updateName();
            durationLine();
        }
    })
    $('.control_next').click(function(){
        nextPlay();
    })
    $('.control_prev').click(function(){
        prevPlay();
    })

    function prevPlay(){
        if($('.nav_CD .CD_data.active').is(':first-child')){
            $('.nav_CD .CD_data.active').removeClass('active');
            $('.nav_CD .CD_data:last-child').addClass('active');
        }else{
            $('.nav_CD .CD_data.active').removeClass('active').prev().addClass('active')
        }
        if($('.player').hasClass('play')){
            songPlay();
            updateName();
            durationLine();
        }
    }
    function nextPlay(){
        if($('.nav_CD .CD_data.active').is(':last-child')){
            $('.nav_CD .CD_data.active').removeClass('active');
            $('.nav_CD .CD_data:first-child').addClass('active');
        }else{
            $('.nav_CD .CD_data.active').removeClass('active').next().addClass('active')
        }
        if($('.player').hasClass('play')){
            songPlay();
            updateName();
            durationLine();
        }
    }
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
        self.audDom.setAttribute('src',$('.active').attr('data-origin'));
        self.audDom.play();
    }
    function updateName(){
        $('.songName').text($('.active').attr('data-song'));
        $('.singer').text($('.active').attr('data-singer'));
    }
    function durationLine(){
        self.audDom.addEventListener('timeupdate',function(){
            var durationTime = this.duration;
            var current = this.currentTime;
            var percent = current/durationTime;
            $('.player_bar').css({
                width:parseInt(percent*self.timeLine)+'px',
            })
            if(current>=durationTime){
                nextPlay();
            }
        })
    }
}).method('rishi',function(){
    var self = this;
    var dis;
    $('.moon').on('mousedown',function(e){
        self.clickLock = false; //点击锁 关
        self.moveLock = true;
        dis = e.clientX - $('.moon').offset().left;
    });
    $('body').on('mousemove',function(e){
        console.log(self.clickLock + "||" + self.moveLock)
        if(!self.moveLock){
            return;
        }
        var leftData = e.clientX - dis - $('.rishi').offset().left;
        if(leftData<=0){
            leftData = 0;
            self.moveLock = false;
            self.clickLock = true;
        }else if(leftData >= 200){
            leftData = 200;
            self.moveLock = false;
            self.clickLock = true;
        }
        $('.moon').css({
            'left':leftData,
        })
        self.getVoice();
    })
    $('body').on('mouseup',function(){
        self.clickLock = true; 
        self.moveLock = false;
    })
})
var MP = new MusicPlayer();
MP.init();
MP.rishi();
MP.player();
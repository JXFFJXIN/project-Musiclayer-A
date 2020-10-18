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
    this.lrc =`
[00:01.06]难念的经
[00:03.95]演唱：周华健
[00:06.78]
[00:30.96]笑你我枉花光心计
[00:34.15]爱竞逐镜花那美丽
[00:36.75]怕幸运会转眼远逝
[00:39.32]为贪嗔喜恶怒着迷
[00:41.99]责你我太贪功恋势
[00:44.48]怪大地众生太美丽
[00:47.00]悔旧日太执信约誓
[00:49.66]为悲欢哀怨妒着迷
[00:52.56]啊 舍不得璀灿俗世
[00:57.66]啊 躲不开痴恋的欣慰
[01:02.86]啊 找不到色相代替
[01:08.09]啊 参一生参不透这条难题
[01:13.15]吞风吻雨葬落日未曾彷徨
[01:15.73]欺山赶海践雪径也未绝望
[01:18.23]拈花把酒偏折煞世人情狂
[01:20.90]凭这两眼与百臂或千手不能防
[01:23.76]天阔阔雪漫漫共谁同航
[01:26.09]这沙滚滚水皱皱笑着浪荡
[01:28.68]贪欢一刻偏教那女儿情长埋葬
[01:32.38]
[01:34.09]吞风吻雨葬落日未曾彷徨
[01:36.50]欺山赶海践雪径也未绝望
[01:39.07]拈花把酒偏折煞世人情狂
[01:41.69]凭这两眼与百臂或千手不能防
[01:44.68]天阔阔雪漫漫共谁同航
[01:46.93]这沙滚滚水皱皱笑着浪荡
[01:49.54]贪欢一刻偏教那女儿情长埋葬
[01:53.41]
[02:15.45]笑你我枉花光心计
[02:18.53]爱竞逐镜花那美丽
[02:21.14]怕幸运会转眼远逝
[02:23.76]为贪嗔喜恶怒着迷
[02:26.43]责你我太贪功恋势
[02:28.98]怪大地众生太美丽
[02:31.60]悔旧日太执信约誓
[02:34.26]为悲欢哀怨妒着迷
[02:36.90]啊 舍不得璀灿俗世
[02:42.04]啊 躲不开痴恋的欣慰
[02:47.34]啊 找不到色相代替
[02:52.52]啊 参一生参不透这条难题
[02:57.47]吞风吻雨葬落日未曾彷徨
[03:00.05]欺山赶海践雪径也未绝望
[03:02.64]拈花把酒偏折煞世人情狂
[03:05.27]凭这两眼与百臂或千手不能防
[03:08.22]天阔阔雪漫漫共谁同航
[03:10.49]这沙滚滚水皱皱笑着浪荡
[03:13.06]贪欢一刻偏教那女儿情长埋葬
[03:18.45]吞风吻雨葬落日未曾彷徨
[03:20.90]欺山赶海践雪径也未绝望
[03:23.54]拈花把酒偏折煞世人情狂
[03:26.21]凭这两眼与百臂或千手不能防
[03:29.07]天阔阔雪漫漫共谁同航
[03:31.32]这沙滚滚水皱皱笑着浪荡
[03:33.92]贪欢一刻偏教那女儿情长埋葬
[03:39.32]吞风吻雨葬落日未曾彷徨
[03:41.84]欺山赶海践雪径也未绝望
[03:44.38]拈花把酒偏折煞世人情狂
[03:47.04]凭这两眼与百臂或千手不能防
[03:49.99]天阔阔雪漫漫共谁同航
[03:52.20]这沙滚滚水皱皱笑着浪荡
[03:54.89]贪欢一刻偏教那女儿情长埋葬
[04:00.28]吞风吻雨葬落日未曾彷徨
[04:02.68]欺山赶海践雪径也未绝望
[04:05.25]拈花把酒偏折煞世人情狂
[04:07.90]凭这两眼与百臂或千手不能防
[04:10.85]天阔阔雪漫漫共谁同航
[04:13.08]这沙滚滚水皱皱笑着浪荡
[04:15.75]贪欢一刻偏教那女儿情长埋葬
[04:19.48]`;
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
        if(!self.moveLock){
            return;
        }
        var leftData = e.clientX - dis - $('.rishi').offset().left;
        $('.moon').css({
            'left':leftData,
        })
        self.getVoice();
    })
    $('body').on('mouseup',function(){
        self.clickLock = true; 
        self.moveLock = false;
    })
}).method('lrcAy',function(){
    var self =this;
    var ul = document.querySelector('.lrc-container ul');
    var lrc = createLrcArray();
    var config = {
        height:200,
        liHeight:30,
    }
    this.audDom.ontimeupdate = function (){
        setCurrent();
    }
    createLis();
    setCurrent();
    function createLrcArray() {
        var reg = /^(\[[\d:\.]+\])(.*)$/gm;
        var arr = [];
        while (result= reg.exec(self.lrc)) {
            arr.push(createLrcObject(result));
        }
        return arr;
        function createLrcObject(execResult) {
            var time = execResult[1],
                word = execResult[2];
            time = getSeconds(time);
            return {
                time,
                word
            }
        }
    
        function getSeconds(timeStr) {
            var parts = timeStr.replace("[", "").replace("]", "").split(":")
            var [m, s] = parts;
            return m * 60 + +s;
        }
    }
    function createLis(){
        ul.innerHTML = "";
        var fragment = document.createDocumentFragment();
        for(const item of lrc){
            createLi(item);
        }
        ul.appendChild(fragment);
        function createLi(lrcObj){
            var li = document.createElement("li");
            li.innerText = lrcObj.word;
            fragment.appendChild(li);
        }
    }
    function setCurrent(){
        var index = getCurrentWordIndex(lrc);
        var li = ul.querySelector('.li-active');
        li&&li.classList.remove("li-active");
        if(index !== -1){
            ul.children[index].classList.add("li-active");
        }
        var top = 0;
        if(index >= 0){
            var maxOffset = config.height / 2 - config.liHeight;
            var curOffset = index*config.liHeight;
            var dis = curOffset - maxOffset;
            if(dis<=0){
                top = 0;
            }else{
                top = -dis;
            }
        }
        console.log(dis)
        console.log(top)
        ul.style.marginTop = top + 'px';
    }
    function getCurrentWordIndex(lrcArray){
        var curTime = self.audDom.currentTime;
        for(let i = lrcArray.length-1  ; i >= 0 ; i--){
            const element = lrcArray[i];
            if(curTime >= element.time){
                return i;
            }
        }
        return -1;
    }
})
var MP = new MusicPlayer();
MP.init();
MP.rishi();
MP.player();
MP.lrcAy();
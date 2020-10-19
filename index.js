Function.prototype.method=function(name,fn){
    this.prototype[name]=fn;
    return this;
}
var MusicPlayer = function(){
    this.audDom = document.createElement('audio');
    this.timeLine = $('.player_timeLine').get(0).offsetWidth;
    this.clickLock = true;
    this.moveLock = false;
    this.activelrc = 0;
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
        $('.rishi .pre').html("Vol:" + (update * 100).toPrecision(3) + "%");
        $('.moon').css({
            'background': "hsl(194, 56%, " + (1 - update) * 60 + "%)"
        })
        $('body').css({
            'background': "hsl(" + (194 + Math.floor(166 * update)) + ", 66%, " + (1 - update) * 50 + "%)"
        })
    }
    this.cd = [
        {
            songName:'齐天',
            singer:'华晨宇',
            image:"./img/华晨宇.jpg",
            origin:"./mp3/齐天.mp3",
            lrc:`
[00:00.00]齐天 - 华晨宇
[00:05.37]词：丁彦雪/今何在/房昊
[00:10.75]曲：华晨宇
[00:16.13]制作人：郑楠
[00:21.51]日和月在重演
[00:25.20]
[00:27.79]谁号令齐天
[00:31.02]
[00:31.76]齐天断恩怨
[00:35.78]
[00:40.63]爱与恨连成线
[00:44.45]
[00:47.01]逃不出指间
[00:50.20]
[00:51.03]指间天高远
[00:55.16]
[01:00.29]问一句生死因果
[01:05.26]
[01:06.18]生我又是为何
[01:11.05]既带我来如何不解我惑
[01:18.05]
[01:19.44]道一声立地成佛
[01:24.28]
[01:25.44]是不是成了佛世间便没了魔
[01:34.89]
[01:36.20]谁来告诉我
[01:42.52]
[01:43.61]看风沙障日入目昏黄
[01:45.43]天宫之上
[01:46.19]那月亮和花果山上也没两样
[01:48.74]一战功成名扬换来天罗地网
[01:50.97]你胜之不武我暗箭难防
[01:52.65]不声不响错过多少霞光
[01:54.43]结局和真相一步两步
[01:56.15]张望不到前方
[01:57.17]梦里桃花香
[01:57.91]多倔强却抵抗不了一出双簧
[02:00.68]黑白真相等天亮
[02:02.26]是否能亲笔写上天生的擅长
[02:04.52]三尖两刃出鞘
[02:05.81]龙凤塌麒麟倒
[02:06.77]玉阶纷飞金箍摇
[02:08.24]再无岁月可回头
[02:09.79]千百年天地间只剩下这一棒
[02:12.34]
[02:12.90]胜仗为何孤独收场
[02:14.25]梦里风在说着谁
[02:15.59]我一句承让偏不认输
[02:17.13]踏平南天意决众河山
[02:19.35]再望断天涯
[02:23.74]
[02:26.55]是谁轻狂年少不枉
[02:32.54]谁给我个信仰
[02:37.40]春未了月相照
[02:42.16]有心打扰
[02:44.77]
[02:45.71]可惜风早相见不巧
[02:51.91]天色刚刚破晓
[02:56.61]紧箍还没做好
[03:02.68]我还能微笑
[03:08.89]
[03:09.95]爱恨忧怖成满眼迷雾
[03:11.78]十万雷霆轰动乾坤
[03:13.38]却不能将我禁锢
[03:15.15]百万天兵纵横捭阖
[03:16.50]也休想让我降服
[03:18.06]这不是你能决定的胜负
[03:19.96]一棒把天宫闹翻颠覆
[03:21.48]什么人命天定我说天命由心
[03:23.79]我要这山断不了来路
[03:25.79]我要这水挡不住归途
[03:27.63]我要天地都为我让步
[03:29.57]我棒尖一点山崩地裂
[03:31.38]你拈花一笑落霞满天
[03:33.10]哭过笑过爱过恨过痴过嗔过
[03:35.20]有什么放不下
[03:36.32]我要这荒诞的规矩
[03:37.61]当作个闹剧给结束
[03:39.09]乾坤下一朝进退石心两难
[03:41.01]所谓虚无是同归来处的放逐
[03:43.01]潮起潮落
[03:43.74]原来一无所有
[03:44.92]就叫做
[03:46.09]齐天大圣`,
        },
        {
            songName:'BEAUTIFUL WORLD',
            singer:'LiSA (织部里沙)',
            image:"./img/LiSA.jpg",
            origin:"./mp3/BEAUTIFUL WORLD.mp3",
            lrc:`
[00:00.65]BEAUTIFUL WORLD - LiSA (织部里沙)
[00:02.32]词：LiSA
[00:03.38]曲：小南泰葉
[00:05.29]编曲：江口亮
[00:08.94]しかたなく開けた 大人への扉は
[00:16.94]想像と違ってた ねぇ
[00:24.41]汗ばんだ手のひら
[00:28.21]運命線握りながら
[00:32.33]相変わらず 理想と現実 奮闘中
[00:39.78]疲れた身体
[00:42.48]風がそっと撫でてくれるから
[00:47.60]立ち止まって ほら また走り出せる
[00:54.63]愛されたくて 難しく考えすぎて
[01:02.54]愛すべき本当の自分が
[01:06.47]どんどん分からなくなっていく
[01:10.92]もういいよ もういいよ
[01:16.68]傍にある愛に気づいたから
[01:30.21]置き忘れて来た
[01:34.02]無邪気さと引き換えに
[01:37.94]細やかな優しさに気づいてる
[01:45.57]苦く感じてた 真っ黒なコーヒーも
[01:53.77]味わいながら 楽しめてる
[02:01.15]夢に見ていた
[02:03.86]最高なエンディングよりも
[02:08.86]その先に描く未来に
[02:13.75]想い馳せながら
[02:15.89]幸せに向かって
[02:19.78]がむしゃらに手を伸ばすのに
[02:23.65]手にした途端 ほら
[02:26.91]また失うことが怖くなっていく
[02:32.26]もういいよ もういいよ
[02:38.06]終わりはいつも始まりだから
[02:57.78]選び抜いた 願いと答えを
[03:01.65]幸せバトンに託してる
[03:05.75]駆け抜けた先にはいつも
[03:09.39]後悔なんてひとつもないんだ
[03:17.94]It's a BEAUTIFUL WORLD
[03:21.77]It's a BEAUTIFUL WORLD
[03:25.48]It's a BEAUTIFUL WORLD
[03:29.48]It's a BEAUTIFUL WORLD
[03:33.31]Such as BEAUTIFUL WORLD
[03:37.38]Such as BEAUTIFUL WORLD
[03:41.01]Such as BEAUTIFUL WORLD
[03:44.41]ほら また走り出せる
[03:48.83]愛されたくて その愛に応えたくて
[03:56.55]騒がしい世界で
[04:00.15]最高な今を駆け出してる
[04:05.04]Won't be long won't be long
[04:11.02]僕は僕の明日へ向かってく
[04:19.33]僕は僕の世界で生きてく
[04:39.11]Such as BEAUTIFUL WORLD
[04:43.00]Such as BEAUTIFUL WORLD
[04:46.86]Such as BEAUTIFUL WORLD`
        },
        {
            songName:'莉莉安',
            singer:'徐佳莹 (LALA Xu)',
            image:"./img/徐佳莹.jpg",
            origin:"./mp3/莉莉安.mp3",
            lrc:`
[00:00.00]莉莉安 (Live) - 徐佳莹 (LALA Xu)
[00:06.47]词：宋冬野
[00:12.94]曲：宋冬野
[00:19.41]编曲：郑楠
[00:25.89]她发现孤独的人准备动身
[00:30.73]
[00:32.06]于是就祷告着黄昏
[00:35.59]直到夜里她转头听见
[00:38.63]
[00:40.57]悲伤的呜咽
[00:42.22]
[00:44.41]一个善良的女子
[00:47.59]
[00:48.28]长发垂肩
[00:50.02]
[00:51.10]她已跟随黄昏来临
[00:57.54]
[00:59.98]翠绿的衣裳在炉火中
[01:03.73]化为灰烬
[01:05.46]
[01:06.62]升起火焰一直烧到黎明
[01:13.26]
[01:16.23]一直到那女子
[01:18.48]
[01:19.18]推开门离去
[01:21.85]
[01:23.67]她自言自语
[01:26.85]
[01:27.60]在离这很远的地方
[01:31.29]有一片海滩
[01:34.58]孤独的人他就在海上
[01:38.16]
[01:39.11]撑着船帆
[01:41.72]
[01:42.98]如果你看到他
[01:46.10]回到海岸
[01:49.02]
[01:50.13]就请你告诉他你的名字
[01:53.64]
[01:54.90]我的名字莉莉安
[01:59.48]
[02:28.74]她已来临
[02:30.63]
[02:32.70]翠绿的衣裳在炉火中
[02:36.87]化为灰烬
[02:38.62]
[02:40.66]升起火焰一直烧到黎明
[02:48.88]一直到那女子
[02:52.18]推开门离去
[02:54.49]
[02:56.47]她自言自语
[02:59.09]
[03:00.41]在离这很远的地方
[03:04.21]有一片海滩
[03:06.87]
[03:07.44]孤独的人他就在海上
[03:10.99]
[03:12.10]撑着船帆
[03:14.58]
[03:16.01]如果你看到他
[03:18.41]
[03:19.04]回到海岸
[03:21.70]
[03:22.97]就请你告诉他你的名字
[03:26.55]
[03:27.85]我的名字莉莉安
[03:32.23]
[03:46.19]她不想忘记了
[03:49.35]
[03:50.43]她的名
[03:52.11]
[03:53.78]她不想胆怯了
[03:58.07]失去爱的勇气
[04:01.83]
[04:17.92]在离这很远的地方
[04:20.89]
[04:21.57]有一片海滩
[04:24.22]
[04:24.84]孤独的人他就在海上
[04:28.45]
[04:29.46]撑着船帆
[04:32.29]
[04:33.19]如果你看到他
[04:35.80]
[04:36.43]回到海岸
[04:39.28]
[04:40.66]就请你告诉他你的名字
[04:44.18]
[04:45.10]我的名字
[04:46.54]
[04:48.84]在离这很远的地方
[04:52.08]
[04:52.68]有一片海滩
[04:55.77]孤独的人他就在海上
[04:59.37]
[05:00.44]撑着船帆
[05:02.84]
[05:04.16]如果你看到他
[05:06.70]
[05:07.35]回到海岸
[05:11.01]
[05:20.23]就请你
[05:21.36]告诉他你的名字
[05:24.38]
[05:26.16]我的名字莉莉安`
        },
        {
            songName:'无问',
            singer:'毛不易',
            image:"./img/毛不易.jpg",
            origin:"./mp3/无问.mp3",
            lrc:`
[00:00.00]无问 - 毛不易
[00:02.21]词：毛不易
[00:04.42]曲：毛不易
[00:06.64]编曲：刘卓
[00:08.85]制作人：刘卓
[00:11.07]混音：周天澈
[00:13.28]配唱制作人：刘芳
[00:15.49]弦乐编写：靳锐
[00:17.71]弦乐录音：国际首席爱乐乐团 首席 李朋
[00:19.93]你问风为什么托着候鸟飞翔
[00:25.27]却又吹的让他慌张
[00:29.17]
[00:29.69]你问雨为什么滋养万物生长
[00:35.25]却也湿透他的衣裳
[00:39.08]
[00:39.66]你问他为什么亲吻他的伤疤
[00:45.20]却又不能带他回家
[00:49.46]
[00:50.50]你问我为什么还是不敢放下
[00:55.18]明知听不到回答
[00:58.91]
[00:59.87]如果光已忘了要将前方照亮
[01:04.64]
[01:05.14]你会握着我的手吗
[01:09.15]
[01:10.10]如果路会通往不知名的地方
[01:15.15]你会跟我一起走吗
[01:19.56]一生太短 一瞬好长
[01:24.53]我们哭着醒来 又哭着遗忘
[01:29.55]
[01:30.14]幸好啊 你的手曾落在我肩膀
[01:37.24]
[01:39.30]就像空中漂浮的
[01:42.21]渺小的 某颗尘土
[01:48.44]
[01:49.88]它到底 为什么 为什么
[01:54.33]不肯停驻
[01:58.12]
[02:00.19]直到乌云散去 风雨落幕
[02:10.37]他会带你找到 光的来处
[02:19.03]
[02:19.63]就像手边落满了
[02:22.18]灰尘的 某一本书
[02:28.55]
[02:29.96]它可曾 单薄地
[02:32.12]承载了 谁的酸楚
[02:38.61]
[02:40.23]尽管岁月无声 流向迟暮
[02:50.26]他会让你想起 你的归途
[02:59.47]
[03:44.95]如果光已忘了要将前方照亮
[03:50.72]你会握着我的手吗
[03:54.96]
[03:55.92]如果路会通往不知名的地方
[04:01.38]你会跟我一起走吗`
        },
        {
            songName:'大鱼',
            singer:'周深',
            image:"./img/周深.jpg",
            origin:"./mp3/大鱼.mp3",
            lrc:`
[00:00.00]大鱼 - 周深
[00:14.42]词：尹约
[00:28.85]曲：钱雷
[00:43.27]海浪无声将夜幕深深淹没
[00:48.93]
[00:50.09]漫过天空尽头的角落
[00:55.35]
[00:56.79]大鱼在梦境的缝隙里游过
[01:02.61]
[01:03.76]凝望你沉睡的轮廓
[01:08.45]
[01:09.88]看海天一色 听风起雨落
[01:16.48]执子手吹散苍茫茫烟波
[01:22.34]
[01:23.61]大鱼的翅膀 已经太辽阔
[01:31.09]我松开时间的绳索
[01:35.41]
[01:37.30]怕你飞远去 怕你离我而去
[01:43.87]更怕你永远停留在这里
[01:49.43]
[01:50.76]每一滴泪水 都向你流淌去
[01:57.57]
[01:58.58]倒流进天空的海底
[02:03.37]
[02:19.11]海浪无声将夜幕深深淹没
[02:24.73]
[02:25.86]漫过天空尽头的角落
[02:31.05]
[02:32.76]大鱼在梦境的缝隙里游过
[02:38.46]
[02:39.58]凝望你沉睡的轮廓
[02:43.98]
[02:45.63]看海天一色 听风起雨落
[02:51.86]
[02:52.41]执子手吹散苍茫茫烟波
[02:58.41]
[02:59.30]大鱼的翅膀 已经太辽阔
[03:06.57]
[03:07.08]我松开时间的绳索
[03:11.13]
[03:13.09]看你飞远去 看你离我而去
[03:19.22]
[03:19.86]原来你生来就属于天际
[03:25.87]
[03:26.68]每一滴泪水 都向你流淌去
[03:34.01]
[03:34.51]倒流回最初的相遇`
        }
    ]
}
MusicPlayer.method('init',function(){
    this.getVoice();
    // <div class="CD_data active" style="background-image: url(img/1.png)" data-song = 'yourName' data-origin = './mp3/1.mp3' data-singer = 'deng'></div>
    // <div class="CD_data" style="background-image: url(img/2.png)"  data-song = 'RockMusic' data-origin = './mp3/2.mp3' data-singer = 'deng'></div>
    // <div class="CD_data" style="background-image:url(img/3.jpg)" data-song='难念的经' data-origin = './mp3/3.mp3' data-singer='deng'></div>
    // <div class="CD_data" style="background-image:url(img/4.jpg)" data-song='认真的雪' data-origin = './mp3/4.mp3' data-singer='deng'></div>
    for(var cdItem of this.cd ){
        var div = document.createElement("div");
        $(div).addClass('CD_data').attr({
            style:`background-image:url(${cdItem.image})`,
            song:cdItem.songName,
            origin:cdItem.origin,
            singer:cdItem.singer
        })
        $('.nav_CD').append(div);
    }
    $('.CD_data:first-child').addClass('active')
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
        geci();
    })
    $('.control_prev').click(function(){
        prevPlay();
        geci();
    })
    geci();
    function geci(){
        var ul = document.querySelector('.lrc-container ul');
        var lrc = createLrcArray(self.activelrc);
        var config = {
            height:180,
            liHeight:30,
        }
        self.audDom.ontimeupdate = function (){
            setCurrent();
        }
        createLis();
        setCurrent();
        function createLrcArray(i) {
            var reg = /^(\[[\d:\.]+\])(.*)$/gm;
            var arr = [];
            while (result= reg.exec(self.cd[i].lrc)) {
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
    }
    

    function prevPlay(){
        self.activelrc --
        if(self.activelrc<0){
            self.activelrc = self.cd.length - 1;
        }
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
        self.activelrc ++
        if(self.activelrc>self.cd.length - 1){
            self.activelrc = 0;
        }
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
        self.audDom.setAttribute('src',$('.active').attr('origin'));
        self.audDom.play();
    }
    function updateName(){
        $('.songName').text($('.active').attr('song'));
        $('.singer').text($('.active').attr('singer'));
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
})
var MP = new MusicPlayer();
MP.init();
MP.rishi();
MP.player();
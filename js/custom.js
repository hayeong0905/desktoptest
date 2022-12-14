$(document).ready(function(){
  // 전체 레이아웃 설정
  // section 높이 값을 화면의 높이 값으로 설정
  // 주 메뉴 클릭시 자동으로 해당 section으로 이동
  // 마우스 휠의 움직임에 따라 화면 스크롤
  
  // window높이값을 변수 ht에 저장
  
  let ht = $(window).height(); //746
  console.log(ht);
  
  // section의 높이값을 window 높이값으로 지정
  $('section').height(ht);
  
  // 브라우져가 resize가 되면....
  $(window).resize(function(){
    let ht = $(window).height();
  $('section').height(ht);
  });
  
  // 마우스의 움직임에 따라 이미지의 위치 변경
  $('section').mousemove(function(e){
    // posX에 마우스 커서 X축 좌표
    let posX = e.pageX;
  
    // posY에 마우스 커서 X축 좌표
    let posY = e.pageY;
  

  
    // 첫번째 박스의 이미지 위치 값을 마우스 커서의 위치 값과 연동
    $('img.p11').css({right:20-(posX/30), bottom:20-(posY/30)});
    $('img.p12').css({right:130+(posX/20), bottom:-40+(posY/20)});
    $('img.p13').css({right:60+(posX/20), top:180+(posY/20)});

    // 두번째
    $('img.p21').css({right:-180-(posX/30), bottom:-480-(posY/30)});
    $('img.p22').css({right:130+(posX/50), bottom:-40+(posY/50)});

    // 세번째
    $('img.p31').css({right:180-(posX/30), bottom:30-(posY/30)});
    $('img.p32').css({right:110+(posX/20), bottom:-270+(posY/20)});
    $('img.p33').css({right:-70+(posX/20), bottom:-130+(posY/20)});
  
      // 네번째
    $('img.p41').css({right:20-(posX/30), bottom:-120-(posY/30)});
    $('img.p42').css({right:0+(posX/20), bottom:-180+(posY/20)});
  });

    // 주 메뉴 클릭시 자동으로 해당 section으로 이동
    $('ul#menu li').click(function(e){
      e.preventDefault();

      // ht에 window 높이값 저장
      let ht=$(window).height();
      // 변수 i에 현재 클릭한 li 순서 값을 저장
      let i=$(this).index();
      // 브라우저의 높이값*순서값=현재 박스의 위치값
      let nowTop=i*ht;
      // console.log(i);
      // 해당 스크롤의 위치 값으로 문서를 이동
      $('html,body').stop().animate({scrollTop : nowTop},1400);
    });

    $(window).scroll(function(){

      let ht=$(window).height();

      let scroll=$(window).scrollTop();
    

    // if(scroll >= ht*0 && scroll < ht*1){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(0).addClass('on');
    // }
    // if(scroll >= ht*1 && scroll < ht*2){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(1).addClass('on');
    // }
    // if(scroll >= ht*2 && scroll < ht*3){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(2).addClass('on');
    // }
    // if(scroll >= ht*3 && scroll < ht*4){
    //   $('ul#menu li').removeClass();
    //   $('ul#menu li').eq(3).addClass('on');
    // }

    for(let i=0; i<5; i++){
      if(scroll >= ht*i && scroll <ht*(i+1)) {
        $('ul#menu li').removeClass();
        $('ul#menu li').eq(i).addClass('on');
      }
    }
});
    


    $('section').mousewheel(function(event,delta){

      if(delta>0){

        let prev=$(this).prev().offset().top;

        $('html, body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
      }
    



      if(delta<0){

        let next=$(this).next().offset().top;

        $('html, body').stop().animate({scrollTop:next},1400,'easeOutBounce')
      }
    })
    
  });
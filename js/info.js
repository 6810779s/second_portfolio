let info__contact = document.querySelector('#info .info__bottomContainer .info__contact');
let info__smallImg = document.querySelector('#info .info__img1 .info__img2');
let info_text = document.querySelector('.main_name_info h1');
let info_next_btn = document.querySelector('.infoMe__writing .info_mobile_btn');
let TopNum_info_big = 500;
let direction_info = '';

window.onresize = function(){
  document.location.reload();
}; //브라우저 창 크기 조절시 자동 새로고침

if (matchMedia("screen and(max-width: 767px)").matches){
  info_next_btn.addEventListener('click', function(){
    if (info_next_btn.value==='next'){
      info__contact.style.top = 0;
      info__smallImg.style.top = 0;
      info_next_btn.value='prev';
      info_next_btn.innerHTML='prev';
      info_text.innerHTML = 'Information';
    }else{
      info__contact.style.top = 100 +'%' ;
      info__smallImg.style.top = 100+ '%';
      info_next_btn.value='next';
      info_next_btn.innerHTML='next';
      info_text.innerHTML = 'About Me';
    }
  });
  
}else if(matchMedia("screen and (max-width: 1023px)").matches){
}else if(matchMedia("screen and (min-width: 1024px)").matches){
  
  TopNum_info_big = 500;
  direction_info = ''
  document.addEventListener('scroll', function(){
    let currentPos = document.documentElement.scrollTop;
    if (currentPos>TopNum_info_big){
      if(direction_info!='down'){
        direction_info='down';
        info__contact.style.top = 0 ;
        info__smallImg.style.top = 0;
        info_text.innerHTML = 'Information';
      }
    }else{
      if(direction_info!='up'){
        direction_info = 'up';
        info__contact.style.top = 100 +'%' ;
        info__smallImg.style.top = 100 + '%';
        info_text.innerHTML = 'About Me';
      }
    }
  });

  


}







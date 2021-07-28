let info__contact = document.querySelector('#info .info__bottomContainer .info__contact');
let info__smallImg = document.querySelector('#info .info__img1 .info__img2');
let info_text = document.querySelector('.main_name_info h1');
let TopNum_info_big = 500;
let direction_info = '';

window.onresize = function(){
  document.location.reload();
}; //브라우저 창 크기 조절시 자동 새로고침

if (matchMedia("screen and (min-width: 335px) and (max-width: 757px)").matches){
  TopNum_info_big = 120;
  direction_info = ''
}else if(matchMedia("screen and (min-width: 758px) and (max-width: 1023px)").matches){
  
  TopNum_info_big = 280;
  direction_info = ''
}else{
  
  TopNum_info_big = 500;
  direction_info = ''
}

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





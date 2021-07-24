let info__contact = document.querySelector('#info .info__bottomContainer .info__contact');
let info__smallImg = document.querySelector('#info .info__img1 .info__img2');
let info_text = document.querySelector('.main_name_info h1');
let TopNum_info_big = 400;
let direction_info = '';

document.addEventListener('scroll', function(){
  let currentPos = document.documentElement.scrollTop;
  if (currentPos>TopNum_info_big){
    if(direction_info!='down'){
      direction_info='down';
      info__contact.style.top = 0 ;
      info__smallImg.style.top = 0;
      info_text.innerHTML = 'Contact';
    }
  }else{
    if(direction_info!='up'){
      direction_info = 'up';
      info__contact.style.top = 35 +'rem' ;
      info__smallImg.style.top = 35 + 'rem';
      info_text.innerHTML = 'Information';
    }
  }
});



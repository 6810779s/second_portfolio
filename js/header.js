let header = document.querySelector('#header');
let TopNum_header = 80;
let direction_header = '';

document.addEventListener('scroll', function(){
  let currentPos = document.documentElement.scrollTop;
  if (currentPos>TopNum_header){
    if(direction_header != 'down'){
      direction_header = 'down';
      header.style.background = `rgb(250,221,221)`;
    }
  }else{
    if(direction_header != 'up'){
      direction_header = 'up';
      header.style.background = 'none';
    }
  }
});
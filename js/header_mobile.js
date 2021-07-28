let hamburgerBt = document.querySelector("#header .hamburgerBt");
let category = document.querySelector("#header .category");
let box = 'none';

hamburgerBt.addEventListener('click',function(){
  if (box==='none'){
    console.log('sss');
    category.style.display = 'block';
    box = 'block';
  }else{
    console.log('aaa');
    category.style.display = 'none';
    box = 'none';
  }
  
});
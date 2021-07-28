let hamburgerBt = document.querySelector("#header .hamburgerBt");
let category = document.querySelector("#header .category");
let box = 'none';

hamburgerBt.addEventListener('click',function(){
  if (box==='none'){
    category.style.display = 'block';
    box = 'block';
  }else{
    category.style.display = 'none';
    box = 'none';
  }
  
});
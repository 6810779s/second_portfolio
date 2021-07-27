let portfolio_project_img = document.querySelector('.portfolio .portfolio_project_img');
let portfolio_up = document.querySelector('.portfolio .up');
let portfolio_down = document.querySelector('.portfolio .down');

let cafe_project_img = document.querySelector('.cafe .cafe_project_img');
let cafe_up = document.querySelector('.cafe .up');
let cafe_down = document.querySelector('.cafe .down');

let portfolioSecond_project_img = document.querySelector('.portfolio_second .portfolioSecond_project_img');
let portfolioSecond__up = document.querySelector('.portfolio_second .up');
let portfolioSecond__down = document.querySelector('.portfolio_second .down');

portfolio_up.addEventListener('click',function(){
  portfolio_project_img.style.top = (-293.8 + 40) + 'rem';
});

portfolio_down.addEventListener('click',function(){
  portfolio_project_img.style.top = 0;
});

cafe_up.addEventListener('click',function(){
  cafe_project_img.style.top = (-361.1 + 40) + 'rem';
});

cafe_down.addEventListener('click',function(){
  cafe_project_img.style.top = 0;
});

portfolioSecond__up.addEventListener('click',function(){
  portfolioSecond_project_img.style.top = (-341.8 + 40) + 'rem';
});

portfolioSecond__down.addEventListener('click',function(){
  portfolioSecond_project_img.style.top = 0;
});




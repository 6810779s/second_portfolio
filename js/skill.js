/*오른쪽 왼쪽 슬라이드*/
let skill_others = document.querySelector('#skills .other');
let button_skills = document.querySelector('#skills .button_skills');
let main_name_skills = document.querySelector('#skills .main_name_skills h1');
/*글자 깜빡임 효과*/
let studying = document.querySelector('#skills .studying');
let shown_skills = true;

setInterval(twinkle, 500);

button_skills.addEventListener('click', function(){
  if (button_skills.value === 'web'){
    button_skills.value = 'others';
    skill_others.style.left = 0;
    main_name_skills.innerHTML = 'Skills_Other'
  }else{
    button_skills.value = 'web';
    skill_others.style.left = 110 + 'rem';
    main_name_skills.innerHTML = 'Skills_WEB'
  }
});

function twinkle(){
  if(shown_skills){
    studying.style.display = 'none';
    shown_skills = false;
  }else{
    studying.style.display = 'block';
    shown_skills= true;
  }
}


const header = document.getElementById('header');

document.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop !=0){
    header.classList.add('back');
  }else{
    header.classList.remove('back');
  }
});
/* 浮現動畫 */

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

      observer.unobserve(entry.target);

    }

  });

},{
  threshold:0.2
});

document.querySelectorAll('.hidden')
.forEach(el=>{

  observer.observe(el);

});


/* 回頂部按鈕 */

const topBtn =
document.querySelector('.top-btn');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 400){

    topBtn.classList.add('show-btn');

  }else{

    topBtn.classList.remove('show-btn');

  }

});

topBtn.addEventListener('click',()=>{

  window.scrollTo({

    top:0,
    behavior:'smooth'

  });

});


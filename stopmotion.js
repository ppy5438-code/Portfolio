/* =========================
   浮現動畫
========================= */

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");
      observer.unobserve(entry.target);

    }

  });

},{
  threshold:0.15
});

document.querySelectorAll(".hidden")
.forEach(el=>{

  observer.observe(el);

});


/* =========================
   回頂部按鈕
========================= */

const topBtn =
document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 500){

    topBtn.classList.add("show-btn");

  }
  else{

    topBtn.classList.remove("show-btn");

  }

});

topBtn.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});


/* =========================
   三支影片切換
========================= */

const videos = [

  "https://www.youtube.com/embed/u-YSeEq6Sps",

  "https://www.youtube.com/embed/amihZasJidM",

  "https://www.youtube.com/embed/juN-UYlGv3o"

];

let current = 0;

const processVideo =
document.getElementById("processVideo");

document
.getElementById("videoSwitch")
.addEventListener("click",()=>{

  current++;

  if(current >= videos.length){

    current = 0;

  }

  processVideo.src =
  videos[current];

});
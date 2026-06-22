
/* =====================
   圖片全螢幕預覽
===================== */

/* =====================
   圖片全螢幕預覽
===================== */

const preview =
document.getElementById("preview");

const previewImg =
document.getElementById("previewImg");

document
.querySelectorAll(".draw-item")
.forEach(item=>{

  const img =
  item.querySelector("img");

  item.addEventListener("mouseenter",()=>{

    previewImg.src =
      img.dataset.full;

    preview.classList.add("show");
  });

  item.addEventListener("mouseleave",()=>{

    preview.classList.remove("show");
  });

});

/* =====================
   浮現動畫
===================== */

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");
    }

  });

},{
  threshold:0.15
});

document
.querySelectorAll(".hidden")
.forEach(el=>{

  observer.observe(el);

});


/* =====================
   回頂部按鈕
===================== */

const topBtn =
document.querySelector(".top-btn");

window.addEventListener("scroll",()=>{

  if(window.scrollY > 300){

    topBtn.classList.add("show-btn");

  }else{

    topBtn.classList.remove("show-btn");
  }

});

topBtn.addEventListener("click",()=>{

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});
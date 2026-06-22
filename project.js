/* 浮現動畫 */

const hiddenElements =
document.querySelectorAll('.hidden');

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

hiddenElements.forEach(el=>{

  observer.observe(el);

});


/* 影片切換 */

const mainVideo =
document.getElementById("mainVideo");

const videoToggle =
document.getElementById("videoToggle");

const videoText =
document.getElementById("videoText");

let showingMain = true;

videoToggle.addEventListener("click",()=>{

  if(showingMain){

    mainVideo.src =
    "https://www.youtube.com/embed/PROCESS_VIDEO_ID";

    videoText.textContent =
    "點擊返回完整動畫";

  }else{

    mainVideo.src =
    "https://www.youtube.com/embed/FU-AKNasLpY";

    videoText.textContent =
    "點擊觀看製作過程";

  }

  showingMain = !showingMain;

});

// 回頂部按鈕
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll', () => {

  if (window.scrollY > 300) {
    topBtn.style.opacity = '1';
    topBtn.style.pointerEvents = 'auto';
  }

  else {
    topBtn.style.opacity = '0';
    topBtn.style.pointerEvents = 'none';
  }

});


// 平滑回頂部
topBtn.addEventListener('click', () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

});
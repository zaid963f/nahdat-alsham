const azkar = [
  "استغفر الله العظيم",
  "اللهم صلِّ على سيدنا محمد",
  "لا إله إلا أنت سبحانك إني كنت من الظالمين",
];

function getRandomZikr() {
  const zikr = Math.floor(Math.random() * azkar.length);
  return azkar[zikr];
}

window.onload = () => {
  const zikrText = document.getElementById("zikr-text");
  zikrText.innerText = getRandomZikr();
};

const closeBtn = document.getElementById('close-btn');
const popup = document.getElementById('zikr-popup');

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; 
});

let scroll=document.getElementById("scrollToTop")

window.onscroll = function() {
  if (scrollY > 20) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
};

scroll.onclick = function() {
  scrollTo({
    top:0,
    behavior:"smooth"
  })
};

//exe.1
const bannerSelected = document.querySelector(".banner");

// setTimeout(bannerOn, 5000);
// function bannerOn() {
//   bannerSelected.classList.toggle("banner");
// }

//exe.2
// document.createElement('p')
let counter = 11;

function bannerCntDwn() {
  counter--;
  bannerSelected.textContent = `sale ends in ${counter}`;
  if (counter <= 0) clearInterval(id);
}
let id = setInterval(bannerCntDwn, 1000);

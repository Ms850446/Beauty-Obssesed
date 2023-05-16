let skinTypeImage = document.getElementById("knowSkinTypes");
let importanceImg = document.getElementById("importanceImg");
let link=document.getElementById("knowYourSkinType")
let button=document.getElementById("knowSkinTypes")

button.addEventListener("click",()=>{
  console.log("hh")
  link.click()
})

window.onscroll = function () {
  let value = scrollY;
  console.log(value);
  if (value > 500) {
    skinTypeImage.style.animation = "slide-out 2s forwards";
    // skinTypeImage.style.left = 100 + "%";
  } else if (value < 480) {
    skinTypeImage.style.animation = "slide-in 2s forwards";
  }

  if (value > 280) {
    importanceImg.style.display = "flex";
    importanceImg.style.animation = "fade-in 3s forwards";
  } else if (value < 240) {
    // importanceImg.style.display = "flex";
    importanceImg.style.animation = "fade-out 3s forwards";
  }
};



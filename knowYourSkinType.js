let nextButton = document.getElementById("nextButton");
let animationStepsImg = document.getElementById("animationStepsImg");
let images = [
  "images/faceWash1.avif",
  "images/waiting5minutes.avif",
  "images/wibeFace.jpg",
];
let animationSteps = document.getElementById("animationSteps");
let oilyButton = document.getElementById("oilyButton");
let dryButton = document.getElementById("dryButton");
let oily = document.getElementById("oily");
let dry = document.getElementById("dry");
let resultImg = document.getElementById("resultImage");
let whatFound = document.getElementById("foundWhat");
let result = document.getElementById("result");
animationSteps = animationSteps.getElementsByTagName("li");
let index = 1;
let fading=true
function animation() {
  animationSteps[0].style.display = "block";
  animationSteps[0].style.animation = "fade-in 2s forwards;";
}

nextButton.addEventListener("click", () => {
  animationSteps[index - 1].style.display = "none";
  index %= animationSteps.length;
  if (index == 0) {
    whatFound.style.display = "flex";
    result.style.display = "flex";
    oilyButton.style.display = "block";
    dryButton.style.display = "block";
    whatFound.scrollIntoView({ behavior: "smooth" });
  } else {
    whatFound.style.display = "none";
    result.style.display = "none";
    oily.style.display = "none";
    dry.style.display = "none";
    resultImg.style.display = "none";
  }
  animationSteps[index].style.display = "block";
  animationSteps[index].style.animation = "fade-in 3s forwards";
  let background = images[index];
  console.log(background);
  console.log(index);
  animationStepsImg.style.backgroundImage = `url(${background})`;
  animationStepsImg.style.display = "none";
  setInterval(() => {
    animationStepsImg.style.display = "block";
  }, 1);

  animationStepsImg.style.animation = "fade-in 3s forwards";

  index = index + 1;
});

oilyButton.addEventListener("click", () => {
  whatFound.style.display = "none";
  oilyButton.style.display = "none";
  dryButton.style.display = "none";
  oily.style.display = "block";
  resultImg.style.display = "block";
  resultImg.style.backgroundImage="url(images/Oily.jpg)"
  resultImg.style.animation="fade-in 3s forwards"

});

dryButton.addEventListener("click", () => {
  whatFound.style.display = "none";
  oilyButton.style.display = "none";
  dryButton.style.display = "none";
  dry.style.display = "block";
  resultImg.style.display = "block";
  resultImg.style.backgroundImage="url(images/dry.jpg)"
  resultImg.style.animation="fade-in 3s forwards"
});


window.onscroll=function(){
let value=scrollY
if(value>600){
    fading=true
    animationSteps[index-1].style.display="none"
    setInterval(()=>{
        animationSteps[index-1].style.display = "block";
    },1)

    animationSteps[index-1].style.animation = "fade-out 3s forwards";
    animationStepsImg.style.animation = "fade-out 2s forwards";
    nextButton.style.animation="fade-out 3s forwards"
}
else if (value<255&&fading){
    fading=false
    animationSteps[index-1].style.display = "none";
    setInterval(()=>{
        animationSteps[index-1].style.display = "block";
    },1)
    animationSteps[index-1].style.animation = "fade-in 3s forwards";
    animationStepsImg.style.animation = "fade-in 3s forwards";
    nextButton.style.animation="fade-in 3s forwards"
}
}



window.addEventListener('scroll' , ()=>{
    document.body.style.cssText += `--paralax:${window.scrollY}px; --paralax-color:${window.scrollY};` 
    console.log(window.scrollY)
})

const houseSlider = document.querySelector('.houses-slider')
const houseSliderButtonLeft = document.querySelector('.houses-head-navigate-sliderbuttons-buttonleft')
const houseSliderButtonRight = document.querySelector('.houses-head-navigate-sliderbuttons-buttonright')
let dd = houseSlider.scrollWidth / houseSlider.childElementCount

houseSliderButtonLeft.addEventListener('click' , ()=>{
    if (houseSliderButtonLeft.className == 'houses-head-navigate-sliderbuttons-button houses-head-navigate-sliderbuttons-buttonleft active'){
        houseSlider.scrollLeft -= dd
    }
    setTimeout(() => {
        if (houseSlider.scrollLeft >= 0) {
            houseSliderButtonRight.classList.add('active')
        }
        if (houseSlider.scrollLeft <= 0) {
            houseSliderButtonLeft.classList.remove('active')
        }
    }, 500);
})
houseSliderButtonRight.addEventListener('click' , ()=>{
    console.log(houseSlider.childElementCount)
    if (houseSliderButtonRight.className == 'houses-head-navigate-sliderbuttons-button houses-head-navigate-sliderbuttons-buttonright active'){
        houseSlider.scrollLeft += dd
    }
    setTimeout(() => {
        if (houseSlider.scrollLeft > 0) {
            houseSliderButtonLeft.classList.add('active')
        }
        if (houseSlider.scrollLeft + houseSlider.clientWidth >= houseSlider.scrollWidth){
            houseSliderButtonRight.classList.remove('active')
        }
    }, 500);
})



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('trigger-show');
      } 
      window.addEventListener('scroll' , ()=>{
        if (window.scrollY <= 0) {
            change.target.classList.remove('trigger-show')
        }
      })
    });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.trigger-act');
  
  setTimeout(()=>{
    for (let elm of elements) {
      observer.observe(elm);
    }
  
  } , 500)
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var side = 'back';

function smoothScroll(target, duration) {
    const x = document.getElementById('myTopnav');
    x.classList.remove('responsive');
    var theTarget = document.querySelector(target);
    var targetPosition = theTarget.offsetTop;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t/=d/2;
        if (t < 1) return c/2*t*t+b;
        t--;
        return -c/2 * (t * (t-2)-1)+b;
    }
    requestAnimationFrame(animation);
}

function scrollAppear() {
    
    var screenPosition = window.innerHeight;
    
    var introText = document.querySelectorAll('.coolCards');
    for( let tex of introText) {
        var introPositon = tex.getBoundingClientRect().top;
        if(introPositon < (screenPosition* 0.85) && introPositon > (screenPosition* 0.1) ) {
            tex.style.opacity = 1;
            tex.style.transform = "translateY(0%)";
            
        } else {
            tex.style.opacity = 0;
            tex.style.transform = "translateY(10%)";
        }
    }

    var disspia = document.querySelectorAll('.dissapeas');
    for( let tex of disspia) {
        var introPositon = tex.getBoundingClientRect().top;
        if(introPositon < (screenPosition* 0.2) ) {
            tex.style.opacity = 0;
            tex.style.transform = "translateY(-10%)"
            tex.style.transition = "0.5s all ease-in-out";
         } else {
            tex.style.opacity = 1;
            tex.style.transform = "translateY(0)"
         }
    }
   
    var dissss = document.querySelector('.background');
    dissss.style.transform = "translate3d(0px,"+ window.pageYOffset*0.5 + "px, 0px) scaleX(-1)";
   
}
function tonatova() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
function Repeat() {
    setTimeout(() => {
      functionSlide();
      Repeat();

    }, 5000);
  }
function functionSlide(){
    if (side === 'front') {
      slide1.classList.add('back');
      slide1.classList.remove('front');
      slide2.classList.remove('back');
      slide2.classList.add('front');
      side = 'back';
    } else {
      slide1.classList.add('front');
      slide1.classList.remove('back');
      slide2.classList.remove('front');
      slide2.classList.add('back');
      side = 'front';

    }
  }
Repeat();
window.addEventListener("scroll", scrollAppear);

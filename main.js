// document.addEventListener('DOMContentLoaded', function() {
//   var body = document.documentElement || document.body;

//   document.addEventListener('scroll', function() {
//       // "Disable" the horizontal scroll.
//       if (body.scrollLeft !== 0) {
//           body.scrollLeft = 0;
//       }
//   });
// });

// var body = document.documentElement || document.body;

// document.addEventListener('scroll', function() {
//     // "Disable" the horizontal scroll.
//     if (body.scrollLeft !== 0) {
//         body.scrollLeft = 0;
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var body = document.documentElement || document.body;

//   body.addEventListener('scroll', function(event) {
//       // Prevent the default horizontal scroll behavior
//       event.preventDefault();

//       // You can also set scrollLeft to 0 to make sure it stays at the top horizontally
//       body.scrollLeft = 0;
//   });k
// });

let spBG = document.querySelector('.sp-bg');
let fpIMG3Div = document.querySelector('.fp-img-3-div');

// ---- Adding scene 1 imgs -----

for(let i=1;i <= 40; i++){
  if(i < 10) spBG.innerHTML += `<img fetchpriority="high" class="sc-1-img0${i} sc-1-img s1-img" src="scene1/img-min/v1000${i}.png" alt="">`
  if(i > 9) spBG.innerHTML += `<img fetchpriority="high" class="sc-1-img${i} sc-1-img s1-img" src="scene1/img-min/v100${i}.png" alt="">`
}

// ---- Adding scene 2 imgs -----

// fpIMG3Div.innerHTML += `<img class="fp-img-3" src="./scene2/Race Road.png" alt="">`
// for(let i=0; i < 26; i++){
//   if(i == 0) fpIMG3Div.innerHTML += `<img fetchpriority="high" class="fp-img-3-anim fp3-block" src="./scene3/v1000${i}-min.png" alt="">`
//   if(i <= 9 && i!= 0) fpIMG3Div.innerHTML += `<img fetchpriority="high" class="fp-img-3-anim" src="./scene3/v1000${i}-min.png" alt="">`
//   if(i > 9) fpIMG3Div.innerHTML += `<img fetchpriority="high" class="fp-img-3-anim" src="./scene3/v100${i}-min.png" alt="">`
  
  
// }
// fpIMG3Div.innerHTML += `<img class="fp-img-3" src="./scene2/Race Road-1.png" alt="">`

let loadingDiv = document.querySelector('.loading');
let allIMG = document.querySelectorAll('.s1-img');


let imgSC1Counter = 0;
allIMG.forEach(img =>{
  img.addEventListener('load', ()=>{
    imgSC1Counter++;
    // console.log(imgSC1Counter);
    if(imgSC1Counter >= 44){
      loadingDiv.style.opacity = '0';
    }
  })
})

let stylesheet = document.querySelector('style');
console.log(stylesheet);

let cbSVG = document.querySelector('.cBackSVG');
let cbCar = document.querySelector('.CB-Car');
let cbBack = document.querySelector('.CB-Back');
let cbCircle = document.querySelector('.CB-Circle');
let anArray = [cbCar];

translateElem(10, cbCar, 5, 'CB1', 50);
translateElem(10, cbBack, 3, 'CB2', 50);
translateElem(10, cbCircle, 3, 'CB3', 50);

function translateElem(positionsAmo, elem, rangeVal, animName, duration){
  let percentage = 100 / positionsAmo;
  let defaultVal;
  stylesheet.innerHTML += `@keyframes ${animName}{\n`;
  for(let i = 0; i < positionsAmo; i++){
    console.log(i);
    if(i==0) {
      defaultVal = `${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}% ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}%`
      stylesheet.innerHTML += `${(i * percentage)}%{translate: ${defaultVal}}\n`
      elem.style.translate = defaultVal;
    }
    else{
      stylesheet.innerHTML += `${(i * percentage)}%{translate: ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}% ${Math.floor(Math.random() * rangeVal) - (rangeVal / 2)}%}\n`
    }
  }
  stylesheet.innerHTML += `100%{translate: ${defaultVal}}\n}\n`;
  elem.style.animation = `${animName} ${duration}s cubic-bezier(0.2, 0, 0.1, 1) 0.5s infinite forwards`;
}

let scrollTopVal;
let sc1IMG1 = document.querySelector('.sp-img-1');
let sc1IMG2 = document.querySelector('.sp-img-2');
let sc1IMG3 = document.querySelector('.sp-img-3');
let sc1IMG4 = document.querySelector('.sp-img-4');
let sc1IMG5 = document.querySelector('.sc-1-img00');
let sc1IMGs = document.querySelectorAll('.s1-img');
let wrapper = document.querySelector('.wrapper');
let randomHeight = document.querySelector('.random-height');
let overlaySC1 = document.querySelector('.overlay-sc1');
let allSC1IMGs = [...document.querySelectorAll('.sc-1-img')];

// wrapper.addEventListener('scroll', ()=>{
//   // console.log((document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight);
//   // console.log('bruh');
//   scrollTopVal = (document.documentElement.clientHeight + wrapper.scrollTop) / document.documentElement.clientHeight;
//   // console.log((scrollTopVal - 1.85) / 0.15);
//   if(scrollTopVal > 1.85 && scrollTopVal < 2.01) spBG.style.opacity = ((scrollTopVal - 1.86) / 0.14);
//   if(scrollTopVal > 2) spBG.style.opacity = 1;
//   if(scrollTopVal < 1.85) spBG.style.opacity = 0;

// })

document.addEventListener('scroll', ()=>{
  // console.log((document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight);
  // console.log('bruh');
  scrollTopVal = (document.documentElement.clientHeight + document.documentElement.scrollTop) / document.documentElement.clientHeight;
  
  // console.log(document.documentElement.scrollHeight);
  // console.log(document.documentElement.offsetHeight);
  // console.log(document.documentElement.scrollHeight / document.documentElement.offsetHeight);
  // It's actually better we set it, cause we obviously will change the height of the document as we add more pages
  // So it is 3.35 actually


  // console.log((scrollTopVal - 1.85) / 0.15);
  if(scrollTopVal > 1.85 && scrollTopVal < 2.01) spBG.style.opacity = ((scrollTopVal - 1.86) / 0.14);
  if(scrollTopVal < 2) cbSVG.style.display = 'block';
  if(scrollTopVal > 2) {spBG.style.opacity = 1; cbSVG.style.display = 'none';};
  if(scrollTopVal < 1.85) spBG.style.opacity = 0;

  // console.log(scrollTopVal);
  if(scrollTopVal < 3.35){
    sc1IMG1.style.translate = `0 ${(3.35 - scrollTopVal) * 1}vh`;
    sc1IMG2.style.translate = `0 ${(3.35 - scrollTopVal) * 15}vh`;
    sc1IMG3.style.translate = `0 ${(3.35 - scrollTopVal) * 60}vh`;
    sc1IMG4.style.translate = `0 ${(3.35 - scrollTopVal) * 62}vh`;
    sc1IMG5.style.translate = `0 ${(3.35 - scrollTopVal) * 68}vh`;
  }

  if(scrollTopVal < 3.35){
    randomHeight.style.display = 'none';
    spBG.style.inset = '0';
    spBG.style.bottom = 'none';
    spBG.style.position = 'relative';
    // spBG.style.translate = `0 0`;
    // overlaySC1.style.translate = `0 0`;
  }

  if(scrollTopVal >= 3.35) sc1IMGs.forEach(img => img.style.translate = '0 0');

  if(scrollTopVal >= 3.35){
    randomHeight.style.display = 'block';
    spBG.style.inset = 'auto';
    spBG.style.bottom = '0';
    spBG.style.position = 'fixed';
    // spBG.style.translate = `-${getScrollbarWidth() * 0.75}px 0px`;
    // overlaySC1.style.translate = `-${getScrollbarWidth() * 0.75}px 0px`;
  }

  if(scrollTopVal < 3.5 && scrollTopVal > 2.5) {
    allSC1IMGs.forEach(img => img.style.visibility = 'hidden');
    document.querySelector('.sc-1-img00').style.visibility = 'visible';
  }

  // I think there should be a gap from vertical to horizontal scroll

  if(scrollTopVal > 3.5 && scrollTopVal < 6){
    // console.log(Math.trunc((scrollTopVal - 3.35)*20)+1); // we want a frame per 5vh scroll so *20 actually works perfectly
    allSC1IMGs.forEach(img => img.style.visibility = 'hidden');
    let imgVal = Math.trunc((scrollTopVal - 3.5)*20);
    if(imgVal > 40) imgVal = 40;
    allSC1IMGs[imgVal].style.visibility = 'visible';

    // 2 is (5.35 - 3.35 - the difference between the scroll, * 25 so we get to 50%)
    // console.log((2 - (5.35 - scrollTopVal)) * 25);
    sc1IMG2.style.translate = `${(2 - (5.5 - scrollTopVal)) * 5}% 0`;
    sc1IMG3.style.translate = `${(2 - (5.5 - scrollTopVal)) * 24}% 0`;
    sc1IMG4.style.translate = `${(2 - (5.5 - scrollTopVal)) * 25}% 0`;
  }
  
  if(scrollTopVal > 5.3 && scrollTopVal < 5.8){
    // console.log((0.1 - (5.5 - scrollTopVal)) * 10);
    overlaySC1.style.opacity = `${(0.1 - (5.5 - scrollTopVal)) * 10}`;
  }
  else if(scrollTopVal < 5.3){
    overlaySC1.style.opacity = `0`;
  }

  if(scrollTopVal > 5.8){
    // overlaySC1.style.transition = 'opacity 0.3s ease';
    // overlaySC1.style.opacity = '0';
    // setTimeout(() => {
    //   overlaySC1.style.position = 'relative';
    // }, 500);
    randomHeight.style.display = 'none';
    spBG.style.inset = '0';
    spBG.style.bottom = 'none';
    spBG.style.position = 'relative';
  }
  else if(scrollTopVal < 5.8 && scrollTopVal > 3.5){
    // overlaySC1.style.transition = 'opacity 0.1s ease';
    // overlaySC1.style.transition = 'none';
    randomHeight.style.display = 'block';
    spBG.style.inset = 'auto';
    spBG.style.bottom = '0';
    spBG.style.position = 'fixed';
    overlaySC1.style.position = 'fixed';
  }



  // ------------------------------------------------------------------
  //                       - First Transition -
  // ------------------------------------------------------------------

  // To automate everything easily
  // Make an array of arrays.
  // The arrays will have the values like :scrollAbove element attribute attributeSelect(ifneeded) newValue
  // So it will basically be something like: 5.8      spBG    style     opacity                   0
  // Or it will basically be something like: 5.3      spBG    innerHTML                           'newText'
  // Now since all of these will be in an array we can sellect it and do something like
  // if(scrollTop < array[2][1] && scrollTop > array[1][1]){ etc.}
  // after that we need a for loop for the amount of values in array and so we can use i+1 i-1 and then
  // we probably have to add it to the innerHTML of the <script> from HTML, cause otherwise idk how we'd do it automatically

  // Yeah nah. I came across IntersectionObservers. Way better as it doesn't rely on the scrollTop values.
  // Relying on the scrollTop values is extremely difficult if user resize windows and if we made something to have a height with vw values
  // We'd have to add up the heights of each section and then make a refer point to this calculation each time we get to a certain stage
  // Which IntersectionObserver already kind of does. However, I will admit first transition seems way more responsive than the second one.
  

  // console.log(observedFP3);
  if(observedFP3 == true && observedFP3Val == 0){
    let start = 0;
    observedFP3Val++;
    animRunning = true;

    setTimeout(() => {
      let fp3Interval = setInterval(() => {
        fp3IMGs.forEach(img => {
          img.classList.remove('fp3-block');
        });
  
        if (fp3IMGs[start]) {
          fp3IMGs[start].classList.add('fp3-block');
          // console.log(fp3IMGs[start]);
          start++;
        }
  
        if (start >= fp3IMGs.length) {
          clearInterval(fp3Interval);
          animRunning = false;
          // observedFP3Val = 0;
        }
      }, 50);
    }, 400);

  }



  if(observedFP4 == true && observingFP4 == false){
    observingFP4 = true;

    fp4Interval = setInterval(() => {
      let newContainer = document.createElement('div');
      newContainer.classList.add('fp-4-container');
      newContainer.style.filter = `url(#blurFilter${Math.trunc(Math.random()*3) + 1})`;
      // console.log(Math.trunc(Math.random()*3) + 1);
  
      let randomHoriz = (Math.random() * 20) + 1;
      
      let newRandom = document.createElement('div');
      newRandom.classList.add('fp-4-random-class');
      // newRandom.style.transition = "left 2s ease 1s, right 2s ease 1s";
      if(randomHoriz < 10) {
        newRandom.style.left = 48 - randomHoriz +"%";
        newRandom.style.translate = `-50% -50%`;
      }
      if(randomHoriz > 10) {
        newRandom.style.right = 58 - randomHoriz +"%";
        newRandom.style.translate = `50% -50%`;
      }
      newRandom.style.top = `${(Math.random() * 100) + 1}%`;
      newRandom.style.height = `${(Math.random() * 15) + 5}%`;
      newRandom.style.width = `${(Math.random() * 12) + 13}%`;
      newRandom.style.borderRadius = `${(Math.random() * 40) + 20 }%`;
      newRandom.style.opacity = 0;
      newRandom.style.filter = `opacity(1)`;
      
      newContainer.appendChild(newRandom);
      fp4Center.appendChild(newContainer);
      
      setTimeout(() => {
        if(randomHoriz > 10) newRandom.style.right = "0%";
        if(randomHoriz < 10) newRandom.style.left = "0%";

        // console.log(parseInt(newRandom.style.top));
        if(parseInt(newRandom.style.top) > 50) newRandom.style.top = (parseInt(newRandom.style.top) - (parseInt(newRandom.style.top) - 50) * 0.3)+"%";
        if(parseInt(newRandom.style.top) < 50) newRandom.style.top = (parseInt(newRandom.style.top) + (50 - parseInt(newRandom.style.top)) * 0.3)+"%";

        newRandom.style.opacity = `${(Math.random() * 0.6) + 0.2}`;
        newRandom.style.opacity = 1;
        newRandom.style.filter = `opacity(0)`;
      }, 1);
      
      setTimeout(() => {
        fp4Center.removeChild(newContainer);
      }, 300);

    }, 150);

    fp4Interval2 = setInterval(() => {
      fp4Driver.style.translate = `${(Math.random()*2) - 1}% ${(Math.random()*2) - 1}%`
    }, 75);


    // console.log(fp4BlurOverlay);
    for(let i = 1; i<=6; i++){
      let randomBlurVal = (Math.random() * 3) + 1;
      fp4BlurContainer.innerHTML += `<div class="fp-4-blur" style="filter: blur(min(${randomBlurVal}vw,${randomBlurVal + 1}vh)); top:${Math.random() * 101}%; left:${Math.random() * 101}%; width:${(Math.random() * 12) + 5}%; height:${(Math.random() * 20) + 10}%; opacity:${(Math.random() * 0.7) + 0.3}; border-radius:${(Math.random() * 40) + 10}%"></div>`; 
    }

    fp4BlurContainer.style.translate = `${-50 + ((Math.random() * 100) -50)}% ${-51 + (Math.random() * 2)}%`;
    fp4BlurOverlay.style.opacity = `${Math.random() * 55}%`;
  
    fp4Interval3 = setInterval(() => {
      let fp4Blurs = document.querySelectorAll('.fp-4-blur');
      fp4Blurs.forEach(blur => blur.style.translate = `${Math.random() * 10 - 5}% ${Math.random() * 10 - 5}%`)
      fp4BlurContainer.style.translate = `${-50 + ((Math.random() * 100) -50)}% ${-51 + (Math.random() * 2)}%`;
      fp4BlurOverlay.style.opacity = `${Math.random() * 55}%`;
      // console.log(fp4BlurOverlay.style.opacity);
    }, 3000);

  }

  else if(observedFP4 == false){
    observingFP4 = false;
    clearInterval(fp4Interval);
    clearInterval(fp4Interval2);
    clearInterval(fp4Interval3);
    fp4BlurContainer.innerHTML = '';
  }

  if(observedFFP){
    // console.log("Scroll Top: " + document.documentElement.scrollTop + " & Scroll Height: " + document.documentElement.scrollHeight + " & Client Height: " + document.documentElement.clientHeight);
    // console.log(`${firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25 - (document.documentElement.clientHeight * 2)}`);
    // This gives us the value of when the first ACTUAL value of the scrollTop when we starts to observe. The reason I say actual is because if we just assign it when we observe, we might observe past it through scrolling. The value up until the last clientHeight * 2 is the whole scrollHeight MINUS what the future divs will be.

    // let documentStartTop = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25 - (document.documentElement.clientHeight * 2);
    let documentStartTop = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight - (document.documentElement.clientHeight * 0.15) - 1.25;

    // console.log(Math.trunc(((document.documentElement.scrollTop - documentStartTop) / document.documentElement.clientHeight) * 29));
    let frameDisplayed = Math.trunc(((document.documentElement.scrollTop - documentStartTop) / document.documentElement.clientHeight) * 29);
    if (frameDisplayed < 0) frameDisplayed = 0; 
    if (frameDisplayed > 28) frameDisplayed = 28; 
    if (frameDisplayed < 8) ffpBG2.style.display = 'none';
    if (frameDisplayed >= 8) ffpBG2.style.display = 'block';
    
    console.log(frameDisplayed);

    allFFPIMGs.forEach(img =>{
      img.style.display = 'none';
    })

    allFFPIMGs[frameDisplayed].style.display = 'block';
  }


  // ---------------


  if(observedSthPAdd){
    // console.log("Scroll Top: " + document.documentElement.scrollTop + " & Scroll Height: " + document.documentElement.scrollHeight + " & Client Height: " + document.documentElement.clientHeight);
    // console.log(`${firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight + sixthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25 - (document.documentElement.clientHeight * 2)}`);
    // This is the value we get to
    
    // console.log(`${firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25}`);
    // This is the value start with

    let spaStartScroll = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25;
    let spaEndScroll = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight + sixthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25 - (document.documentElement.clientHeight * 2);
    let spaPercentage = (document.documentElement.scrollTop - spaStartScroll) / (spaEndScroll - spaStartScroll);
    if (spaPercentage < 0) spaPercentage = 0;
    if (spaPercentage > 1) spaPercentage = 1;
    // console.log(spaPercentage);

    sCircles.forEach(circle =>{
      let pointAtLength = sthpPathLength - (parseInt(circle.getAttribute('randomDistance')) + (spaPercentage * 0.8 * sthpPathLength));
      if(circle.classList[0] == 'sc-red-2' && pointAtLength < 350) {scene7Writing.style.opacity = 1;}
      else if(circle.classList[0] == 'sc-red-2' && pointAtLength > 350){scene7Writing.style.opacity = 0;}
      if(pointAtLength < 0) pointAtLength = (sthpPathLength * 2) - (parseInt(circle.getAttribute('randomDistance')) + (spaPercentage * 0.8 * sthpPathLength));
      circle.setAttribute('transform', `translate(${sthpPath.getPointAtLength(pointAtLength).x}, ${sthpPath.getPointAtLength(pointAtLength).y})`);
      // circle.setAttribute('transform', `0 0`);
    });
  }


  // ---------------


  if(observedSvthPAdd1){
    let svthPA1Start = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight + sixthPage.scrollHeight - (document.documentElement.clientHeight * 2.15) - 1.25;
    let svthPA1End = firstPage.scrollHeight + secondPage.scrollHeight + thirdPage.scrollHeight + fourthPage.scrollHeight + fifthPage.scrollHeight + sixthPage.scrollHeight - (document.documentElement.clientHeight * 1.15) - 1.25;
    let svthPerc = (document.documentElement.scrollTop - svthPA1Start) / (svthPA1End - svthPA1Start);
    let svthCarPerc  = svthPerc;
    console.log(svthPerc);

    if(svthCarPerc > 1) svthCarPerc = 1;
    if(svthCarPerc < 0) svthCarPerc = 0;
  
    svthCarU.style.opacity = svthCarPerc;
    svthCarU.style.translate = `${100 - (svthCarPerc * 125)}% -32%`;
    svthCarB.style.translate = `${100 - (svthCarPerc * 125)}% -32%`;

    // if(svthPerc > 1 && svthPerc < 2){
    if(svthPerc > 1){
      svthContainer.style.translate = `${-100 + ((svthPerc - 1) * 100)}% -50%`;
      // svthBlurredIMG.forEach(img=> img.style.opacity = `${svthPerc - 1}`);
      // svthUnblurredIMG.forEach(img=> img.style.opacity = `${2 - svthPerc}`);
      // Decided that it's better to blur it later on so people can view the arena for a bit
    }
    else if(svthPerc < 1){
      svthContainer.style.translate = `-100% -50%`;
    }
    else if(svthPerc > 2){
      // svthContainer.style.translate = `0% -50%`;
    }


    if(svthPerc > 1.3 && svthPerc < 2){
      svthBlurredIMG.forEach(img=> img.style.opacity = `${(svthPerc - 1.3) / (2-1.3)}`);
      svthUnblurredIMG.forEach(img=> img.style.opacity = `${1 - (svthPerc - 1.3) / (2-1.3)}`);

      svthCarB.style.opacity = `${(svthPerc - 1.3) / (2-1.3)}`;
      svthCarU.style.opacity = `${1 - (svthPerc - 1.8) / (2-1.8)}`;
      // we remove the opacity of the unblurred car later on so the car isn't see-through
    }
    else if(svthPerc < 1.3 && svthPerc > 1){
      svthBlurredIMG.forEach(img => img.style.opacity = `0`);
      svthUnblurredIMG.forEach(img => img.style.opacity = `1`);
      svthCarB.style.opacity = `0`;
      svthCarU.style.opacity = `1`;
    }
    else if(svthPerc >= 2){
      svthBlurredIMG.forEach(img => img.style.opacity = `1`);
      svthUnblurredIMG.forEach(img => img.style.opacity = `0`);
      svthCarB.style.opacity = `1`;
      svthCarU.style.opacity = `0`;
    }

    if(svthPerc >= 2){
      svthIMGArenaBlur.style.translate = `${-(svthPerc - 2) * 77.15}% -55%`;
      svthIMGArenaUnblur.style.translate = `${-(svthPerc - 2) * 77.15}% -55%`;
      // Translating the arena
    }
    if(svthPerc < 2){
      svthIMGArenaBlur.style.translate = `0% -55%`;
      svthIMGArenaUnblur.style.translate = `0% -55%`;
    }
      
    // Displaying the bubbles
    // Displaying Bubble 1
    if(svthPerc >= 2.8) svthSVG1Gs[0].style.opacity = `${(svthPerc - 2.8) * 15}`;
    if(svthPerc < 2.8) svthSVG1Gs[0].style.opacity = `0`;
    
    if(svthPerc >= 2.85) svthSVG1Gs[1].style.opacity = `${(svthPerc - 2.85) * 15}`;
    if(svthPerc < 2.85) svthSVG1Gs[1].style.opacity = `0`;
    
    if(svthPerc >= 2.9) svthSVG1Gs[2].style.opacity = `${(svthPerc - 2.9) * 15}`;
    if(svthPerc < 2.9) svthSVG1Gs[2].style.opacity = `0`;
    
    if(svthPerc >= 2.95) svthSVG1Gs[3].style.opacity = `${(svthPerc - 2.95) * 15}`;
    if(svthPerc < 2.95) svthSVG1Gs[3].style.opacity = `0`;
    
    if(svthPerc >= 2.8 && svthPerc <= 4.1) svthSVG1Gs.forEach(svg =>{if(parseInt(svg.style.opacity) > 1) svg.style.opacity = 1});
    // Think it's better if we do a for each in a condition for better performance?
    
    // Displaying Bubble 2 & removing bubble1
    if(svthPerc >= 3.95) svthSVG1Group.style.opacity = `${1 - ((svthPerc - 3.95) * 15)}`;
    if(parseInt(svthSVG1Group.style.opacity) < 0) svthSVG1Group.style.opacity = 0;
    if(svthPerc < 3.95) svthSVG1Group.style.opacity = `1`;

    if(svthPerc >= 4) svthSVG2Gs[0].style.opacity = `${(svthPerc - 4) * 15}`;
    if(svthPerc < 4) svthSVG2Gs[0].style.opacity = `0`;

    if(svthPerc >= 4.05) svthSVG2Gs[1].style.opacity = `${(svthPerc - 4.05) * 15}`;
    if(svthPerc < 4.05) svthSVG2Gs[1].style.opacity = `0`;

    if(svthPerc >= 4.1) svthSVG2Gs[2].style.opacity = `${(svthPerc - 4.1) * 15}`;
    if(svthPerc < 4.1) svthSVG2Gs[2].style.opacity = `0`;

    if(svthPerc >= 4.15) svthSVG2Gs[3].style.opacity = `${(svthPerc - 4.15) * 15}`;
    if(svthPerc < 4.15) svthSVG2Gs[3].style.opacity = `0`;

    svthSVG2Gs.forEach(svg =>{if(parseInt(svg.style.opacity) > 1) svg.style.opacity = 1});

    // Displaying Bubble 3 & removing bubble2
    if(svthPerc >= 4.95) svthSVG2Group.style.opacity = `${1 - ((svthPerc - 4.95) * 15)}`;
    if(parseInt(svthSVG2Group.style.opacity) < 0) svthSVG2Group.style.opacity = 0;
    if(svthPerc < 4.95) svthSVG2Group.style.opacity = `1`;

    if(svthPerc >= 5) svthSVG3Gs[0].style.opacity = `${(svthPerc - 5) * 15}`;
    if(svthPerc < 5) svthSVG3Gs[0].style.opacity = `0`;

    if(svthPerc >= 5.05) svthSVG3Gs[1].style.opacity = `${(svthPerc - 5.05) * 15}`;
    if(svthPerc < 5.05) svthSVG3Gs[1].style.opacity = `0`;

    if(svthPerc >= 5.1) svthSVG3Gs[2].style.opacity = `${(svthPerc - 5.1) * 15}`;
    if(svthPerc < 5.1) svthSVG3Gs[2].style.opacity = `0`;

    if(svthPerc >= 5.15) svthSVG3Gs[3].style.opacity = `${(svthPerc - 5.15) * 15}`;
    if(svthPerc < 5.15) svthSVG3Gs[3].style.opacity = `0`;

    svthSVG3Gs.forEach(svg =>{if(parseInt(svg.style.opacity) > 1) svg.style.opacity = 1});

    // Displaying Bubble 4 & removing bubble3
    if(svthPerc >= 5.95) svthSVG3Group.style.opacity = `${1 - ((svthPerc - 5.95) * 15)}`;
    if(parseInt(svthSVG3Group.style.opacity) < 0) svthSVG3Group.style.opacity = 0;
    if(svthPerc < 5.95) svthSVG3Group.style.opacity = `1`;

    if(svthPerc >= 6) svthSVG4Gs[0].style.opacity = `${(svthPerc - 6) * 15}`;
    if(svthPerc < 6) svthSVG4Gs[0].style.opacity = `0`;

    if(svthPerc >= 6.05) svthSVG4Gs[1].style.opacity = `${(svthPerc - 6.05) * 15}`;
    if(svthPerc < 6.05) svthSVG4Gs[1].style.opacity = `0`;

    if(svthPerc >= 6.1) svthSVG4Gs[2].style.opacity = `${(svthPerc - 6.1) * 15}`;
    if(svthPerc < 6.1) svthSVG4Gs[2].style.opacity = `0`;

    if(svthPerc >= 6.15) svthSVG4Gs[3].style.opacity = `${(svthPerc - 6.15) * 15}`;
    if(svthPerc < 6.15) svthSVG4Gs[3].style.opacity = `0`;

    svthSVG4Gs.forEach(svg =>{if(parseInt(svg.style.opacity) > 1) svg.style.opacity = 1});

    // Displaying Bubble 5 & removing bubble4
    if(svthPerc >= 6.75) svthSVG4Group.style.opacity = `${1 - ((svthPerc - 6.75) * 15)}`;
    if(parseInt(svthSVG4Group.style.opacity) < 0) svthSVG4Group.style.opacity = 0;
    if(svthPerc < 6.75) svthSVG4Group.style.opacity = `1`;

    if(svthPerc >= 7.5) svthSVG5Gs[0].style.opacity = `${(svthPerc - 7.5) * 15}`;
    if(svthPerc < 7.5) svthSVG5Gs[0].style.opacity = `0`;

    if(svthPerc >= 7.55) svthSVG5Gs[1].style.opacity = `${(svthPerc - 7.55) * 15}`;
    if(svthPerc < 7.55) svthSVG5Gs[1].style.opacity = `0`;

    if(svthPerc >= 7.6) svthSVG5Gs[2].style.opacity = `${(svthPerc - 7.6) * 15}`;
    if(svthPerc < 7.6) svthSVG5Gs[2].style.opacity = `0`;

    svthSVG5Gs.forEach(svg =>{if(parseInt(svg.style.opacity) > 1) svg.style.opacity = 1});

    if(svthPerc < 8) {
      svthIMGUnblurLights.style.opacity = 0;
      svthSVG1Group.style.display = `block`;
      svthSVG2Group.style.display = `block`;
      svthSVG3Group.style.display = `block`;
      svthSVG4Group.style.display = `block`;

      svthIMGUnblurLights.style.opacity = `0`;
      svthIMGArenaUnblur.style.opacity = `0`;
      svthCarB.style.opacity = `1`;
      svthIMGBlurLights4.style.opacity = `1`;
    }

    if(svthPerc < 8.2){
      svthSVG5Group.style.display = `block`;
      svthCarIMGs.forEach(img => img.style.display = 'none');

    }

    if(svthPerc >= 8){
      svthIMGUnblurLights.style.opacity = `${(svthPerc - 8) * 2}`;
      svthIMGArenaUnblur.style.opacity = `${(svthPerc - 8) * 2}`;
      svthCarB.style.opacity = `${1 - ((svthPerc - 8) * 5)}`;
      svthIMGBlurLights4.style.opacity = `${1 - ((svthPerc - 8) * 2)}`;
      // if(parseInt(svthIMGBlurLights4.style.opacity) <= 0) svthIMGBlurLights4.style.opacity = 0;
      svthSVG1Group.style.display = `none`;
      svthSVG2Group.style.display = `none`;
      svthSVG3Group.style.display = `none`;
      svthSVG4Group.style.display = `none`;
      svthSVG5Group.style.opacity = `${1 - ((svthPerc - 8) * 5)}`;
      svthCarIMGs[0].style.display = 'block';
    }

    if(svthPerc >= 8.2){
      svthSVG5Group.style.display = `none`;
      svthCarIMGs.forEach(img => img.style.display = 'none');
      svthCarIMGs[Math.trunc((svthPerc - 8.2)* 24)].style.display = 'block';
      svthIMGUnblurLights.style.translate = `${-300 - ((svthPerc - 8.2) * (svthPerc - 8.2) * 25)}% -50%`;
      svthIMGArenaBlur.style.translate = `${-(svthPerc - 2) * 77.15 + ((svthPerc - 8.2) * 10)}% -55%`;

    }


    if(svthPerc > 8.4){
      svthIMGCarDiv.style.scale = 1 + (svthPerc - 8.4) * (svthPerc - 8.4) * (svthPerc - 8.4) *  1.65 * 20;
      svthIMGCarDiv.style.translate = `-25% ${-32 - ((svthPerc - 8.4) * (svthPerc - 8.4) * (svthPerc - 8.4) * 700)}%`;
    }
    
    if(svthPerc <= 8.4){
      svthIMGCarDiv.style.scale = 1;
      svthIMGCarDiv.style.translate = `-25% -32%`;
    }

    if(svthPerc > 8.95){
      svthPageWhite.style.opacity = (svthPerc - 8.95) * 20;
    }
    if(svthPerc >= 9){
      svthPageWhite.style.opacity = 1;
      window.scrollTo({top:0, behavior:"instant"});
    }
    if(svthPerc <= 8.95){
      svthPageWhite.style.opacity = 0;
    }

  }




  // ----------------------------
  // End of scroll event listener
  // ----------------------------
})

let firstPage = document.querySelector('.firstPage');
let secondPage = document.querySelector('.secondPage');
let thirdPage = document.querySelector('.third-page');
let fourthPage = document.querySelector('.fourth-page');
let fifthPage = document.querySelector('.fifth-page');
let sixthPage = document.querySelector('.sixth-page');
let seventhPage = document.querySelector('.seventh-page');







let fp4Interval;
let fp4Interval2;
let fp4Interval3;

let fp4BlurContainer = document.querySelector('.fp-4-blur-container');
let fp4BlurOverlay = document.querySelector('.fp-4-blur-overlay');
  


let fp1Writing = document.querySelector('.fp-img-1-writing');
let fpIMG2Div = document.querySelector('.fp-img-2-div');
let fp3IMGs = [...document.querySelectorAll('.fp-img-3-anim')];
let fp3Vid = document.querySelector('.fp-vid-3');
let fp4Center = document.querySelector('.fp-4-center');
let fp4Driver = document.querySelector('.fp-img-4-layer');
// we've made fpIMG3Div at the top where we insert the images


let ffpPage = document.querySelector('.ffp-d-none');
let ffpIMGContainer = document.querySelector('.ffp-img-container');
let ffp = document.querySelector('.fifth-page');

for(let i = 0; i <= 28; i++){
  if(i < 10) ffpIMGContainer.innerHTML += `<img fetchpriority="high" class="ffp-img ffp-img-${i}" src="scene6/v1000${i}-min.png" alt="">`;
  if(i >= 10) ffpIMGContainer.innerHTML += `<img fetchpriority="high" class="ffp-img ffp-img-${i}" src="scene6/v100${i}-min.png" alt="">`;
}
ffpIMGContainer.innerHTML += `<img fetchpriority="high" class="ffp-img-bg-2" src="scene5/scene5-1.png" alt="">`;


let ffpBG2 = document.querySelector('.ffp-img-bg-2');
let allFFPIMGs = document.querySelectorAll('.ffp-img');
console.log(allFFPIMGs);

let sthPageAdd = document.querySelector('.sthp-track-add');
let sthpTrack = document.querySelector('.sthp-track-container');
let sCBlue1 = document.querySelector('.sc-blue-1');
let sCircles = document.querySelectorAll('.scircle');
let sthpPath = document.querySelector('.path');
let sthpPathLength = sthpPath.getTotalLength();
let randomCircleDistance = 0;
// let observedSP = false;

sCircles.forEach(circle =>{
  randomCircleDistance += (Math.random() * 100) + 20;
  circle.setAttribute('randomDistance', randomCircleDistance);
  circle.setAttribute('transform', `translate(${sthpPath.getPointAtLength(sthpPathLength - randomCircleDistance).x}, ${sthpPath.getPointAtLength(sthpPathLength - randomCircleDistance).y})`);
})


let scene7Writing = document.querySelector('.sthp-img-writing');
let svthPageAdd1 = document.querySelector('.svth-add-1');
let svthCarU = document.querySelector('.svth-img-car-unblur');
let svthCarB = document.querySelector('.svth-img-car-blur');
let svthContainer = document.querySelector('.svth-page-container');
let svthBlurredIMG = document.querySelectorAll('.svth-blur');
let svthUnblurredIMG = document.querySelectorAll('.svth-unblur');
let svthIMGArenaBlur = document.querySelector('.svth-img-arena-blur');
let svthIMGArenaUnblur = document.querySelector('.svth-img-arena');
let svthIMGUnblurLights = document.querySelector('.svth-img-lights-unblur-1');
let svthIMGBlurLights4 = document.querySelector('.svth-img-lights-blur-4');
let svthIMGCarDiv = document.querySelector('.svth-img-car-div');
let svthPageWhite = document.querySelector('.svth-page-white');

for(let i = 0; i<=19; i++){
  if(i < 10) svthIMGCarDiv.innerHTML +=`<img fetchpriority="high" src="scene8/uhhh000${i}-min.png" alt="" class="svth-car-div-img">`;
  if(i >= 10) svthIMGCarDiv.innerHTML +=`<img fetchpriority="high" src="scene8/uhhh00${i}-min.png" alt="" class="svth-car-div-img">`;
}

let svthCarIMGs = document.querySelectorAll('.svth-car-div-img');
// console.log(svthCarIMGs[1]);


let svthSVG1Gs = [];
for(let i = 1; i<=4; i++){
  let svthSVGElem = document.querySelector(`.svth-svg-1-g-${i}`);
  svthSVG1Gs.push(svthSVGElem);
}
let svthSVG1Group = document.querySelector('.svth-svg-1-g');

let svthSVG2Gs = [];
for(let i = 1; i<=4; i++){
  let svthSVGElem = document.querySelector(`.svth-svg-2-g-${i}`);
  svthSVG2Gs.push(svthSVGElem);
}
let svthSVG2Group = document.querySelector('.svth-svg-2-g');

let svthSVG3Gs = [];
for(let i = 1; i<=4; i++){
  let svthSVGElem = document.querySelector(`.svth-svg-3-g-${i}`);
  svthSVG3Gs.push(svthSVGElem);
}
let svthSVG3Group = document.querySelector('.svth-svg-3-g');

let svthSVG4Gs = [];
for(let i = 1; i<=4; i++){
  let svthSVGElem = document.querySelector(`.svth-svg-4-g-${i}`);
  svthSVG4Gs.push(svthSVGElem);
}
let svthSVG4Group = document.querySelector('.svth-svg-4-g');

let svthSVG5Gs = [];
for(let i = 1; i<=3; i++){
  let svthSVGElem = document.querySelector(`.svth-svg-5-g-${i}`);
  svthSVG5Gs.push(svthSVGElem);
}
let svthSVG5Group = document.querySelector('.svth-svg-5-g');



// ---- Observes ----

let observedFP3 = false;
let observedFP3Val = 0;
let animRunning = false;

let observedFP4 = false;
let observedFP4T0 = false;
let observingFP4 = false;

let observedFFP = false;

let observedSthPage = false;
let observedSthPAdd = false;

let observedSvthPage = false;
let observedSvthPAdd1 = false;

let fp1Observe = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    entries[0].target.style.opacity = 1;
  }
  else if(!entries[0].isIntersecting){
    entries[0].target.style.opacity = 0;
  }
})


let fp2Observe = new IntersectionObserver(entries =>{
  entries[0].target.children[0].classList.toggle('fp-img-2-anim', entries[0].isIntersecting);
  entries[0].target.children[1].classList.toggle('fp-img-2-cars-anim', entries[0].isIntersecting);
  entries[0].target.children[2].classList.toggle('fp-img-2-overlay-anim', entries[0].isIntersecting);
  // setTimeout(() => {
  //   fp2Observe.unobserve(entries[0].target);
  // }, 100);
}, {threshold: 0.2});

let fp3Observe = new IntersectionObserver(entries => {
  // if(fp3Interval != undefined) clearInterval(fp3Interval);
  if (entries[0].isIntersecting) {
    observedFP3 = true;
    fp3Vid.play();
  }
  else if(!entries[0].isIntersecting && animRunning == false){
    observedFP3 = false;
    observedFP3Val = 0;
    // We need the observer to see if we scrolled off
    // then this trigger will allow us to run the animation again
    // animRunning makes sure this trigger doesn't run while the animation is running
    // so we don't get looped animation
  }
}, { threshold: 0.8 });

let fp4ObserveT0 = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    observedFP4T0 = true;
  }
  else if(!entries[0].isIntersecting){
    observedFP4T0 = false;
  }
}, {threshold: 0})

let fp4Observe = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    observedFP4 = true;
    ffpIMGContainer.style.top = `50vh`;
  }

  if(!entries[0].isIntersecting){
    observedFP4 = false;
    entries[0].target.innerHTML = '';
  }
}, {threshold: 0.2});


let ffpPageObserve = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting) observedFFP = true;

  if(entries[0].isIntersecting && !observedSthPage){
    ffpIMGContainer.style.position = `fixed`;
    // ffpIMGContainer.style.left = `calc(50vw - ${getScrollbarWidth()}px)`;
    ffpIMGContainer.style.animation = `ffpContainer 0.4s ease 0.2s both`;

    // observedFFP = true;
    // ffp.addEventListener('scroll', ()=>{
      //   console.log(ffp.scrollTop);
      //   console.log("bruh");
      // })
  }
  else if(!entries[0].isIntersecting){
    observedFFP = false;
    ffpIMGContainer.style.position = `absolute`;
    ffpIMGContainer.style.animation = ``;
  }
  
}, {threshold: 0});

let sthPageObserve = new IntersectionObserver(entries => {
  if(entries[0].isIntersecting){
    observedSthPage = true;
    // observedFFP = false;
    ffpIMGContainer.style.position = `absolute`;
    ffpIMGContainer.style.top = `calc(100% - 50vh)`;
    // ffpIMGContainer.style.left = `calc(50vw)`;
  }
  else if(!entries[0].isIntersecting && observedFFP){
    observedSthPage = false;
    ffpIMGContainer.style.position = `fixed`;
    ffpIMGContainer.style.top = `50vh`;
    // ffpIMGContainer.style.left = `calc(50vw - ${getScrollbarWidth()}px)`;
  }

  if(!entries[0].isIntersecting) observedSthPage = false;
}, {threshold: 0})

let sthPageAddObserve = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    if(!observedSvthPage){
      sthpTrack.style.position = `fixed`;
      sthpTrack.style.top = `50vh`;
    }

    observedSthPAdd = true;
    // console.log(sthpPathLength);
    // console.log(document.querySelector('.path').getPointAtLength(20));
    // sCBlue1.setAttribute('transform', `translate(${sthpPath.getPointAtLength(sthpPathLength - 100).x}, ${sthpPath.getPointAtLength(sthpPathLength - 100).y})`);
    // console.log(sCircles);
  }
  else if(!entries[0].isIntersecting){
    observedSthPAdd = false;
    // observedSP = false;
    sthpTrack.style.position = `absolute`;
  }
} , {threshold: 0})

let svthPageObserve = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    observedSvthPage = true;
    sthpTrack.style.position = `absolute`;
    sthpTrack.style.top = `calc(100% - 50vh)`;
  }
  else if(!entries[0].isIntersecting){
    observedSvthPage = false;
  }
  
  if(!entries[0].isIntersecting && observedSthPAdd){
    sthpTrack.style.position = `fixed`;
    sthpTrack.style.top = `50vh`;
  }
    
})

let svthPageAdd1Observe = new IntersectionObserver(entries =>{
  if(entries[0].isIntersecting){
    observedSvthPAdd1 = true;
    svthContainer.style.position = `fixed`;
    svthContainer.style.top = `50vh`;
    }
    else if(!entries[0].isIntersecting && !observedSvthPage){
      observedSvthPAdd1 = false;
      svthContainer.style.position = `absolute`;
      // svthCar.style.position = `absolute`;
  }

})



fp1Observe.observe(fp1Writing);
fp2Observe.observe(fpIMG2Div);
fp3Observe.observe(fpIMG3Div);
fp4Observe.observe(fp4Center);
fp4ObserveT0.observe(fourthPage);

ffpPageObserve.observe(ffpPage);
sthPageObserve.observe(sixthPage);
sthPageAddObserve.observe(sthPageAdd);
svthPageObserve.observe(seventhPage);
svthPageAdd1Observe.observe(svthPageAdd1);
// svthPageAddObserve.observe(svthPageAdd);




function getScrollbarWidth() {
  // Create a temporary div element
  const div = document.createElement('div');
  
  // Apply styles to the div
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll'; // Force scrollbars
  
  // Append the div to the body
  document.body.appendChild(div);
  
  // Calculate the scrollbar width
  const scrollbarWidth = div.offsetWidth - div.clientWidth;
  
  // Remove the temporary div
  document.body.removeChild(div);
  
  return scrollbarWidth;
}
console.log("Scrollbar Width " + getScrollbarWidth());


// window.onload = function() {
//   if (window.location.hash) {
//       setTimeout(() => {
//           document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth' });
//       }, 0);
//   }
// };
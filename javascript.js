const navItems = document.querySelectorAll('.navItem');
const overlay = document.querySelector('.overlay');
const supText = document.querySelector('.textSup');
const kayakText = document.querySelector('.textKayak');
const btnKayak = document.querySelector('.btnKayak');
const btnSup = document.querySelector('.btnSup');
const kayakSupDiv = document.querySelector('.kayakSup');
const textKayak = new SplitType('#textKayak');
const textSup = new SplitType('#textSup');
const charKayak = document.querySelectorAll('.textKayak .char'); 
const charSup = document.querySelectorAll('.textSup .char');
const contactFormElement = document.querySelectorAll('.contactFormElement');
const contactSection = document.querySelector('.contact');
const contactBtn = document.querySelector('.contactBtn');
const socialFooter = document.querySelectorAll('.socialFooter');

const nav = document.querySelector('.nav');
const mainDiv = document.querySelector('.main');
const footer = document.querySelector('.footer');
const kayakOverlay = document.querySelector('.kayakOverlay');
const supOverlay = document.querySelector('.supOverlay');
const calendarJsK = document.querySelector('.calendarJsK');
const calendarJsS = document.querySelector('.calendarJsS');
const dateInput = document.querySelectorAll('.date');
const overlayKayakX = document.querySelector('.overlayKayakX');
const overlaySupX = document.querySelector('.overlaySupX');

const bgOne = document.querySelector('.backgroundImageOne');
const bgTwo = document.querySelector('.backgroundImageTwo');
const bgThree = document.querySelector('.backgroundImageThree');

const display = (a, b) => a.style.display = b;
const bgOpacity = (a, b) => a.style.opacity = b;

const changeOpacity = (a, b, c, d) => {
	gsap.to(a, { duration: .3, opacity: b, ease: "ease", delay: c, stagger: d});
}
const h1Appear = (a) => {
	gsap.to(a, { duration: 1, opacity: 1, ease: "ease"});
	gsap.from(a, { duration: 1, y: '-200%', ease: "ease"});
}
const h1disappear = (a) => {
	gsap.to(a, { duration: 1, opacity: 0, ease: "ease"});
	gsap.to(a, { duration: 1, y: '200%', ease: "ease"});
	gsap.to(a, { duration: 0, y: '0%', ease: "ease", delay: 1});
}

const changeHeight = (a, b) => {
	gsap.to(a, { duration: .1, height: 'auto', ease: "ease", stagger: .1, delay: .3});
	gsap.to(b, { duration: .1, height: 0, ease: "ease", stagger: .1});
}
const changeHeightOne = (a, b) => gsap.to(a, { duration: 0.1, height: b, ease: "ease", stagger: .1});
const btn = (a, b) => gsap.to(a, { duration: .1, y: b, ease: "ease"});
const btnBack = (a, b) => gsap.to(a, { duration: .1, y: b, ease: "ease", delay: .3});
const formBtn = (a, b, d) => gsap.to(a, { duration: .5, x: b, ease: 'bounce', delay: d});

const blur = (a, b) => a.style.filter = b;
const height = (a, b) => a.style.height = b;


let a, b;
let x = 1, y = 0, z = 0;
//Navigation
navItems.forEach((e, index) => {
	e.addEventListener('click', () => {
		if(index === 0){
			//nav Kayak button
			if(!e.classList.contains('navActive')){ //4
				//change bg photo
				bgOpacity(bgOne, 1);
				bgOpacity(bgTwo, 0);
				bgOpacity(bgThree, 0);

				h1Appear('.rightSideH1');
			}
			if(y === 1){
				//if previous was nav Sup
				h1disappear('.rightSide2H1');
				changeHeight(charKayak, charSup);

				btn(btnSup, '100%');
				btnBack(btnKayak, '0%');

			} else if(z === 1){
				//if previous was nav Contact
				h1disappear('.rightSide3H1');

				display(contactSection, 'none');
				changeHeightOne(charKayak, 'auto');
				formBtn(contactBtn, '120%', 1);
				btn(btnKayak, '0%');

				changeOpacity(contactFormElement, 0, 0, 0);
			}
			x = 1, y = 0, z = 0;
		} 
		//nav Sup button
		if(index ===1){
			if(!e.classList.contains('navActive')){ //4
				//change bg photo
				bgOpacity(bgOne, 0);
				bgOpacity(bgTwo, 1);
				bgOpacity(bgThree, 0);

				h1Appear('.rightSide2H1');
			}
			if(x === 1){
				//if previous was nav Kayak
				h1disappear('.rightSideH1');

				changeHeight(charSup, charKayak);
				btn(btnKayak, '100%');
				btnBack(btnSup, '-100%');

			} else if(z === 1){
				//if previous was nav Contact
				h1disappear('.rightSide3H1');

				changeHeightOne(charSup, 'auto');
				formBtn(contactBtn, '120%', 1);
				btn(btnSup, '-100%');
				display(contactSection, 'none');
				changeOpacity(contactFormElement, 0, 0, 0);
			}
			x = 0, y = 1, z = 0;
		}
		//nav Contact button 
		if(index ===2){
			if(!e.classList.contains('navActive')){ //4
				//change bg photo
				bgOpacity(bgOne, 0);
				bgOpacity(bgTwo, 0);
				bgOpacity(bgThree, 1);

				h1Appear('.rightSide3H1');
			}
			if(x === 1){
			//if previous was nav Kayak				
				h1disappear('.rightSideH1');
				changeHeightOne(charKayak, 0);
				btnBack(btnKayak, '100%');

				display(contactSection, 'flex');
				changeOpacity(contactFormElement, 1, 1, 0.3);
				formBtn(contactBtn, '0%', 1);
			} else if(y === 1){
			//if previous was nav Sup				
				h1disappear('.rightSide2H1');
				changeHeightOne(charSup, 0);
				btn(btnSup, '100%');
	
				display(contactSection, 'flex');
				changeOpacity(contactFormElement, 1, 1, 0.3);
				formBtn(contactBtn, '0%', 1);
			}
			x = 0, y = 0, z = 1;
		}
	});
});

//set Active Nav Menu Item
setActive(0, 1, 2); 
setActive(1, 0, 2); 
setActive(2, 1, 0); 

function setActive(a, b, c){
	navItems[a].addEventListener('click', function(){
		navItems[a].classList.add('navActive');
		navItems[b].classList.remove('navActive');
		navItems[c].classList.remove('navActive');
	}) 
}
////////////////////////////////
btnKayak.addEventListener('click', () => {
	height(overlay, '100vh');
	height(kayakOverlay, '100vh');
	setTimeout(blur, 250, mainDiv, 'blur(3px)');
	setTimeout(blur, 350, footer, 'blur(3px)');
	blur(nav, 'blur(3px)');

	changeOpacity(calendarJsK, 1, .5, 0);
	changeOpacity(dateInput, 1, .75, 0.1);

	changeOpacity(overlayKayakX, 1, .5, 0);
})
btnSup.addEventListener('click', () => {
	height(overlay, '100vh');
	height(supOverlay, '100vh');
	setTimeout(blur, 100, mainDiv, 'blur(3px)');
	setTimeout(blur, 200, footer, 'blur(3px)');
	blur(nav, 'blur(3px)');

	changeOpacity(calendarJsS, 1, .5, 0);
	changeOpacity(dateInput, 1, .75, 0.1);

	changeOpacity(overlaySupX, 1, .5, 0);
})
overlayKayakX.addEventListener('click', () => {
	height(overlay, '0vh');
	height(kayakOverlay, '0vh');
	setTimeout(blur, 100, nav, 'blur(0px)');
	setTimeout(blur, 200, mainDiv, 'blur(0px)');
	blur(footer, 'blur(0px)');

	changeOpacity(calendarJsK, 0, 0, 0);
	changeOpacity(dateInput, 0, 0, 0);
});
overlaySupX.addEventListener('click', () => {
	height(overlay, '0vh');
	height(supOverlay, '0vh');
	setTimeout(blur, 100, nav, 'blur(0px)');
	setTimeout(blur, 200, mainDiv, 'blur(0px)');
	blur(footer, 'blur(0px)');

	changeOpacity(calendarJsS, 0, 0, 0);
	changeOpacity(dateInput, 0, 0, 0);
});
 

    // Show menu
const navMenu = document.getElementById("nav_menu"),
navToggle = document.querySelector("#nav_toggle"),
navClose = document.querySelector("#nav_close");

    //validete if conostend existed
if (navToggle) {
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
  })
}

//Menu hidden
//validete if conostend existed
if (navClose) {
  navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
  })
}

    //Remove mobile menu

const navLink= document.querySelectorAll('.nav_link');

function linkAction(){
  // const navMenu = document.querySelector(".nav_menu");
  //when click each menu link , we remove show menu
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ===================== Create header background ======================
function scrollHeader(){
  const header = document.querySelector('#header')
  //When the scroll is greate than 100 vewport height, and the scroll-header class to the header tag
  if (this.scrollY >= 100){
    header.classList.add('scroll-header');
  }else{
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader);


// ===================== Swiper slider======================
var swiper = new Swiper(".dicover__container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop:true,
        spaceBetween: 32,
        coverflowEffect:{
          rotate:0,
        }
      });

// ===================== Video content ======================
const videoFile = document.querySelector('#video-file'),
videoButton = document.querySelector('#video-button'),
videoIcon = document.querySelector('#video-icon')

function playPause(){
  if(videoFile.paused){
    //play video 
    videoFile.play();

    //we change icons 
    videoIcon.classList.add('fa-pause-circle')
    videoIcon.classList.remove('fa-play-circle')
  }else{
    //pause video
    videoFile.pause();

    // we change icons
    videoIcon.classList.remove('fa-pause-circle');
    videoIcon.classList.add('fa-play-circle');
  }
}
videoButton.addEventListener('click',playPause);

function finalVideo() {
  // when video end , icons change
  videoIcon.classList.remove('fa-pause-circle');
  videoIcon.classList.add('fa-play-circle');
}
videoFile.addEventListener('ended', finalVideo)

// ===================== Scroll up ======================
function scrollUp(){
  const scrollup = document.querySelector('#scroll-up');
  //when the scroll is higher then 200 viewport theght, add the show-scroll cass to the a tag with the scroll
  if (this.scrollY >= 200) {
    scrollup.classList.add('show-scroll');
  }else{
    scrollup.classList.remove('show-scroll');
  }

}
window.addEventListener('scroll', scrollUp);

// ===================== Scroll Section Nav active link ======================
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop -50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);

// ===================== Dark light theme <i class="fas fa-sun"></i>======================
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconstheme = 'fa-sun';

//prviously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconstheme) ? 'fa-moon' : 'fa-sun';

// we validate if uer chose the topic

if (selectedTheme) {
  //if the validatioon is fulfilled , we what the issu 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  document.body.classList[selectedTheme === 'fa-moon' ? 'add' : 'remove'](iconstheme)
}

//active /deactive button
themeButton.addEventListener('click', () =>{
  // add or remove the dark/icon theme 
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconstheme);

  // we save the theme and the current icons that the fuser chaose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})

// scroll revel animation
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true,
});
sr.reveal(`.home__data, .home__social-link, .home__info, .dicover__container, .experience__data, .exprience__overlay, .place__card, .sponsor__content, .footer__data, .footer__rights`,{
  origin: 'top',
  interval: 100,
})
sr.reveal(`.about__data, .video__discription, .subscribe__description`,{
  origin: 'left',
})
sr.reveal(`.about__img-overlay, .video__content, .subscrie__form`,{
  origin: 'right',
  interval: 100,
})
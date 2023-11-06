const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const changeProfile = document.getElementById("profile")

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
  : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm("service_1yahf6a", "template_qd57rbs", "#contact-form", "OOHSnHItm_DOAcwoP")
.then(() => {
    contactMessage.textContent = 'Message sent successfully ✅'

    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    contactForm.reset()
}, () => {
  contactMessage.textContent = 'Message not sent (service error) ❌'
})
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
this.scrollY >= 350 ?scrollUp.classList.add('show-scroll')
: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
 if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
  sectionClass.classList.add('active-link')
 } else{
  sectionClass.classList.remove('active-link')
 }
 
  })
}
window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('light-button'); // Select the theme button
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark'  && changeProfile.setAttribute("src", "./img/profile.png") : 'light' && changeProfile.setAttribute("src", "./img/profile2.png");
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'dark-theme' : 'ri-sun-line';

const toggleTheme = () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
};

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'dark-theme' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', toggleTheme);

       window.addEventListener('load', function () { 
         const loaderContainer = document.querySelector('.loader-container'); 
         loaderContainer.style.display = 'none'; 
       });

const sr = ScrollReveal({
  origin: 'top',
  distance: '6rem',
  durarion: 1250,
  delay: 400,
  reset: true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container, .section__title-1, .about__info, .contact__social, .contact__data, .section__title-2`, {origin: 'left'})
sr.reveal(`.services__card, .certs__card, .projects__card` ,{interval: 100})
sr.reveal(`.skill` ,{interval: '100'})


let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    // Check if the user is scrolling down
    if (prevScrollPos < currentScrollPos) {
        header.style.top = `-${header.clientHeight}px`;
    } else {
        // Scrolling up, show the header
        header.style.top = '0';
    }

    prevScrollPos = currentScrollPos;
};
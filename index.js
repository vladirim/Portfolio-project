/* ADAPTIVE MENU CREATION */


const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  }
hamburger.addEventListener('click', toggleMenu);

function closeMenu (event) {
    if (event.target.classList.contains('nav-link')) {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    }
}
nav.addEventListener('click', closeMenu);


/* PORTFOLIO IMAGES CHANGING */


const portfolioImages = document.querySelectorAll('.portfolio-img');
const portfolioButtons = document.querySelector('.portfolio-buttons');
const portfolioButton = document.querySelectorAll('.transparent-button');
function changeImage(event) {
    if(event.target.classList.contains('transparent-button')) {
        const currentSeason = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${currentSeason}/${index + 1}.jpg`);
        portfolioButton.forEach( e => e.classList.remove('active'));
        event.target.classList.add('active');
    }
}
portfolioButtons.addEventListener('click', changeImage);


/* PAGE LANGUAGE CHANGING */

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'standard': 'Standard',
      'premium': 'Premium',
      'gold': 'Gold',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'standard': 'Стандарт',
      'premium': 'Премиум',
      'gold': 'Золотой',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }

const ru = document.querySelector('.ru');
const en = document.querySelector('.en');

function getTranslate(currentLanguage) {
    const translateText = document.querySelectorAll('[data-i18]');
    translateText.forEach(el => el.textContent = i18Obj[currentLanguage][el.dataset.i18]);

    if (currentLanguage === 'en') {
        ru.classList.remove('active-switch-lng');
        en.classList.add('active-switch-lng');
    }
    else if (currentLanguage === 'ru') {
        en.classList.remove('active-switch-lng');
        ru.classList.add('active-switch-lng');
    }
}

ru.addEventListener('click', () => getTranslate('ru'));
en.addEventListener('click', () => getTranslate('en'));


/* WHITE AND DARK THEME */

const themeSwitch = document.querySelector('.theme-switch-logo');
const themeChange = ['.skills-container', '.portfolio-container', '.transparent-button', '.video-container', '.price-container'];
const titleChange = document.querySelectorAll('.section-title');
const titleChangeTheme = document.querySelectorAll('.title-theme');
const textChangeTheme = document.querySelectorAll('.text-theme');

const changeTheme = () => {
    let themeSwitchLogo = document.getElementById('theme-switch-id').getAttribute('src');
    if (themeSwitchLogo === "./assets/svg/sun.svg") {
        themeSwitch.src = "./assets/svg/moon.svg";
        themeChange.forEach(el => {
            let i = document.querySelectorAll(el);
            i.forEach(el => el.classList.remove('light-theme'));
        });
        titleChange.forEach(el => {
            el.classList.remove('light-theme2');
        });
        titleChangeTheme.forEach(el => {
            el.classList.remove('light-theme');
        });
        portfolioButton.forEach(el => {
            el.classList.remove('light-theme3');
        });
        textChangeTheme.forEach(el => {
            el.classList.remove('light-theme');
        });
    }

    else if (themeSwitchLogo === "./assets/svg/moon.svg") {
        themeSwitch.src = "./assets/svg/sun.svg";
        themeChange.forEach(el => {
            let i = document.querySelectorAll(el);
            i.forEach(el => el.classList.add('light-theme'));
        });
        titleChange.forEach(el => {
            el.classList.add('light-theme2');
        });
        titleChangeTheme.forEach(el => {
            el.classList.add('light-theme');
        });
        portfolioButton.forEach(el => {
            el.classList.add('light-theme3');
        });
        textChangeTheme.forEach(el => {
            el.classList.add('light-theme');
        });
    }
}

themeSwitch.addEventListener('click', changeTheme);



/* VIDEO PLAYER */
/* GET ELEMENTS */

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const circleBtn = player.querySelector('.circle-button-img');
const playerButton = player.querySelector('.player-button-img');
const soundButton = player.querySelector('.sound-button');
const progress = player.querySelector('.progress');
const range = player.querySelector('.volume');

/* FUNCTIONS */

function togglePLay() {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}

function updateButton() {
    let playerButtonImg = document.getElementById('player-button-img').getAttribute('src');
    if (playerButtonImg === "./assets/svg/pause.svg") {
        playerButton.src = "./assets/svg/play.svg";
    }
    else if (playerButtonImg === "./assets/svg/play.svg") {
        playerButton.src = "./assets/svg/pause.svg";
    }
}

function hideCircleButton() {
    circleBtn.classList.toggle('hide');
}

function changeVolume() {
    video[this.name] = this.value;
}

function handleProgress() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #fff ${value}%, white 100%)`
}


/* EVENT LISTENERS */

video.addEventListener ('click', togglePLay)
video.addEventListener ('click', updateButton)
video.addEventListener ('click', hideCircleButton)

playerButton.addEventListener ('click', togglePLay)
playerButton.addEventListener ('click', updateButton)
playerButton.addEventListener ('click', hideCircleButton)

circleBtn.addEventListener ('click', updateButton)
circleBtn.addEventListener ('click', togglePLay)
circleBtn.addEventListener ('click', hideCircleButton)

range.addEventListener ('change', changeVolume)

progress.addEventListener('input', handleProgress)
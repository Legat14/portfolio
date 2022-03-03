'use strikt'

// Самооценка

console.log('Самооценка\n\nPortfolio - part 1\n\n1. Вёрстка валидная +10\n2. Вёрстка семантическая +20:\n  - <header>, <main>, <footer> +2\n  - шесть элементов <section> (по количеству секций) +2\n  - только один заголовок <h1> +2\n  - пять заголовков <h2> +2\n  - один элемент <nav> (панель навигации) +2\n  - минимум два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n  - десять кнопок <button> +2\n  - два инпута: <input type="email"> и <input type="tel"> +2\n  - один элемент <textarea> +2\n  - три атрибута placeholder +2\n3. Вёрстка соответствует макету +48:\n  - блок <header> +6\n  - секция hero +6\n  - секция skills +6\n  - секция portfolio +6\n  - секция video +6\n  - секция price +6\n  - секция contacts +6\n  - блок <footer> +6\n4. Требования к css + 12:\n  - для построения сетки используются флексы или гриды +2\n  - при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n  - фоновый цвет тянется на всю ширину страницы +2\n  - иконки добавлены в формате .svg +2\n  - изображения добавлены в формате .jpg +2\n  - есть favicon +2\n5. Интерактивность, реализуемая через css +20:\n  - плавная прокрутка по якорям +5\n  - ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n  - интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты +5\n  - плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n\nИтого: 110\n\n');
console.log('Portfolio - part 2\n\nДисклеймер: присутствуют расхождения с макетом в пределах допуска (10px).\nВ основном это связано с небольшим несовпадением шрифтов и неточностями макета.\nНапример, косая черта между en и ru на макете смещена от центра.\nЯ не думаю, что это сделано намерено. И с чертой посередине все же красивее.\n\n1. Вёрстка соответствует макету. Ширина экрана 768px +48\n  - блок <header> +6\n  - секция hero +6\n  - секция skills +6\n  - секция portfolio +6\n  - секция video +6\n  - секция price +6\n  - секция contacts +6\n  - блок <footer> +6\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\n  - нет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\n  - нет полосы прокрутки при ширине страницы от 768рх до 480рх +5\n  - нет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22\n  - при ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\n  - при нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\n  - высота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\n  - при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\n  - бургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\n  - ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\n  - при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n\nИтого: 85\n\n');
console.log('Portfolio - part 3\n\n1. Смена изображений в секции portfolio +25\n  - при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием +20\n  - кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n2. Перевод страницы на два языка +25\n  - при клике по надписи ru англоязычная страница переводится на русский язык +10\n  - при клике по надписи en русскоязычная страница переводится на английский язык +10\n  - надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n3. Переключение светлой и тёмной темы +25\n  - Реализован второй вариант светлой темы (с бОльшим количеством изменений)\n  - На страницу добавлен переключатель при клике по которому:\n    - тёмная тема приложения сменяется светлой +10\n    - светлая тема приложения сменяется тёмной +10\n    после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n  - Дополнительный дополнительный функционал - сохраняется так же выбранный набор фотографий\n5. Дополнительный функционал: при клике по кнопке из нее выпадают искры +5\n6. Дополнительный дополнительный функционал: при клике по фоторгафии приближает ее\n\nИтого: 85\n\n');
console.log('JS30#1.3 - Custom video\n\n1. Вёрстка +10\n  - вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5\n  - в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n2. Кнопка Play/Pause на панели управления +10\n  - при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5\n  - внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5\n3. Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10\n4. При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10\n5. При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10\n6. Кнопка Play/Pause в центре видео +10\n  - есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5  \n когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5\n7. Дополнительный функционал - таймер и кнопки перемотки на пять секунд вперед и назад +10\n\nИтого: 70');

// ***** Save state *****

let lang = 'en';
let theme = 'dark';
let season = 'winter';

function themeVarChange(theme) {
  if (theme === 'dark') {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  return theme;
}

function seasonVarChange(season) {
  season = event.target.dataset.season;
  return season;
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
  localStorage.setItem('season', season);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
  }
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  if (localStorage.getItem('season')) {
    season = localStorage.getItem('season');
  }
}

window.addEventListener('load', () => {
  getLocalStorage();
  if (lang === 'en') {
    setEnTraslation();
  } else {
    setRuTraslation();
  }
  changeTheme(theme);
  changePortfolioImg(season);
  changeClassActive(portfolioButtons, 'black-button-pressed', 'black-button');
});

// ***** Burger menu ***** 

const burgerButton = document.querySelector('.burger-button');
const navAdaptiveMenue = document.querySelector('.nav');
const burgerLine1 = document.querySelector('.burger-line1');
const burgerLine2 = document.querySelector('.burger-line2');
const burgerLine3 = document.querySelector('.burger-line3');
const darkBg = document.querySelector('.dark-bg');
let isDarkBgShown = false;

burgerButton.addEventListener('click', () => {
  toggleNavMenue();
  toggleDarkBg(isDarkBgShown);
});

navAdaptiveMenue.addEventListener('click', () => {
  if (event.target.classList.contains('nav-link')) {
    if (navAdaptiveMenue.classList.contains('nav-open')) {
      toggleDarkBg(isDarkBgShown);
    }
    navAdaptiveMenue.classList.remove('nav-open');
    navAdaptiveMenue.classList.add('nav-close');
    burgerLine1.classList.remove('burger-line1-open');
    burgerLine2.classList.remove('burger-line2-open');
    burgerLine3.classList.remove('burger-line3-open');
  }
});

function toggleNavMenue() {
  navAdaptiveMenue.classList.toggle('nav-open');
  navAdaptiveMenue.classList.toggle('nav-close');
  burgerLine1.classList.toggle('burger-line1-open');
  burgerLine2.classList.toggle('burger-line2-open');
  burgerLine3.classList.toggle('burger-line3-open');
}

function toggleDarkBg(action) {
  if (!action) {
    darkBg.classList.remove('dark-bg-deactive');
    darkBg.classList.remove('dark-bg-deactive-animation');
    darkBg.classList.add('dark-bg-active');
  } else {
    darkBg.classList.remove('dark-bg-active');
    darkBg.classList.add('dark-bg-deactive-animation');
    setTimeout(() => {
      darkBg.classList.add('dark-bg-deactive');
    }, 390);
  }
  isDarkBgShown = !isDarkBgShown;
}

// ***** Change images *****

const portfolioButtonsDiv = document.querySelector('.portfolio-buttons-div');
const portfolioButtons = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-img');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImg() {
  seasons.forEach((seasonElement, i) => {
    for (let j = 1; j <= 6; j++) {
      const image = new Image();
      image.src = `assets/img/${seasonElement}/${j}.jpg`
    }
  });
}

preloadImg();

function changePortfolioImg() {
  portfolioImages.forEach((imgElement, i) => {
    imgElement.src = `assets/img/${season}/${i + 1}.jpg`
  });
}

function changeClassActive(buttons, activeClass, unactiveClass) {
  buttons.forEach((buttonElement) => {
    buttonElement.classList.remove(activeClass);
    buttonElement.classList.add(unactiveClass);
  });
  buttons.forEach((buttonElement) => {
    if (buttonElement.dataset.season === season) {
      buttonElement.classList.remove(unactiveClass);
      buttonElement.classList.add(activeClass);
    }
  });
}

portfolioButtonsDiv.addEventListener('click', () => {
  if (event.target.classList.contains('portfolio-button')) {
    season = seasonVarChange(season);
    changePortfolioImg(season);
    changeClassActive(portfolioButtons, 'black-button-pressed', 'black-button');
  }
});

// ***** Translation *****

import i18nObj from './translation/translation.js'

const langButton = document.querySelectorAll('.lang');
const textToTranslate = document.querySelectorAll('[data-i18n]');
const email = document.querySelector('.email');
const tel = document.querySelector('.tel');
const message = document.querySelector('.message');

function getTranslate(lang) {
  textToTranslate.forEach((textElement) => {
    textElement.textContent = i18nObj[lang][textElement.dataset.i18n];
  });
  email.placeholder = i18nObj[lang]['e-mail'];
  tel.placeholder = i18nObj[lang]['phone'];
  message.placeholder = i18nObj[lang]['message'];
}

function highliteLang() {
  langButton.forEach((langSwitch) => {
    langSwitch.classList.remove('golden-font');
  });
  if (lang === 'en') {
    langButton[0].classList.add('golden-font');
  } else {
    langButton[1].classList.add('golden-font');
  }
}

function setEnTraslation() {
  lang = 'en';
  highliteLang(lang);
  getTranslate(lang);
}

function setRuTraslation() {
  lang = 'ru';
  highliteLang(lang);
  getTranslate(lang);
}

langButton[0].addEventListener('click', setEnTraslation);
langButton[1].addEventListener('click', setRuTraslation);

// ***** Black and white theme *****

const bWSwich = document.querySelector('.b-w-switch');
const backgroundColor = ['#000000', '#ffffff'];
const heroBgImgs = ['url(assets/img/hero_bg_b.jpg)', 'url(assets/img/hero_bg_w.jpg)'];
const contactsBgImgs = ['url(assets/img/contacts_bg_b.jpg)', 'url(assets/img/contacts_bg_w.jpg)'];
const mainTextColor = ['#ffffff', '#1c1c1c'];
const logoImgs = ['url(assets/svg/logo_b.svg)', 'url(assets/svg/logo_w.svg)'];
const bWSwitches = ['url(assets/svg/theme_switch_b.svg)', 'url(assets/svg/theme_switch_w.svg)'];
const bWSwitchSizes = ['45px 45px', '41px 41px'];
const buttonTextColor = ['#000000', '#1c1c1c'];
const gollenButtonColor = ['#bdae82', '#ffffff'];
const gollenTextColor = ['#bdae82', '#ffffff'];
const headersTextColor = ['#bdae82', '#1c1c1c'];
const goldenButtonTextHover = ['#ffffff', '#bdae82'];
const goldenButtonBgHover = ['#bdae82', '#1c1c1c'];
const blackButtonBgColor = ['transparent', '#bdae82'];
const blackButtonPressedBg = ['#bdae82', '#1c1c1c'];
const blackButtonPressedText = ['#000000', '#bdae82'];
const textAreaBgColor = ['rgba(0, 0, 0, 0.5)', 'rgba(255, 255, 255, 0.5)'];
const instIcon = ['url("assets/svg/inst_b.svg")', 'url("assets/svg/inst_w.svg")'];
const fbIcon = ['url("assets/svg/fb_b.svg")', 'url("assets/svg/fb_w.svg")'];
const twIcon = ['url("assets/svg/tw_b.svg")', 'url("assets/svg/tw_w.svg")'];
const pinterestIcon = ['url(assets/svg/pinterest_b.svg)', 'url(assets/svg/pinterest_w.svg)'];
const iconHoverFilter = ['invert(29%) sepia(11%) saturate(883%) hue-rotate(7deg) brightness(96%) contrast(90%)',
  'invert(78%) sepia(10%) saturate(973%) hue-rotate(7deg) brightness(89%) contrast(87%)'
];
const rsSchoolLogo = ['url(./assets/svg/rs_school_js_b.svg)', 'url(./assets/svg/rs_school_js_w.svg)']

function changeTheme(theme) {
  let i;
  if (theme === 'dark') {
    i = 0;
  } else {
    i = 1;
  }
  document.documentElement.style.setProperty('--background-color', backgroundColor[i]);
  document.documentElement.style.setProperty('--hero-bg-img', heroBgImgs[i]);
  document.documentElement.style.setProperty('--contacts-bg-img', contactsBgImgs[i]);
  document.documentElement.style.setProperty('--main-text-color', mainTextColor[i]);
  document.documentElement.style.setProperty('--logo-img', logoImgs[i]);
  document.documentElement.style.setProperty('--b-w-switch-bg-img', bWSwitches[i]);
  document.documentElement.style.setProperty('--b-w-switch-size', bWSwitchSizes[i]);
  document.documentElement.style.setProperty('--button-text-color', buttonTextColor[i]);
  document.documentElement.style.setProperty('--golden-button-color', gollenButtonColor[i]);
  document.documentElement.style.setProperty('--golden-text-color', gollenTextColor[i]);
  document.documentElement.style.setProperty('--headers-text-color', headersTextColor[i]);
  document.documentElement.style.setProperty('--golden-button-text-hover', goldenButtonTextHover[i]);
  document.documentElement.style.setProperty('--golden-button-bg-hover', goldenButtonBgHover[i]);
  document.documentElement.style.setProperty('--black-button-bg-color', blackButtonBgColor[i]);
  document.documentElement.style.setProperty('--black-button-pressed-bg', blackButtonPressedBg[i]);
  document.documentElement.style.setProperty('--black-button-pressed-text', blackButtonPressedText[i]);
  document.documentElement.style.setProperty('--text-area-bg-color', textAreaBgColor[i]);
  document.documentElement.style.setProperty('--inst-icon', instIcon[i]);
  document.documentElement.style.setProperty('--fb-icon', fbIcon[i]);
  document.documentElement.style.setProperty('--tw-icon', twIcon[i]);
  document.documentElement.style.setProperty('--pinterest-icon', pinterestIcon[i]);
  document.documentElement.style.setProperty('--icon-hover-filter', iconHoverFilter[i]);
  document.documentElement.style.setProperty('--rs-school-logo', rsSchoolLogo[i]);
}

bWSwich.addEventListener('click', () => {
  theme = themeVarChange(theme);
  changeTheme(theme);
})

// ***** Fancy button animation *****

const animatedButtons = document.querySelectorAll('.button-animation');

animatedButtons.forEach((elem) => {
  elem.addEventListener('click', () => {
    let buttonPressed = event.target;
    buttonPressed.preventDefault;
    buttonPressed.classList.remove('animate');
    buttonPressed.classList.add('animate');
    setTimeout(() => {
      buttonPressed.classList.remove('animate');
    }, 690);
  })
});

// ***** Image zoom *****

const bigImg = document.querySelector('.big-img');

function showBigImg() {
  if (!bigImg.classList.contains('big-img-active')) {
    bigImg.classList.add('big-img-active');
    bigImg.src = event.target.src;
  }
}

function hideBigImg() {
  if (bigImg.classList.contains('big-img-active')) {
    bigImg.classList.add('big-img-deactive');
    toggleDarkBg(isDarkBgShown);
    setTimeout(() => {
      bigImg.classList.remove('big-img-deactive');
      bigImg.classList.remove('big-img-active');
    }, 390);
  }
}

portfolioImages.forEach((elem) => {
  elem.addEventListener('click', () => {
    showBigImg();
    toggleDarkBg(isDarkBgShown);
  });
});

bigImg.addEventListener('click', () => {
  hideBigImg();
});

// ***** Video control bar ranges stylize *****

const videoProgressRange = document.querySelector('.video-progress-range');
const videoVolumeRange = document.querySelector('.video-volume-range');

function videoRangeFill(range, multiplyer, variable) {
  const value = (range.value * multiplyer).toFixed(1);
  document.documentElement.style.setProperty(`${variable}`, `${value}%`);
}

videoProgressRange.addEventListener('input', () => {
  videoRangeFill(videoProgressRange, 0.1, '--video-play-progress');
});

videoVolumeRange.addEventListener('input', () => {
  videoRangeFill(videoVolumeRange, 1, '--video-volume');
});

// ***** Video play and pause *****

const videoPlayer = document.querySelector('.video-player');
const videoPlayerVideo = document.querySelector('.video-player-video');
const controlBar = document.querySelector('.control-bar');
const videoPlayButton = document.querySelector('.video-play-button');
const controlBarPlayPauseButton = document.querySelector('.control-bar-play-pause-button');
let isVideoPlay = false;
let isNotFirstRun = false;

function videoPlay() {
  videoPlayerVideo.play();
  isVideoPlay = !isVideoPlay;
  if (!isNotFirstRun) {
    isNotFirstRun = true;
    showControlBar();
    setOveralTimerTime();
  }
}

function videoPause() {
  videoPlayerVideo.pause();
  isVideoPlay = !isVideoPlay;
}

function showControlBar() {
  if (isNotFirstRun) {
    controlBar.classList.add('control-bar-show');
  }
}

function hideControlBar() {
  controlBar.classList.remove('control-bar-show');
}

function toggleVideoPlayButton(action) {
  if (action === 'play') {
    videoPlayButton.hidden = true;
  } else {
    videoPlayButton.hidden = false;
  }
}

function toggleControlBarPlayPauseButton(action) {
  if (action === 'play') {
    controlBarPlayPauseButton.style.backgroundImage = 'url(assets/svg/pause.svg)';
    controlBarPlayPauseButton.style.backgroundSize = '40px 40px';
  } else {
    controlBarPlayPauseButton.style.backgroundImage = 'url(assets/svg/play.svg)';
    controlBarPlayPauseButton.style.backgroundSize = '30px 40px';
  }
}

function resetVideo() {
  if (videoPlayerVideo.currentTime === videoPlayerVideo.duration) {
    videoPause();
    resetProgress();
    toggleControlBarPlayPauseButton('pause');
    toggleVideoPlayButton('pause');
  }
}

videoPlayer.addEventListener('mouseenter', showControlBar);

videoPlayer.addEventListener('mouseleave', hideControlBar);

videoPlayButton.addEventListener('click', () => {
  videoPlay();
  toggleControlBarPlayPauseButton('play');
  toggleVideoPlayButton('play');
});

controlBarPlayPauseButton.addEventListener('click', () => {
  if (!isVideoPlay) {
    videoPlay();
    toggleControlBarPlayPauseButton('play');
    toggleVideoPlayButton('play');
  } else {
    videoPause();
    toggleControlBarPlayPauseButton('pause');
    toggleVideoPlayButton('pause');
  }
});

videoPlayerVideo.addEventListener('timeupdate', resetVideo);

// ***** Video progress range *****

function updateVideoProgressRangeInTime() {
  const videoProgress = (videoPlayerVideo.currentTime / videoPlayerVideo.duration) * 100;
  videoProgressRange.value = videoProgress * 10;
  videoProgressRange.style.setProperty(`--video-play-progress`, `${videoProgress}%`);
}

function updateVideoProgressRangeByDrag() {
  const videoProgress = videoProgressRange.value / 10;
  videoPlayerVideo.currentTime = videoPlayerVideo.duration * (videoProgress / 100);
  videoProgressRange.style.setProperty(`--video-play-progress`, `${videoProgress}%`);
}

function resetProgress() {
  videoPlayerVideo.currentTime = 0;
}

videoPlayerVideo.addEventListener('timeupdate', () => {
  updateVideoProgressRangeInTime();
  setCurrentTimerTime();
});

videoProgressRange.addEventListener('change', updateVideoProgressRangeByDrag);

// ***** Volume control *****

function volumeChange() {
  const volumeValue = videoVolumeRange.value;
  videoPlayerVideo.volume = volumeValue / 100;
}

volumeChange(); // Runs to synchronize volume with range

videoVolumeRange.addEventListener('change', volumeChange);

// ***** Volume mute *****

const controlBarMute = document.querySelector('.control-bar-mute');
let lastVolumeValue;

function volumeMute(volumeValue) {
  if (+volumeValue !== 0) {
    lastVolumeValue = volumeValue;
    videoVolumeRange.value = 0;
  } else {
    videoVolumeRange.value = lastVolumeValue;
  }
}

function volumeMuteIconChange(volumeValue) {
  if (+volumeValue === 0) {
    controlBarMute.style.backgroundImage = 'url(assets/svg/mute.svg)';
  } else {
    controlBarMute.style.backgroundImage = 'url(assets/svg/volume.svg)';
    lastVolumeValue = volumeValue;
  }
}

function changeVolume() {
  videoPlayerVideo.volume = videoVolumeRange.value / 100;
}

videoVolumeRange.addEventListener('change', () => {
  volumeMuteIconChange(videoVolumeRange.value);
});

controlBarMute.addEventListener('click', () => {
  volumeMute(videoVolumeRange.value);
  volumeMuteIconChange(videoVolumeRange.value);
  changeVolume();
  videoRangeFill(videoVolumeRange, 1, '--video-volume');
});

// ***** Progress Timer *****

const currentTime = document.querySelector('.current-time');
const overalTime = document.querySelector('.overal-time');

function setCurrentTimerTime() {
  let seconds = Math.floor(videoPlayerVideo.currentTime);
  const minutes = seconds - (seconds % 60);
  seconds = seconds - minutes * 60;

  currentTime.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
}

function setOveralTimerTime() {
  let seconds = Math.floor(videoPlayerVideo.duration);
  const minutes = seconds - (seconds % 60);
  seconds = seconds - minutes * 60;
  overalTime.innerHTML = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
}

// ***** Jump 5s function *****

const jumpBackwrdButton = document.querySelector('.jump-backward-button');
const jumpForwarddButton = document.querySelector('.jump-forward-button');

function jumpBackward() {
  const newTime = videoPlayerVideo.currentTime - 5;
  if (newTime >= 0) {
    videoPlayerVideo.currentTime = newTime;
  } else {
    videoPlayerVideo.currentTime = 0;
  }
}

function jumpForward() {
  const newTime = videoPlayerVideo.currentTime + 5;
  if (newTime < videoPlayerVideo.duration) {
    videoPlayerVideo.currentTime = newTime;
  } else {
    videoPlayerVideo.currentTime = videoPlayerVideo.duration;
  }
}

jumpBackwrdButton.addEventListener('click', jumpBackward);
jumpForwarddButton.addEventListener('click', jumpForward);
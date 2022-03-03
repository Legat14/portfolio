'use strikt'

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
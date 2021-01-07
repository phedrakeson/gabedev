import SlideNav from './modules/slide.js';

const slide = new SlideNav('.wrapper', '.slide');

slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-control');
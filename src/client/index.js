import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/scss/theme.scss'

import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/carousel';
import '../client/help/lazyload';
import caruselSetup from './components/carusel';
import headerSetup from './components/fixed-header';
import eventsSetup from './components/events';
import galerySetup from './components/galery';
import mapSetup from './components/map';
import loadingSetup from './components/modal_loading';
import priceSetup from './components/prices';
import studySetup from './components/study';

/** On nav menu click event */
let menuScroll = function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        let id = $(this).attr('href'); //забираем идентификатор бока с атрибута href
        if (id) {
            let top;
            if (id == '#abountCarousel')
                top = 0;
            else
                top = $(id).offset().top - 85;
            $('body,html').animate({ scrollTop: top }, 1200); //анимируем переход на расстояние - top за 1500 мс
        }
    });
};

/** Build page with js */
$(document).ready(function () {
    caruselSetup();
    loadingSetup();
    eventsSetup();
    priceSetup();
    galerySetup();
    headerSetup();
    menuScroll();
    studySetup();
    mapSetup();
});


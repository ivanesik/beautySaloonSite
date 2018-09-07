import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/css/style.css';
import '../assets/style/css/theme.css';

import 'bootstrap/js/dist/carousel';
import { headerSetup } from './components/header';
import { eventsSetup } from './components/events';
import { galerySetup } from './components/galery';
import { mapSetup } from './components/map';
import { loadingSetup } from './components/modal_loading';


let menuScroll = function () {
    $(".header__menu").on("click", "a", function (event) {
        event.preventDefault(); //отменяем стандартную обработку нажатия по ссылке
        let id = $(this).attr('href'); //забираем идентификатор бока с атрибута href
        if (id) {
            let top;
            if (id == '#abountCarousel')
                top = 0;
            else if (id == '#events')
                top = $(id).offset().top;
            else
                top = $(id).offset().top - 85;
            $('body,html').animate({ scrollTop: top }, 1200); //анимируем переход на расстояние - top за 1500 мс
        }
    }); 
}

$(document).ready(function () {
    eventsSetup();
    galerySetup();
    headerSetup();
    mapSetup();
    loadingSetup();
    menuScroll();
});


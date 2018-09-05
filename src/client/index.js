import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/css/style.css';
import '../assets/style/css/theme.css';
 
import 'bootstrap/js/dist/carousel';
import { headerSetup } from './components/header';
import { eventsSetup } from './components/events';
import { galerySetup } from './components/galery';
import { mapSetup } from './components/map';
import { loadingSetup } from './components/modal_loading';

$(document).ready(function () {
    eventsSetup();
    galerySetup();
    headerSetup();
    mapSetup();
    loadingSetup();
});

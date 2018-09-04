import '../assets/style/css/style.css';
import '../assets/style/css/theme.css';
 
import 'bootstrap/js/dist/carousel';
import { headerSetup } from './header.js';
import { eventsSetup } from './events.js';
import { galerySetup } from './galery.js';
import { mapSetup } from './map';
import { loadingSetup } from './modal_loading';

require('file-loader?name=[name].[ext]!../index.html');

$(document).ready(function () {
    eventsSetup();
    galerySetup();
    headerSetup();
    mapSetup();
    loadingSetup();
});

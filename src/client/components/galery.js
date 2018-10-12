import checkWepP from '../help/checkWebP';
import { GALERY } from '../../assets/image/photos/index';
import loadingImg from '../../assets/image/loading/loading.svg';

/** Setup Galery section */
export default (function () {
    const width = $(window).width();
    if (width < 576)
        $('#gallery').remove();
    else {
        let callBackFunc = function (supportWepP) {
            let figures;
            if (supportWepP)
                figures = [
                    { img: GALERY[0], desc: 'Стилист: Анастасия Корчуганова<br>Фото: Ульяна Зыбенко' }, { img: GALERY[1], desc: 'Стилист: Ольга Ляховская<br>Фото: Ульяна Зыбенко' },
                    { img: GALERY[2], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[3], desc: 'Стилист: Анастасия Корчуганова' },
                    { img: GALERY[4], desc: 'Стилист: Анастасия Корчуганова<br>Фото: Марина Клушина' }, { img: GALERY[5], desc: 'Стилист: Анастасия Корчуганова<br>Фото: Дмитирий Кузьменков' },
                    { img: GALERY[6], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[7], desc: 'Бровист: Анастасия Корчуганова' },
                    { img: GALERY[8], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[9], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[10], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[11], desc: 'Стилист: Ольга Ляховская<br>Фото: Дмитрий Скотников' },
                    { img: GALERY[12], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[13], desc: 'Стилист: Ольга Ляховская<br>Фото: Марина Клушина' },
                    { img: GALERY[14], desc: 'Стилист: Ольга Ляховская<br>Фото: Дмитрий Кузьменков' }, { img: GALERY[15], desc: 'Стилист: Ольга Ляховская<br>Фото: Ульяна Зыбенко' },
                    { img: GALERY[16], desc: 'Стилист: Ольга Ляховская<br>Фото: Марина Клушина' }, { img: GALERY[17], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[18], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[19], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[20], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[21], desc: 'Стилисты: Анастасия Корчуганова, Ольга Ляховская<br>Фото: Ольга Марилова' }
                ];
            else
                figures = [
                    { img: GALERY[22], desc: 'Стилист: Анастасия Корчуганова<br>Фото Ульяна Зыбенко' }, { img: GALERY[23], desc: 'Стилист: Ольга Ляховская<br>Фото: Ульяна Зыбенко' },
                    { img: GALERY[24], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[25], desc: 'Стилист: Анастасия Корчуганова' },
                    { img: GALERY[26], desc: 'Стилист: Анастасия Корчуганова<br>Фото Марина Клушина' }, { img: GALERY[27], desc: 'Стилист: Анастасия Корчуганова<br>Фото: Дмитирий Кузьменков' },
                    { img: GALERY[28], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[29], desc: 'Бровист: Анастасия Корчуганова' },
                    { img: GALERY[30], desc: 'Стилист: Анастасия Корчуганова' }, { img: GALERY[31], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[32], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[33], desc: 'Стилист: Ольга Ляховская<br>Фото: Дмитрий Скотников' },
                    { img: GALERY[34], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[35], desc: 'Стилист: Ольга Ляховская<br>Фото: Марина Клушина' },
                    { img: GALERY[36], desc: 'Стилист: Ольга Ляховская<br>Фото Дмитрий Кузьменков' }, { img: GALERY[37], desc: 'Стилист: Ольга Ляховская<br>Фото: Ульяна Зыбенко' },
                    { img: GALERY[38], desc: 'Стилист: Ольга Ляховская<br>Фото Марина Клушина' }, { img: GALERY[39], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[40], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[41], desc: 'Стилист: Ольга Ляховская' },
                    { img: GALERY[42], desc: 'Стилист: Ольга Ляховская' }, { img: GALERY[43], desc: 'Стилисты: Анастасия Корчуганова, Ольга Ляховская<br>Фото: Ольга Марилова' }
                ];

            const columns = $('#gallery .columns');
            if (columns) {
                figures.forEach(image => {
                    let figure = document.createElement('figure');
                    let img = document.createElement('img');
                    img.setAttribute('src', loadingImg);
                    img.setAttribute('data-src', image.img);
                    img.setAttribute('alt', "Здесь должна быть картинка, но она куда-то убежала");

                    let description = document.createElement('p');
                    description.innerHTML = image.desc;
                    figure.appendChild(img);
                    figure.appendChild(description);
                    columns.append(figure);
                });
                let images = document.querySelectorAll("#gallery .columns img");
                lazyload(images);
            }
        }
        checkWepP(callBackFunc);
    }
});

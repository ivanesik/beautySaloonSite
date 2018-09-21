import checkWepP from '../help/checkWebP';
import { GALERY } from '../../assets/image/photos/index';

export default (function () {
    const width = $(window).width();
    if (width < 576)
        $('#gallery').remove();
    else {
        let callBackFunc = function (supportWepP) {
            let figures;
            if (supportWepP)
                figures = [
                    { img: GALERY[0], desc: 'qwerty' }, { img: GALERY[1], desc: 'qwerty' }, { img: GALERY[2], desc: 'qwerty' }, { img: GALERY[3], desc: 'qwerty' },
                    { img: GALERY[4], desc: 'qwerty' }, { img: GALERY[5], desc: 'qwerty' }, { img: GALERY[6], desc: 'qwerty' }, { img: GALERY[7], desc: 'qwerty' },
                    { img: GALERY[8], desc: 'qwerty' }, { img: GALERY[9], desc: 'qwerty' }, { img: GALERY[10], desc: 'qwerty' }, { img: GALERY[11], desc: 'qwerty' },
                    { img: GALERY[12], desc: 'qwerty' }, { img: GALERY[13], desc: 'qwerty' }, { img: GALERY[14], desc: 'qwerty' }, { img: GALERY[15], desc: 'qwerty' },
                    { img: GALERY[16], desc: 'qwerty' }, { img: GALERY[17], desc: 'qwerty' }
                ];
            else
                figures = [
                    { img: GALERY[18], desc: 'qwerty' }, { img: GALERY[19], desc: 'qwerty' }, { img: GALERY[20], desc: 'qwerty' }, { img: GALERY[21], desc: 'qwerty' },
                    { img: GALERY[22], desc: 'qwerty' }, { img: GALERY[23], desc: 'qwerty' }, { img: GALERY[24], desc: 'qwerty' }, { img: GALERY[25], desc: 'qwerty' },
                    { img: GALERY[26], desc: 'qwerty' }, { img: GALERY[27], desc: 'qwerty' }, { img: GALERY[28], desc: 'qwerty' }, { img: GALERY[29], desc: 'qwerty' },
                    { img: GALERY[30], desc: 'qwerty' }, { img: GALERY[31], desc: 'qwerty' }, { img: GALERY[32], desc: 'qwerty' }, { img: GALERY[33], desc: 'qwerty' },
                    { img: GALERY[34], desc: 'qwerty' }, { img: GALERY[35], desc: 'qwerty' }
                ];

            const columns = $('#gallery .columns');
            if (columns) {
                figures.forEach(image => {
                    let figure = document.createElement('figure');
                    let img = document.createElement('img');
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

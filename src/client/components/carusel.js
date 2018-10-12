import img1 from '../../assets/image/carusel/carusel-1.png';
import img2 from '../../assets/image/carusel/carusel-2.jpg';
import img3 from '../../assets/image/carusel/carusel-3.jpg';
import img4 from '../../assets/image/carusel/carusel-4.jpg';
import img1w from '../../assets/image/carusel/carusel-1.webp';
import img2w from '../../assets/image/carusel/carusel-2.webp';
import img3w from '../../assets/image/carusel/carusel-3.webp';
import img4w from '../../assets/image/carusel/carusel-4.webp';

import checkWepP from '../help/checkWebP';

/** Setup top page bootstrap carusel */
export default function () {
    const width = $(window).width();
    if (width < 576)
        $('#abountCarousel').remove();
    else {
        let callBakcFunc = function (supportWebP) {
            let figures;
            if (supportWebP)
                figures = [
                    {
                        img: img4w, title: 'Проект N1 - территория красоты',
                        desc: 'Место где можно сделать укладку, макияж, маникюр и оформить бровки в любое удобное тебе время 24/7!.',
                        class: 'img-full-center'
                    },
                    { img: img1w, title: 'Делаем красиво и с душой!', class: 'img-full-top' },
                    { img: img2w, title: 'Бьюти-девичник - это модно и стильно!', class: 'img-full-bottom' },
                    {
                        img: img3w, title: 'ШКОЛА СТИЛИСТОВ',
                        desc: 'Для тех, кто хочет освоить красивую и творческую профессию, научиться подчеркивать свою индивидуальность.',
                        class: 'img-full-center'
                    }
                ];
            else
                figures = [
                    {
                        img: img4, title: 'Проект N1 - территория красоты',
                        desc: 'Место где можно сделать укладку, макияж, маникюр и оформить бровки в любое удобное тебе время 24/7!.',
                        class: 'img-full-center'
                    },
                    { img: img1, title: 'Делаем красиво и с душой!', class: 'img-full-top' },
                    { img: img2, title: 'Бьюти-девичник - это модно и стильно!', class: 'img-full-bottom' },
                    {
                        img: img3, title: 'ШКОЛА СТИЛИСТОВ',
                        desc: 'Для тех, кто хочет освоить красивую и творческую профессию, научиться подчеркивать свою индивидуальность.',
                        class: 'img-full-center'
                    }
                ];
            const carusel = $('#abountCarousel .carousel-inner');
            figures.forEach((image, index) => {
                let caruselItem = document.createElement('div');
                caruselItem.setAttribute('class', 'carousel-item h-100');
                if (index == 0)
                    caruselItem.classList.add('active');
                let img = document.createElement('img');
                img.setAttribute('src', image.img);
                img.setAttribute('class', 'd-block h-100 w-100 ' + image.class);
                img.setAttribute('alt', "Здесь должна быть картинка, но она куда-то убежала");
                let capiton = document.createElement('div');
                capiton.setAttribute('class', 'carousel-caption');
                let title = document.createElement('h3');
                title.innerText = image.title;
                capiton.appendChild(title);
                if (image.desc) {
                    let desc = document.createElement('p');
                    desc.innerText = image.desc;
                    desc.setAttribute('class', 'd-none d-sm-block');
                    capiton.appendChild(desc);
                }
                caruselItem.appendChild(img);
                caruselItem.appendChild(capiton);
                carusel.append(caruselItem);
            });
        }
        checkWepP(callBakcFunc);
    }
}
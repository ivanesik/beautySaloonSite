import { loadingSetup } from './modal_loading';

export let galerySetup = (function () {
    let figures = [
        { img: './assets/image/photos/1.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/2.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/3.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/4.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/5.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/6.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/7.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/8.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/9.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/10.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/11.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/12.png', desc: 'qwerty' },
        { img: './assets/image/photos/13.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/14.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/15.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/16.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/17.jpg', desc: 'qwerty' },
        { img: './assets/image/photos/18.jpg', desc: 'qwerty' }
    ];

    const columns = $('#works .columns');

    figures.forEach(image => {
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        img.setAttribute('src', image.img );
        let description = document.createElement('p');
        description.innerHTML = image.desc;
        figure.appendChild(img);
        figure.appendChild(description);
        columns.append(figure);
    });
});

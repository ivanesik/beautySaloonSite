import img1 from  '../../assets/image/photos/1.jpg';
import img2 from  '../../assets/image/photos/2.jpg';
import img3 from  '../../assets/image/photos/3.jpg';
import img4 from  '../../assets/image/photos/4.jpg';
import img5 from  '../../assets/image/photos/5.jpg';
import img6 from  '../../assets/image/photos/6.jpg';
import img7 from  '../../assets/image/photos/7.jpg';
import img8 from  '../../assets/image/photos/8.jpg';
import img9 from  '../../assets/image/photos/9.jpg';
import img10 from  '../../assets/image/photos/10.jpg';
import img11 from  '../../assets/image/photos/11.jpg';
import img12 from  '../../assets/image/photos/12.png';
import img13 from  '../../assets/image/photos/13.jpg';
import img14 from  '../../assets/image/photos/14.jpg';
import img15 from  '../../assets/image/photos/15.jpg';
import img16 from  '../../assets/image/photos/16.jpg';
import img17 from  '../../assets/image/photos/17.jpg';
import img18 from  '../../assets/image/photos/18.jpg';

export let galerySetup = (function () {
    let figures = [
        { img: img1, desc: 'qwerty' }, { img: img2, desc: 'qwerty' }, { img: img3, desc: 'qwerty' }, { img: img4, desc: 'qwerty' },
        { img: img5, desc: 'qwerty' }, { img: img6, desc: 'qwerty' }, { img: img7, desc: 'qwerty' }, { img: img8, desc: 'qwerty' },
        { img: img9, desc: 'qwerty' }, { img: img10, desc: 'qwerty' }, { img: img11, desc: 'qwerty' }, { img: img12, desc: 'qwerty' },
        { img: img13, desc: 'qwerty' }, { img: img14, desc: 'qwerty' }, { img: img15, desc: 'qwerty' }, { img: img16, desc: 'qwerty' },
        { img: img17, desc: 'qwerty' }, { img: img18, desc: 'qwerty' }
    ];

    const columns = $('#gallery .columns');

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

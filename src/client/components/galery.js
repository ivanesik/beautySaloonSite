import img1 from  '../../assets/image/photos/1.min.jpg';
import img2 from  '../../assets/image/photos/2.min.jpg';
import img3 from  '../../assets/image/photos/3.min.jpg';
import img4 from  '../../assets/image/photos/4.min.jpg';
import img5 from  '../../assets/image/photos/5.min.jpg';
import img6 from  '../../assets/image/photos/6.min.jpg';
import img7 from  '../../assets/image/photos/7.min.jpg';
import img8 from  '../../assets/image/photos/8.min.jpg';
import img9 from  '../../assets/image/photos/9.min.jpg';
import img10 from  '../../assets/image/photos/10.min.jpg';
import img11 from  '../../assets/image/photos/11.min.jpg';
import img12 from  '../../assets/image/photos/12.min.png';
import img13 from  '../../assets/image/photos/13.min.jpg';
import img14 from  '../../assets/image/photos/14.min.jpg';
import img15 from  '../../assets/image/photos/15.min.jpg';
import img16 from  '../../assets/image/photos/16.min.jpg';
import img17 from  '../../assets/image/photos/17.min.jpg';
import img18 from  '../../assets/image/photos/18.min.jpg';

export default (function () {
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

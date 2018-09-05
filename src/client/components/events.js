import img1 from  '../../assets/image/events/-.jpg';
import img2 from  '../../assets/image/events/01_03_2018.jpg';
import img3 from  '../../assets/image/events/1_09_2018.jpg';
import img4 from  '../../assets/image/events/8-9_09_2018.jpg';
import img5 from  '../../assets/image/events/23-26_06_2018.jpg';

export let eventsSetup = (function () {
    let eventsImages = [img1, img2, img3, img4, img5, img1, img2, img3, img4, img5];

    const list = $('#events .list-horizontal');
    
    eventsImages.forEach(image => {
        let div = document.createElement('div');
        div.classList.add('list__item');
        let img = document.createElement('img')
        img.setAttribute("src", image);
        div.appendChild(img);
        list.append(div);
    });
});

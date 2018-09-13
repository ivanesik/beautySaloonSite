import img1 from  '../../assets/image/events/1.jpg';
import img2 from  '../../assets/image/events/2.jpg';
import img3 from  '../../assets/image/events/3.jpg';

import eventImg1 from '../../assets/image/backgrounds/event-1.png';
import eventImg2 from '../../assets/image/backgrounds/event-2.png';
import eventImg3 from '../../assets/image/backgrounds/event-3.png';

export let eventsSetup = (function () {
    let events = [
        {image: img1, description: 'Вызывает улыбку и восторг! Ведь лучший подарок - это время, посвященное себе любимой! Приобрести можно с разным номиналом или на услуги.'},
        {image: img2, description: 'Каждый вторник оформление и окрашивание бровей хной 450 ₽ вместо 700 ₽.'},
        {image: img3, description: 'Теплая девичья атмосфера! Подружки, шампанское, сладости, экспресс образы от наших стилистов, фотограф, музыка и танцы! Бьюти-девичник - это модно и стильно!<br>Количество участников 4-6 человек.'}];

    const list = $('#events .list-horizontal');
    
    events.forEach((event, index) => {
        let div = document.createElement('div');
        div.classList.add('list__item');
        let img = document.createElement('img')
        img.setAttribute("src", event.image);
        let descr = document.createElement('div');
        descr.classList.add('description');
        switch (index % 3){
            case 0:
                descr.setAttribute('style', 'background-image: url(' + eventImg1 + ')');
                break;
            case 1:
                descr.setAttribute('style', 'background-image: url(' + eventImg2 + ')');
                break;
            case 2:
                descr.setAttribute('style', 'background-image: url(' + eventImg3 + ')');
                break;
        }
        descr.innerHTML = event.description;
        div.appendChild(img);
        div.appendChild(descr);
        list.append(div);
    });
});

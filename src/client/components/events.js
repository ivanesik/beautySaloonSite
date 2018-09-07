import img1 from  '../../assets/image/events/-.jpg';
import img2 from  '../../assets/image/events/01_03_2018.jpg';
import img3 from  '../../assets/image/events/1_09_2018.jpg';
import img4 from  '../../assets/image/events/8-9_09_2018.jpg';
import img5 from  '../../assets/image/events/23-26_06_2018.jpg';

export let eventsSetup = (function () {
    let events = [
        {image: img1, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img2, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img3, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img4, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img5, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img1, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img2, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img3, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img4, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'},
        {image: img5, description: 'В эту пятницу 13го мы будем ловить енотов у вас в саду. Приходите к нас и станьте первым пойманым енотом.'}];

    const list = $('#events .list-horizontal');
    
    events.forEach(event => {
        let div = document.createElement('div');
        div.classList.add('list__item');
        let img = document.createElement('img')
        img.setAttribute("src", event.image);
        let descr = document.createElement('div');
        descr.classList.add('description');
        descr.innerHTML = event.description;
        div.appendChild(img);
        div.appendChild(descr);
        list.append(div);
    });
});

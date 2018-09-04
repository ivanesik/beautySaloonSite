export let eventsSetup = (function () {
    let eventsImages = ['./assets/image/events/-.jpg', './assets/image/events/01_03_2018.jpg',
        './assets/image/events/1_09_2018.jpg', './assets/image/events/8-9_09_2018.jpg',
        './assets/image/events/23-26_06_2018.jpg', './assets/image/events/23-26_06_2018.jpg',
        './assets/image/events/23-26_06_2018.jpg', './assets/image/events/23-26_06_2018.jpg',
        './assets/image/events/23-26_06_2018.jpg', './assets/image/events/23-26_06_2018.jpg'];

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

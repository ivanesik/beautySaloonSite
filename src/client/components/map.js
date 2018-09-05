export let mapSetup = function(){
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчнию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.458139, 84.957135],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            controls: ['zoomControl']
        });

        var myPlacemark = new ymaps.Placemark([56.458139, 84.957135], {
            iconContent: 'Project N1',
            balloonContentHeader: 'Project N1',
            balloonContentBody : 'Студия красоты'},
            {
                preset: 'islands#blackStretchyIcon'
            }
        );

        myMap.geoObjects.add(myPlacemark);
    }
};

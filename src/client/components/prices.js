export default function () {

    let priceList = [
        {
            title: 'Ольга Ляховская', description: 'Стилист по прическам, визажист. Преподаватель школы стилистов, автор курсов. Официальный представитель FACE nicobaggio professional make-up',
            types: [
                {
                    title: 'Образ', prices: [
                        { title: 'Свадебный образ (прическа + макияж)', price: '3500 ք' },
                        { title: 'Репетиция Свадебного образа (прическа + макияж)', price: '2500 ք' }
                    ]
                },
                {
                    title: 'Макияж', prices: [
                        { title: 'Дневной макияж', price: '900 ք' }, { title: 'Вечерний макияж', price: '1100-1300 ք' },
                        { title: 'Фотомакияж', price: '1100-1500 ք' }, { title: 'Макияж невесты', price: '1500 ք' },
                        { title: 'Репетиция свадебного макияжа', price: '1000 ք' }, { title: 'Лифтинг-макияж', price: '900 ք' },
                        { title: 'Детский макияж', price: '500 ք' }
                    ]
                },
                {
                    title: 'Прически', prices: [
                        { title: 'Укладка на короткие волосы (утюжком, плойкой)', price: '1000 ք' },
                        { title: 'Локоны (легкие, объемные, волна, голливудские, афро)', price: '1200-1500 ք' },
                        { title: 'Плетения', price: '1300 ք' }, { title: 'Вечерняя прическа', price: '1700 ք' },
                        { title: 'Свадебная прическа', price: '2000 ք' }, { title: 'Репетиция Свадебной прически', price: '1500 ք' },
                        { title: 'Детская прическа', price: '900 ք' }
                    ]
                },
                {
                    title: 'Дополнительно', prices: [
                        { title: 'Выезд по городу', price: '300 ք' },
                        { title: 'Выезд в пригород Томска рассчитывается по стоимости такси в обе стороны' }
                    ]
                }
            ]
        },
        {
            title: 'Анастасия Корчуганова', description: 'Стилист-визажист, бровист. Преподаватель школы стилистов, автор курсов. Официальный представитель FACE nicobaggio professional make-up',
            types: [
                {
                    title: 'Образ', prices: [
                        { title: 'Свадебный образ (прическа + макияж)', price: '3500 ք' }
                    ]
                },
                {
                    title: 'Макияж', prices: [
                        { title: 'Дневной макияж', price: '1000 ք' }, { title: 'Вечерний макияж', price: '1500 ք' },
                        { title: 'Макияж невесты', price: '2000 ք' }, { title: 'Макияж жениха', price: '500 ք' },
                        { title: 'Фотомакияж', price: '1500 ք' }, { title: 'Макияж невесты', price: '1500 ք' },
                        { title: 'Репетиция свадебного макияжа', price: '1000 ք' }, { title: 'Лифтинг-макияж', price: '1500 ք' },
                        { title: 'Детский макияж', price: '500 ք' }
                    ]
                },
                {
                    title: 'Прически', prices: [
                        { title: 'Локоны', price: '1100 ք' }, { title: 'Вечерняя прическа', price: '1500 ք' },
                        { title: 'Детская прическа', price: '1000 ք' }
                    ]
                },
                {
                    title: 'Оформление и окрашивание бровей', prices: [
                        { title: 'Коррекция бровей воском/пинцетом', price: '400 ք' },
                        { title: 'Коррекция бровей воском/пинцетом + окрашивание краской', price: '500 ք' },
                        { title: 'Коррекция бровей воском/пинцетом + окрашивание хной', price: '700 ք' }, { title: 'Окрашивание краской', price: '300 ք' },
                        { title: 'Окрашивание хной', price: '500 ք' }, { title: 'Окрашивание ресниц краской', price: '300 ք' },
                        { title: 'Удаление усиков воском', price: '300 ք' }
                    ]
                },
                {
                    title: 'Дополнительно', prices: [
                        { title: 'Выезд на дом (любая услуга с 9:00 до 20:00)', price: '300 ք' },
                        { title: 'Ранний выезд (до 9:00)', price: '500 ք' }
                    ]
                }
            ]
        },
        {
            title: 'Светлана Эм', description: 'Мастер ногтевого сервиса',
            types: [
                {
                    title: 'Маникюр', prices: [
                        { title: 'Комбинированный маникюр', price: '300 ք' },
                        { title: 'Комбинированный маникюр + выравнивание ногтевой пластины + однотонное покрытие гель-лаком ', price: '600 ք' },
                        { title: 'Донаращивание (1 ноготь)', price: '50 ք' }, { title: 'Укрепление акриловой пудрой ', price: '100 ք' },
                        { title: 'Снятие гель-лак', price: '100 ք' }, { title: 'Дизайн слайдер, стемпинг, втирка (1 ноготь)', price: '50 ք' },
                        { title: 'Инкрустация стразами (1 ноготь)', price: '100 ք' }, { title: 'Простой дизайн (рисунок, стразы) (1 ноготь)', price: '25 ք' }
                    ]
                }
            ]
        }
    ];

    let container = $('#price .row');

    priceList.forEach((master, index) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'col-xl-4 col-lg-6 mt-4');
        let title = document.createElement('h3');
        title.classList.add('text-center');
        title.innerText = master.title;
        let table = document.createElement('table');
        table.setAttribute('class', 'table-clear w-100');
        master.types.forEach(type => {
            let headerTr = document.createElement('tr');
            let header = document.createElement('td');
            header.setAttribute('colspan', '2');
            header.classList.add('text-center');
            headerTr.appendChild(header);
            let headerText = document.createElement('h5');
            headerText.classList.add('pt-3');
            headerText.innerText = type.title;
            header.appendChild(headerText);
            table.appendChild(headerTr);
            type.prices.forEach(price => {
                let tr =  document.createElement('tr');
                let name = document.createElement('td');
                name.innerText = price.title;
                tr.appendChild(name);
                if (price.price) {
                    let num = document.createElement('td');
                    num.classList.add('text-right');
                    num.setAttribute('style', 'min-width: 110px;');
                    num.innerText = price.price;
                    tr.appendChild(num);
                }
                else
                    name.setAttribute('colspan', '2');
                table.appendChild(tr);
            });
        });

        div.appendChild(title);
        div.appendChild(table);
        const hr = document.createElement('hr');
        div.appendChild(hr);
        container.append(div);
    });

}
export default function () {

    let studyText = [{
        id: 'study1', title: 'Макияж на каждый день. Включаем мозги!', text: `Курс для тех, кто хочет подходить к ежедневному макияжу с умом!<br>
        Занятия в группах по 2-3 человека.<br>Стоимость курса до 1 ноября всего 2500 (2 дня)<br><br>Теоретический блок:
        <ul><li> Основной минимальный набор кистей «для себя» на все случаи жизни.</li>
            <li> Подготовка кожи лица к макияжу. Как скрыть недостатки кожи.</li>
            <li> Подбор текстур и оттенков косметических средств (тон, консилер, румяна, тени, хайлайтер, помада, карандаш и т.д) подходящих именно вашему типу кожи и внешности.</li>
            <li> Зарисовка схем нанесения всех продуктов на фейсчарте.</li>
            <li> Разбор вашей косметички и инструментов (по желанию).</li></ul>
        Практический блок:
        <ul><li> Техника нанесения и подбор тонирующих средств (база под макияж, тон, пудра, консилер).</li>
        <li> Техника нанесения румян, хайлайтера и скульптора, создание идеального овала лица.</li>
        <li> Техника нанесения макияжа глаз (дневной, вечерний, смоки, стрелки).</li>
        <li> Подбор карандашей, оттенков теней, туши и т.д.</li>
        <li> Подбор правильной формы бровей и создание макияжа бровей.</li>
        <li> Макияж губ - оттенки и текстуры помад, подбор помады на каждый день, подбор ярких оттенков помады, коррекция формы губ.</li>
        <li> Принципы подбора макияжа под целый образ.</li></ul>` },
    {
        id: 'study2', title: 'Интенсив-курс «Локоны»', text: `Стоимость курса 4000 (2 дня). Группы 3-4 человека<br>Как правильно подготовить волосы, про средства для
        укладки и инструменты!<br>Интенсив-курс разработан для мастеров разного уровня подготовки (новички, работающие мастера).<br>
        <strong>1 День:</strong> Как добиться стойкости локонов. Работа с тяжёлыми, непослушными волосами (тонкие, пушистые, детские). Создаём объёмную укладку.
        Показ+отработка<br> <strong>2 День:</strong> Романтичный образ - Волна. Структура и плетения в укладке. Учимся крепить украшения, фату в локоны. 
        Показ+ отработка<br>Максимум внимания каждому (мини-группа). По окончанию обучения выдаётся сертификат. Помощь в поиске моделей`},
    {
        id: 'study3', title: 'Индивидуальное обучение', text: `- <strong>по оформлению бровей</strong><br>Моделирование бровей, коррекция пинцетом
        и воском, окрашивание хной и краской. Продолжительность курса 3 дня.<br>- <strong>по прическам</strong><br>Отработка на модели любой вечерней 
        прически, две простые прически, плетения или локоны. Продолжительность одного занятия 3-4 часа. Стоимость 3000-3500 (1 занятие)<br>
        - <strong>по макияжу</strong><br>Как правильно ухаживать за кожей, разберём твою косметичку, научим делать красивый дневной макияж без макияжа
        и стойкий вечерний макияж, который подчеркнёт  индивидуальность. Продолжительность одного занятия 3-4 часа. Стоимость 2500 (1 день), 4000 (2 дня)`},
    {
        id: 'study4', title: 'Стилист', text: `Курс для тех, кто хочет подходить к ежедневному макияжу с умом! Занятия в группах по 2-3 человека.
        Стоимость курса до 1 ноября всего 2500 (2 дня)` },
    {
        id: 'study5', title: 'Современная коммерческая прическа. Тренды 2019 года', text: `Стоимость курса 4000 (2 дня). Группы 3-4 человека
        Как правильно подготовить волосы, про средства для укладки и инструменты!
        Интенсив-курс разработан для мастеров разного уровня подготовки (новички, работающие мастера).
        1 День: Как добиться стойкости локонов. Работа с тяжёлыми, непослушными волосами (тонкие, пушистые, детские). Создаём объёмную укладку. Показ+отработка
        2 День: Романтичный образ - Волна. Структура и плетения в укладке. Учимся крепить украшения, фату в локоны. Показ+ отработка
        Максимум внимания каждому (мини-группа). По окончанию обучения выдаётся сертификат. Помощь в поиске моделей`},
    {
        id: 'study6', title: 'Мастер классы', text: `- по оформлению бровей Моделирование бровей, коррекция пинцетом и воском, окрашивание хной и краской.
        Продолжительность курса 3 дня. - по прическам Отработка на модели любой  вечерней прически, две простые прически, плетения или локоны.
        Продолжительность одного занятия 3-4 часа. Стоимость 3000-3500 (1 занятие) - по макияжу Как правильно ухаживать за кожей, разберём твою косметичку,
        научим делать красивый дневной макияж без макияжа и стойкий вечерний макияж,
        который подчеркнёт индивидуальность. Продолжительность одного занятия 3-4 часа. Стоимость 2500 (1 день), 4000 (2 дня)`}];


    $('#studyModal').on('show.bs.modal', function (event) {
        var trigger = $(event.relatedTarget);
        let modalContent = studyText.find(x => x.id == trigger[0].id);
        var modal = $(this)
        modal.find('.modal-title').text(modalContent.title)
        modal.find('.modal-body').html(modalContent.text)
    })
}
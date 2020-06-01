const SHOP_DATA = [
    {
        id: 1,
        title: 'Дрели',
        routeName: 'drills',
        items: [
            {
                id: 1,
                name: 'Дрель AEG',
                imageUrl: '/images/shop-img/drills/aeg.jpg',
                price: 4500,
            },
            {
                id: 2,
                name: 'Дрель Bort',
                imageUrl: '/images/shop-img/drills/bort.jpg',
                price: 3500,
            },
            {
                id: 3,
                name: 'Дрель BOSCH',
                imageUrl: '/images/shop-img/drills/bosch.jpeg',
                price: 6000,
            },
            {
                id: 4,
                name: 'Дрель DeWalt',
                imageUrl: '/images/shop-img/drills/dewalt.jpg',
                price: 4000,
            },
            {
                id: 5,
                name: 'Дрель Днiпро',
                imageUrl: '/images/shop-img/drills/dnipro.jpg',
                price: 2700,
            },
            {
                id: 6,
                name: 'Дрель Hyundai',
                imageUrl: '/images/shop-img/drills/hyundai.jpg',
                price: 4800,
            },
            {
                id: 7,
                name: 'Дрель JCB',
                imageUrl: '/images/shop-img/drills/jcb.jpg',
                price: 3200,
            },
            {
                id: 8,
                name: 'Дрель Makita',
                imageUrl: '/images/shop-img/drills/makita.jpg',
                price: 4500,
            },
            {
                id: 9,
                name: 'Ударная дрель Metabo',
                imageUrl: '/images/shop-img/drills/metabo_basic.jpg',
                price: 4200,
            },
        ],
    },
    {
        id: 2,
        title: 'Отвертки',
        routeName: 'screwdrivers',
        items: [
            {
                id: 10,
                name: 'Отвертка универсальная короткая MILWAUKEE',
                imageUrl: '/images/shop-img/screwdrivers/milwaukee.jpg',
                price: 420,
            },
            {
                id: 11,
                name: 'Отвертка Vira',
                imageUrl: '/images/shop-img/screwdrivers/vira.jpg',
                price: 380,
            },
            {
                id: 12,
                name: 'Набор отверток Workpro',
                imageUrl: '/images/shop-img/screwdrivers/workpro.jpg',
                price: 1100,
            },
            {
                id: 13,
                name: 'Набор отверток Stanley Cushion Grip',
                imageUrl: '/images/shop-img/screwdrivers/stanley.png',
                price: 1600,
            },
            {
                id: 14,
                name: 'Отвертка Lux плоская',
                imageUrl: '/images/shop-img/screwdrivers/lux.jpg',
                price: 260,
            },
        ],
    },
    {
        id: 3,
        title: 'Аккумуляторы',
        routeName: 'accumulators',
        items: [
            {
                id: 18,
                name: 'Аккумулятор BOSCH',
                imageUrl: '/images/shop-img/accumulators/bosch.jpg',
                price: 5500,
            },
            {
                id: 19,
                name: 'Аккумулятор Kainar',
                imageUrl: '/images/shop-img/accumulators/kainar.jpg',
                price: 4500,
            },
            {
                id: 20,
                name: 'Аккумулятор Varta',
                imageUrl: '/images/shop-img/accumulators/varta.jpg',
                price: 4300,
            },
            {
                id: 21,
                name: 'Аккумулятор Duracell',
                imageUrl: '/images/shop-img/accumulators/duracell.jpg',
                price: 5000,
            },
            {
                id: 22,
                name: 'Аккумулятор TAB',
                imageUrl: '/images/shop-img/accumulators/tab.jpg',
                price: 185,
            },
        ],
    },
    {
        id: 4,
        title: 'Спецодежда',
        routeName: 'spec-clothes',
        items: [
            {
                id: 23,
                name: 'Костюм Горка',
                imageUrl: '/images/shop-img/spec-clothes/gorka.jpg',
                price: 2100,
            },
            {
                id: 24,
                name: 'Костюм Военторг Камуфлж 52',
                imageUrl: '/images/shop-img/spec-clothes/voentorg_52.webp',
                price: 2000,
            },
            {
                id: 25,
                name: 'Костюм Сириус Кобальт',
                imageUrl: '/images/shop-img/spec-clothes/sirius_kobalt.jpg',
                price: 1800,
            },
            {
                id: 26,
                name: 'Жилет Сириус-Пекин',
                imageUrl: '/images/shop-img/spec-clothes/sirius_pekin.jpg',
                price: 1300,
            },
            {
                id: 27,
                name: 'Костюм Горка Упрощённая',
                imageUrl: '/images/shop-img/spec-clothes/gorka_uprosch.jpg',
                price: 1300,
            },
            {
                id: 28,
                name: 'Костюм Авангард',
                imageUrl: '/images/shop-img/spec-clothes/avangard.jpg',
                price: 2200,
            },
        ],
    },
    {
        id: 5,
        title: 'Tools',
        routeName: 'tools',
        items: [
            {
                id: 30,
                name: 'Молоток демонтажный DeWalt',
                imageUrl: '/images/shop-img/tools/molotok_dewalt.jpg',
                price: 3250,
            },
            {
                id: 31,
                name: 'Молток с гвоздодером Stanley',
                imageUrl: '/images/shop-img/tools/molotok_stanley.jpeg',
                price: 900,
            },
            {
                id: 32,
                name: 'Пила Mirax',
                imageUrl: '/images/shop-img/tools/pila_mirax.jpg',
                price: 250,
            },
            {
                id: 33,
                name: 'Пила Сибин',
                imageUrl: '/images/shop-img/tools/pila_sibin.jpg',
                price: 350,
            },
            {
                id: 34,
                name: 'Ножовка по металлу Lux',
                imageUrl: '/images/shop-img/tools/nozhovka_lux.jpg',
                price: 40,
            },
            {
                id: 35,
                name: 'Ключ разводной Stayer',
                imageUrl: '/images/shop-img/tools/kluch_stayer.jpg',
                price: 25,
            },
        ],
    },
];

export default SHOP_DATA;

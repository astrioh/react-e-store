import React, { Component } from 'react';

import './Menu.scss';
import MenuItem from '../MenuItem/MenuItem';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'Дрели',
                    img: 'https://storgom.ua/uploads/gallery/I/dreli_500x400.jpg',
                    url: 'drill',
                },
                {
                    id: 2,
                    title: 'Отвертки',
                    img: 'https://static-eu.insales.ru/images/products/1/7923/61366003/0-65-013.jpg',
                    url: 'screwdriver',

                },
                {
                    id: 3,
                    title: 'Аккумуляторы',
                    img: 'https://lh3.googleusercontent.com/proxy/ChhxIyNtZ72NGJteiClzPmkM9zbVjjqto07OEO4axw8rAvBkAPxzRle-r9U3frS_fbwp9bOs1kOgbnfQirs',
                    url: 'accumulator',
                },
                {
                    id: 4,
                    title: 'Спецодежда',
                    img: 'https://www.technoavia.ru/img/ta_photo_office/offise/83_2big.jpg',
                    size: 'large',
                    url: 'coverall',
                },
                {
                    id: 5,
                    title: 'Инструменты',
                    img: 'https://www.iphones.ru/wp-content/uploads/2016/04/tools.jpg',
                    size: 'large',
                    url: 'instruments',
                },
            ],
        }
    }

    render() {
        return (
            <div className="menu">
                {this.state.sections.map((section) => <MenuItem key={section.id} title={section.title} img={section.img} size={section.size} url={section.url} />)}
            </div>
        );
    } 
}

export default Menu;
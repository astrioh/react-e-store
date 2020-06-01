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
                    imgUrl: 'images/drills.jpg',
                    routeName: 'drills',
                },
                {
                    id: 2,
                    title: 'Отвертки',
                    imgUrl: 'images/screwdrivers.jpg',
                    routeName: 'screwdrivers',

                },
                {
                    id: 3,
                    title: 'Аккумуляторы',
                    imgUrl: 'images/accumulators.jpg',
                    routeName: 'accumulators',
                },
                {
                    id: 4,
                    title: 'Спецодежда',
                    imgUrl: 'images/spec_clothes.jpg',
                    size: 'large',
                    routeName: 'spec-clothes',
                },
                {
                    id: 5,
                    title: 'Инструменты',
                    imgUrl: 'images/tools.jpg',
                    size: 'large',
                    routeName: 'tools',
                },
            ],
        }
    }

    render() {
        return (
            <div className="menu">
                {this.state.sections.map((section) => <MenuItem key={section.id} title={section.title} img={section.imgUrl} size={section.size} url={section.routeName} />)}
            </div>
        );
    } 
}

export default Menu;
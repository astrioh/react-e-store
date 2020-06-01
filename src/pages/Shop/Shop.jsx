import React, { Component } from 'react';

import './Shop.scss';
import SHOP_DATA from './shop-data';
import PreviewSection from '../../components/PreviewSection/PreviewSection';

class Shop extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        return (
            <div className="shop">
                {this.state.collections.map((collection) => <PreviewSection key={collection.id} title={collection.title} items={collection.items}/>)}
            </div>
        )
    }
};

export default Shop;
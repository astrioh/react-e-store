import React from 'react';

import './SectionItem.scss';

const SectionItem = ({name, price, imgUrl}) => {
    return (
        <div className="section-item">
            <div 
                className="section-item__image"
                style={{backgroundImage: `url(${imgUrl})`}}
            />
            <div className="section-item__info">
                <span className="section-item__name">{name.length > 25 ? (name.substr(0, 12) + ' ... ' + name.substr(-10)) : name}</span>
                <span className="section-item__price">{price} руб.</span>
            </div>
        </div>
    )
};

export default SectionItem;
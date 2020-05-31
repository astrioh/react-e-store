import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, img, size }) => {
    return (
        <div className={'menu-item' + (size ? ` menu-item_${size}` : '')}>
            <div 
                className='menu-item__background-image'
                style={{
                    background: `url(${img}) no-repeat center center`, 
                    backgroundSize: 'cover',
                }} 
            />
            <div className="menu-item__content" >
                <h2 className="menu-item__title">{title}</h2>
                <span className="menu-item__subtitle">КУПИТЕ СЕЙЧАС</span>
            </div>
        </div>
    );
};

export default MenuItem;
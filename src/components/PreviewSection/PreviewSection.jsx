import React from 'react';

import './PreviewSection.scss';
import SectionItem from '../SectionItem/SectionItem';

const PreviewSection = ({ title, items }) => {
    return (
        <div className="preview-section">
            <h3 className="preview-section__title">{title.toUpperCase()}</h3>
            <div className="preview-section__items">
                {
                    items
                        .filter((item, id) => id < 4)
                        .map((item) => (
                            <SectionItem key={item.id} name={item.name} price={item.price} imgUrl={item.imageUrl}/>
                        ))
                }
            </div>
        </div>
    );
};

export default PreviewSection;
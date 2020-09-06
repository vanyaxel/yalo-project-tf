import React from 'react';
import Products from '../Products-catalog/products'
import CarouselMatch from './CarouselMatch';

const CatalogView = () => {

    return (
        <div>
            <CarouselMatch />
            <Products />
        </div>
    )
}

export default CatalogView;
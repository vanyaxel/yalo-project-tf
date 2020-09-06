import React from 'react';
import Products from '../Products-catalog/products';
import CarouselMatch from './CarouselMatch';

const CatalogView = ({ productAdded, setProductAdded }) => {

    return (
        <div>
            <CarouselMatch />
            <Products productAdded={productAdded} setProductAdded={setProductAdded} />
        </div>
    );
};

export default CatalogView;
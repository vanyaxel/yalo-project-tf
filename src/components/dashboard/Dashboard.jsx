import React from 'react';
import CatalogView from '../Carousel/CatalogView';
import Typography from '@material-ui/core/Typography';

const Dashboard = ({ productAdded, setProductAdded }) => {
    return (
        <div>
            <CatalogView productAdded={productAdded} setProductAdded={setProductAdded} />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import CarouselMatch from '../Carousel/CarouselMatch';
import Products from '../Products-catalog/products';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    viewDashboard: {
        padding: '20px',
    }
});

const Dashboard = ({ productAdded, setProductAdded }) => {

    const classes = useStyles();
    return (
        <div className={classes.viewDashboard}>
            <CarouselMatch />
            <Typography variant="body2" color="initial">
                Los productos de Compumundo han sido inspeccionados y probados por proveedores calificados para que funcionen y vienen con una garantía mínima de 90 días del proveedor.
            </Typography>
            <Products productAdded={productAdded} setProductAdded={setProductAdded} />
        </div>
    );
};

export default Dashboard;
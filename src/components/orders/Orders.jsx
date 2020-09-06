import React from 'react';
import Typography from '@material-ui/core/Typography';
import OrderCard from './OrderCard';
import item1 from '../../images/1.png';
import item2 from '../../images/2.png';
import item3 from '../../images/3.png';
import item4 from '../../images/4.png';
import item5 from '../../images/5.png';
import item6 from '../../images/6.png';
import useStyles from './styles';

const Orders = () => {

    const classes = useStyles();

    return (
        <div className={classes.viewOrders}>
            <Typography variant="h1" color="initial" className={classes.titleView}>
                Historial de pedidos
            </Typography>
            <OrderCard item='Dell - Laptop INSPIRON 7000 FHD' date='Entrega 10 de enero de 2020' image={item6} imagesName='item6' />
            <OrderCard item='Samsung - Audífonos Bluetooth Galaxy Bud' date='Entrega 05 de febrero de 2020' image={item4} imagesName='item4' />
            <OrderCard item='Microsoft - Arc Mouse - Gris ' date='Entrega 16 de febrero de 2020 ' image={item3} imagesName='item3' />
            <OrderCard item='Sony - Pantalla de 55" - XBR-55X800E Silver' date='Entrega 04 de junio de 2020' image={item5} imagesName='item5' />
            <OrderCard item='Bose - Bocinas 51 Environmental - Verde' date='Entrega 19 agosto de 2020' image={item2} imagesName='item2' />
            <OrderCard item='Insignia – Cable de carga Sync Micro USB 15cm' date='Entrega 01 de septiembre de 2020' image={item1} imagesName='item1' />
        </div>
    );
};

export default Orders;
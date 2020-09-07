import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Btn from "../btn/Btn";
import ProductsCart from './ProductsCart';
import { db } from '../../../firebaseConfig';

const useStyles = makeStyles((theme) => ({
    viewCart: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
        position: 'relative',
        top: '30px',
    },
    titleView: {
        width: '90%'
    },
    textView: {
        width: '90%',
        fontSize: '15px'
    },
    button: {
        display: 'flex',
        justifyContent: 'center'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));

const ShoppingCart = ({ productAdded, setProductAdded }) => {

    const classes = useStyles();
    const [service, setService] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setService(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const totalPrice = productAdded.products.reduce((acc, curr) => acc + curr.price, 0);

    const numItems = productAdded.products.length;

    const handleAddOrder = () => {
        db.collection("orders").add({
            poducts: productAdded.products,
            total: totalPrice,
            totalItems: numItems
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                setProductAdded({ ...productAdded, products: [] });

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    };

    const handleOrder = () => {
        console.log('sirve');
    };

    return (
        <div>
            <div className={classes.viewCart}>
                <Typography variant="h1" color="initial" className={classes.titleView}>
                    Carrito de compras
                </Typography>
                <Typography className={classes.textView}>Subtotal <strong>{numItems}</strong> productos <strong>${totalPrice}.00</strong></Typography>
                <Typography className={classes.textView}>Costo del envión estandar: <strong>$120.00</strong></Typography>
                <Typography className={classes.textView}><strong>Total: ${totalPrice + 120}.00</strong></Typography>
                <div className={classes.button}>
                    <Btn title='Proceder al pago' click={handleAddOrder} />
                </div>
                {
                    productAdded.products.map(item =>
                        <div>
                            <ProductsCart item={item} productAdded={productAdded} setProductAdded={setProductAdded} />
                        </div>
                    )
                }
            </div>
        </div>

    );
};

export default ShoppingCart;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Btn from "../btn/Btn";
import ProductsCart from './ProductsCart';

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

    return (
        <div>
            <div className={classes.viewCart}>
                <Typography variant="h1" color="initial" className={classes.titleView}>
                    Carrito de compras
                </Typography>
                <Typography className={classes.textView}>Subtotal {numItems} productos ${totalPrice}.00</Typography>
                <Typography className={classes.textView}>Costo del envión estandar: $120.00</Typography>
                <Typography className={classes.textView}><strong>Subtotal: ${totalPrice + 120}.00</strong></Typography>
                <div className={classes.button}>
                    <Btn title='Proceder al pago' />
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
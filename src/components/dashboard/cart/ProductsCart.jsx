import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        margin: '10px',
        width: '340px'
    },
    card: {
        padding: '10px 0 0 0 !important',
    },
    imgAvatar: {
        width: '80px',
        margin: '15px'
    },
    infoItem: {
        margin: 0,
        fontWeight: 700
    },
    btnDelete: {
        fontSize: '12px'
    },
    optModify: {
        width: '195px',
        marginBottom: '10px'
    }
}));

export default function ProductsCart({ item, productAdded, setProductAdded }) {
    const classes = useStyles();

    const [service, setService] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event, item) => {

        setService(event.target.value);
        if (productAdded.products.find(product => product.id === item.id)) {
            const products = productAdded.products
                .map(product => product.id === item.id && { ...product, quantity: service });
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const deleteOrder = (id) => {
        console.log(id);
        let newArrProducts = productAdded.products.filter(products => products.id !== id);
        setProductAdded({ ...productAdded, products: newArrProducts });
    };

    return (
        <Card className={classes.root}>

            <img src={item.image} alt={item.name} className={classes.imgAvatar} />
            <div>
                <CardContent className={classes.card}>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoItem}>
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.infoItem}>
                        ${item.price}.00
                    </Typography>
                </CardContent>
                <div className={classes.optModify}>
                    <FormControl className={classes.formControl}>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={service}
                            onChange={e => { handleChange(e, item); }}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="text" color="secondary" onClick={() => { deleteOrder(item.id); }} className={classes.btnDelete}>
                        eliminar producto
                </Button>
                </div>
            </div>
        </Card>
    );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Btn from "../btn/Btn";

const useStyles = makeStyles((theme) => ({
    button: {
        display: "block",
        marginTop: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    }
}));

const ShoppingCart = () => {

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
    return (
        <div>
            <Typography variant="h4" color="initial">Carrito de compras</Typography>
            <div>
                <div>
                    <div>
                        <div>aqui va imagen</div>
                    </div>
                    <div>
                        <Typography variant="h6" color="initial">Amazon - Echo Dot
                        Bocina inteligente con Alexa
                        Negro Carbón
                    </Typography>
                        <Typography variant="h6" color="initial">Cantidad
                    </Typography>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-controlled-open-select-label">Cantidad</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={service}
                                onChange={handleChange}
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
                    </div>
                    <div>
                        <Button variant="text" color="default">
                            Eliminar producto
                    </Button>
                    </div>
                </div>
                <div>
                    <Typography variant="h6" color="initial">
                        $849
                </Typography>
                </div>
            </div>
            <div>
                <Typography variant="h6" color="initial">
                    Total:  $849
                </Typography>
                <Button variant="contained" color="secondary">
                    Comprar ahora
                    </Button>
                <Typography variant="body2" color="initial">
                    Seguir comprando
                </Typography>
            </div>
            <div>
                <Btn title='prueba' link='/payment' />
            </div>
        </div>
    );
};

export default ShoppingCart;
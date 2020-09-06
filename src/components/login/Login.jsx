import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch"
    }
}));

export default function Login() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <div>
                    <Typography>Tu nombre</Typography>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Escibe tu nombre aqui"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <Typography>Tu correo electrónico</Typography>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Escibe tu correo electronico aqui"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />

                    <Typography>Tu contraseña</Typography>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Contraseña"
                        margin="normal"
                        type="password"
                        helperText="Tu contraseña debe ser de minimo 6 caracteres"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <Typography>Vuelve a escribir tu contraseña</Typography>
                    <TextField
                        id="standard-full-width"
                        style={{ margin: 8 }}
                        placeholder="Contraseña"
                        margin="normal"
                        type="password"
                        helperText="Tu contraseña debe ser de minimo 6 caracteres"
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </div>
                <div>
                    <Button>Registarte</Button>
                </div>
                <div>
                    <Typography>
                        Al crear una cuenta, aceptas las Condiciones de uso y el Aviso de
          privacidad de Compumundo.{" "}
                    </Typography>
                </div>
                <div>
                    <Typography>¿Ya tienes una cuenta? Iniciar sesión</Typography>
                </div>
            </div>
            <footer>
                aqui va una barra gris
            </footer>
        </div>
    );
}

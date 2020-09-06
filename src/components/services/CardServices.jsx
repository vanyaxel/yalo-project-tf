import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

export default function SimpleCard() {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardContent className={classes.textService}>
                    <Typography variant="h3">
                        Mantenimiento
                    </Typography>
                    <Typography variant="body1" component="p">
                        Lorem ipsum dolor. Aut dolorum iusto doloribus nostrum quod provident soluta modi molestias.
                </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h3">
                        Reparación
                </Typography>
                    <Typography variant="body1" component="p">
                        Lorem ipsum dolor. Aut dolorum iusto doloribus nostrum quod provident soluta modi molestias.
                </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h3">
                        Revisión
                </Typography>
                    <Typography variant="body1" component="p">
                        Lorem ipsum dolor. Aut dolorum iusto doloribus nostrum quod provident soluta modi molestias.
                </Typography>
                </CardContent>
            </Card>
        </>
    );
}

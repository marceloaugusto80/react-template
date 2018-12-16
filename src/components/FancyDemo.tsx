import * as React from "react";
import { LinearProgress, CircularProgress, Button, Grid, AppBar, TextField, Select } from "@material-ui/core";
import { element } from "prop-types";


export function FancyDemo(){

    var options = ["Absolute, Beam, Car, Director, Errant, Fox, Good, Hello, Intel, Jack"];

    return (
        <div>
            <AppBar color="primary" position="fixed">
                <h1>Fancy components</h1>
            </AppBar>
            <hr/>
            <Grid container >
                <Grid xs={2}>
                    <Select native value={0} >
                        <option value="" />
                        <option value={0}>Foo</option>
                        <option value={1}>Bar</option>
                        <option value={2}>FooBar</option>
                    </Select>
                </Grid>
                <Grid xs={2}>
                    <TextField type="time" />
                </Grid>
                <Grid xs={2}>
                    <Button variant="contained">A Button</Button>
                </Grid>
                <Grid xs={3}>
                    <CircularProgress variant="indeterminate" />
                </Grid>
                <Grid xs={3}>
                    <LinearProgress variant="indeterminate" />
                </Grid>
            </Grid>
        </div>
    );
}
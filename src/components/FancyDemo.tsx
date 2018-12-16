import * as React from "react";
import { LinearProgress, CircularProgress, Button, Grid, AppBar, TextField, Select, Tooltip } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


export function FancyDemo(){

    let source = ["Luke", "Solo", "Vader", "Yoda", "Leia", "Lando", "C3PO"];
    
    let options = source.map((val, i)=>{
        return <option key={i} value={i}>{val}</option>;
    });

    return (
        <div>
            
            <AppBar color="primary" position="static">
                <Typography variant="subheading" color="inherit">Fancy components</Typography>
            </AppBar>
            <br/>
            <Grid container spacing={24}>
                
                <Grid item xs={1}>
                    <Select native value={0}>{options}</Select>
                </Grid>
                
                <Grid item xs={2}>
                    <Button variant="contained">Button</Button>
                    <Button variant="text">Button</Button>
                    <Button variant="outlined">Button</Button>
                </Grid>
                
                <Grid item xs={1}>
                    <CircularProgress variant="indeterminate" />
                    <CircularProgress variant="indeterminate" color="secondary" />
                </Grid>
                
                <Grid item xs={2}>
                    <LinearProgress variant="indeterminate" />
                    <br/>
                    <LinearProgress variant="indeterminate" color="secondary" />
                </Grid>

                <Grid item xs={2}>
                    <Tooltip title="Hello, bro!">
                        <div>
                            <Typography variant="h4">Tooltip here</Typography>
                        </div>
                    </Tooltip>
                </Grid>
            
            </Grid>
        
        </div>
    );
}
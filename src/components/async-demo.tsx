import * as React from "react";
import { Calculator} from "../core/calculator";
import { Add } from "@material-ui/icons"
import { Button, TextField, Grid, Typography, CircularProgress, Paper } from "@material-ui/core";

export interface AsyncDemoProps{
    title: string;
    delay: number;
}

interface AsyncDemoState{
    valueA: number;
    valueB: number;
    result: number;
    isCalculating: boolean;
}

export class AsyncDemo extends React.Component<AsyncDemoProps, AsyncDemoState>{

    constructor(props: AsyncDemoProps){
        super(props);
        this.state = { valueA: 0, valueB: 0, result: 0, isCalculating: false};
    }


    async showMessage(e: Event){
        
        let calc = new Calculator();
        
        this.setState({isCalculating: true});
        
        let sum = await calc.sumAsync(this.state.valueA, this.state.valueB, this.props.delay);
        
        this.setState({result: sum});

        this.setState({isCalculating: false});
        
    }

    onInputChangeA(e: React.FormEvent<HTMLInputElement>){
        this.setState({valueA: parseInt(e.currentTarget.value)});
    }

    onInputChangeB(e: React.FormEvent<HTMLInputElement>){
        this.setState({valueB: parseInt(e.currentTarget.value)});
    }


    render(){

        return(
            <Grid container>
                <Grid item xs={12}>
                    <Paper style={{padding: 8, marginBottom: 16, backgroundColor: "#e9ecff"}}>
                        <Typography variant="h5">{this.props.title}</Typography>
                        <Typography variant="h6">Current async delay is { this.props.delay / 1000 } secs.</Typography>
                    </Paper>
                    
                </Grid>
                <Grid item xs={1}>
                    <TextField
                        type="number"
                        placeholder="Value A..." 
                        value={this.state.valueA} 
                        onChange={this.onInputChangeA.bind(this)}/>
                </Grid>
                <Grid item xs={1} style={{textAlign: "center"}}>
                    <Add/>
                </Grid>
                <Grid item xs={1}>
                    <TextField 
                        type="number"
                        placeholder="Value B..."
                        value={this.state.valueB} 
                        onChange={this.onInputChangeB.bind(this)}/>
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        color="primary"
                        disabled={this.state.isCalculating} 
                        onClick={this.showMessage.bind(this)}>
                            { this.state.isCalculating ? "Wait..." : "Click here to sum"}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <CircularProgress color="primary" style={{visibility: this.state.isCalculating ? "visible" : "hidden"}} />
                    <Typography 
                    variant="h6" 
                    style={{visibility: this.state.isCalculating ? "hidden" : "visible"}} 
                    >
                        Result: {this.state.result}
                    </Typography>
                </Grid>
            
            </Grid>
        );

    }

}
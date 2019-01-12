import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, AppBar, Paper } from "@material-ui/core";


export interface ILayoutLink{
    route: string;
    name: string;
}


export interface LayoutProps{
    title:string;
    links: Array<ILayoutLink>;
}


export class Layout extends React.Component<LayoutProps, {}>{


    constructor(props:LayoutProps){
        super(props);
    }

    renderLinks(){
        return 
    }

    render(){
        return (
            <div>
                <AppBar position="sticky" style={{marginBottom: 24, padding: 16}}>
                    <Typography color="inherit" variant="h6">{this.props.title}</Typography>
                </AppBar>
                <Grid container spacing={32}>
                    <Grid item xs={1}>
                        <Paper style={{padding: 16}}>
                            {
                                this.props.links.map((el, i)=>
                                    <Link to={el.route}>
                                        <Typography variant="body2" key={i}>{el.name}</Typography>
                                    </Link>
                                )
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={11}>
                        {this.props.children}
                    </Grid>
                </Grid>
            </div>
        );
    }
}
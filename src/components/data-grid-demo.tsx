import * as React from "react";
import Axios from "axios";
import { CloudCircle } from "@material-ui/icons";
import { Grid, Button, Table, TableHead, TableRow, TableCell, TableBody, LinearProgress, Typography } from "@material-ui/core";


interface DataGridDemoState {
    isLoading: boolean;
    albums: Album[];
    errorMessage: string;
}

interface Album {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export class DataGridDemo extends React.Component<{}, DataGridDemoState> {

    constructor(props:{}){
        super(props);
        this.state = { isLoading: false, albums: [], errorMessage: "" };
    }

    async getDataAsync() {
        
        this.setState({isLoading: true})

        const url = "https://jsonplaceholder.typicode.com/photos";

        try {
            let response = await Axios.get<Album[]>(url);
            this.setState({albums: response.data, errorMessage: ""});

        } catch (error) {
            this.setState({errorMessage: error});
        }

        this.setState({isLoading: false})
    }

    render() {

        return(
            <Grid container alignContent="center" justify="center" alignItems="center">
                
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={this.getDataAsync.bind(this)}>
                        <CloudCircle /> Download data
                    </Button>
                    <LinearProgress  style={{visibility: this.state.isLoading ? "visible" : "hidden"}} />
                </Grid>
                
                <Grid item xs={12}>
                    <Typography variant="body1" color="secondary">{ this.state.errorMessage }</Typography>
                </Grid>
              
                <Grid item xs={12}>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Thumb</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Title char count</TableCell>
                                <TableCell>Link</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.albums.slice(0, 100).map((el, i)=>{
                                return <TableRow key={el.id}>
                                    <TableCell>{i+1}</TableCell>
                                    <TableCell><img width={150} height={150} src={el.thumbnailUrl}/></TableCell>
                                    <TableCell>{el.title}</TableCell>
                                    <TableCell>{el.title.length}</TableCell>
                                    <TableCell><a target="_blank" href={el.url}>{el.url}</a></TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Grid>
            
            </Grid>

        );

    }

}
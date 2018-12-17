import * as React from "react";
import { Table, Image, Button, Dimmer, Loader } from "semantic-ui-react";
import Axios from "axios";


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
            <div>
                <Dimmer active={this.state.isLoading}>
                    <Loader/>
                </Dimmer>
                    <Button onClick={this.getDataAsync.bind(this)}>Download data</Button>
                    <div>{ this.state.errorMessage }</div>
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell></Table.HeaderCell>
                                <Table.HeaderCell>Thumb</Table.HeaderCell>
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Title char count</Table.HeaderCell>
                                <Table.HeaderCell>Link</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {this.state.albums.slice(0, 100).map((el, i)=>{
                                return <Table.Row key={el.id}>
                                    <Table.Cell>{i+1}</Table.Cell>
                                    <Table.Cell><Image size="tiny" bordered src={el.thumbnailUrl}/></Table.Cell>
                                    <Table.Cell>{el.title}</Table.Cell>
                                    <Table.Cell>{el.title.length}</Table.Cell>
                                    <Table.Cell><a target="_blank" href={el.url}>{el.url}</a></Table.Cell>
                                </Table.Row>
                            })}
                        </Table.Body>
                    </Table>
            </div>

        );

    }

}
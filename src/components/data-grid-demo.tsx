import * as React from "react";
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

    constructor(props: {}) {
        super(props);
        this.state = { isLoading: false, albums: [], errorMessage: "" };
    }

    getDataAsync = async () => {

        this.setState({ isLoading: true })

        const url = "https://jsonplaceholder.typicode.com/photos";

        try {
            let response = await Axios.get<Album[]>(url);
            this.setState({ albums: response.data, errorMessage: "" });

        } catch (error) {
            this.setState({ errorMessage: error });
        }

        this.setState({ isLoading: false })
    }

    render() {

        return (
            <div>
                <button onClick={this.getDataAsync}>Download data</button>
                <div>{this.state.errorMessage}</div>
                <table>
                    <thead>
                        <tr>
                            <td></td>
                            <td>Thumb</td>
                            <td>Title</td>
                            <td>Title char count</td>
                            <td>Link</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.albums.slice(0, 100).map((el, i) => {
                            return <tr key={el.id}>
                                <td>{i + 1}</td>
                                <td><img width={150} height={150} src={el.thumbnailUrl} /></td>
                                <td>{el.title}</td>
                                <td>{el.title.length}</td>
                                <td><a target="_blank" href={el.url}>{el.url}</a></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>


        );

    }

}
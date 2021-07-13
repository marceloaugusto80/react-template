import React, { Fragment, PureComponent } from "react";
import Axios from "axios";

interface State {
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

export class DataGridDemo extends PureComponent<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = { isLoading: false, albums: [], errorMessage: "" };
    }

    handleDownloadData = async () => {
        const url = "https://jsonplaceholder.typicode.com/photos";
        this.setState({ isLoading: true })
        try {
            const response = await Axios.get<Album[]>(url);
            this.setState({ albums: response.data, errorMessage: "" });
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
        finally {
            this.setState({ isLoading: false })
        }
    }

    render() {

        const { errorMessage, albums, isLoading } = this.state;

        return (
            <Fragment>
                <h2>Table</h2>
                <button onClick={this.handleDownloadData}>Download data async</button>
                {
                    errorMessage &&
                    <span>{errorMessage}</span>
                }
                {
                    (albums && albums.length > 0) &&
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Thumb</th>
                                <th>Title</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                albums.slice(0, 30).map((el, i) => <tr key={el.id}>
                                    <td>{i + 1}</td>
                                    <td><img width={100} height={100} src={el.thumbnailUrl} alt="thumb" /></td>
                                    <td>{el.title}</td>
                                    <td><a target="_blank" href={el.url}>{el.url}</a></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
                {
                    isLoading &&
                    <p>Downloading...</p>
                }
            </Fragment>


        );

    }

}
import * as React from "react";
import { Link } from "react-router-dom";



export interface ILayoutLink {
    route: string;
    name: string;
}


export interface LayoutProps {
    title: string;
    links: Array<ILayoutLink>;
}


export class Layout extends React.Component<LayoutProps, {}>{


    constructor(props: LayoutProps) {
        super(props);
    }

    renderLinks() {
        return
    }

    render() {
        return (
            <div>
                <div style={{ marginBottom: 24, padding: 16 }}>
                    <div >{this.props.title}</div>
                </div>
                <div>
                    <div>
                        <div style={{ padding: 16 }}>
                            {
                                this.props.links.map((el, i) =>
                                    <Link key={i} to={el.route}>{el.name}</Link>
                                )
                            }
                        </div>
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
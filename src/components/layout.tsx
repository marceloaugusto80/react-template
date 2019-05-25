import * as React from "react";
import { Link } from "react-router-dom";


export class Layout extends React.Component {


    render() {
        return (
            <div className="layout">
                <div className="nav-bar">React Template</div>
                <div className="side-bar">
                    <Link to="/">Calculator</Link>
                    <Link to="/simple-table">Simple table</Link>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="footer">My App</div>
            </div>
        );
    }
}
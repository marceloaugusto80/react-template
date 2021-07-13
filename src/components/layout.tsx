import React, { PureComponent } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { AsyncDemo } from "./async-demo";
import { DataGridDemo } from "./data-grid-demo";


export default class Layout extends PureComponent {

    render() {
        return (
            <BrowserRouter>
                <GlobalStyle />
                <Content>
                    <Header>
                        <h1>React Template</h1>
                    </Header>
                    <Menu>
                        <Link to="/">Calculator</Link>
                        <Link to="/simple-table">Simple table</Link>
                    </Menu>
                    <Body>
                        <Switch>
                            <Route path="/simple-table" component={DataGridDemo} />
                            <Route path="/" render={() => <AsyncDemo delay={2000} />} />
                        </Switch>
                    </Body>
                    <Footer>React template</Footer>
                </Content>
            </BrowserRouter>
        );
    }
}

const Content = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 10% 90%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "menu body"
        "footer footer";
`;

const Header = styled.header`
    grid-area: header;
    background-color: green;
`;

const Menu = styled.div`
    grid-area: menu;
    background-color: blue;
    a {
        display: block;
        line-height: 2em;
        color: white;
    }
`;

const Body = styled.div`
    grid-area: body;
    padding: 16px;
`;

const Footer = styled.footer`
    grid-area: footer;
    background-color: red;
`;
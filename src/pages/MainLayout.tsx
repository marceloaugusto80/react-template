import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { ExamplePage1 } from "@/pages/ExamplePage1";
import { ExamplePage2 } from "@/pages/ExamplePage2";
import { HomePage } from "@/pages/HomePage";

export function MainLayout() {

    return (
        <Fragment>

            <GlobalStyle />
            <Content>
                <Header>
                    <h1>React Template</h1>
                </Header>
                <Menu>
                    <Link to="/">Home</Link>
                    <Link to="/example-page-1">Example page 1</Link>
                    <Link to="/example-page-2">Example page 2</Link>
                </Menu>
                <Body>
                    <Routes>
                        <Route path="/example-page-1" element={<ExamplePage1 />} />
                        <Route path="/example-page-2" element={<ExamplePage2 />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Body>
                <Footer>React template</Footer>
            </Content>
        </Fragment>
    );
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
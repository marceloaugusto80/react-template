import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/GlobalStyles";
import { ExamplePage1 } from "@/pages/ExamplePage1";
import { ExamplePage2 } from "@/pages/ExamplePage2";
import { HomePage } from "@/pages/HomePage";
import { AppDefaultTheme } from "@/styles/DefaultTheme";

export function MainLayout() {

    return (
        <Fragment>
            <ThemeProvider theme={AppDefaultTheme}>
                <GlobalStyle />
                <Content>
                    <Header>
                        <Link to="/">
                            <h1>React Template</h1>
                        </Link>
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
            </ThemeProvider>
        </Fragment>
    );
}

const Content = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: 10% 90%;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
        "header header"
        "menu body"
        "footer footer";
`;

const Header = styled.header`
    grid-area: header;
    background-color: ${props => props.theme.colors.brand1.main};
    color: ${props => props.theme.colors.brand1.contrast};
    padding: 16px;
    h1 {
        margin: 0;
    }
`;

const Menu = styled.div`
    grid-area: menu;
    padding: 16px;
    background-color: ${props => props.theme.colors.brand2.main};
    color: ${props => props.theme.colors.brand2.contrast};
    a {
        display: block;
        line-height: 2em;
    }
`;

const Body = styled.div`
    grid-area: body;
    padding: 16px;
`;

const Footer = styled.footer`
    grid-area: footer;
    font-size: 0.8rem;
    padding: 4px;
    background-color: ${props => props.theme.colors.brand1.main};
    color: ${props => props.theme.colors.brand1.contrast};
`;
import React, { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/features/shared/styles/GlobalStyles";
import { ExamplePage1 } from "@/features/example1/ExamplePage1";
import { HomePage } from "@/features/home/HomePage";
import { AppDefaultTheme } from "@/features/shared/styles/DefaultTheme";

export function MainLayout() {
  return (
    <Fragment>
      <ThemeProvider theme={AppDefaultTheme}>
        <GlobalStyle />
        <Content>
          <header>
            <Link to="/">
              <h1>React Template</h1>
            </Link>
          </header>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/example-page-1">Example page 1</Link>
          </div>
          <div className="body">
            <Routes>
              <Route path="/example-page-1" element={<ExamplePage1 />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <footer>React template</footer>
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

  header {
    grid-area: header;
    background-color: ${(props) => props.theme.colors.brand1.main};
    color: ${(props) => props.theme.colors.brand1.contrast};
    padding: 16px;
    h1 {
      margin: 0;
    }
  }

  .menu {
    grid-area: menu;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.brand2.main};
    color: ${(props) => props.theme.colors.brand2.contrast};
    a {
      display: block;
      line-height: 2em;
    }
  }

  .body {
    grid-area: body;
    padding: 16px;
  }

  footer {
    grid-area: footer;
    font-size: 0.8rem;
    padding: 4px;
    background-color: ${(props) => props.theme.colors.brand1.main};
    color: ${(props) => props.theme.colors.brand1.contrast};
  }
`;

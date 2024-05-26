'use client'

import React from "react";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import light from "@/themes/light";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }

  body{
    background: ${props => props.theme.colors.background.bg100};
    width: 100vw;
    height: 100vh;
  }
`;

type Props = {
  children: React.ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            <GlobalStyle />
            <Header />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>

    </html>
  );
}

import React from "react";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import light from "@/themes/light";

type Props = {
  children: React.ReactElement
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={light}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>

    </html>
  );
}

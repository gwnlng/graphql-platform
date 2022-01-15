import { MDXProvider } from "@mdx-js/react";
import React, { FC } from "react";
import { CodeBlock } from "../mdx/code-block";
import { InlineCode } from "../mdx/inline-code";
import { CookieConsent } from "../misc/cookie-consent";
import { GlobalLayoutStyle, GlobalStyle } from "../misc/global-style";
import { Header } from "./header";
import { Main } from "./main";

export const Layout: FC = ({ children }) => {
  const components = {
    pre: CodeBlock,
    inlineCode: InlineCode,
  };

  return (
    <>
      <GlobalStyle />
      <GlobalLayoutStyle />
      <Header />
      <MDXProvider components={components}>
        <Main>{children}</Main>
      </MDXProvider>
      <CookieConsent />
    </>
  );
};

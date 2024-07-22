import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "@mantine/core";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const demoProps = {
    maw: "100vw",
  };
  return (
    <>
      <Header />
      <Container {...demoProps}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;

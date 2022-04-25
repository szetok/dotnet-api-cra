import React from "react";
import { Container } from "reactstrap";
import { NavMenu } from "../layout";

export function Layout(props) {
  return (
    <div>
      <NavMenu />
      <Container>{props.children}</Container>
    </div>
  );
}

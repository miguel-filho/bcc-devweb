import React from "react";
import { Container, Root } from "native-base";
import Navigation from "./Navigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root>
        <Container>
          <Navigation
            ref={r => {
              this.nav = r;
            }}
          />
        </Container>
      </Root>
    );
  }
}

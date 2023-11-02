import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("8a6e39e2-dec1-4eda-a528-8e7ce9f710a3");
  }

  render() {
    return null;
  }
}
export default CrispChat;

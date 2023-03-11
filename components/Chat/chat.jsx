import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class Chat extends Component {
  componentDidMount() {
    Crisp.configure(process.env.NEXT_PUBLIC_CHAT);
  }

  render() {
    return null;
  }
}
export default Chat;

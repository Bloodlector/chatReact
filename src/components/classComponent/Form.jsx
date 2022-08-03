import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export class Form extends Component {
  state = {
    name: "Click me!",
    value: "",
    messages: [],
    visible: true,
  };
  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: "" });
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <>
        {this.state.visible && (
          <ul>
            {this.state.messages.map((message) => (
              <li>{message}</li>
            ))}
          </ul>
        )}

        <Input change={this.handleChange} value={this.state.value} />
        <Button name={this.state.name} click={this.handleClick} />
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          {this.state.visible ? "Скрыть" : "Показать"}
        </button>
      </>
    );
  }
}

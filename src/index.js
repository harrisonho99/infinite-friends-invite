import React from "react";
import ReactDOM from "react-dom";
import Comment from "./App";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      display: false,
    };
  }
  handleClick() {
    this.setState((currenState) => ({ display: !currenState.display }));
  }
  render() {
    let CommentElement = this.state.display ? <Comment /> : null;
    return (
      <div
        className="container"
        style={{ position: "relative", float: "right" }}
      >
        <button className="ui primary button" onClick={this.handleClick}>
          Friend Invite
        </button>
        {CommentElement}
      </div>
    );
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

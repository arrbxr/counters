import React, { Component } from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

class App extends Component {
  state = {
    list,
    i: false
  };

  onDismiss = (l) => {

    this.state.i = true;
    console.log(l);  
  };

  render() {
    return (
      <div>
        <h1>He;llo world</h1>
        <span>
          <button onClick={() => this.onDismiss(this.state.i)} type="button">
            Dismiss
          </button>
          {this.state.i ? (
            <ul>
              {this.state.list.map(i => (
                <li>{i.author}</li>
              ))}
            </ul>
          ) : null}
        </span>
      </div>
    );
  }
}

export default App;

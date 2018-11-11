import React, { Component } from 'react';
import Feed from './components/Feed';
import data from './data';

class App extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.setState({
      comments: [...data]
    });
  }
  render() {
    const { comments } = this.state;
    return (
      <div className="App">
        <Feed comments={comments} />
      </div>
    );
  }
}

export default App;

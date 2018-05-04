import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonLabel: 'Click me' 
    }
  }
  buttonClick() {
    this.setState({buttonLabel: 'Everything looks fine'});
  }
  render() {
    return (
      <div className="app">
        <h1>So far, so good! :)</h1>
        <input type="button" onClick={this.buttonClick.bind(this)}  value={this.state.buttonLabel} /> 
      </div>
    );
  }
}

export default App;
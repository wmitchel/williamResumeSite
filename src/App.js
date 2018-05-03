import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from "./components/navigation";
import Welcome from "./components/welcome";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Navigation/>
        </MuiThemeProvider>
        <Welcome/>
      </div>
    );
  }
}

export default App;

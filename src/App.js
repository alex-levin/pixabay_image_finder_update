import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import theme from './theme/theme';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

import './App.css';

class App extends Component {
  render() {
    return (
      // <MuiThemeProvider theme={theme}>
        <div>
          <NavBar />
          <Search />
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;

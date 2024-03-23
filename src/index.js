import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Page1 from 'pages/Page1/Page1';
import Page2 from 'pages/Page2/Page2';
import Page3 from 'pages/Page3/Page3';
import Page4 from 'pages/Page4/Page4';
import { MuiTheme } from 'assets/theme';
import { createTheme, MuiThemeProvider, } from '@material-ui/core';

const theme = createTheme(MuiTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={'/page1'} component={Page1}/>
        <Route exact path={'/page2'} component={Page2}/>
        <Route exact path={'/page3'} component={Page3}/>
        <Route exact path={'/page4'} component={Page4}/>
        <Redirect to={'/page1'}/>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

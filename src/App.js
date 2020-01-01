import React, { useState } from 'react';

// MUI Imports
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar'

import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

// Routing Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// Local Imports
import Logo from './assets/images/wifi_connect.png'
import './App.css';
import {
  AccessCodePage,
  ClubMemberPage,
  HotelGuestPage,
  FirstTimeConnectDashboard,
} from './components';


// Set Project Level Color Scheme That we know about
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fe6300',
    },
  },
  status: {
    danger: 'red',
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [activeTab, setActiveTab] = useState('/');

  const onTabChange = (event, newActiveTab) => setActiveTab(newActiveTab);

  return (
    <Container maxWidth="md" style={{ height: '100vh' }}>
      <img className="branding-logo" src={Logo} alt="Logo"></img>
      <ThemeProvider theme={ theme } >
        <Router>
          <AppBar position="static" color="">
            <Route
              path="/"
              render={({ location }) => (
                <>
                  <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    value={location.pathname}>
                    <Tab label="Item One" component={Link} to="/" value="/"/>
                    <Tab label="Item Two" component={Link} to="/tab2" value="/tab2"/>
                    <Tab
                      label="Item Three"
                      component={Link}
                      to="/tab3"
                      value="/tab3"
                    />
                  </Tabs>
                  <Switch>
                    <Route path="/tab2" render={() => <AccessCodePage />} />
                    <Route path="/tab3" render={() => <HotelGuestPage />} />
                    <Route exact path="/" render={() => <ClubMemberPage />} />
                  </Switch>
                </>
              )}
            />
          </AppBar>
          <Switch>
            <Route exact path="/firsttimeconnectdashboard" render={() => <FirstTimeConnectDashboard />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Container>
  );
}

export default App;

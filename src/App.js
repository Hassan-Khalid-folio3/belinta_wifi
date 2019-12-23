import React, { useState } from 'react';

// MUI Imports
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar'

// Routing Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

// Local Imports
import Logo from './assets/images/wifi_connect.png'
import './App.css';
import { AccessCodePage, ClubMemberPage, HotelGuestPage } from './components';

function App() {
  const [activeTab, setActiveTab] = useState('/');

  const onTabChange = (event, newActiveTab) => setActiveTab(newActiveTab);

  return (
    <Container maxWidth="md" style={{ height: '100vh' }}>
      <img className="branding-logo" src={Logo} alt="Logo"></img>
      <Router>
        <AppBar position="static" color="">
          {/* <Tabs
            value={ activeTab }
            indicatorColor="primary"
            textColor="primary"
            onChange={onTabChange}
          >
            <Tab label="IHG Rewards Club Member" value="/">
              <ClubMemberPage />
            </Tab>
            <Tab label="Hotel Guest" value="/hotelguest">
              <HotelGuestPage />
            </Tab>
            <Tab label="Access Code" value="/accesscode">
              <AccessCodePage />
            </Tab>
          </Tabs> */}
          <Route
            path="/"
            render={({ location }) => (
              <>
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  value={location.pathname}>
                  <Tab label="Item One" component={Link} to="/" />
                  <Tab label="Item Two" component={Link} to="/tab2" />
                  <Tab
                    label="Item Three"
                    href="#basic-tabs"
                    component={Link}
                    to="/tab3"
                  />
                </Tabs>
                <Switch>
                  <Route path="/tab2" render={() => <AccessCodePage />} />
                  <Route path="/tab3" render={() => <div>Tab 3</div>} />
                  <Route path="/" render={() => <ClubMemberPage />} />
                </Switch>
              </>
            )}
          />
        </AppBar>
      </Router>
    </Container>
  );
}

export default App;

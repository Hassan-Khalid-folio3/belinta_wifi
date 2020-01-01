import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

// modal 
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

// WifiConnectionLoadingPage
import WifiConnectionLoadingPage from '../wifi_connection_loading';

import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export const ClubMemberPage = (props) => {
  const classes = useStyles();

  const [state, setState] = useState({
    zipCode: '',
    email: '',
    clubPageOpen: true,
    loadingPageOpen: false,
    firstTimeConnectPageOpen: false,

  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    })
  }

  const onHandleClose = () => {
    setState({
      ...state,
      clubPageOpen: false,
      loadingPageOpen: true,
    })
  }

  const onClubPageSubmit = () => {
    console.log('hello')
    setState({
      ...state,
      clubPageOpen: false,
      loadingPageOpen: true,
      percentage: 50,
    })
    new Promise((res, rej) => res())
      .then(() => {
        setTimeout(() => {
          setState({
            ...state,
            clubPageOpen: false,
            loadingPageOpen: true,
            percentage: 100,
          });
        }, 5000);
      })
  }

  const onLoadingComplete = () => {
    setState({
      ...state,
      loadingPageOpen: false,
      firstTimeConnectPageOpen: true,
    })
  }

  return (
    <div className={classes.root} style={{ backgroundColor: 'white', height: '50vh' }}>
      {state.clubPageOpen && (
        <>
          <h1>Enjoy Free Wifi at all our hotels.</h1>
          <p>IHG wifi connects you across all hotels, so you'll never have to log in again.</p>
          <div style={{ marginLeft: '20px', marginTop: '20px' }}>
            <TextField
              label="Email Address"
              name="email"
              value={state.email}
              onChange={onChangeHandler}
            />
            <TextField
              label="Zip Code"
              name="zipCode"
              value={state.zipCode}
              onChange={onChangeHandler}
            />
          </div>
          <div style={{ marginLeft: '20px', marginTop: '20px' }}>
            <Button color="primary" variant="contained" onClick={onClubPageSubmit}>Connect</Button>
          </div>
        </>
      )}
      {state.loadingPageOpen && (
        <>
          <WifiConnectionLoadingPage
            percentage={ state.percentage }
            onLoadingComplete={ onLoadingComplete }
          />
        </>
      )}
      { state.firstTimeConnectPageOpen && (
        <Redirect to="/firsttimeconnectdashboard" />
      ) }
      {/* <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={state.open}
          onClose={onHandleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={state.open}>
            <Container maxWidth="md" style={{ height: '100vh' }}>
              <div className={classes.paper} style={{ backgroundColor: 'white', height: '100vh' }}>
                <h2 id="transition-modal-title">Connecting Wifi</h2>
                <p id="transition-modal-description">SVG</p>
              </div>
            </Container>
          </Fade>
        </Modal>
      </div> */}
    </div>
  );
}

export default ClubMemberPage;

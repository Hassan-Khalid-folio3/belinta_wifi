import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

export const ClubMemberPage = (props) => {
  return (
    <div style={{ backgroundColor: 'white', height: '50vh' }}>
      <h1>Enjoy Free Wifi at all our hotels.</h1>
      <p>IHG wifi connects uou across all hotels, so you'll never have to log in again.</p>
      <TextField label="Email Address" />
      <TextField label="Zip Code" />
    </div>
  );
}

export default ClubMemberPage;

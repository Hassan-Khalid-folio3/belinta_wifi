import React from 'react';
// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function WifiConnectionLoadingPage(props) {
  const { percentage, onLoadingComplete } = props;

  if (percentage == 100) {
    new Promise((res, rej) => res())
      .then(() => {
        setTimeout(() => {
          onLoadingComplete();
        }, 2000);
      });
  }

  return (
    <>
      <h1>Connecting you to Wifi</h1>
      <CircularProgressbar
        value={ percentage }
        text={ percentage }
        styles={ buildStyles({
          pathTransitionDuration: 0.15
        }) }
      />
    </>
  );
}

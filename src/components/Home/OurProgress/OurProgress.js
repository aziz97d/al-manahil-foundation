import React from "react";
import "./OurProgress.scss";

import {
  GiSelfLove,
  GiLoveLetter,
  GiClover,
  GiFirstAidKit,
} from "react-icons/gi";

function OurProgress() {
  return (
    <div className="our-progress">
      <h2>Our Progress</h2>
      <p>
        We are dedicated to improving lives and building a future for poor
        children around the world. Here’s the progress we’ve made since we
        started working in 1999.
      </p>

      <div>
        <div className="our-progress-item">
          <GiClover className="icon" />
          <h1>3000 +</h1>
          <h3>Shelter Houses and Counting</h3>
        </div>
        <div className="our-progress-item">
          <GiClover className="icon" />
          <h1>3000 +</h1>
          <h3>Shelter Houses and Counting</h3>
        </div>
        <div className="our-progress-item">
          <GiClover className="icon" />
          <h1>3000 +</h1>
          <h3>Shelter Houses and Counting</h3>
        </div>
        <div className="our-progress-item">
          <GiClover className="icon" />
          <h1>3000 +</h1>
          <h3>Shelter Houses and Counting</h3>
        </div>
      </div>
    </div>
  );
}

export default OurProgress;

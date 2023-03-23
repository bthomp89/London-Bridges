import React, { Component } from "react";
import JaidynBoyd from "../LondonBridgesTeamPhotos/JaidynBoyd.jpg";
import ColtonUndseth from "../LondonBridgesTeamPhotos/ColtonUndseth.jpg";
import NathanKerr from "../LondonBridgesTeamPhotos/NathanKerr.jpg";
import ShriyaStenger from "../LondonBridgesTeamPhotos/ShriyaStenger.jpg";
import SydneyBury from "../LondonBridgesTeamPhotos/SydneyBury.jpg";

import "./Team.css";

export default function Team() {
  return (
    <div className="webpage">
      <div className="Header">
        <h1 className="Title">Our Team</h1>
        <h3 className="Meet">Meet the London Bridges Exec Team!</h3>
      </div>
      <div className="teamInfo">
        <div className="column">
          <img src={JaidynBoyd} className="PictureOne" />
          <h1 className="caption">Jaidyn Boyd</h1>
          <h3 className="role"> President</h3>
          <p className="desc">Third Year Science - Major in Chemistry</p>
        </div>
        <div className="column">
          <img src={SydneyBury} className="PictureTwo" />
          <h1 className="caption">Sydney Bury</h1>
          <h3 className="role">Vice President of Communications</h3>
          <p className="desc">
            Fourth Year Health Science - Honours and Specialization in Health
            and Aging
          </p>
        </div>
        <div className="column">
          <img src={ColtonUndseth} className="PictureThree" />
          <h1 className="caption">Colton Undseth</h1>
          <h3 className="role">Vice President of Events</h3>
          <p className="desc">Third Year Ivey Business</p>
        </div>
        <div className="column">
          <img src={ShriyaStenger} className="PictureFour" />
          <h1 className="caption">Shriya Stenger</h1>
          <h3 className="role">Vice President of Finance</h3>
          <p className="desc">Third Year Ivey Business</p>
        </div>
        <div className="column">
          <img src={NathanKerr} className="PictureFive" />
          <h1 className="caption">Nathan Kerr</h1>
          <h3 className="role">Director of External Affairs</h3>
          <p className="desc">Second Year Social Science</p>
        </div>
      </div>
    </div>
  );
}

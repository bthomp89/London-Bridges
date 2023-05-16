import React,{Component} from "react";

import "./Team.css";

export default function Team() {
    return (
        <div className="container">
            <div className="Header">
                <h1 className="Title">Our Team</h1>
                <h3 className="Meet">Meet the London Bridges Exec Team!</h3>
            </div>
            <div className="teamInfo">
                <div className="column">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/JaidynBoyd.jpg"} className="PictureOne" />
                    <h1 className="caption">Jaidyn Boyd</h1>
                    <h3 className ="role"> President</h3>
                    <p className ="desc">Third Year Science - Major in Chemistry</p>
                </div>
                <div className="column">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/SydneyBury.jpg"} className="PictureTwo" />
                    <h1 className="caption">Sydney Bury</h1>
                    <h3 className ="role">Vice President of Communications</h3>
                    <p className ="desc">Fourth Year Health Science - Honours and Specialization in Health and Aging</p>
                </div>
                <div className="column">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/ColtonUndseth.jpg"} className="PictureThree" />
                    <h1 className="caption">Colton Undseth</h1>
                    <h3 className ="role">Vice President of Events</h3>
                    <p className ="desc">Third Year Ivey Business</p>
                </div>
                <div className="column">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/ShriyaStenger.jpg"} className="PictureFour" />
                    <h1 className="caption">Shriya Stenger</h1>
                    <h3 className ="role">Vice President of Finance</h3>
                    <p className ="desc">Third Year Ivey Business</p>
                </div>
                <div className="column">
                    <img src={process.env.PUBLIC_URL + "LondonBridgesTeamPhotos/NathanKerr.jpg"} className="PictureFive" />
                    <h1 className="caption">Nathan Kerr</h1>
                    <h3 className ="role">Director of External Affairs</h3>
                    <p className ="desc">Second Year Social Science</p>
                </div>
            </div>

        </div>
    )
}



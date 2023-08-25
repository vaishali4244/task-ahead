import React from "react";
import Rating from '@mui/material/Rating';
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="container-LP">
            <div className="main-LP">
                <div className="content-LP">
                    <h2>Ahead app</h2>
                    <h1>Master your life </h1>
                    <h1>by mastering </h1>
                    <h1>emotions</h1>
                    <div className="appStore">
                        <img src={require("../../assets/images/app.png")} alt="" />
                        <div className="rating">
                            <Rating name="size-small" defaultValue={5} size="small" />
                            <p>100+ AppStore reviews</p>
                        </div>
                    </div>
                </div>
                <div className="anim">
                    <img className="d1" src={require("../../assets/images/doodle.png")} alt="" />
                    <img className="d2" src={require("../../assets/images/doodle2.png")} alt="" />
                    <img className="d3" src={require("../../assets/images/doodle2.png")} alt="" />
                </div>
            </div>
        </div >
    )
}

export default LandingPage;
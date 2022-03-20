import React from "react";
import GoogleAuth from "../GoogleAuth";

const UpperHeader = () => {
    return (
        <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
                <div className="ui inverted icon input">
                    <input type="text" placeholder="Search..."/>
                    <i className="circular search link icon"/>
                </div>
                <div className="right menu">
                    <div className="item">
                        <GoogleAuth/>
                    </div>
                    <a className="item">
                        <i className="large heart icon"/>
                    </a>
                    <a className="item">
                        <i className="large shopping bag icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpperHeader;
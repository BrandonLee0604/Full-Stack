import React from "react";

const LowerHeader = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="middle menu">
                <a className="active item">
                    Home
                </a>
                <a className="item">
                    New In
                </a>
                <a className="item">
                    Category
                </a>
                <a className="item">
                    Sale
                </a>
            </div>
        </div>
    );
};

export default LowerHeader;
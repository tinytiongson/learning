import React from "react";

import "./home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={"content-block"}>Home</h2>
        <div className={"content-block"}>
          <div className={"dx-card responsive-paddings"}>
            <div className={"logos-container"}></div>

            <p></p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

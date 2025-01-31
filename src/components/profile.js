import React, { Component } from "react";
import profile from "./vsk.jpg";

export default class VSK extends Component {
  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="img-fluid rounded-start"/>
      </div>
    );
  }
}
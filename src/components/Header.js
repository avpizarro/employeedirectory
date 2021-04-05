import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <header className="hero has-text-centered">
      <div className="hero-body">
        <p className="title">Employee Directory</p>
        <p className="subtitle">
          <img src="logo192.png" alt="Logo" style={{ height: "50px" }} />
        </p>
      </div>

      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <div className="field" style={{marginLeft: "20px", marginRight: "20px"}}>
            <p className="control has-icons-left">
              <input className="input" type="text" placeholder="Search"></input>
              <span className="icon is-small is-left">
                <i>
                  <FontAwesomeIcon icon="search" />
                </i>
              </span>
            </p>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </header>
  );
}

export default Header;

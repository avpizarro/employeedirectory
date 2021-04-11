import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import SearchButton from "./SearchButton";
import ResetButton from "./ResetButton";

function PersonSearch(props) {
  return (
    <div>
      <div className="columns" style={{maxHeight: "64px"}}>
        <div className="column"></div>
        <div className="column">
          <div
            className="field has-addons"
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <p className="control has-icons-left" style={{ width: "100%" }}>
              <input
                className="input"
                type="text"
                placeholder="Find a person"
                onBlur={props.personFilterOnChange}
                value={props.inputValue}
              ></input>
              <span className="icon is-small is-left">
                <i>
                  <FontAwesomeIcon icon="search" />
                </i>
              </span>
            </p>
            <div className="control">
              <SearchButton handleFormSubmit={props.handleFormSubmit} />
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div
          className="column has-text-centered"
          style={{
            marginBottom: "20px",
          }}
        >
          <ResetButton handleReset={props.handleReset} />
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default PersonSearch;

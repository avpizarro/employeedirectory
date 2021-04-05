import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function PersonSearch(props) {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <div
          className="field has-addons"
          style={{ marginLeft: "20px", marginRight: "20px", marginBottom: "40px" }}
        >
          <p className="control has-icons-left" style={{ width: "100%" }}>
            <input
              className="input"
              type="text"
              placeholder="Find a person"
              onClick={props.personFilterOnChange}
              value={props.inputValue}
            ></input>
            <span className="icon is-small is-left">
              <i>
                <FontAwesomeIcon icon="search" />
              </i>
            </span>
          </p>
          <div className="control">
            <button onClick={props.handleFormSubmit} type="submit" className="button" style={{backgroundColor: "#eee"}} >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default PersonSearch;

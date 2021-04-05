import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function SortByCountry(props) {
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        <div
          className="field has-addons"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          <p className="control has-icons-left is-large has-text-centered" style={{ width: "100%" }}>
            <span className="select" style={{ width: "100%" }}>
              <select style={{ width: "100%", color: "#c4c2c2" }}>
                <option selected>Country</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </span>
            <span className="icon is-small is-left">
              <i>
                <FontAwesomeIcon icon="globe" />
              </i>
            </span>
            {/* <input className="input" type="text" placeholder="Search" value={props.sortValue} onChange={props.personSortOnChange}></input> */}
          </p>
          <div className="control" >
            <button type="submit" className="button" style={{backgroundColor: "#eee"}}>
              Choose
            </button>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}

export default SortByCountry;

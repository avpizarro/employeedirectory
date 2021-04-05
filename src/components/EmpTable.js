import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function EmpTable(props) {
  return (
    <thead>
      <tr>
        <th title="picture" className="has-text-centered">
          Picture
        </th>
        <th title="name" className="has-text-centered">
          Name <button value="name" onClick={props.sortBy}><FontAwesomeIcon icon="sort" /></button>
        </th>
        <th title="email" className="has-text-centered">
          Email <button value="email" onClick={props.sortBy}><FontAwesomeIcon icon="sort" /></button>
        </th>
        <th title="birthday" className="has-text-centered">
          Birthday <button value="dob" onClick={props.sortBy}><FontAwesomeIcon icon="sort" /></button>
        </th>
        <th title="address" className="has-text-centered">
          Address <button value="country" onClick={props.sortBy}><FontAwesomeIcon icon="sort" /></button>
        </th>
        <th title="phone" className="has-text-centered">
          Phone
        </th>
      </tr>
    </thead>
  );
}
export default EmpTable;

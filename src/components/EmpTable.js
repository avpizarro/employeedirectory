import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

function EmpTable() {
  return (
    <thead>
      <tr>
        <th title="picture" className="has-text-centered">
          Picture
        </th>
        <th title="name" className="has-text-centered">
          Name  <FontAwesomeIcon icon="sort" />
        </th>
        <th title="email" className="has-text-centered">
          Email  <FontAwesomeIcon icon="sort" />
        </th>
        <th title="birthday" className="has-text-centered">
          Birthday  <FontAwesomeIcon icon="sort" />
        </th>
        <th title="address" className="has-text-centered">
          Address <FontAwesomeIcon icon="sort" />
        </th>
        <th title="phone" className="has-text-centered">
          Phone  <FontAwesomeIcon icon="sort" />
        </th>
      </tr>
    </thead>
  );
}
export default EmpTable;

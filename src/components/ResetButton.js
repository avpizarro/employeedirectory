import React from "react";

function SearchButton(props) {
  return (
    <button
      onClick={props.handleReset}
      type="submit"
      className="button is-bordered is-small is-rounded reset"
      style={{ backgroundColor: "#eee" }}
    >
      Reset
    </button>
  );
}
export default SearchButton;
import React, { Component } from "react";
import axios from "axios";
import PersonSearch from "./PersonSearch";
import EmpTable from "./EmpTable";

export default class Employees extends Component {
  state = {
    persons: [],
    initialState: [],
    inputValue: "",
    sortValue: ""
  };

  
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      console.log(res.data.results);
      this.setState({ persons: res.data.results, initialState: res.data.results });
    });
  }

  personFilterOnChange = (event) => {
    event.preventDefault();
    console.log("New input Value", event.target.value);
    this.setState({ inputValue: event.target.value });
  };

  handleReset = (event) => {
    event.preventDefault();
    this.setState({ persons: this.state.initialState });
  }

  handleFormSubmit = (event) => {
    const selectedPeeps = [];
    event.preventDefault();
    this.state.persons.filter((person) => {
      if (JSON.stringify(person).includes(this.state.inputValue) === true) {
        console.log(person);
        selectedPeeps.push(person);
        return person;
      } else {
        return null;
      }
    });
    this.setState({ persons: selectedPeeps });
  };

  sortBy = (event) => {
    const category = event.target.value;
    console.log(category);
    const arrayToSort = this.state.persons;
    if (category === "name") {
      arrayToSort.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    } else if (category === "email") {
      arrayToSort.sort((a, b) => (a.email > b.email ? 1 : -1));
    } else if (category === "dob") {
      arrayToSort.sort((a, b) => (a.dob.date.slice(5,7)+a.dob.date.slice(8,10) > b.dob.date.slice(5,7)+b.dob.date.slice(8,10) ? 1 : -1));
    } else if (category === "country") {
      arrayToSort.sort((a, b) => (a.location.country > b.location.country ? 1 : -1));
    }
    this.setState({ persons: arrayToSort });;
  };

  render() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      <section className="section">
        <PersonSearch
          handleFormSubmit={this.handleFormSubmit}
          personFilterOnChange={this.personFilterOnChange}
          handleReset={this.handleReset}
        />
        <div className="columns is-centered">
          <div className="column is-narrow table-container">
            <table className="table is-narrow" style={{ margin: "auto" }}>
              <EmpTable sortBy={this.sortBy} />
              <tbody>
                {this.state.persons.map((person) => (
                  <tr key={person.phone}>
                    <td className="has-text-centered">
                      <img
                        src={person.picture.thumbnail}
                        alt="employee"
                        style={{ borderRadius: "50%" }}
                      />
                    </td>
                    <td className="has-text-centered">
                      {person.name.first + " " + person.name.last}
                    </td>
                    <td className="has-text-centered">{person.email}</td>
                    <td className="has-text-centered">
                      {person.dob.date.slice(8, 10) + " "}{" "}
                      {months.map((item) => {
                        if (
                          parseInt(person.dob.date.slice(5, 7)) ===
                          months.indexOf(item) + 1
                        ) {
                          return item;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                    <td className="has-text-centered">
                      {person.location.street.number +
                        " " +
                        person.location.street.name}
                      <br />
                      {person.location.city + " , " + person.location.postcode}
                      <br />
                      {person.location.country}
                    </td>
                    <td className="has-text-centered">{person.cell}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}
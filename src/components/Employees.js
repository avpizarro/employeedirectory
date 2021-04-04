import React, { Component } from "react";
import axios from "axios";

export default class Employees extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      console.log(res.data.results);
      this.setState({ persons: res.data.results });
    });
  }

  render() {
    console.log(this.state.persons);
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    return (
      <tbody>
        {this.state.persons.map((person) => (
          <tr key={person.id.value}>
            <td><img src={person.picture.thumbnail} 
            alt="employee" style={{borderRadius: "50%"}}/></td>
            <td>{person.name.first + " " + person.name.last}</td>
            <td>{person.email}</td>
            <td>{person.dob.date.slice(8, 10) + " "} {
              months.map(item => {
              if(parseInt(person.dob.date.slice(5,7)) === months.indexOf(item)+1) {
                console.log(parseInt(person.dob.date.slice(5,7)));
                console.log(months.indexOf(item)-1);
                return item;
              }
          })}
       </td>
            <td>{person.location.country}</td>
            <td>{person.cell}</td>
          </tr>
        ))}
        ;
      </tbody>
    );
  }
}

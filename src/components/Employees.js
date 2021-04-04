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
            <td className="has-text-centered"><img src={person.picture.thumbnail} 
            alt="employee" style={{borderRadius: "50%"}}/></td>
            <td className="has-text-centered">{person.name.first + " " + person.name.last}</td>
            <td className="has-text-centered">{person.email}</td>
            <td className="has-text-centered">{person.dob.date.slice(8, 10) + " "} {
              months.map(item => {
              if(parseInt(person.dob.date.slice(5,7)) === months.indexOf(item)+1) {
                return item;
              }
          })}
       </td>
            <td className="has-text-centered">{person.location.street.number + " " + person.location.street.name}
            <br/>
            {person.location.city + " , " + person.location.postcode}
            <br/>
            {person.location.country}</td>
            <td className="has-text-centered">{person.cell}</td>
          </tr>
        ))}
        ;
      </tbody>
    );
  }
}

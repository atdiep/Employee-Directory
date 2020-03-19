import React from "react";
import "./style.css"

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [
                {
                    "firstName": "Tom",
                    "lastName": "Smith",
                    "age": 19,
                    "gender": "male",
                    "race": "Caucasian",
                    "religion": "Athiest"
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Smith",
                    "age": 18,
                    "gender": "female",
                    "race": "Caucasian",
                    "religion": "Athiest"
                }
            ],
            filterArrays: []
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search)
      }

    render() {
        //Dynamically create employee table row html
        var employeeRows = this.state.employees.map(function(employee) {
            return(
                <tr>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.age}</td>
                    <td>{employee.gender}</td>
                    <td>{employee.race}</td>
                    <td>{employee.religion}</td>
                </tr>
            )
        })
        //Render all page html codes
        return (
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Race</th>
                        <th scope="col">Religion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeRows
                    }
                </tbody>
            </table>
        )
    }
}

export default HomePage;
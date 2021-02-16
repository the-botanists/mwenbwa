import React, { Component } from 'react';
import axios from "axios"; 

class SubmitForm extends Component {
  state = {
    email: '',
    password: '',
  };
/* This is where the magic happens 
*/
handleSubmit = event => {
    event.preventDefault();
    const user = {
        email: this.state.name,
        password: this.state.password
    }
    axios.post('/api/simpleuser', { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/" //This line of code will redirect you once the submission is succeed
      })
  }
handleChange = event =>{
    this.setState({ email: event.target.value, password: event.target.value });
  }
render() {
    return (
      <>
        <form onSubmit = { this.handleSubmit }>
          <label> Email:
            <input type = "email" name = "email" onChange= {this.handleChange}/>
            </label>
            <label> Password:
            <input type = "password" name = "password" onChange= {this.handleChange}/>
          </label>
          <button type = "submit"> Add </button>
        </form>
    </>
    );
  }
}
export default SubmitForm;
import React from 'react';
import PersonalData from './Personaldata';

class Form extends React.Component {
  constructor() {
    super()

    this.handleData = this.handleData.bind(this);

    this.state = {
      nameError: '',
      name: '',
      emailError: '',
      email: '',
    }
  }

  handleData(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'name' && value.length > 40) {
      return (this.setState({nameError: 'Máximo de 40 caracteres'}))
    } else {
      this.setState({nameError: ''})
    }
    if (name === 'email' && value.length > 50) {
      return (this.setState({emailError: 'Máximo de 50 caracteres'}))
    } else {
      this.setState({emailError: ''})
    }
    return (this.setState({[name]: value,}))
  }

  render() {
    return (
      <div>
        <header><h1>Currículo</h1></header>
        <PersonalData estado={this.state} handleData={this.handleData}/>
      </div>
    )
  }
}

export default Form;

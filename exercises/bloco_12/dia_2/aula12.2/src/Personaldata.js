import React from 'react';


class PersonalData extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>Nome: 
          <input 
          onChange={this.props.handleData}
          name='name'
          type='text'
          value={this.props.estado.name}
          ></input>
        </label>
        <span>{this.props.estado.nameError}</span>
        <label>E-mail: 
          <input 
          onChange={this.props.handleData}
          name='email'
          type='text'
          value={this.props.estado.email}
          ></input>
        </label>
        <span>{this.props.estado.emailError}</span>
      </fieldset>
    )
  }
}

export default PersonalData;
import React, { Component } from 'react'
import './Form.css'
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();

    this.state = {
    };
  }


  handleChange(event) {
    const name = event.target.name
    const value = event.target.type === 'chekbox' ? event.target.checked : event.target.value
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <input
              onChange={this.handleChange}
              type="text"
              name="nome"
              />
            <input
              onChange={this.handleChange}
              type="number"
              name="idade"
              />
            </fieldset>
          <input
            onChange={this.handleChange}
            type="checkbox"
            name="vaiComparecer"
          />
          <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        </form>
      </div>
    );
  }
}

export default Form;
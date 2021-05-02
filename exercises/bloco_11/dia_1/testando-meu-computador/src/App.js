import React from 'react';
import './App.css';


function btn2() {
  console.log('Você clicou no botão 2')
}


class App extends React.Component {
  constructor() {
    super()
    this.btn1 = this.btn1.bind(this)
    this.btn3 = this.btn3.bind(this)
    this.btnColor = this.btnColor.bind(this)
    this.state = {
      numeroDeCliques: 1,
      color: 'gray',
    }
  }

  btnColor() {
    if (this.state.numeroDeCliques % 2 !== 0) {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques,
        color: 'green',
      }))
    } else {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques,
        color: 'gray',
      }))
    }
  }

  
  btn3() {
    console.log(this)
    console.log('Você clicou no botão 3')
  }

  btn1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      color: this.state.color,
    }))
    this.btnColor();
  }

  render() {
    return (
      <div>
        <button style={{ backgroundColor: this.state.color }} onClick={this.btn1}>{this.state.numeroDeCliques}</button>
        <button onClick={btn2}>Butão 2</button>
        <button onClick={this.btn3}>Butão 3</button>
      </div>
      )
  }
}

export default App;

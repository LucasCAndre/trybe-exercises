import React from 'react';


class EstadoFavorito extends React.Component {
  render() {


    return(
      <label>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea name="estadoFavorito" onChange={this.props.handleChange} />
    </label>
    )
  }
}

export default EstadoFavorito;

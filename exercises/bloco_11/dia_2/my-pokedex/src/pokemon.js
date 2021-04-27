import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value, measurementUnit}, image} = this.props.pokemon;
    return (
      <div className='pokemon'>
        <h1 className='pokemonName'>{name}</h1>
        <h3>{type}</h3>
        <p>Peso: {value}{measurementUnit}</p>
        <img src={image} alt='imagem do pokemon'></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string,
  image: PropTypes.string,
}

export default Pokemon;

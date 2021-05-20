import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      dogList: [],
    };
    this.addDog = this.addDog.bind(this);
    this.fetchDogImage = this.fetchDogImage.bind(this);
  }

  componentDidMount() {
    this.fetchDogImage();
  }

  async fetchDogImage() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const fetchImage = await fetch(url);
    const dogObj = await fetchImage.json();
    const imagem = dogObj.message;
    this.setState({ image: imagem });
  }

  addDog() {
    const { dogList, image } = this.state;
    this.setState({ image: null, dogList: [...dogList, image] });
    this.fetchDogImage();
  }

  render() {
    const { image, dogList } = this.state;
    return (
      <div>
        <p>Imagem de um Doguinho</p>
        { image ? <img style={ { width: '250px' } } src={ image } alt="dog" /> : <span>Loading...</span>}
        <br />
        {dogList
          .map((dog, index) => <img style={ { width: '250px' } } key={ index } src={ dog } alt="doguinho" />)}
        <button type="button" onClick={ this.addDog }>Addog</button>
      </div>
    );
  }
}

export default App;

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
  const temperature = getMarsTemperature()
  setTimeout(() => console.log(`Mars temperature is: ${temperature} degree Celsius`), messageDelay());
  callback(temperature);
}


  sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
  sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
  sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
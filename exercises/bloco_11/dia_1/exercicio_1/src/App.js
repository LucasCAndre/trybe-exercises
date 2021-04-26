import './App.css';

const tasks = ['Comer muito', 'Estudar', 'Dar comida pro cachorro', 'Beber agua', 'Alongar', 'Levar a vovo pro karate', 'Dar água às plantas'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    tasks.map((tak) => {
      return task(tak);
    })
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import generateAnimals from './functions/generateAnimals';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [animals, setAnimals] = useLocalStorage('my_little_farm', []);

  const generate = () => {
    const newSheeps = generateAnimals('sheep');
    const newCows = generateAnimals('cow');
    setAnimals([...newSheeps, ...newCows]);
  };

  const handleMove = (id) => {
    const updated = animals.map(animal => {
      if (animal.id === id) {
        const newSide = animal.side === 'left' ? 'right' : 'left';
        return { ...animal, side: newSide };
      }
      return animal;
    });
    setAnimals(updated);
  };

  const leftAnimals = animals.filter(a => a.side === 'left');
  const rightAnimals = animals.filter(a => a.side === 'right');

  return (
    <>
      <h1>My Little Farm project: Cows and Sheeps</h1>
      <div className="farm">
        <div className="sheeps">
          {leftAnimals.map(a => (
            <div
              key={a.id}
              className={`animal ${a.type}`}
              onClick={() => handleMove(a.id)}
            >
              {a.id}
            </div>
          ))}
        </div>
        <div className="cows">
          {rightAnimals.map(a => (
            <div
              key={a.id}
              className={`animal ${a.type}`}
              onClick={() => handleMove(a.id)}
            >
              {a.id}
            </div>
          ))}
        </div>
      </div>
      <button onClick={generate}>To the Farm</button>
    </>
  );
}

export default App;

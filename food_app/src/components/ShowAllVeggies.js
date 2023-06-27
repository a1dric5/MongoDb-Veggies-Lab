import React, { useEffect, useState } from 'react';

const ShowAllVeggies = () => {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    fetch('/veggies')
      .then(response => response.json())
      .then(data => setVeggies(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>All Veggies</h1>
      {veggies.map(veggie => (
        <div key={veggie._id}>
          <h3>{veggie.name}</h3>
          <p>{veggie.description}</p>
          <img src={veggie.image} alt={veggie.name} />
        </div>
      ))}
    </div>
  );
};

export default ShowAllVeggies;

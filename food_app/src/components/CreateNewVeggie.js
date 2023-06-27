import React, { useState } from 'react';

const CreateNewVeggie = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/create_veggie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, image }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
   
        setName('');
        setDescription('');
        setImage('');
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Create New Veggie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateNewVeggie;

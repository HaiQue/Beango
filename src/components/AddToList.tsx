import React, { useState } from 'react';
import '../styles/AddToList.css';

const AddToList = () => {
  const [input, setInput] = useState({
    name: '',
    price: '',
    image: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  setInput({
    name: '',
    price: '',
    image: '',
  });

  return (
    <div className='AddToList'>
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='name'
        value={input.name}
        placeholder='Name'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='age'
        value={input.price}
        placeholder='Age'
      />
      <input
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='img'
        value={input.image}
        placeholder='Image Url'
      />
      <button className='AddToList-btn'>Add to List</button>
    </div>
  );
};

export default AddToList;

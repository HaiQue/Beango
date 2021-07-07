import React from 'react';

export interface IProps {
  name: string;
  image: string;
  price: number;
}

const ProductItem = ({ name, image, price }: IProps) => {
  return (
    <div className='menuItem'>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price}$ </p>
    </div>
  );
};

export default ProductItem;

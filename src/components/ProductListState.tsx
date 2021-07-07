import React from 'react';
import ProductItem from './ProductItem';
import { ProductData } from '../data/ProductData';
import '../styles/Products.css';

// changed
import { IState as IProps } from '../pages/Admin'; // pages/admin

const ProductListState: React.FC<IProps> = ({ coffee }) => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Products</h1>
      <div className='menuList'>
        {coffee.map((coffee, key: number) => {
          return (
            <ProductItem
              key={key}
              image={coffee.image}
              name={coffee.name}
              price={coffee.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListState;

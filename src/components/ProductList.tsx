import React from 'react';
import ProductItem from './ProductItem';
import { ProductData } from '../data/ProductData';
import '../styles/Products.css';
import { IProps } from './ProductItem';

const ProductList: React.FC = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Products</h1>
      <div className='menuList'>
        {ProductData.map((Item: IProps, key: number) => {
          return (
            <ProductItem
              key={key}
              image={Item.image}
              name={Item.name}
              price={Item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

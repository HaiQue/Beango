import React from 'react';
import ProductItem from '../components/ProductItem';
import { ProductData } from '../data/ProductData';
// import '../styles/Products.css';
import { IProps } from '../components/ProductItem';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default Products;

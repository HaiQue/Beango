import React, { useState } from 'react';
import AddToList from '../components/AddToList';
import ProductListState from '../components/ProductListState';

export interface IState {
  coffee: {
    name: string;
    image: string;
    price: number;
  }[];
}

const Admin: React.FC = () => {
  const [coffee, setCoffee] = useState<IState['coffee']>([
    {
      name: 'Avicia Coffe',
      image:
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
      price: 100,
    },
  ]);

  return (
    <>
      {/* <AddToList /> */}
      <ProductListState coffee={coffee} />
    </>
  );
};

export default Admin;

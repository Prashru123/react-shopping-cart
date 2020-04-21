import React, { useState, useContext, useEffect } from 'react';
import Product from './Product';
import Title from './Title';
import ProductContext from '../context';

const ProductList = () => {
  /*  const [products, setProducts] = useState([]); */
  const { products, getProducts } = useContext(ProductContext);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <div className='py-5'>
        <div className='container'>
          <Title name='Our' title='products' />
          <div className='row'>
            {products.map((prod) => (
              <Product key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;

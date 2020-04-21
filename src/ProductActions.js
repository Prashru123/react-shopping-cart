import React, { useReducer, useEffect } from 'react';
import ProductReducers from './ProductReducers';
import { storeProducts, detailProducts } from '../src/data';
import ProductContext from './context';
const ProductActions = (props) => {
  const initialState = {
    products: [],
    detailProduct: {},
    cart: [],
    isModal: false,
    modalProduct: detailProducts,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };
  const [state, dispatch] = useReducer(ProductReducers, initialState);

  const getProducts = () => {
    let tempProducts = [];
    storeProducts.map((product) => {
      const singleItem = { ...product };
      tempProducts = [...tempProducts, singleItem];
    });

    dispatch({
      type: 'GET_PRODUCTS',
      payload: tempProducts,
    });
  };

  const handleDetail = (id) => {
    dispatch({
      type: 'HANDLE_DETAILS',
      payload: id,
    });
    console.log('Hello from detail');
  };

  const getItem = (id) => {
    const product = state.products.find((item) => item.id === id);
    return product;
  };
  const addToCart = (id) => {
    let tempProduct = [...state.products];
    const index = tempProduct.indexOf(getItem(id));
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });
    //addTotals();
    /*   dispatch({
      type: 'ADD_TOTALS',
      payload: addTotals(),
    }); */
  };
  const addTotals = () => {
    let subTotal = 0;
    state.cart.map((item) => {
      subTotal += item.total;
    });
    const tax = parseFloat(subTotal * 0.1).toFixed(2);
    const total = subTotal + tax;

    dispatch({
      type: 'ADD_TOTALS',
      payload: {
        subTotal,
        tax,
        total,
      },
    });
  };

  const openModal = (id) => {
    const product = getItem(id);
    dispatch({
      type: 'OPEN_MODAL',
      payload: {
        modalProduct: product,
        isModal: true,
      },
    });
  };

  const increment = (id) => {
    let tempCart = [...state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = parseFloat((product.count * product.price).toFixed(2));

    dispatch({
      type: 'INCREMENT',
      payload: tempCart,
    });
    addTotals();
    getProducts();
  };
  const decrement = (id) => {
    const tempCart = [...state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    selectedProduct.count = selectedProduct.count - 1;
    if (selectedProduct.count === 0) {
      removeItem(id);
    } else {
      selectedProduct.total = parseFloat(
        (selectedProduct.count * selectedProduct.price).toFixed(2)
      );
      dispatch({
        type: 'DECREMENT',
        payload: tempCart,
      });
      addTotals();
      getProducts();
    }
  };
  const removeItem = (id) => {
    const tempProducts = [...state.products];
    const tempCart = [...state.cart];
    const selectedProduct = tempCart.filter((item) => item.id !== id);
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { selectedProduct, tempProducts },
    });
    console.log('Removed Item from the cart');
    addTotals();
  };
  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
    //addTotals();
    //getProducts();
  };

  const closeModal = (id) => {
    dispatch({
      type: 'CLOSE_MODAL',
      payload: { isModal: false },
    });
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        cart: state.cart,
        isModal: state.isModal,
        modalProduct: state.modalProduct,
        cartSubTotal: state.cartSubTotal,
        cartTax: state.cartTax,
        cartTotal: state.cartTotal,
        openModal,
        closeModal,
        handleDetail,
        getProducts,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
        addTotals,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductActions;

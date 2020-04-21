export default (state, action) => {
  switch (action.type) {
    case 'HANDLE_DETAILS':
      return {
        ...state,
        detailProduct: state.products.find(
          (prod) => prod.id === action.payload
        ),
      };
    case 'INCREMENT':
      return {
        ...state,
        cart: action.payload,
      };
    case 'DECREMENT':
      return {
        ...state,
        cart: action.payload,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        products: action.payload.tempProducts,
        cart: action.payload.selectedProduct,
      };
    case 'ADD_TOTALS':
      return {
        ...state,
        cartSubTotal: action.payload.subTotal,
        cartTax: action.payload.tax,
        cartTotal: action.payload.total,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'ADD_TO_CART': {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case 'OPEN_MODAL':
      return {
        ...state,
        isModal: action.payload.isModal,
        modalProduct: action.payload.modalProduct,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModal: action.payload.isModal,
      };
    default:
      return state;
  }
};

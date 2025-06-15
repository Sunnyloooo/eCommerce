import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delCart, addCart, removeCart } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (item) => {
    dispatch(removeCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(addCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(delCart(item));
  };

  const cartItemsList = (cartItem) => {
    return (
      <div className="px-4 py-4 my-4 bg-white rounded-sm border border-gray-200" key={cartItem.id}>
        <div className="container">
          <button onClick={() => handleClose(cartItem)} className="float-right text-gray-500 hover:text-gray-700 text-sm" aria-label="Close">X</button>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <img src={cartItem.image} alt={cartItem.title} className="h-32 object-contain" />
            </div>
            <div className="md:w-3/4 flex flex-col justify-center">
              <h3 className="text-lg font-medium mb-2">{cartItem.title}</h3>
              <p className="text-base font-semibold text-gray-800">
                <button className="border border-gray-700 text-gray-700 px-3 py-1 text-sm rounded-sm hover:bg-gray-100 transition-colors duration-200 mr-2" onClick={() => handleDecrease(cartItem)}>-</button>
                {cartItem.qty}
                <button className="border border-gray-700 text-gray-700 px-3 py-1 text-sm rounded-sm hover:bg-gray-100 transition-colors duration-200 ml-2" onClick={() => handleIncrease(cartItem)}>+</button>
                <span className="ml-4">X ${cartItem.price.toFixed(2)} = ${(cartItem.qty * cartItem.price).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 py-8 my-5 bg-white rounded-sm border border-gray-200 text-center">
        <div className="container">
          <div className="flex justify-center">
            <h3 className="text-xl font-light">Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container flex justify-center mt-6">
        <button className="border border-gray-700 text-gray-700 px-6 py-3 text-base rounded-sm hover:bg-gray-100 transition-colors duration-200 mb-5 uppercase tracking-wide" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {cartItems.length === 0 && emptyCart()}
      {cartItems.length !== 0 && cartItems.map(cartItemsList)}
      {cartItems.length !== 0 && (
        <div className="container mx-auto px-4 py-4 my-4 bg-white rounded-sm border border-gray-200 text-right">
          <h3 className="text-lg font-medium">Subtotal: ${cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2)}</h3>
        </div>
      )}
      {cartItems.length !== 0 && button()}
    </div>
  );
};

export default Cart;
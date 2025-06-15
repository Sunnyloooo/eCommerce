import React from 'react';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-light mb-8 text-center">Checkout</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-sm border border-gray-200">
       
        <div className="">
          <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="fullName" name="fullName" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" name="address" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
              <input type="text" id="state" name="state" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal Code</label>
              <input type="text" id="zip" name="zip" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-medium mb-4">Payment Information</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input type="text" id="cardNumber" name="cardNumber" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date (MM/YY)</label>
              <input type="text" id="expiryDate" name="expiryDate" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input type="text" id="cvv" name="cvv" className="mt-1 block w-full border border-gray-300 rounded-sm shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gray-700 text-white px-6 py-3 text-base rounded-sm hover:bg-gray-800 transition-colors duration-200 uppercase tracking-wide">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
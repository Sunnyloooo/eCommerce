import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const SkeletonLoading = () => {
    return (
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full h-96 bg-gray-200 rounded-sm animate-pulse"></div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-start">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 mb-6 animate-pulse"></div>
          <div className="h-12 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="md:w-1/2 flex justify-center">
          <img src={product.image} alt={product.title} className="max-w-full h-96 object-contain rounded-sm" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-start">
          <h1 className="text-3xl font-light mb-3">{product.title}</h1>
          <p className="text-xl text-gray-800 mb-4 font-semibold">${product.price}</p>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">{product.description}</p>
          <button className="border border-gray-700 text-gray-700 px-6 py-3 text-base rounded-sm hover:bg-gray-100 transition-colors duration-200 self-start uppercase tracking-wide" onClick={() => addProduct(product)}>Add to Cart</button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {loading ? <SkeletonLoading /> : <ShowProduct />}
    </div>
  );
};

export default Product;
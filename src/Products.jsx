import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const url = selectedCategory ? `https://fakestoreapi.com/products/category/${selectedCategory}` : 'https://fakestoreapi.com/products';
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const getCategories = async () => { 
      setCategoriesLoading(true); 
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
      setCategoriesLoading(false);
    };

    getCategories(); 
  }, []); 

  const SkeletonLoader = () => (
    <div className="border border-gray-200 rounded-sm p-4 flex flex-col items-center text-center animate-pulse">
      <div className="w-full h-60 bg-gray-300 mb-4 rounded-sm"></div>
      <div className="w-3/4 h-6 bg-gray-300 mb-2"></div>
      <div className="w-1/4 h-6 bg-gray-300 mb-4"></div>
      <div className="w-full h-10 bg-gray-300 rounded-sm"></div>
    </div>
  );

  const Loading = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8).fill(0).map((_, index) => <SkeletonLoader key={index} />)}
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-sm p-4 flex flex-col items-center text-center">
            <Link to={`/product/${product.id}`} className='w-full'>
              <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4 rounded-sm max-w-full" />
              <h2 className="text-lg font-medium mb-2 px-2 truncate overflow-hidden text-ellipsis">{product.title}</h2>
              <p className="text-gray-700 mb-4 text-base font-semibold">${product.price}</p>
            </Link>
            <button className="border border-gray-700 text-gray-700 px-4 py-2 text-sm rounded-sm hover:bg-gray-100 transition-colors duration-200 w-full" onClick={() => addProduct(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          className={`px-4 py-2 text-sm rounded-sm ${selectedCategory === null ? 'bg-gray-700 text-white' : 'border border-gray-700 text-gray-700 hover:bg-gray-100'}`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categoriesLoading ? (
          Array(5).fill(0).map((_, index) => (
            <div key={index} className="px-4 py-2 text-sm rounded-sm bg-gray-300 animate-pulse w-20 h-11"></div>
          ))
        ) : (
          categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 text-sm rounded-sm ${selectedCategory === category ? 'bg-gray-700 text-white' : 'border border-gray-700 text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))
        )}
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
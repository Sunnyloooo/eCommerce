import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import Cart from './Cart';
import Checkout from './Checkout';
import ContactPage from './ContactPage';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Product from './Product';
import Products from './Products';
import Register from './Register';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter basename='/eCommerce'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

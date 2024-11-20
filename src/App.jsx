import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import ProductPage from './page/product/ProductPage';
import AboutPage from './page/about/AboutPage';
import CategoryPage from './page/category/Category';
import NotFoundPageError from './page/notfound/NotFoundPage';
import LayoutManage from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      {/* Now LayoutManage is inside BrowserRouter */}
      <LayoutManage />  
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

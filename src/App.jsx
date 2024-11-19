
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import NotFoundPageError from './page/notfound/NotFoundPage';
import LayoutManage from './components/layout/Layout';
function App() {
  return (
    <>
    <LayoutManage />  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<h1>about</h1>}/>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='*' element={<NotFoundPageError />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

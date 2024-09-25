import './App.css';
import React from 'react';
import Blogs from "./routes/Blogs";
import Home from "./routes/Home";
import {Routes, Route } from 'react-router-dom';

function App() {

  return (

  <div className='App'>

  <Routes>

  <Route path='/' element={<Home/>}></Route>  
  <Route path='/blogs' element={<Blogs/>}></Route>

  </Routes>
  
  </div>

  );
}

export default App;

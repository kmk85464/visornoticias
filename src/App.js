import logo from './LogoBootstrap.png';
import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar.js';
import NewsList from './components/NewsList.js';
import NewsDetail from './components/NewsDetail.js';
function App() {

  const [categoria, setCategoria]=useState(["todas"])

  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>

      <NavigationBar setCategoria={setCategoria} />
       <Routes>
        <Route path="/" element={<NewsList categoria={categoria} />} />
        <Route path="/noticia/:id" element={<NewsDetail />} />
      </Routes>



  </>
  );
}

export default App;

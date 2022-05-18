import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './components/Main';



function App(props) {

  return (
    <div>
      <Header />
      <Home />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

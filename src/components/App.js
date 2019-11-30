import React from 'react';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

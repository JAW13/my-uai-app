//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Cotizacion from './components/Cotizacion';
//Class Name react



function App() {
  return (
    <div>
      <div>
          <Navbar/>
      </div>
      <div>
          <Banner/>
      </div>
      <div>
          <Cotizacion/>
      </div>
      <div>
          <Footer/>
      </div>
    </div>
        


  );
}

export default App;

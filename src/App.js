import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './styles.css'
import Routes from './routes';

const App = () => (
  <div className="App">
    <Header/>
    <Routes/>
    <Footer/>
  </div>
);

export default App;

import './App.css';

import {  Suspense } from 'react';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
    
function App() {
  return (

    <div className="App">
      <header className="App-header">
       
<Suspense fallback  = {<h1> component is loading ......</h1>}>
  <Header></Header>
    <Home/>
    <Footer></Footer>
      </Suspense>
      </header>
    </div>
  );
}

export default App;

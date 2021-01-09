import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {
  return (
    <div>
       <Header/>
        <div className='container'>
          <MemeGenerator/>
        </div>
      </div>
  )
}

export default App;

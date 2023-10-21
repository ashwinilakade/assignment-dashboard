import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div>
      <div className="col-md-2">
        <Sidebar />
      </div>{' '}
      <div className="col-md-10 ">
        <Header />
        <Home />
      </div>{' '}
    </div>
  );
}
export default App;

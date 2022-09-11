import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Article from './pages/Article/Article';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="content">
        <NavBar />
        {/* <Home /> */}
        <Article />
      </div>
    </div>
  );
}

export default App;

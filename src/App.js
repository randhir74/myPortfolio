// AppTemp.js
import './App.css';
import Header from "./MyComponent/Header";
import AboutMe from "./MyComponent/AboutMe";
import React from 'react';
import FirstPage from './MyComponent/FirstPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <>
      <Router>
        <div className="App">
          <Header title="My Todos List" />
          <Routes>
            <Route exact path='/' element={<FirstPage />}></Route>
            <Route exact path='/about' element={<AboutMe />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

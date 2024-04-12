// import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {Route, BrowserRouter, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <div className="container my-3">
      <Routes>
         <Route exact path="/" element={<News key="general" pageSize={6} category="general"/>} />
         <Route exact path="/sports" element={<News key="sports" pageSize={6} category="sports"/>} />
         <Route exact path="/business" element={<News key="business" pageSize={6} category="business"/>} />
         <Route exact path="/health" element={<News key="health" pageSize={6} category="health"/>} />
         <Route exact path="/science" element={<News key="science" pageSize={6} category="science"/>} />
         <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} category="entertainment"/>} />
         <Route exact path="/technology" element={<News key="technology" pageSize={6} category="technology"/>} />
      </Routes>
      </div>
    </BrowserRouter>
    
    )
  }
}

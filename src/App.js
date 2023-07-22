import React from "react";
import { Reset } from "styled-reset";
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import './App.css';

function App() {
  return (
    <>
    <Reset />
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  );
}

export default App;

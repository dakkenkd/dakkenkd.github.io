import React from "react";
import { Reset } from "styled-reset";
import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import './App.css';

function App() {
  return (
    <>
    <Reset />
    <Header />
    <Gallery />
    <Body />
    <Footer />
    </>
  );
}

export default App;

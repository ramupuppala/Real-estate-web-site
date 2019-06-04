import React from 'react';
import Header from "./components/common/header";
import TopHeader from './components/common/topheader';
import Apartments from './components/Apartments/apartments';
import Footer from './components/common/footer';

function App() {
  return (
    <React.Fragment>
      <TopHeader/>
      <Header/>
      <Apartments/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

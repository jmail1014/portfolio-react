import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

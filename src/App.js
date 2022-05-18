import React from "react";
import "./App.css";
import { data } from "./constants";
import { Navbar, Footer } from "./Components";
import { Header, About, Latest, Gallery, ContactUs } from "./Containers";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Latest />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;

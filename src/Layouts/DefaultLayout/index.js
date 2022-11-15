import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container-content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

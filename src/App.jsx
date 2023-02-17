import "./index.css";
import Hyper from "/src/assets/hyper_logo.png";
import React from "react";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <>
    <nav className="flex flex-col lg:flex-row items-center justify-between p-6 bg-gray-800">
    <div className="flex items-center">
      <img src={Hyper} alt="Logo" className="w-12 h-12 mr-6" />
      <h1 className="text-white font-medium text-2xl">HyperionTech</h1>
    </div>
    <div className="flex lg:ml-auto">
      <input
        type="text"
        placeholder="Pesquisar"
        className="p-2 bg-gray-700 text-white rounded-full w-64 lg:w-auto"
      />
      <button className="bg-indigo-500 text-white p-2 rounded-full ml-4">
        Login
      </button>
      <button className="bg-indigo-500 text-white p-2 rounded-full ml-4">
        Criar conta
      </button>
    </div>
  </nav>
  <Footer />
  </>
  );
}

export default App;

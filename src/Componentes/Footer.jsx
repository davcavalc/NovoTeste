import React from 'react'
import Hyper from "/src/assets/hyper_logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 p-6 text-white">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <img src={Hyper} alt="Logo" className="w-12 h-12 mr-6 lg:mr-0" />
      <h1 className="text-white font-medium lg:ml-6">HyperionTech</h1>
    </div>
    <nav className="mt-6 lg:mt-0">
      <ul className="flex lg:justify-end">
        <li className="mr-6 text-blue-700">
          <a href="#">Downloads</a>
        </li>
        <li className="mr-6 text-blue-700">
          <a href="#">Contato</a>
        </li>
        <li className="mr-6 text-blue-700">
          <a href="#">Preços</a>
        </li>
        <li className="mr-6 text-blue-700">
          <a href="#">Trabalhe conosco</a>
        </li>
      </ul>
    </nav>
    <p className="mt-6 lg:mt-0">
      Endereço: Rua 123, bairro Parquelândia, Cidade Mulambo, Estado Ceará, Brasil
    </p>
  </footer>
    </div>
  )
}

export default Footer;

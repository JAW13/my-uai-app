import React from "react";
import logo from '../assets/logoconecta.png';


function Navbar(){
    return(
      <div>
        <header className="p-0  mt-4 flex justify-between mx-auto  border-b pb-4 px-12 border-gray-300">
        <a href="/" className="flex items-center">
                    <img src={logo} alt="Logo UAI" className="w-30 h-20" />
                    <span className="font-bold text-xl">Conecta</span>
                </a>

      <div className="flex gap-4  shadow-gray-300 rm-12">
        <li >
        <a href="https://www.google.com/" className=" rounded-full">
          Quienes Somos</a>
        </li>
  
        <li >
        <a href="https://www.google.com/" className=" rounded-full">
          Sobre Conecta</a>
        </li>
        <li >
        <a href="https://www.google.com/" className=" rounded-full">
          Cotiza</a>
        </li>
      </div>
        </header>
      </div>
    );
  }

  export default Navbar;
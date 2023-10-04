import React from "react";


function Navbar(){
    return(
      <div>
        <header className="p-0  mt-4 flex justify-between mx-auto  border-b pb-4 px-12 border-gray-300">
        <a href="https://www.google.com/" className="flex items-center gap-1">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
             </svg>
        <span className="font-bold text-xl">Rubloque</span>
      </a>
      <div className="flex gap-4  shadow-gray-300 rm-12">
        <li >
        <a href="https://www.google.com/" className="border border-grey-300 rounded-full">
          Quienes Somos</a>
        </li>
  
        <li >
        <a href="https://www.google.com/" className="border border-grey-300 rounded-full">
          Sobre que bloque</a>
        </li>
        <li >
        <a href="https://www.google.com/" className="border border-grey-300 rounded-full">
          Cotiza</a>
        </li>
      </div>
        </header>
      </div>
    );
  }

  export default Navbar;
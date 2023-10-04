import React from "react";

function Banner(){
    return(
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('/fut.jpeg')` }} >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4">
          <h1 className="text-white font-bold text-2xl">Tu texto aquí</h1>
          <p className="text-white">Más información o descripción aquí.</p>
      </div>
      </div>
  
    );
  }

export default Banner;
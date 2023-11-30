import React from "react";
import bloque from '../assets/bloque.png';

function Banner(){
    return(
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('/fut.jpeg')` }} >
      
      {/* Texto */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-4">
          <h1 className="text-white font-bold text-2xl">Innovación y Eficiencia en cada Canal:</h1>
          <p className="text-white"> Bloques Ecológicos Tipo Lego para un Futuro Sostenible</p>
      </div>

      {/* Imagen a la derecha */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2">
          <img src={bloque} alt="Descripción de la imagen" style={{ width: '500px', height: 'auto' }} />
      </div>

      </div>
  
    );
}

export default Banner;

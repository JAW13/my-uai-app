
import React, { useState } from 'react';

function Cotizacion() {
    const [metros, setMetros] = useState(0);
    const [alto, setAlto] = useState(0);
    const [ancho, setAncho] = useState(0);
    const [financiamiento, setFinanciamiento] = useState(false);

    const costoMaterial = metros * 100000;
    const costoManoObra = metros*10000; // Puedes ajustar este valor según tus necesidades
    const gestionFinanciamineto = 250000;
    const costoTotal= costoMaterial + costoManoObra + gestionFinanciamineto
    const descuento = financiamiento ? costoTotal * 0.70 : 0;
    const tuPagas = costoMaterial + costoManoObra + gestionFinanciamineto - descuento;
    return (
        <div className="p-4">
            {/* Título principal */}
            <h1 className=" pt-10 pb-10 mb-4 ml-8 text-5xl">Hagamos numeros!</h1>

            <div className="flex space-x-4 ml-8">
                {/* Columna izquierda */}
                <div className="w-1/2">
                    <div className="mb-4 pb-6">
                        <label className="block mb-2 text-lg">Metros a revestir</label>
                        <input type="number" value={metros} onChange={(e) => setMetros(e.target.value)} className="border p-2 h-8 w-20 bg-gray-300 no-arrows" />
                    </div>
                    <div className="mb-4 pb-6">
                        <label className="block mb-2 text-lg">Alto canal</label>
                        <input type="number" value={alto} onChange={(e) => setAlto(e.target.value)} className="border p-2 h-8 w-20 bg-gray-300 no-arrows" />
                    </div>
                    <div className="mb-4 pb-6">
                        <label className="block mb-2 text-lg">Ancho canal</label>
                        <input type="number" value={ancho} onChange={(e) => setAncho(e.target.value)} className="border p-2 h-8 w-20 bg-gray-300 no-arrows" />

                    </div>
                    {/* Financiamiento */}
                    <div className="mb-4">
                    <label className="block mb-2 text-lg">¿Quieres optar a financiamiento?</label>
                    <span className="mr-4">
                        <label className="inline-flex items-center">
                            <input 
                                type="radio" 
                                name="financiamiento" 
                                value="si" 
                                checked={financiamiento} 
                                onChange={() => setFinanciamiento(true)} 
                                className="w-8 h-8 border-2 border-blue-500 rounded-full text-blue-500 focus:ring-0 focus:outline-none"
                            />
                            <span className="ml-2">Sí</span>
                        </label>
                    </span>
                    <span>
                        <label className="inline-flex items-center">
                            <input 
                                type="radio" 
                                name="financiamiento" 
                                value="no" 
                                checked={!financiamiento} 
                                onChange={() => setFinanciamiento(false)} 
                                className="w-8 h-8 border-2 border-blue-500 rounded-full text-blue-500 focus:ring-0 focus:outline-none"
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </span>
                </div>
                     </div>
                      {/* Columna derecha */}
                        <div className="w-1/2">
                         <div className="flex justify-between border-b border-black pb-2 mb-2 mr-20 text-lg">Material 
                         <span style={{ marginLeft: '400px' }}>${costoMaterial.toLocaleString('es-CL')}</span>
                         </div>
                        <div className="flex justify-between border-b border-black pb-2 mb-2 mr-20 text-lg">Instalacion 
                        <span style={{ marginLeft: '400px' }}>${costoManoObra.toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between border-b border-black pb-2 mb-2 mr-20 text-lg">Gestion Financiamiento 
                        <span style={{ marginLeft: '400px' }}>${gestionFinanciamineto.toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between border-b border-black pb-2 mb-2 mr-20 text-lg">*Financiamiento 70% 
                        <span style={{ marginLeft: '400px' }}>${descuento.toLocaleString('es-CL')}</span>
                        </div>
                        <div className="flex justify-between mr-20 text-lg">Tu pagas 
                        <span style={{ marginLeft: '400px' }}>${tuPagas.toLocaleString('es-CL')}</span>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Cotizacion;



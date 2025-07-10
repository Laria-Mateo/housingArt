import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <img
        src={images[currentImageIndex]}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover z-10 block"
        draggable="false"
        style={{ pointerEvents: 'none' }}
      />
      <div className="absolute inset-0 bg-black/60 z-20"></div>
      <div className="relative z-30 text-center text-white px-4 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Tu Casa en
          <span className="text-amber-400"> 2 Meses</span>
        </h1>
        <div className="mb-8">
          <span className="block text-2xl md:text-3xl font-bold text-white drop-shadow-2xl bg-black/40 rounded-lg px-4 py-2 mx-auto max-w-fit">
            Únete a las más de 500 familias que ya tienen su casa soñada
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#modelos"
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Ver Modelos
          </a>
          <a
            href="#contacto"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero 
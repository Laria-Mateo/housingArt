import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'h-14 bg-amber-400 shadow-lg' : 'h-20 bg-amber-400'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex justify-between items-center w-full h-full">
          <button onClick={() => scrollToSection('inicio')} className={`flex items-center space-x-2 focus:outline-none transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
            <div className={`bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${isScrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
              <span className="text-amber-400 font-bold">H</span>
            </div>
            <span className="text-gray-800 font-bold tracking-wide transition-all duration-300" style={{fontSize: isScrolled ? '1.1rem' : '1.4rem'}}>HousingArt</span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            {['inicio','nosotros','modelos','proceso','ensamblaje','testimonios'].map((sec, i) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className={`text-gray-800 font-semibold transition-all duration-300 hover:text-amber-700 ${isScrolled ? 'text-base' : 'text-lg'}`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
            ))}
            <button onClick={() => scrollToSection('contacto')} className={`bg-gray-800 text-amber-400 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700 hover:scale-105 ${isScrolled ? 'text-base' : 'text-lg'}`}>Contacto</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-amber-700 focus:outline-none focus:text-amber-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-amber-400 shadow-lg rounded-b-lg z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['inicio','nosotros','modelos','proceso','ensamblaje','testimonios'].map((sec, i) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:text-amber-700 hover:bg-gray-800 transition-colors duration-200"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold bg-gray-800 text-amber-400 hover:bg-gray-700 transition-colors duration-200">Contacto</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar 
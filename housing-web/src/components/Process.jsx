const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Agendamos una reunión para conocer tus necesidades y presupuesto.",
      icon: "📋"
    },
    {
      number: "02",
      title: "Diseño y Cotización",
      description: "Desarrollamos el diseño personalizado y te entregamos la cotización detallada.",
      icon: "✏️"
    },
    {
      number: "03",
      title: "Firma de Contrato",
      description: "Firmamos el contrato con todas las especificaciones y garantías.",
      icon: "📝"
    },
    {
      number: "04",
      title: "Construcción",
      description: "Iniciamos la construcción en nuestro taller especializado.",
      icon: "🏗️"
    },
    {
      number: "05",
      title: "Ensamblaje",
      description: "Transportamos y ensamblamos tu casa en el terreno.",
      icon: "🔧"
    },
    {
      number: "06",
      title: "Entrega",
      description: "Te entregamos las llaves de tu nueva casa lista para habitar.",
      icon: "🏠"
    }
  ]

  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente que te llevará desde la idea hasta tu casa terminada en solo 2 meses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-3xl font-bold text-amber-500 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-amber-300 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-amber-500 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
            <p className="text-lg mb-6">
              Agenda tu consulta gratuita y descubre cómo podemos hacer realidad tu sueño de casa propia.
            </p>
            <button className="bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process 
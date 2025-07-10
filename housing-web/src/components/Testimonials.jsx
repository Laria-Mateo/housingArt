import mateoImg from '../assets/mateo.webp';
import saraImg from '../assets/sara.webp';
import francoImg from '../assets/franco.webp';

const testimonials = [
  {
    name: 'Mateo',
    image: mateoImg,
    text: '¡El proceso fue rápido y transparente! Mi casa quedó increíble y la atención fue excelente. Recomiendo HousingArt a todos.'
  },
  {
    name: 'Sara',
    image: saraImg,
    text: 'Me sorprendió la calidad y el diseño. Cumplieron con los plazos y el equipo fue muy profesional.'
  },
  {
    name: 'Franco',
    image: francoImg,
    text: 'La mejor decisión que pude tomar. Todo el proceso fue claro y la casa superó mis expectativas.'
  }
];

const Testimonials = () => (
  <section id="testimonios" className="py-20 bg-gray-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
            <img src={t.image} alt={t.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-amber-400 shadow" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.name}</h3>
            <p className="text-gray-700">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 
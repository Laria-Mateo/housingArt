import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_c2suk63';
const TEMPLATE_ID = 'template_qd1ttvj';
const USER_ID = 'nNmwK3ZChfBIwsQ84';

const selectBase = "w-full px-4 py-2 border-2 border-amber-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white text-gray-900 appearance-none shadow-md transition focus:border-amber-400 focus:ring-amber-400 pr-10";
const caretStyle = {
  background: 'none',
  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' fill=\'none\' stroke=\'%23fbbf24\' stroke-width=\'2\' viewBox=\'0 0 24 24\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.75rem center',
  backgroundSize: '1.5em 1.5em',
};

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSent(false);
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const prefer = formData.get('prefer');
    const model = formData.get('model');
    const message = formData.get('message');
    const time = new Date().toLocaleString();
    const templateParams = {
      name,
      email,
      phone,
      prefer,
      model,
      message,
      time,
      title: 'Consulta desde la web',
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
      }, () => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contacto</h2>
        <div className="bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-[1fr_16px_1fr] gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 text-white rounded-full p-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Dirección</div>
                <div className="text-gray-700 text-sm">Crisologo Larralde (sin número por el momento) entre Dante Quinterno y Facundo Cabral, Paraná Entre Ríos Argentina</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 text-white rounded-full p-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Teléfono</div>
                <a href="tel:+543434500100" className="text-gray-700 text-sm underline hover:text-amber-400">+54 343 4500100</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-amber-400 text-white rounded-full p-3 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <a href="mailto:housingart@email.com" className="text-gray-700 text-sm underline hover:text-amber-400">housingart@email.com</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-1 h-64 bg-amber-400 rounded-full opacity-60"></div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre y Apellido</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tu nombre y apellido" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tu email" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Teléfono</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tu teléfono" required />
              </div>
              <div>
                <label htmlFor="prefer" className="block text-gray-700 font-bold mb-2">Método de contacto</label>
                <select id="prefer" name="prefer" className={selectBase} style={caretStyle} required defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="WhatsApp">💬 WhatsApp</option>
                  <option value="Llamada">📞 Llamada</option>
                  <option value="Email">✉️ Email</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="model" className="block text-gray-700 font-bold mb-2">Tipo de casa</label>
              <select id="model" name="model" className={selectBase} style={caretStyle} required defaultValue="">
                <option value="" disabled>Selecciona un modelo</option>
                <option value="Clásico">🏡 Modelo Clásico</option>
                <option value="Moderno">🏠 Modelo Moderno</option>
                <option value="Premium">🏰 Modelo Premium</option>
                <option value="Personalizado">✨ Personalizado</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" placeholder="Tu mensaje" required />
            </div>
            <button type="submit" disabled={loading} className="w-full bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            {sent && <div className="text-green-600 font-semibold text-center">¡Mensaje enviado correctamente!</div>}
            {error && <div className="text-red-600 font-semibold text-center">Ocurrió un error. Intenta nuevamente.</div>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 
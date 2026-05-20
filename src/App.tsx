import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Instagram, 
  Send, 
  ChevronRight,
  Download,
  Building2,
  Users,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

/* 
  ==========================================================================
  CONFIGURACIÓN GENERAL - CAMBIA LOS TEXTOS, IMÁGENES Y LINKS AQUÍ
  ==========================================================================
*/

const CONFIGURACION = {
  nombreEmpresa: "Valinotti Muebles",
  
  // SECCIÓN INICIO (Hero)
  inicio: {
    titulo: "Fabricantes de Mobiliario Escolar y de Oficina",
    subtitulo: "Más de 30 años transformando espacios con calidad industrial y diseño argentino. Soluciones duraderas para instituciones y empresas.",
    imagenFondo: "/imagen_hero.jpg",
  },

  // SECCIÓN CATÁLOGOS (3 Tarjetas Cuadradas)
  // Los PDFs deben estar en la carpeta /public de tu proyecto
  catalogos: [
    {
      id: 1,
      titulo: "Muebles Escolares",
      pdfLink: "/catalogo-escolar-valinotti.pdf",
      imagen: "/imagen_catalogo-muebles.png"
    },
    {
      id: 2,
      titulo: "Muebles de Oficina",
      pdfLink: "/catalogo-oficina-valinotti.pdf",
      imagen: "/imagen_catalogo-oficina.png"
    },
    {
      id: 3,
      titulo: "Muebles de Jardín",
      pdfLink: "/catalogo-jardin-valinotti.pdf",
      imagen: "/imagen_catalogo-jardin.png"
    }
  ],

  // SECCIÓN CLIENTES
  clientes: {
    titulo: "Confían en nuestra fábrica",
    descripcion: "Fabricamos y equipamos de forma integral a: Escuelas, Jardines de Infantes, Colegios Secundarios, PYMES, Hospitales, Universidades y Empresas de todos los rubros en todo el país.",
  },

  // SECCIÓN CONTACTO
  contacto: {
    whatsappLink: "https://api.whatsapp.com/send?phone=5493572401095&text=Hola!%20Deseo%20solicitar%20un%20presupuesto.",
    telefonoDisplay: "54 9 3572 40-1095",
    direccion: "Mendoza S/n, X5974 Laguna Larga, Córdoba.",
    redes: {
      instagram: "https://www.instagram.com/valinotti.muebles",
    }
  }
};

/* 
  ==========================================================================
  ESTRUCTURA DE LA PÁGINA (COMPONENTES)
  ==========================================================================
*/

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Formulario conectado a Formspree
  const [state, handleSubmit] = useForm('mykvzyzz');

  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white bg-brand-bg">
      
      {/* NAVEGACIÓN (Header) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b-2 border-brand-earth/20">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center text-white font-bold">V</div>
            <span className="text-xl font-black text-brand-dark tracking-tighter uppercase font-serif">
              {CONFIGURACION.nombreEmpresa}
            </span>
          </div>

          {/* Menú Escritorio */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">Inicio</a>
            <a href="#catalogos" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">Catálogos</a>
            <a href="#clientes" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">Clientes</a>
            <a href="#contacto" className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">Contacto</a>
            <a 
              href={CONFIGURACION.contacto.whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="bg-brand-accent text-white px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest shadow-industrial hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
            >
              WhatsApp
            </a>
          </div>

          {/* Botón Menú Móvil */}
          <button 
            className="md:hidden text-brand-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menú Móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-16 left-0 right-0 bg-white border-b-2 border-brand-earth p-6 md:hidden flex flex-col gap-4 text-center overflow-hidden"
            >
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-bold uppercase tracking-widest">Inicio</a>
              <a href="#catalogos" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-bold uppercase tracking-widest">Catálogos</a>
              <a href="#clientes" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-bold uppercase tracking-widest">Clientes</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="py-2 text-sm font-bold uppercase tracking-widest">Contacto</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* SECCIÓN INICIO - HERO */}
        <section id="inicio" className="relative h-screen flex items-center pt-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={CONFIGURACION.inicio.imagenFondo} 
              alt="Fábrica Valinotti" 
              className="w-full h-full object-cover brightness-[0.4]"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6 uppercase tracking-tight">
                {CONFIGURACION.inicio.titulo}
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
                {CONFIGURACION.inicio.subtitulo}
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <a 
                  href="#catalogos" 
                  className="bg-brand-accent text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-industrial hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  Ver Catálogos <ChevronRight size={20} />
                </a>
                <a 
                  href={CONFIGURACION.contacto.whatsappLink}
                  target="_blank"
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  Pedir Presupuesto
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN CATÁLOGOS - CUADRÍCULA DE 3 TARJETAS CUADRADAS */}
        <section id="catalogos" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-brand-accent mb-3 italic">Línea de Fabricación</h2>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 uppercase tracking-tighter">Nuestros Catálogos</h2>
            <div className="w-24 h-1 bg-brand-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CONFIGURACION.catalogos.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group aspect-square overflow-hidden rounded-lg border-2 border-brand-earth/20 industrial-shadow"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.imagen} 
                    alt={item.titulo} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.7]"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 uppercase tracking-tighter">
                    {item.titulo}
                  </h3>
                  <a 
                    href={item.pdfLink}
                    download
                    className="bg-brand-accent text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center gap-3 shadow-industrial hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                  >
                    <Download size={20} /> Descargar PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN CLIENTES */}
        <section id="clientes" className="py-24 bg-brand-dark text-brand-bg">
          <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-4">Trayectoria Industrial</h2>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 uppercase leading-tight">
                {CONFIGURACION.clientes.titulo}
              </h2>
              <p className="text-lg text-brand-bg/70 leading-relaxed mb-10">
                {CONFIGURACION.clientes.descripcion}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Building2, label: "Educación" },
                  { icon: Users, label: "Corporativo" },
                  { icon: Phone, label: "Salud" },
                  { icon: Instagram, label: "Pymes" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-sm border border-white/10">
                    <item.icon className="text-brand-accent" size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {/* CAMBIA ESTAS IMÁGENES DE MUESTRA DE TRABAJOS REALIZADOS */}
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-brand-accent/20">
                <img src="/imagen_clientes-1.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-brand-accent/20 mt-8">
                <img src="/imagenes_clientes-2.jpg" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto" className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-4 italic">Presupuestos Online</h2>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tighter">Hablemos de tu proyecto</h2>
              
              <div className="bg-white border-2 border-brand-earth/20 rounded-lg p-10 industrial-shadow mb-10">
                <h4 className="text-xl font-serif font-bold mb-6 text-brand-dark flex items-center gap-2">
                  <MessageCircle className="text-brand-accent" /> Canal Directo
                </h4>
                <p className="text-brand-earth mb-8 text-sm leading-relaxed">
                  Solicitá un presupuesto detallado o asesoramiento técnico a través de nuestro WhatsApp oficial. Estamos listos para equipar tu espacio.
                </p>
                <a 
                  href={CONFIGURACION.contacto.whatsappLink}
                  target="_blank"
                  className="w-full bg-brand-accent text-white py-5 rounded-sm font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 animate-pulse shadow-industrial"
                >
                  Solicitar Presupuesto vía WhatsApp
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm font-medium">{CONFIGURACION.contacto.direccion}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="text-sm font-medium">{CONFIGURACION.contacto.telefonoDisplay}</span>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-earth p-8 md:p-12 rounded-lg industrial-shadow">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-10 text-brand-accent text-center">Formulario de Consulta</h3>

              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <Send size={28} className="text-green-600" />
                  </div>
                  <p className="font-bold text-lg text-brand-dark">¡Mensaje enviado!</p>
                  <p className="text-sm text-brand-earth">Nos pondremos en contacto a la brevedad.</p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Nombre Completo</label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      required
                      className="w-full bg-brand-bg border-none px-4 py-4 rounded-sm focus:ring-2 focus:ring-brand-accent outline-none font-medium transition-all"
                    />
                    <ValidationError field="nombre" prefix="Nombre" errors={state.errors} className="text-xs text-red-500 font-bold" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Correo Electrónico</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-brand-bg border-none px-4 py-4 rounded-sm focus:ring-2 focus:ring-brand-accent outline-none font-medium transition-all"
                    />
                    <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs text-red-500 font-bold" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Mensaje o Consulta</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      required
                      className="w-full bg-brand-bg border-none px-4 py-4 rounded-sm focus:ring-2 focus:ring-brand-accent outline-none font-medium transition-all resize-none"
                    ></textarea>
                    <ValidationError field="mensaje" prefix="Mensaje" errors={state.errors} className="text-xs text-red-500 font-bold" />
                  </div>

                  <ValidationError errors={state.errors} className="text-xs text-red-500 font-bold text-center" />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-brand-dark text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-accent shadow-industrial hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0"
                  >
                    {state.submitting ? 'Enviando...' : <>Enviar Mensaje <Send size={18} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER - PIE DE PÁGINA */}
      <footer className="bg-white py-16 border-t-4 border-brand-dark">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-serif font-black text-brand-accent mb-2 uppercase tracking-tighter">
              {CONFIGURACION.nombreEmpresa}
            </h2>
            <p className="text-[10px] text-brand-dark/60 font-bold uppercase tracking-widest leading-loose">
              Muebles de Calidad Industrial <br />
              Hechos en Laguna Larga, Córdoba <br />
              © {new Date().getFullYear()} - Argentina
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href={CONFIGURACION.contacto.redes.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-brand-dark rounded-sm flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all">
              <Instagram size={22} />
            </a>
            <a href={CONFIGURACION.contacto.whatsappLink} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-brand-dark rounded-sm flex items-center justify-center hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all">
              <MessageCircle size={22} />
            </a>
          </div>

          <div className="text-center md:text-right uppercase tracking-[0.2em] font-bold text-[10px] text-brand-dark/50">
            <p className="mb-2">📍 {CONFIGURACION.contacto.direccion}</p>
            <p>📞 {CONFIGURACION.contacto.telefonoDisplay}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

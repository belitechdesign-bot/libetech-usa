import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Brush, Building2, Check, ChevronRight, Gem, Languages, Layers3, Megaphone, MessageCircle, Sparkles, Star } from 'lucide-react';
import './styles.css';

const img = (name) => `/assets/images/${name}`;
const WA_NUMBER = '10000000000';

const heroSlides = [
  img('aol-brand-system.png'),
  img('seguridad-brand-system.png'),
  img('volthor-brand-system.png'),
  img('wynn-dentistry-system.png'),
  img('pacos-brand-system.png'),
];

const t = {
  en: {
    nav: { work: 'Work', systems: 'Systems', services: 'Services', pricing: 'Pricing', contact: 'Contact', whatsapp: 'WhatsApp' },
    langLabel: 'Español',
    hero: {
      eyebrow: 'Branding Studio for Hispanic Businesses in America',
      title: 'Branding that makes small businesses look like industry leaders.',
      text: 'We build premium logos, brand systems, moodboards and advertising visuals designed to create trust, attention and higher perceived value.',
      primary: 'View Portfolio',
      secondary: 'Start a Project',
      badge: 'Premium visual systems',
      stats: [ ['Branding','Logo systems'], ['Advertising','Meta creatives'], ['USA','Spanish market'] ]
    },
    work: {
      label: 'Featured Work',
      title: 'Not just logos. Complete brand presence.',
      text: 'Each project is presented as a commercial identity: logo, applications, moodboard, print and digital presence.'
    },
    systems: {
      label: 'Brand Systems',
      title: 'From local business to premium brand.',
      text: 'The strongest sales argument is not the logo alone. It is how the brand looks on signs, uniforms, documents, ads and social media.',
      rowText: 'Strategic composition, premium textures, typography hierarchy and real-world applications that make the business feel established and trustworthy.'
    },
    services: {
      label: 'Services',
      title: 'Built for businesses that need to look serious fast.',
      items: [
        ['Logo Design','Distinctive marks with franchise-style impact and professional delivery files.'],
        ['Brand Identity','Moodboards, color systems, typography, icons and visual direction.'],
        ['Advertising Design','Flyers, Meta creatives, covers and promotional graphics that stop the scroll.'],
        ['Business Collateral','Menus, business cards, letterheads, folders, uniforms and signage concepts.']
      ]
    },
    pricing: {
      label: 'Investment',
      title: 'Premium packages built to increase perceived value.',
      text: 'Choose the right level for your business. Every package is designed to make Hispanic-owned businesses in the United States look more professional, trustworthy and ready to grow.',
      note: 'Recommended first test for USA market: publish Starter at $149 and use Business Identity as the main sales anchor.',
      plans: [
        {name:'Starter Brand',price:'$149',tag:'Launch package',desc:'Perfect for new businesses that need a professional first impression.',features:['3 premium logo concepts','2 revision rounds','Main logo + light/dark versions','Transparent PNG + JPG','Vector SVG/PDF delivery','Ready for social media'],cta:'Start Starter'},
        {name:'Business Identity',price:'$349',tag:'Most Popular',featured:true,desc:'A stronger identity system for businesses that want to look established.',features:['5 premium logo concepts','Professional brand moodboard','Color palette + typography system','Profile image + Facebook cover','Basic brand guide','Final files for print and digital'],cta:'Start Business'},
        {name:'Premium Brand System',price:'$699',tag:'Best Value',desc:'Complete visual transformation for brands that need authority and trust.',features:['Full creative direction','Premium brand system','Business card + letterhead','2 professional advertising flyers','Premium mockup presentation','Complete visual identity guide'],cta:'Start Premium'}
      ]
    },
    process: { label:'Our Process', title:'Clear, fast and professional.', steps:['Creative direction','Premium concepts','Brand presentation','Final delivery'] },
    contact: {
      eyebrow:'Ready to elevate your business?',
      title:'Let’s build a brand that makes people trust you before they even call.',
      text:'Replace the WhatsApp link in the code with your USA business number. Recommended initial offer: Professional Brand Identity Package from $99 USD.',
      cta:'Start on WhatsApp'
    },
    footer: 'Premium Branding Studio'
  },
  es: {
    nav: { work: 'Portafolio', systems: 'Sistemas', services: 'Servicios', pricing: 'Precios', contact: 'Contacto', whatsapp: 'WhatsApp' },
    langLabel: 'English',
    hero: {
      eyebrow: 'Estudio de branding para negocios hispanos en Estados Unidos',
      title: 'Branding que hace que negocios pequeños se vean como líderes de su industria.',
      text: 'Creamos logos premium, sistemas de marca, moodboards y diseños publicitarios pensados para generar confianza, atención y mayor valor percibido.',
      primary: 'Ver Portafolio',
      secondary: 'Iniciar Proyecto',
      badge: 'Sistemas visuales premium',
      stats: [ ['Branding','Sistemas de logo'], ['Publicidad','Creativos para Meta'], ['USA','Mercado hispano'] ]
    },
    work: {
      label: 'Trabajos Destacados',
      title: 'No solo logos. Presencia de marca completa.',
      text: 'Cada proyecto se presenta como una identidad comercial completa: logo, aplicaciones, moodboard, material impreso y presencia digital.'
    },
    systems: {
      label: 'Sistemas de Marca',
      title: 'De negocio local a marca premium.',
      text: 'El argumento más fuerte no es solo el logo. Es cómo la marca luce en anuncios, uniformes, documentos, publicidad y redes sociales.',
      rowText: 'Composición estratégica, texturas premium, jerarquía tipográfica y aplicaciones reales que hacen que el negocio se perciba establecido, profesional y confiable.'
    },
    services: {
      label: 'Servicios',
      title: 'Creado para negocios que necesitan verse profesionales rápido.',
      items: [
        ['Diseño de Logo','Marcas distintivas con impacto estilo franquicia y archivos profesionales de entrega.'],
        ['Identidad de Marca','Moodboards, paletas de color, tipografías, iconos y dirección visual.'],
        ['Diseño Publicitario','Flyers, creativos para Meta, portadas y gráficos promocionales que detienen el scroll.'],
        ['Material Corporativo','Menús, tarjetas, hojas membretadas, folders, uniformes y conceptos de rotulación.']
      ]
    },
    pricing: {
      label: 'Inversión',
      title: 'Paquetes premium creados para elevar el valor percibido.',
      text: 'Elige el nivel correcto para tu negocio. Cada paquete está diseñado para que negocios hispanos en Estados Unidos se vean más profesionales, confiables y listos para crecer.',
      note: 'Prueba recomendada para mercado USA: publicar Starter en $149 y usar Business Identity como paquete principal de venta.',
      plans: [
        {name:'Starter Brand',price:'$149',tag:'Paquete inicial',desc:'Ideal para negocios nuevos que necesitan una primera impresión profesional.',features:['3 conceptos premium de logo','2 rondas de cambios','Logo principal + versiones claro/oscuro','PNG transparente + JPG','Entrega vectorial SVG/PDF','Listo para redes sociales'],cta:'Iniciar Starter'},
        {name:'Business Identity',price:'$349',tag:'Más Popular',featured:true,desc:'Un sistema de identidad más fuerte para negocios que quieren verse establecidos.',features:['5 conceptos premium de logo','Moodboard profesional de marca','Paleta de color + sistema tipográfico','Imagen de perfil + portada de Facebook','Manual básico de marca','Archivos finales para impresión y digital'],cta:'Iniciar Business'},
        {name:'Premium Brand System',price:'$699',tag:'Mejor Valor',desc:'Transformación visual completa para marcas que necesitan autoridad y confianza.',features:['Dirección creativa completa','Sistema de marca premium','Tarjeta + hoja membretada','2 flyers publicitarios profesionales','Presentación premium en mockups','Guía completa de identidad visual'],cta:'Iniciar Premium'}
      ]
    },
    process: { label:'Nuestro Proceso', title:'Claro, rápido y profesional.', steps:['Dirección creativa','Conceptos premium','Presentación de marca','Entrega final'] },
    contact: {
      eyebrow:'¿Listo para elevar tu negocio?',
      title:'Construyamos una marca que genere confianza antes de que el cliente te llame.',
      text:'Reemplaza el enlace de WhatsApp en el código con tu número comercial de USA. Oferta inicial recomendada: Paquete Profesional de Identidad de Marca desde $99 USD.',
      cta:'Iniciar por WhatsApp'
    },
    footer: 'Estudio de Branding Premium'
  }
};

const projects = [
  { title: 'AOL Asistencia Legal', category: 'Legal', img: img('aol-brand-system.png'), accent: {en:'Authority, gold, trust', es:'Autoridad, oro, confianza'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Seguridad 2000', category: 'Services', img: img('seguridad-brand-system.png'), accent: {en:'Protection, strength, premium', es:'Protección, fuerza, premium'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Volthor', category: 'Construction', img: img('volthor-brand-system.png'), accent: {en:'Energy, speed, tech', es:'Energía, velocidad, tecnología'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Wynn Pleasant Dentistry', category: 'Medical', img: img('wynn-dentistry-system.png'), accent: {en:'Clean, trust, care', es:'Limpieza, confianza, cuidado'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Paco’s Comida China', category: 'Restaurant', img: img('pacos-brand-system.png'), accent: {en:'Oriental, vibrant, elegant', es:'Oriental, vibrante, elegante'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Pedraza Instalaciones', category: 'Construction', img: img('pedraza-brand-system.png'), accent: {en:'Service, utility, local power', es:'Servicio, utilidad, fuerza local'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Dra. María Elena', category: 'Medical', img: img('maria-elena-system.png'), accent: {en:'Beauty, wellness, soft premium', es:'Belleza, bienestar, premium suave'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Magia en Madera', category: 'Retail', img: img('magia-madera-system.png'), accent: {en:'Craft, texture, warmth', es:'Artesanía, textura, calidez'}, type: {en:'Brand System', es:'Sistema de Marca'} },
  { title: 'Ice Water', category: 'Product', img: img('ice-water-system.png'), accent: {en:'Fresh, retail, product identity', es:'Frescura, retail, identidad de producto'}, type: {en:'Mockup System', es:'Sistema de Mockups'} },
  { title: 'El Cuñadito', category: 'Restaurant', img: img('cunadito-menu.png'), accent: {en:'Menu design, food brand', es:'Diseño de menú, marca gastronómica'}, type: {en:'Print System', es:'Sistema Impreso'} },
];

const logoWall = [
  'mi-ciudad.png','aol-gold-logo.png','jonny-blazex.png','dental-moreno.png','el-cunadito-logo.png','seguridad-logo.png','el-dorian-logo.png','pacos-logo.png','fa-fighter.png','libetech-logo.png'
].map(img);

const categories = ['All', 'Legal', 'Medical', 'Restaurant', 'Construction', 'Services', 'Product', 'Retail'];
const catLabels = {
  en: { All:'All', Legal:'Legal', Medical:'Medical', Restaurant:'Restaurant', Construction:'Construction', Services:'Services', Product:'Product', Retail:'Retail' },
  es: { All:'Todo', Legal:'Legal', Medical:'Médico', Restaurant:'Restaurante', Construction:'Construcción', Services:'Servicios', Product:'Producto', Retail:'Retail' }
};

function Header({ lang, setLang, copy }) {
  return <header className="nav">
    <a className="brand" href="#top"><img src={img('libetech-logo.png')} alt="Libetech USA logo"/><span>LIBETECH USA</span></a>
    <nav>
      <a href="#work">{copy.nav.work}</a><a href="#systems">{copy.nav.systems}</a><a href="#services">{copy.nav.services}</a><a href="#pricing">{copy.nav.pricing}</a><a href="#contact">{copy.nav.contact}</a>
    </nav>
    <div className="navActions">
      <button className="langToggle" onClick={() => setLang(lang === 'en' ? 'es' : 'en')} aria-label="Change language"><Languages size={15}/>{copy.langLabel}</button>
      <a className="navCta" href={`https://wa.me/${WA_NUMBER}`} target="_blank">{copy.nav.whatsapp} <ArrowUpRight size={16}/></a>
    </div>
  </header>
}

function Hero({ copy }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, .4], [0, 120]);
  return <section id="top" className="hero">
    <motion.div className="heroGlow" style={{ y }} />
    <div className="heroGrid">
      <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="heroCopy">
        <div className="eyebrow"><Sparkles size={16}/> {copy.hero.eyebrow}</div>
        <h1>{copy.hero.title}</h1>
        <p>{copy.hero.text}</p>
        <div className="heroActions">
          <a className="primary" href="#work">{copy.hero.primary} <ChevronRight size={18}/></a>
          <a className="secondary" href="#contact">{copy.hero.secondary}</a>
        </div>
        <div className="stats">
          {copy.hero.stats.map(([strong,sub]) => <span key={strong}><b>{strong}</b> {sub}</span>)}
        </div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}} className="heroShowcase">
        {heroSlides.map((s,i)=><motion.img key={s} src={s} alt="Featured Libetech project" initial={{opacity:0}} animate={{opacity:i===0?1:[0,1,0]}} transition={i===0?{duration:0}:{duration:10,repeat:Infinity,delay:i*2.1}} />)}
        <div className="heroBadge"><Gem size={18}/> {copy.hero.badge}</div>
      </motion.div>
    </div>
  </section>
}

function MarqueeLogos(){
 return <section className="logoMarquee" aria-label="Logo showcase">
  <div className="marqueeTrack">{[...logoWall,...logoWall].map((src,i)=><div className="logoTile" key={i}><img src={src} alt="Libetech logo work"/></div>)}</div>
 </section>
}

function Work({ lang, copy }){
 const [filter,setFilter]=useState('All');
 const filtered=useMemo(()=>filter==='All'?projects:projects.filter(p=>p.category===filter),[filter]);
 return <section id="work" className="section work">
  <div className="sectionHead"><span>{copy.work.label}</span><h2>{copy.work.title}</h2><p>{copy.work.text}</p></div>
  <div className="filters">{categories.map(c=><button className={filter===c?'active':''} key={c} onClick={()=>setFilter(c)}>{catLabels[lang][c]}</button>)}</div>
  <div className="projectGrid">{filtered.map((p,i)=><motion.article layout initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="projectCard" key={p.title}>
    <div className="projectImg"><img src={p.img} alt={p.title}/><div className="shine"/></div>
    <div className="projectInfo"><div><span>{catLabels[lang][p.category] || p.category} · {p.type[lang]}</span><h3>{p.title}</h3><p>{p.accent[lang]}</p></div><ArrowUpRight/></div>
  </motion.article>)}</div>
 </section>
}

function Systems({ lang, copy }){
 const systems = projects.slice(0,5);
 return <section id="systems" className="section systems">
   <div className="sectionHead narrow"><span>{copy.systems.label}</span><h2>{copy.systems.title}</h2><p>{copy.systems.text}</p></div>
   <div className="systemStack">{systems.map((p,i)=><motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-100px'}} transition={{duration:.7}} className="systemRow" key={p.title}>
    <div className="systemNumber">0{i+1}</div><img src={p.img} alt={p.title}/><div className="systemText"><span>{catLabels[lang][p.category] || p.category}</span><h3>{p.title}</h3><p>{copy.systems.rowText}</p></div>
   </motion.div>)}</div>
 </section>
}

function Services({ copy }){
 const icons=[Brush,Layers3,Megaphone,Building2];
 return <section id="services" className="section services">
  <div className="sectionHead"><span>{copy.services.label}</span><h2>{copy.services.title}</h2></div>
  <div className="serviceGrid">{copy.services.items.map(([title,txt], index)=>{ const Icon=icons[index]; return <div className="serviceCard" key={title}><Icon/><h3>{title}</h3><p>{txt}</p></div>})}</div>
 </section>
}

function Pricing({ copy }){
 return <section id="pricing" className="section pricing">
  <div className="sectionHead narrow"><span>{copy.pricing.label}</span><h2>{copy.pricing.title}</h2><p>{copy.pricing.text}</p></div>
  <div className="pricingGrid">{copy.pricing.plans.map((plan,i)=><motion.article key={plan.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.08}} className={`priceCard ${plan.featured?'featured':''}`}>
    <div className="priceTop">
      <div><span className="priceTag">{plan.featured?<Star size={13} fill="currentColor"/>:null}{plan.tag}</span><h3>{plan.name}</h3></div>
      <div className="price">{plan.price}<small>USD</small></div>
    </div>
    <p>{plan.desc}</p>
    <ul>{plan.features.map(f=><li key={f}><Check size={17}/><span>{f}</span></li>)}</ul>
    <a className="priceCta" href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi Libetech USA, I want information about the '+plan.name+' package.')}`} target="_blank">{plan.cta}<ArrowUpRight size={16}/></a>
  </motion.article>)}</div>
  <div className="pricingNote"><BadgeCheck size={18}/><span>{copy.pricing.note}</span></div>
 </section>
}

function Process({ copy }){
 return <section className="section process">
  <div className="processPanel">
    <div><span className="mini">{copy.process.label}</span><h2>{copy.process.title}</h2></div>
    {copy.process.steps.map((s,i)=><div className="step" key={s}><b>{String(i+1).padStart(2,'0')}</b><span>{s}</span></div>)}
  </div>
 </section>
}

function Contact({ copy }){
 return <section id="contact" className="contact">
  <div className="contactInner">
    <div className="eyebrow"><BadgeCheck size={16}/> {copy.contact.eyebrow}</div>
    <h2>{copy.contact.title}</h2>
    <p>{copy.contact.text}</p>
    <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" className="whatsapp"><MessageCircle/> {copy.contact.cta}</a>
  </div>
 </section>
}

function App(){
  const [lang,setLang]=useState(() => localStorage.getItem('libetech-lang') || 'en');
  const copy = t[lang];
  const changeLang = (next) => { localStorage.setItem('libetech-lang', next); setLang(next); document.documentElement.lang = next; };
  return <><Header lang={lang} setLang={changeLang} copy={copy}/><Hero copy={copy}/><MarqueeLogos/><Work lang={lang} copy={copy}/><Systems lang={lang} copy={copy}/><Services copy={copy}/><Pricing copy={copy}/><Process copy={copy}/><Contact copy={copy}/><footer>© {new Date().getFullYear()} LIBETECH USA — {copy.footer}</footer></>
}

createRoot(document.getElementById('root')).render(<App/>);

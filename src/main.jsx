import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, Brush, Building2, Check, ChevronRight, Gem, Layers3, Megaphone, MessageCircle, Sparkles, Star } from 'lucide-react';
import './styles.css';

const img = (name) => `/assets/images/${name}`;

const heroSlides = [
  img('aol-brand-system.png'),
  img('seguridad-brand-system.png'),
  img('volthor-brand-system.png'),
  img('wynn-dentistry-system.png'),
  img('pacos-brand-system.png'),
];

const projects = [
  { title: 'AOL Asistencia Legal', category: 'Legal', img: img('aol-brand-system.png'), accent: 'Authority, gold, trust', type: 'Brand System' },
  { title: 'Seguridad 2000', category: 'Services', img: img('seguridad-brand-system.png'), accent: 'Protection, strength, premium', type: 'Brand System' },
  { title: 'Volthor', category: 'Construction', img: img('volthor-brand-system.png'), accent: 'Energy, speed, tech', type: 'Brand System' },
  { title: 'Wynn Pleasant Dentistry', category: 'Medical', img: img('wynn-dentistry-system.png'), accent: 'Clean, trust, care', type: 'Brand System' },
  { title: 'Paco’s Comida China', category: 'Restaurant', img: img('pacos-brand-system.png'), accent: 'Oriental, vibrant, elegant', type: 'Brand System' },
  { title: 'Pedraza Instalaciones', category: 'Construction', img: img('pedraza-brand-system.png'), accent: 'Service, utility, local power', type: 'Brand System' },
  { title: 'Dra. María Elena', category: 'Medical', img: img('maria-elena-system.png'), accent: 'Beauty, wellness, soft premium', type: 'Brand System' },
  { title: 'Magia en Madera', category: 'Retail', img: img('magia-madera-system.png'), accent: 'Craft, texture, warmth', type: 'Brand System' },
  { title: 'Ice Water', category: 'Product', img: img('ice-water-system.png'), accent: 'Fresh, retail, product identity', type: 'Mockup System' },
  { title: 'El Cuñadito', category: 'Restaurant', img: img('cunadito-menu.png'), accent: 'Menu design, food brand', type: 'Print System' },
];

const logoWall = [
  'mi-ciudad.png','aol-gold-logo.png','jonny-blazex.png','dental-moreno.png','el-cunadito-logo.png','seguridad-logo.png','el-dorian-logo.png','pacos-logo.png','fa-fighter.png','libetech-logo.png'
].map(img);

const categories = ['All', 'Legal', 'Medical', 'Restaurant', 'Construction', 'Services', 'Product', 'Retail'];

function Header() {
  return <header className="nav">
    <a className="brand" href="#top"><img src={img('libetech-logo.png')} alt="Libetech USA logo"/><span>LIBETECH USA</span></a>
    <nav>
      <a href="#work">Work</a><a href="#systems">Systems</a><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a>
    </nav>
    <a className="navCta" href="https://wa.me/10000000000" target="_blank">WhatsApp <ArrowUpRight size={16}/></a>
  </header>
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, .4], [0, 120]);
  return <section id="top" className="hero">
    <motion.div className="heroGlow" style={{ y }} />
    <div className="heroGrid">
      <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.8}} className="heroCopy">
        <div className="eyebrow"><Sparkles size={16}/> Branding Studio for Hispanic Businesses in America</div>
        <h1>Branding that makes small businesses look like industry leaders.</h1>
        <p>We build premium logos, brand systems, moodboards and advertising visuals designed to create trust, attention and higher perceived value.</p>
        <div className="heroActions">
          <a className="primary" href="#work">View Portfolio <ChevronRight size={18}/></a>
          <a className="secondary" href="#contact">Start a Project</a>
        </div>
        <div className="stats">
          <span><b>Branding</b> Logo systems</span><span><b>Advertising</b> Meta creatives</span><span><b>USA</b> Spanish market</span>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.15}} className="heroShowcase">
        {heroSlides.map((s,i)=><motion.img key={s} src={s} alt="Featured Libetech project" initial={{opacity:0}} animate={{opacity:i===0?1:[0,1,0]}} transition={i===0?{duration:0}:{duration:10,repeat:Infinity,delay:i*2.1}} />)}
        <div className="heroBadge"><Gem size={18}/> Premium visual systems</div>
      </motion.div>
    </div>
  </section>
}

function MarqueeLogos(){
 return <section className="logoMarquee" aria-label="Logo showcase">
  <div className="marqueeTrack">{[...logoWall,...logoWall].map((src,i)=><div className="logoTile" key={i}><img src={src} alt="Libetech logo work"/></div>)}</div>
 </section>
}

function Work(){
 const [filter,setFilter]=useState('All');
 const filtered=useMemo(()=>filter==='All'?projects:projects.filter(p=>p.category===filter),[filter]);
 return <section id="work" className="section work">
  <div className="sectionHead"><span>Featured Work</span><h2>Not just logos. Complete brand presence.</h2><p>Each project is presented as a commercial identity: logo, applications, moodboard, print and digital presence.</p></div>
  <div className="filters">{categories.map(c=><button className={filter===c?'active':''} key={c} onClick={()=>setFilter(c)}>{c}</button>)}</div>
  <div className="projectGrid">{filtered.map((p,i)=><motion.article layout initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.04}} className="projectCard" key={p.title}>
    <div className="projectImg"><img src={p.img} alt={p.title}/><div className="shine"/></div>
    <div className="projectInfo"><div><span>{p.category} · {p.type}</span><h3>{p.title}</h3><p>{p.accent}</p></div><ArrowUpRight/></div>
  </motion.article>)}</div>
 </section>
}

function Systems(){
 const systems = projects.slice(0,5);
 return <section id="systems" className="section systems">
   <div className="sectionHead narrow"><span>Brand Systems</span><h2>From local business to premium brand.</h2><p>The strongest sales argument is not the logo alone. It is how the brand looks on signs, uniforms, documents, ads and social media.</p></div>
   <div className="systemStack">{systems.map((p,i)=><motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-100px'}} transition={{duration:.7}} className="systemRow" key={p.title}>
    <div className="systemNumber">0{i+1}</div><img src={p.img} alt={p.title}/><div className="systemText"><span>{p.category}</span><h3>{p.title}</h3><p>Strategic composition, premium textures, typography hierarchy and real-world applications that make the business feel established and trustworthy.</p></div>
   </motion.div>)}</div>
 </section>
}

function Services(){
 const items=[
  {icon:Brush,title:'Logo Design',txt:'Distinctive marks with franchise-style impact and professional delivery files.'},
  {icon:Layers3,title:'Brand Identity',txt:'Moodboards, color systems, typography, icons and visual direction.'},
  {icon:Megaphone,title:'Advertising Design',txt:'Flyers, Meta creatives, covers and promotional graphics that stop the scroll.'},
  {icon:Building2,title:'Business Collateral',txt:'Menus, business cards, letterheads, folders, uniforms and signage concepts.'},
 ];
 return <section id="services" className="section services">
  <div className="sectionHead"><span>Services</span><h2>Built for businesses that need to look serious fast.</h2></div>
  <div className="serviceGrid">{items.map(({icon:Icon,title,txt})=><div className="serviceCard" key={title}><Icon/><h3>{title}</h3><p>{txt}</p></div>)}</div>
 </section>
}

function Pricing(){
 const plans=[
  {name:'Starter Brand',price:'$149',tag:'Launch package',desc:'Perfect for new businesses that need a professional first impression.',features:['3 premium logo concepts','2 revision rounds','Main logo + light/dark versions','Transparent PNG + JPG','Vector SVG/PDF delivery','Ready for social media'],cta:'Start Starter'},
  {name:'Business Identity',price:'$349',tag:'Most Popular',featured:true,desc:'A stronger identity system for businesses that want to look established.',features:['5 premium logo concepts','Professional brand moodboard','Color palette + typography system','Profile image + Facebook cover','Basic brand guide','Final files for print and digital'],cta:'Start Business'},
  {name:'Premium Brand System',price:'$699',tag:'Best Value',desc:'Complete visual transformation for brands that need authority and trust.',features:['Full creative direction','Premium brand system','Business card + letterhead','2 professional advertising flyers','Premium mockup presentation','Complete visual identity guide'],cta:'Start Premium'}
 ];
 return <section id="pricing" className="section pricing">
  <div className="sectionHead narrow"><span>Investment</span><h2>Premium packages built to increase perceived value.</h2><p>Choose the right level for your business. Every package is designed to make Hispanic-owned businesses in the United States look more professional, trustworthy and ready to grow.</p></div>
  <div className="pricingGrid">{plans.map((plan,i)=><motion.article key={plan.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.55,delay:i*.08}} className={`priceCard ${plan.featured?'featured':''}`}>
    <div className="priceTop">
      <div><span className="priceTag">{plan.featured?<Star size={13} fill="currentColor"/>:null}{plan.tag}</span><h3>{plan.name}</h3></div>
      <div className="price">{plan.price}<small>USD</small></div>
    </div>
    <p>{plan.desc}</p>
    <ul>{plan.features.map(f=><li key={f}><Check size={17}/><span>{f}</span></li>)}</ul>
    <a className="priceCta" href={`https://wa.me/10000000000?text=${encodeURIComponent('Hi Libetech USA, I want information about the '+plan.name+' package.')}`} target="_blank">{plan.cta}<ArrowUpRight size={16}/></a>
  </motion.article>)}</div>
  <div className="pricingNote"><BadgeCheck size={18}/><span>Recommended first test for USA market: publish Starter at $149 and use Business Identity as the main sales anchor.</span></div>
 </section>
}

function Process(){
 return <section className="section process">
  <div className="processPanel">
    <div><span className="mini">Our Process</span><h2>Clear, fast and professional.</h2></div>
    {['Creative direction','Premium concepts','Brand presentation','Final delivery'].map((s,i)=><div className="step" key={s}><b>{String(i+1).padStart(2,'0')}</b><span>{s}</span></div>)}
  </div>
 </section>
}

function Contact(){
 return <section id="contact" className="contact">
  <div className="contactInner">
    <div className="eyebrow"><BadgeCheck size={16}/> Ready to elevate your business?</div>
    <h2>Let’s build a brand that makes people trust you before they even call.</h2>
    <p>Replace the WhatsApp link in the code with your USA business number. Recommended initial offer: Professional Brand Identity Package from $99 USD.</p>
    <a href="https://wa.me/10000000000" target="_blank" className="whatsapp"><MessageCircle/> Start on WhatsApp</a>
  </div>
 </section>
}

function App(){return <><Header/><Hero/><MarqueeLogos/><Work/><Systems/><Services/><Pricing/><Process/><Contact/><footer>© {new Date().getFullYear()} LIBETECH USA — Premium Branding Studio</footer></>}

createRoot(document.getElementById('root')).render(<App/>);

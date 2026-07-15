import { FormEvent, ReactNode, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Download,
  Facebook,
  Moon,
  Sun,
  Github,
  Globe2,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";

const socialLinks = [
  { label: "X / Twitter", href: "https://x.com/sebou_fari16891", icon: "X" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100070130408601", icon: Facebook },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/farid-sebou-679306354", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/rid_stack_", icon: Instagram },
  { label: "GitHub", href: "https://github.com/faridseb", icon: Github },
];

const skills = [
  { name: "HTML5", level: 85, mark: "", image: "/images/html5.png", tone: "bg-orange-100 text-orange-600" },
  { name: "CSS3", level: 80, mark: "", image: "/images/css3.png", tone: "bg-blue-100 text-blue-600" },
  { name: "JavaScript", level: 50, mark: "", image: "/images/js5.png", tone: "bg-amber-100 text-amber-600" },
  { name: "React JS", level: 40, mark: "", image: "/images/react.png", tone: "bg-cyan-100 text-cyan-600" },
  { name: "PHP", level: 75, mark: "", image: "/images/php.png", tone: "bg-indigo-100 text-indigo-600" },
  { name: "SQL", level: 70, mark: "", image: "/images/sql.png", tone: "bg-sky-100 text-sky-700" },
  { name: "Laravel", level: 65, mark: "", image: "/images/laravel.png", tone: "bg-red-100 text-red-600" },
  { name: "Delphi Borland", level: 80, mark: "", image: "/images/delphi.png", tone: "bg-rose-100 text-rose-600" },
  { name: "Python", level: 40, mark: "", image: "/images/py.png", tone: "bg-yellow-100 text-yellow-700" },
];

const projects = [
  { title: "Amazon Shop", text: "Une expérience e-commerce construite avec PHP et Bootstrap.", image: "/images/amazon-shop.jpg", href: "https://github.com/faridseb/amazon.github.io", tag: "E-commerce", art: "from-amber-400 to-orange-600", glyph: "", technologies: ["PHP", "Bootstrap", "MySQL"] },
  { title: "RSGESTECH", text: "Une expérience e-commerce construite avec PHP et Bootstrap.", image: "/images/BTS.jpg", href: "https://github.com/faridseb/amazon.github.io", tag: "Plateforme", art: "from-amber-400 to-orange-600", glyph: "", technologies: ["Laravel ", "React Js", "Tailwind CSS"] }, //BTS
  { title: "CONSANTE", text: "Gestion des rendez-vous et du suivi au sein d'une clinique.", image: "/images/consante.jpg", href: "https://github.com/faridseb/sante", tag: "Plateforme", art: "from-cyan-500 to-blue-700", glyph: "", technologies: ["PHP", "MySQL", "JavaScript"] },
  { title: "TACHTEC", text: "Un espace de pilotage pensé pour les projets informatiques.", image: "/images/tachtec.jpg", href: "https://github.com/faridseb/projet", tag: "Gestion de projet", art: "from-violet-500 to-indigo-700", glyph: "", technologies: ["PHP", "Javascript", "MySQL"] },
  { title: "BANQUIS", text: "Application desktop dédiée à la gestion bancaire.", image: "/images/banquis.jpg", href: "https://github.com/faridseb/banquw.github.io", tag: "Desktop", art: "from-emerald-500 to-teal-700", glyph: "", technologies: ["Delphi", "SQL"] },
  { title: "ENVENTPRO", text: "Une application pour organiser et suivre les événements.", image: "/images/enventpro.jpg", href: "https://github.com/faridseb/event.github.io", tag: "Desktop", art: "from-pink-500 to-rose-700", glyph: "", technologies: ["Delphi", "SQL"] },
  { title: "KADODO", text: "Intranet de gestion scolaire en PHP, Bootstrap et JavaScript.", image: "/images/kadodo.jpg", href: "https://github.com/faridseb/kadodo.github.io", tag: "Intranet", art: "from-slate-600 to-slate-900", glyph: "", technologies: ["PHP", "Bootstrap", "JavaScript", "MySQL"] },
];

const experience = [
  { date: "Sept. 2025 — Déc. 2025", title: "Stagiaire à la New Brain Factory", text: "Découverte de méthodes de travail professionnelles et participation à des projets web." },

  { date: "Sept. 2025 — Jan. 2025", title: "Application de gestion du personnel et du recrutement", text: "Découverte de méthodes de travail professionnelles et participation à des projets web." },
  // { date: "Sept. 2025 — Déc. 2025", title: "Stagiaire à la New Brain Factory", text: "Découverte de méthodes de travail professionnelles et participation à des projets web." },
  { date: "Mai 2025", title: "Applications pour des particuliers", text: "Conception d'applications desktop en Delphi Borland." },
  { date: "Avril 2025", title: "Application de gestion d'un intranet", text: "Conception des interfaces front-end et de l'architecture back-end." },
  { date: "Août 2024", title: "Application e-commerce", text: "Conception intégrale d'un site e-commerce, du back-end au front-end." },
];

function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={`grid h-10 w-10 place-items-center rounded-full border transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 ${dark ? "border-white/15 bg-white/5 text-white" : "border-slate-200 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"}`}>
          {typeof Icon === "string" ? <span className="text-xs font-extrabold">𝕏</span> : <Icon size={17} />}
        </a>
      ))}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem("farid-theme") === "dark");
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    const skillSection = document.querySelector("#competences");
    const skillObserver = new IntersectionObserver(([entry]) => entry.isIntersecting && setSkillsVisible(true), { threshold: 0.25 });
    if (skillSection) skillObserver.observe(skillSection);
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); skillObserver.disconnect(); };
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      localStorage.setItem("farid-theme", next ? "dark" : "light");
      return next;
    });
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Validation basique
    if (!email || !message) {
      setSending(false);
      alert('Veuillez remplir tous les champs.');
      return;
    }
    
    const templateParams = {
      to_email: 'seboufarid43@gmail.com',
      from_name: email.split('@')[0], // Nom basé sur l'email
      reply_to: email, // Pour pouvoir répondre à l'expéditeur
      from_email: email, // Email de l'expéditeur
      message: message,
    };

    console.log('EmailJS Config:', {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
    console.log('Template params:', templateParams);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      console.log('EmailJS success:', response);
      setSending(false);
      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000); // Reset après 5 secondes
    })
    .catch((error) => {
      console.error('EmailJS error details:', error);
      setSending(false);
      alert(`Erreur lors de l'envoi: ${error.text || 'Erreur inconnue'}. Vérifiez votre connexion et réessayez.`);
    });
  };

  const navItems = [
    { label: "Accueil", href: "#accueil" },
    { label: "Compétences", href: "#competences" },
    { label: "Réalisations", href: "#realisations" },
  ];

  return (
    <main className={`overflow-hidden bg-[#f8fafc] text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 ${darkMode ? "dark" : ""}`}>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#accueil" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight"><span className="grid h-8 w-8 place-items-center rounded-lg bg-slate-950 text-sm text-cyan-300">R.</span>RidStack</a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">{item.label}</a>)}
            {/* <button onClick={toggleTheme} aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-cyan-300">{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button> */}
            <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950 dark:bg-cyan-400 dark:text-slate-950">Contact <ArrowDownRight className="ml-1 inline" size={15} /></a>
          </nav>
          <div className="flex items-center gap-2 md:hidden"><button aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div>
        </div>
        {menuOpen && <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-4">{[...navItems, { label: "Contact", href: "#contact" }].map((item) => <a key={item.href} onClick={() => setMenuOpen(false)} href={item.href} className="text-base font-bold text-slate-800 dark:text-slate-200">{item.label}</a>)}</div></div>}
      </header>

      <section id="accueil" className="relative isolate min-h-[760px] overflow-hidden bg-[#eff6ff] pt-[76px] dark:bg-slate-900">
        <div className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -right-40 top-16 -z-10 h-[580px] w-[580px] rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute left-[44%] top-56 -z-10 h-44 w-44 rounded-full bg-indigo-300/30 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-28">
          <div className="reveal">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] dark:border-cyan-900 dark:bg-slate-950/70 text-cyan-700 dark:text-cyan-300"><span className="h-2 w-2 rounded-full bg-cyan-500" />Disponible pour de nouvelles opportunités</div> */}
            <p className="mb-4 font-mono text-sm font-bold text-cyan-700 dark:text-cyan-300"></p>
            <h1 className="font-display text-5xl font-extrabold leading-[.98] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">Je suis <span className="text-cyan-600">SEBOU</span><br />Farid.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">Développeur web. Développeur <strong className="font-semibold text-slate-900 dark:text-white">front-end et back-end.</strong> Je transforme les idées en expériences numériques simples et utiles.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#profil" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950">Découvrir mon profil <ArrowDownRight size={17} /></a>
              <a href="/images/cv-farid-sebou.pdf" download className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 transition-all hover:-translate-y-1 hover:border-slate-950"><Download size={17} /> Mon CV</a>
            </div>
            <div className="mt-11"><SocialLinks /></div>
          </div>
          <div className="reveal relative mx-auto w-full max-w-md [transition-delay:140ms]">
            <div className="absolute -left-6 top-16 h-24 w-24 rounded-3xl border border-white bg-white/70 shadow-xl backdrop-blur-sm" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-950 shadow-2xl shadow-cyan-900/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-800 to-cyan-900" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-400/40 via-transparent to-transparent" />
              <AssetImage sources={["/images/profile.jpg", "/images/profile.jpeg", "/images/profile.png", "/images/profil.jpg", "/images/profil.png"]} alt="Portrait de Farid Sebou" className="absolute inset-0 h-full w-full object-cover" fallback={<div className="absolute inset-0 flex flex-col items-center justify-center text-white"><div className="grid h-32 w-32 place-items-center rounded-full border border-cyan-200/40 bg-cyan-200/10 font-display text-5xl font-extrabold text-cyan-200">FS</div><span className="mt-5 font-mono text-xs uppercase tracking-[.28em] text-cyan-200">Ajoutez votre portrait</span></div>} />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white backdrop-blur-md"><span className="text-sm font-bold">Farid Sebou</span><Code2 size={18} className="text-cyan-300" /></div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-cyan-400 px-5 py-4 shadow-xl"><p className="font-display text-2xl font-extrabold text-slate-950">09+</p><p className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Technologies</p></div>
          </div>
        </div>
      </section>

      <section id="competences" className="bg-[#f8fafc] py-24 transition-colors duration-300 dark:bg-slate-950 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading overline="Savoir-faire" title="Mes Compétences" text="Voici toutes mes compétences que j'ai pu acquérir au cours de mon expérience." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{skills.map((skill, index) => <article key={skill.name} className="reveal group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/5" style={{ transitionDelay: `${index * 55}ms` }}><div className="flex items-start justify-between"><div className={`relative grid h-12 w-12 place-items-center rounded-xl font-mono text-sm font-extrabold ${skill.tone}`}><span>{skill.mark}</span><AssetImage sources={[skill.image, skill.image.replace(".png", ".jpg"), skill.image.replace(".png", ".jpeg"), skill.image.replace(".png", ".webp")]} alt="" className="absolute inset-0 h-full w-full rounded-xl object-contain p-2" /></div><span className="font-display text-xl font-extrabold text-slate-950 dark:text-white">{skill.level}%</span></div><h3 className="mt-5 font-display text-lg font-bold">{skill.name}</h3><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-cyan-600 transition-[width] duration-1000 ease-out" style={{ width: skillsVisible ? `${skill.level}%` : "0%", transitionDelay: `${index * 80}ms` }} /></div></article>)}</div></div>
      </section>

      <section id="profil" className="bg-slate-950 py-24 text-white sm:py-32"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading dark overline="Mon parcours" title="Profil & Expérience" text="Une curiosité constante, nourrie par les projets et la pratique." /><div className="mt-14 grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-20"><div className="reveal"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-slate-950"><Sparkles size={22} /></div><h3 className="mt-7 font-display text-3xl font-extrabold">Profil</h3><p className="mt-5 text-lg leading-8 text-slate-300">Je suis développeur web qui apprend et met en pratique de nouvelles compétences, curieux de comprendre comment les choses fonctionnent en coulisses, notamment sur le web.</p><div className="mt-8 grid grid-cols-2 gap-3"><Stat value="06" label="Projets réalisés" /><Stat value="09" label="Technologies" /></div></div><div className="reveal relative border-l border-white/15 pl-8 [transition-delay:120ms]">{experience.map((item, index) => <article key={item.title} className="relative pb-9 last:pb-0"><span className="absolute -left-[39px] top-1 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400" /><p className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">{item.date}</p><h3 className="mt-2 font-display text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p></article>)}</div></div></div></section>

      <section id="realisations" className="bg-[#f8fafc] py-24 transition-colors duration-300 dark:bg-slate-950 sm:py-32"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionHeading overline="Portfolio sélectionné" title="Mes Réalisations" text="Voici toutes les réalisations que j'ai eu à réaliser au cours de mon parcours de développeur." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <article key={project.title} className="reveal group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-950/10" style={{ transitionDelay: `${index * 65}ms` }}><div className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.art}`}><div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" /><AssetImage sources={[project.image, project.image.replace(".jpg", ".png"), project.image.replace(".jpg", ".jpeg"), project.image.replace(".jpg", ".webp")]} alt={`Aperçu du projet ${project.title}`} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:20px_20px]" /><div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /><span className="relative font-display text-6xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-110 drop-shadow-lg">{project.glyph}</span><span className="absolute bottom-3 left-3 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/30">{project.tag}</span></div><div className="p-6 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950"><span className="inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">{project.tag}</span><h3 className="mt-3 font-display text-xl font-extrabold text-slate-950 dark:text-white">{project.title}</h3><p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600 dark:text-slate-400">{project.text}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">{tech}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 dark:text-cyan-300 transition-colors hover:text-cyan-500 dark:hover:text-cyan-400">Voir le projet <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></article>)}</div><div className="reveal mt-10 text-center"><a href="https://github.com/faridseb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold transition-all hover:border-slate-950 hover:bg-slate-950 hover:text-white"><Github size={17} /> Voir GitHub <ChevronRight size={16} /></a></div></div></section>

      <section id="contact" className="bg-cyan-300 py-24 sm:py-32"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8"><div className="reveal"><p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-cyan-900">Une idée, un projet ?</p><h2 className="mt-4 font-display text-5xl font-extrabold leading-none tracking-[-.05em] text-slate-950 sm:text-6xl">Me contacter.</h2><p className="mt-6 max-w-sm text-lg leading-8 text-slate-800">Je serais ravi d'échanger avec vous et de donner vie à vos prochaines idées.</p><a href="mailto:faridsebou@gmail.com" className="mt-8 inline-flex items-center gap-3 font-bold text-slate-950 hover:underline"><span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-cyan-300"><Mail size={17} /></span> Écrivez-moi directement</a></div><form onSubmit={sendMessage} className="reveal rounded-3xl bg-white p-6 dark:bg-slate-900 shadow-2xl shadow-cyan-950/15 sm:p-8 [transition-delay:120ms]"><label className="text-sm font-bold text-slate-800 dark:text-slate-200">Votre adresse email<input required name="email" type="email" placeholder="Votre adresse email" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-950 text-sm outline-none transition focus:border-slate-950 focus:bg-white dark:focus:border-cyan-400 dark:focus:bg-slate-900" /></label><label className="mt-5 block text-sm font-bold text-slate-800 dark:text-slate-200">Votre message<textarea required name="message" rows={5} placeholder="Entrer votre texte" className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 dark:border-slate-700 dark:bg-slate-950 text-sm outline-none transition focus:border-slate-950 focus:bg-white dark:focus:border-cyan-400 dark:focus:bg-slate-900" /></label><button disabled={sending || sent} className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 disabled:cursor-default disabled:bg-emerald-600">{sent ? <><Check size={18} /> Message envoyé</> : sending ? "Envoi en cours..." : <><Send size={17} /> Envoyer</>}</button>{sent && <p className="mt-3 text-center text-xs font-semibold text-emerald-700">Merci, votre message a bien été préparé.</p>}</form></div></section>

      <footer className="bg-slate-950 py-12 text-white"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-5 text-center lg:flex-row lg:px-8 lg:text-left"><a href="#accueil" className="font-display text-xl font-extrabold">Portfolio<span className="text-cyan-300">.</span></a><SocialLinks dark /><div className="text-sm text-slate-400">© {new Date().getFullYear()}. Tous droits réservés. <span className="ml-1 text-slate-500">Design : By RidStack</span></div></div></footer>
    </main>
  );
}

function AssetImage({ sources, alt, className, fallback }: { sources: string[]; alt: string; className: string; fallback?: ReactNode }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [missing, setMissing] = useState(false);
  const source = sources[sourceIndex];

  if (missing) return fallback ?? null;

  return <img src={source} alt={alt} className={className} onError={() => sourceIndex < sources.length - 1 ? setSourceIndex(sourceIndex + 1) : setMissing(true)} />;
}

function SectionHeading({ overline, title, text, dark = false }: { overline: string; title: string; text: string; dark?: boolean }) {
  return <div className="reveal max-w-2xl"><p className={`font-mono text-xs font-bold uppercase tracking-[.18em] ${dark ? "text-cyan-300" : "text-cyan-700"}`}>{overline}</p><h2 className={`mt-4 font-display text-4xl font-extrabold tracking-[-.04em] sm:text-5xl ${dark ? "text-white" : "text-slate-950 dark:text-white"}`}>{title}</h2><p className={`mt-4 text-base leading-7 ${dark ? "text-slate-400" : "text-slate-600 dark:text-slate-400"}`}>{text}</p></div>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="font-display text-3xl font-extrabold text-cyan-300">{value}</p><p className="mt-1 text-xs font-semibold text-slate-400">{label}</p></div>;
}

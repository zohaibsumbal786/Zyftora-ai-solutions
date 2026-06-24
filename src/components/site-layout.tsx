import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logo from "@/assets/zyftora-logo.png";
import {
  ArrowRight, Instagram, Facebook, Music2, Mail, MapPin,
  Phone, ChevronDown, Bot, Brain, Sparkles, BarChart3, Wifi,
  Code2, MessageSquare, Eye, ShieldAlert, FlaskConical,
} from "lucide-react";

/* ─── Constants ─── */
export const WHATSAPP_NUMBER = "+92 315 6977277";
export const WHATSAPP_HREF = "https://wa.me/923156977277?text=" + encodeURIComponent("Hi Zyftora — I'd like to talk about a project.");
export const EMAIL = "zyftora@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61590736214299";
export const INSTAGRAM_URL = "https://www.instagram.com/zyftorallc/";
export const TIKTOK_URL = "https://www.tiktok.com/@zyftorallc";

export function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.86 9.86 0 0 0 4.6 1.17h.01c5.44 0 9.86-4.42 9.86-9.86 0-2.63-1.02-5.1-2.8-6.99zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.18 8.18 0 0 1-1.26-4.34c0-4.52 3.68-8.2 8.2-8.2a8.16 8.16 0 0 1 5.8 2.4 8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.2 8.2zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.22-.08-.38-.12-.55.12-.16.25-.62.8-.76.96-.14.16-.28.18-.52.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.71.59.25 1.04.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28z"/>
    </svg>
  );
}

export function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer"
      className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-foreground/70 transition-all hover:scale-110 hover:border-[color:var(--cyan-glow)]/40 hover:text-[color:var(--cyan-glow)]">
      {children}
    </a>
  );
}

export function CircuitBg({ opacity = "opacity-35" }: { opacity?: string }) {
  return (
    <svg aria-hidden className={`pointer-events-none absolute inset-0 h-full w-full ${opacity}`}
      preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 900">
      <defs>
        <linearGradient id="cl-pg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#3FD3E8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0.4" />
        </linearGradient>
        <radialGradient id="nd-pg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3FD3E8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3FD3E8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="url(#cl-pg)" strokeWidth="1" fill="none">
        <path d="M0 220 L340 220 L400 280 L720 280 L780 220 L1060 220 L1120 160 L1440 160" />
        <path d="M0 460 L200 460 L260 520 L580 520 L640 460 L940 460 L1000 520 L1440 520" />
        <path d="M0 700 L280 700 L340 640 L700 640 L760 700 L1140 700 L1200 760 L1440 760" />
        <path d="M220 0 L220 160 L280 220 L280 400 L340 460 L340 640" />
        <path d="M960 0 L960 100 L1020 160 L1020 360 L1080 420 L1080 600" />
      </g>
      {[[340,220],[720,280],[1060,220],[200,460],[580,520],[940,460],[280,700],[700,640],[1140,700],[220,160],[1020,360]].map(([x,y],i) => (
        <g key={i} style={{ animationDelay: `${(i%6)*0.5}s` }} className="node-dot">
          <circle cx={x} cy={y} r="14" fill="url(#nd-pg)" />
          <circle cx={x} cy={y} r="2.5" fill="#3FD3E8" />
        </g>
      ))}
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#062b16] shadow-[0_8px_32px_-4px_rgba(37,211,102,0.6)] transition-all hover:scale-105">
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.07, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Mega Nav ─── */
const SERVICES_MENU = [
  { icon: Bot, label: "AI Agents & Automation", desc: "Autonomous AI systems", to: "/services" },
  { icon: Brain, label: "Machine Learning", desc: "Production ML pipelines", to: "/services" },
  { icon: Sparkles, label: "Generative AI", desc: "GPT, RAG & LLM systems", to: "/services" },
  { icon: BarChart3, label: "Data Science & Analytics", desc: "Power BI & Tableau", to: "/services" },
  { icon: Wifi, label: "IoT & Embedded AI", desc: "Smart hardware systems", to: "/services" },
  { icon: Code2, label: "Web Development", desc: "Full-stack applications", to: "/services" },
];

const WORK_MENU = [
  { icon: MessageSquare, label: "AI WhatsApp Assistant", desc: "Conversational AI agent", to: "/portfolio" },
  { icon: Eye, label: "Virtual Try-On System", desc: "Computer vision & GANs", to: "/portfolio" },
  { icon: ShieldAlert, label: "Fraud Detection", desc: "Real-time ML pipeline", to: "/portfolio" },
  { icon: FlaskConical, label: "IoT Health Monitor", desc: "Embedded AI device", to: "/portfolio" },
];

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(v => !v)}
        className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-white/[0.05] hover:text-foreground ${open ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"}`}>
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="dropdown-menu absolute left-0 top-full z-50 mt-1 min-w-[600px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[oklch(0.18_0.04_265)] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          {children}
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn(); window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setMobileSection(null); }, [currentPath]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-white/[0.07] bg-[oklch(0.13_0.03_265)]/95 backdrop-blur-2xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.6)]" : "bg-transparent"}`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#3FD3E8]/40 to-[#6C5CE7]/40 blur-md transition-all group-hover:blur-lg" />
            <img src={logo} alt="Zyftora" width={36} height={36} className="relative h-9 w-9" />
          </div>
          <span className="font-display text-[1.05rem] font-bold tracking-[0.2em]">ZYFTORA</span>
        </Link>

        {/* Desktop mega nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {/* Services dropdown */}
          <NavDropdown label="Services">
            <div className="grid grid-cols-2 gap-0 p-5">
              <div className="pr-5 border-r border-white/[0.06]">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">What we build</p>
                {SERVICES_MENU.map((item) => (
                  <Link key={item.label} to={item.to as "/services"}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/[0.05]">
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-brand">
                      <item.icon className="h-4 w-4 text-[#0a0e1a]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-[color:var(--cyan-glow)] transition-colors">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="pl-5">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--violet-glow)]">Featured work</p>
                {WORK_MENU.map((item) => (
                  <Link key={item.label} to={item.to as "/portfolio"}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-white/[0.05]">
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                      <item.icon className="h-4 w-4 text-[color:var(--cyan-glow)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground group-hover:text-[color:var(--cyan-glow)] transition-colors">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-white/[0.06]">
                  <Link to="/portfolio"
                    className="flex items-center gap-2 text-sm font-semibold text-[color:var(--cyan-glow)] hover:underline transition-all">
                    View all 22+ projects <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </NavDropdown>

          {/* About dropdown */}
          <NavDropdown label="Company">
            <div className="p-5 grid grid-cols-2 gap-4">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)]">About</p>
                {[
                  { label: "Who We Are", desc: "Our story and mission", to: "/about" },
                  { label: "Our Team", desc: "Four experts, one standard", to: "/about" },
                  { label: "Our Work", desc: "22+ production projects", to: "/portfolio" },
                ].map((item) => (
                  <Link key={item.label} to={item.to as "/about" | "/portfolio"}
                    className="group flex flex-col rounded-xl p-3 transition-all hover:bg-white/[0.05]">
                    <p className="text-sm font-semibold text-foreground group-hover:text-[color:var(--cyan-glow)] transition-colors">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </Link>
                ))}
              </div>
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--violet-glow)]">Connect</p>
                {[
                  { label: "Contact Us", desc: "Start a project or inquiry", to: "/contact" },
                  { label: "WhatsApp", desc: "Chat directly with our team", href: WHATSAPP_HREF },
                  { label: "Email", desc: EMAIL, href: `mailto:${EMAIL}` },
                ].map((item) => (
                  "to" in item ? (
                    <Link key={item.label} to={item.to as "/contact"}
                      className="group flex flex-col rounded-xl p-3 transition-all hover:bg-white/[0.05]">
                      <p className="text-sm font-semibold text-foreground group-hover:text-[color:var(--cyan-glow)] transition-colors">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </Link>
                  ) : (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                      className="group flex flex-col rounded-xl p-3 transition-all hover:bg-white/[0.05]">
                      <p className="text-sm font-semibold text-foreground group-hover:text-[color:var(--cyan-glow)] transition-colors">{item.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                    </a>
                  )
                ))}
              </div>
            </div>
          </NavDropdown>

          <Link to="/portfolio"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-white/[0.05] hover:text-foreground ${currentPath === "/portfolio" ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"}`}>
            Work
          </Link>
          <Link to="/about"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-white/[0.05] hover:text-foreground ${currentPath === "/about" ? "bg-white/[0.06] text-foreground" : "text-muted-foreground"}`}>
            About
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-foreground/80 transition-all hover:border-white/20 hover:text-foreground">
            WhatsApp
          </a>
          <Link to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-[#0a0e1a] shadow-[0_0_24px_-6px_rgba(63,211,232,0.7)] transition-all hover:scale-105 hover:shadow-[0_0_32px_-4px_rgba(63,211,232,0.9)]">
            Start a Project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Hamburger */}
        <button aria-label="Toggle menu" onClick={() => setMobileOpen(v => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] lg:hidden">
          <div className="flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-foreground/80 transition-all duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.07] bg-[oklch(0.14_0.03_265)]/98 backdrop-blur-2xl lg:hidden max-h-[85vh] overflow-y-auto">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-6">
            {/* Services accordion */}
            <div>
              <button onClick={() => setMobileSection(mobileSection === "services" ? null : "services")}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-white/[0.05]">
                Services <ChevronDown className={`h-4 w-4 transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "services" && (
                <div className="mt-1 ml-4 space-y-1 border-l border-white/[0.08] pl-4">
                  {SERVICES_MENU.map((item) => (
                    <Link key={item.label} to={item.to as "/services"}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/[0.05] hover:text-foreground transition-all">
                      <item.icon className="h-4 w-4 text-[color:var(--cyan-glow)]" />{item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-white/[0.05]">Work</Link>
            <Link to="/about" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-white/[0.05]">About</Link>
            <Link to="/contact" className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-white/[0.05]">Contact</Link>

            <div className="mt-4 flex flex-col gap-2.5 border-t border-white/[0.07] pt-5">
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-foreground/80">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Chat on WhatsApp
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-[#0a0e1a]">
                Start a Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Footer with newsletter ─── */
const FOOTER_SERVICES = [
  "AI Agents & Automation", "Machine Learning Solutions",
  "Generative AI Integration", "Data Science & Analytics",
  "IoT Systems & Embedded AI", "Web & Full-Stack Development",
];
const FOOTER_QUICK = [
  { label: "Home", to: "/" }, { label: "Services", to: "/services" },
  { label: "Our Work", to: "/portfolio" }, { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="relative bg-[oklch(0.12_0.025_265)]">
      {/* Top grid */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1.2fr_1.4fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#3FD3E8]/30 to-[#6C5CE7]/30 blur-md" />
                <img src={logo} alt="Zyftora" width={36} height={36} className="relative h-9 w-9" />
              </div>
              <span className="font-display text-lg font-bold tracking-[0.2em]">ZYFTORA</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              AI Solutions Engineered for Tomorrow. We build intelligent agents, ML systems, IoT solutions, and full-stack applications for businesses ready to automate.
            </p>
            <div className="mt-6 flex gap-2.5">
              <Social href={INSTAGRAM_URL} label="Instagram"><Instagram className="h-4 w-4" /></Social>
              <Social href={FACEBOOK_URL} label="Facebook"><Facebook className="h-4 w-4" /></Social>
              <Social href={TIKTOK_URL} label="TikTok"><Music2 className="h-4 w-4" /></Social>
              <Social href={WHATSAPP_HREF} label="WhatsApp"><WhatsAppIcon className="h-4 w-4" /></Social>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground/60 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK.map((l) => (
                <li key={l.to}>
                  <Link to={l.to as "/" | "/services" | "/portfolio" | "/about" | "/contact"}
                    className="text-sm text-foreground/65 transition-colors hover:text-[color:var(--cyan-glow)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground/60 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-foreground/65 transition-colors hover:text-[color:var(--cyan-glow)]">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground/60 mb-5">Contact</h4>
            <ul className="space-y-3 mb-7">
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"><Mail className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />{EMAIL}</a></li>
              <li><a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"><WhatsAppIcon className="h-4 w-4 text-[#25D366] shrink-0" />{WHATSAPP_NUMBER}</a></li>
              <li><a href="tel:+923156977277" className="flex items-center gap-2.5 text-sm text-foreground/65 hover:text-[color:var(--cyan-glow)] transition-colors"><Phone className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />{WHATSAPP_NUMBER}</a></li>
              <li className="flex items-center gap-2.5 text-sm text-foreground/65"><MapPin className="h-4 w-4 text-[color:var(--cyan-glow)] shrink-0" />Remote-first · Global</li>
            </ul>

            {/* Newsletter */}
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <p className="text-sm font-bold text-foreground mb-1">Stay updated</p>
              <p className="text-xs text-muted-foreground mb-3">Get insights on AI engineering & automation.</p>
              {subscribed ? (
                <p className="text-xs font-semibold text-[color:var(--cyan-glow)]">✓ You're subscribed!</p>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if (email.includes("@")) setSubscribed(true); }} className="flex gap-2">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required
                    className="min-w-0 flex-1 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground/50 focus:border-[color:var(--cyan-glow)]/40 focus:outline-none" />
                  <button type="submit" className="rounded-lg bg-gradient-brand px-3 py-2 text-xs font-bold text-[#0a0e1a] transition-all hover:scale-105">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs text-muted-foreground/50 sm:flex-row lg:px-8">
          <p>© 2026 Zyftora. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
          <p className="text-gradient font-bold tracking-[0.2em] text-[10px]">AI SOLUTIONS ENGINEERED FOR TOMORROW</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Page Hero ─── */
export function PageHero({ eyebrow, title, titleGradient, subtitle, children }: {
  eyebrow: string; title: string; titleGradient?: string; subtitle: string; children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[55vh] items-center overflow-hidden pt-20">
      <CircuitBg opacity="opacity-30" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]" style={{ background: "var(--gradient-brand)" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full opacity-[0.08] blur-[80px]" style={{ background: "linear-gradient(135deg,#6C5CE7,#3FD3E8)" }} />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-[#3FD3E8]/25 bg-[#3FD3E8]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--cyan-glow)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--cyan-glow)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--cyan-glow)]" />
            </span>
            {eyebrow}
          </div>
          <h1 className="reveal font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}{titleGradient && <><br /><span className="text-gradient">{titleGradient}</span></>}
          </h1>
          <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
          {children && <div className="reveal mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal, PageHero, SiteNav, SiteFooter, FloatingWhatsApp, WHATSAPP_HREF } from "@/components/site-layout";
import {
  ArrowRight, Check, Zap, Layers, Gauge, Shield, Globe, TrendingUp,
  Target, Eye, Wifi, Brain, Code2, BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Zyftora AI Agency" }] }),
  component: AboutPage,
});

const TEAM = [
  {
    initials: "ZA", name: "Zohaib Ahmed", role: "Data Science & Agentic AI",
    color: "from-[#3FD3E8] to-[#4B6EF5]",
    bio: "Leads AI engineering at Zyftora. Specializes in agentic systems, computer vision, IoT embedded AI, and production ML pipelines. Published researcher in non-invasive health monitoring using embedded machine learning. Built systems spanning fraud detection, virtual try-on, autonomous agents, and biometric IoT devices.",
    skills: ["AI Agents","Computer Vision","IoT & Embedded","Machine Learning","Python","LangChain","OpenCV","PyTorch"],
    projects: 10,
  },
  {
    initials: "YS", name: "Yasir Saeed", role: "Marketing & Lead Generation",
    color: "from-[#4B6EF5] to-[#6C5CE7]",
    bio: "Builds and executes growth strategies for Zyftora and its clients. Designs outbound campaigns, manages client acquisition pipelines, and drives the business development engine that keeps the team focused on the right opportunities.",
    skills: ["Lead Generation","B2B Outreach","Growth Strategy","Campaign Design","CRM Systems","Market Research","Content Strategy","Analytics"],
    projects: 0,
  },
  {
    initials: "UR", name: "Ubaid Raza", role: "Marketing & Creative Design",
    color: "from-[#6C5CE7] to-[#3FD3E8]",
    bio: "Owns brand identity, visual communication, and creative strategy across every touchpoint — from client-facing materials and social presence to product UI and marketing collateral. Ensures Zyftora and its clients communicate with clarity and visual impact.",
    skills: ["Brand Identity","Visual Design","Content Creation","Social Media","UI Design","Figma","Motion Design","Creative Strategy"],
    projects: 0,
  },
  {
    initials: "MA", name: "Muhammad Akib", role: "Web Dev & Dashboards",
    color: "from-[#3FD3E8] to-[#6C5CE7]",
    bio: "Builds the full-stack systems, admin dashboards, and data visualization products that power Zyftora's AI deliverables. Specializes in React ecosystems, backend APIs, database design, and performance-optimized web applications.",
    skills: ["React","Node.js","TypeScript","PostgreSQL","Power BI","TailwindCSS","REST APIs","Dashboard Design"],
    projects: 5,
  },
];

const PILLARS = [
  { icon: Zap, title: "Agentic-First Engineering", body: "We don't bolt AI onto existing systems. We design with autonomy at the core — agents, pipelines, and automation built in from the start." },
  { icon: Layers, title: "Full-Stack Ownership", body: "Sensor to dashboard, ML pipeline to production API — we own the entire build. No handoff gaps. No broken seams." },
  { icon: Gauge, title: "Outcome-Driven Delivery", body: "Every project defines success before we start. We ship against business metrics, not just feature lists." },
  { icon: Shield, title: "Security & Reliability", body: "Proper auth, data handling, error boundaries, and monitoring — built for real environments, not controlled demos." },
  { icon: Globe, title: "Remote-Native Communication", body: "Async-first, globally connected. Fast, direct, no middlemen — you always talk to the engineer who built it." },
  { icon: TrendingUp, title: "Continuous Improvement", body: "We ship, monitor, and iterate. Post-launch support, model retraining, and system evolution are part of our standard process." },
];

const TECH_GROUPS = [
  { label: "AI & ML", color: "text-[#3FD3E8]", items: ["Python","PyTorch","TensorFlow","scikit-learn","XGBoost","OpenAI API","LangChain","Hugging Face","ONNX","SHAP"] },
  { label: "IoT & Embedded", color: "text-[#4B6EF5]", items: ["ESP32-S3","Arduino","FreeRTOS","MQTT","MAX30102","MLX90614","YOLO","OpenCV","MediaPipe","Edge AI"] },
  { label: "Web & Backend", color: "text-[#6C5CE7]", items: ["React","TanStack","Next.js","Node.js","PostgreSQL","REST APIs","TypeScript","Tailwind","Redis","Docker"] },
  { label: "Data & BI", color: "text-[#3FD3E8]", items: ["Power BI","Tableau","Pandas","Matplotlib","Seaborn","SQL","Librosa","FFmpeg","DAX","Plotly"] },
];

const TIMELINE = [
  { year: "2023", title: "Zyftora Founded", body: "Started as a focused AI engineering agency building custom ML systems and automation tools for early clients." },
  { year: "2024", title: "IoT & Vision Expansion", body: "Expanded into computer vision and IoT embedded systems. Shipped virtual try-on, car violation detection, and pet monitoring projects." },
  { year: "2024", title: "Research Published", body: "Published peer-reviewed research on non-invasive IoT glucose monitoring using embedded ML on ESP32-S3 hardware." },
  { year: "2025", title: "AI Agents Go Live", body: "Shipped first production WhatsApp AI agents for business clients. Expanded to lead generation, fraud detection, and dashboard products." },
  { year: "2026", title: "Full Agency Operations", body: "Operating as a full AI & software engineering agency with 22+ shipped projects across 6 industries spanning AI agents, ML systems, IoT, full-stack platforms, and SaaS products." },
];

function AboutPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="About Zyftora"
          title="A deliberate team."
          titleGradient="Production-grade AI."
          subtitle="We're not a consulting firm. We're engineers who build, ship, and stand behind production-ready AI systems — from model to deployment."
        />

        {/* Mission */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div className="reveal">
                <span className="eyebrow">Our Mission</span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">We build AI that earns its place inside real operations.</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Most AI agencies deliver slide decks and prototypes. We deliver deployed systems that handle real load, real edge cases, and real business processes.
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Zyftora was built around one principle: every system we ship has to work in the real world, not just in a demo. That means proper error handling, monitoring, documentation, and ongoing support as standard — not optional extras.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  {["Production-only deliverables","Full source code ownership","NDA on day one","Post-launch support included","Direct engineer access","Weekly progress updates"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 shrink-0 text-[color:var(--cyan-glow)]" />{item}
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-[#0a0e1a] transition-all hover:scale-105">
                  Work with us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="reveal grid grid-cols-2 gap-4">
                {[
                  { icon: Brain, label: "AI & ML", value: "12 Projects", color: "text-[#3FD3E8]" },
                  { icon: Wifi, label: "IoT Systems", value: "3 Projects", color: "text-[#4B6EF5]" },
                  { icon: Code2, label: "Web & Dashboards", value: "9 Projects", color: "text-[#6C5CE7]" },
                  { icon: BarChart3, label: "Data & BI", value: "3 Projects", color: "text-[#3FD3E8]" },
                  { icon: Eye, label: "Computer Vision", value: "4 Projects", color: "text-[#4B6EF5]" },
                  { icon: Target, label: "AI Agents", value: "5 Projects", color: "text-[#6C5CE7]" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-2xl p-5 text-center transition-all hover:border-white/[0.14]">
                    <item.icon className={`mx-auto h-8 w-8 ${item.color} mb-3`} />
                    <p className="font-display text-lg font-bold text-gradient">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core pillars */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Core principles</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">How we think about every project.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PILLARS.map((p, i) => (
                <div key={p.title}
                  className="reveal group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[oklch(0.19_0.038_265)] p-7 transition-all hover:border-white/[0.14] hover:-translate-y-1"
                  style={{ transitionDelay: `${i*50}ms` }}>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand mb-5">
                    <p.icon className="h-5 w-5 text-[#0a0e1a]" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(108,92,231,0.07),transparent)]" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">The team</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Four experts. One shared standard of quality.</h2>
              <p className="mt-4 text-muted-foreground">Every member owns their domain completely. When you work with Zyftora, you get the specialist.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {TEAM.map((m, i) => (
                <article key={m.name}
                  className="reveal group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[oklch(0.19_0.038_265)] p-8 transition-all hover:border-white/[0.15] hover:-translate-y-1"
                  style={{ transitionDelay: `${i*70}ms` }}>
                  <div aria-hidden className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-700 group-hover:opacity-[0.03] bg-gradient-to-br ${m.color}`} />
                  <div className="flex items-start gap-5">
                    <div className={`relative shrink-0 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-gradient-to-br ${m.color} text-2xl font-black text-white shadow-lg`}>
                      {m.initials}
                      <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[oklch(0.19_0.038_265)] bg-[#25D366]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-bold">{m.name}</h3>
                      <p className={`mt-1 text-xs font-bold uppercase tracking-[0.18em] bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>{m.role}</p>
                      {m.projects > 0 && <span className="mt-2 inline-block rounded-full border border-[color:var(--cyan-glow)]/30 bg-[color:var(--cyan-glow)]/10 px-3 py-0.5 text-xs font-semibold text-[color:var(--cyan-glow)]">{m.projects}+ projects shipped</span>}
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div aria-hidden className="circuit-bg absolute inset-0 opacity-15" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Our journey</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">From first project to full agency.</h2>
            </div>
            <div className="relative mx-auto max-w-3xl">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#3FD3E8]/50 via-[#6C5CE7]/50 to-transparent" />
              <div className="space-y-8">
                {TIMELINE.map((t, i) => (
                  <div key={t.year} className="reveal relative flex gap-6" style={{ transitionDelay: `${i*80}ms` }}>
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-brand text-xs font-black text-[#0a0e1a] shadow-lg">
                      {t.year}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/[0.07] bg-[oklch(0.19_0.038_265)] p-5">
                      <h3 className="font-display text-lg font-bold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="reveal flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground">Technology Stack</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TECH_GROUPS.map((g, i) => (
                <div key={g.label} className="reveal rounded-2xl border border-white/[0.07] bg-[oklch(0.19_0.038_265)] p-6" style={{ transitionDelay: `${i*60}ms` }}>
                  <p className={`text-xs font-black uppercase tracking-[0.2em] mb-5 ${g.color}`}>{g.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item} className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-foreground/75">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="reveal rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#3FD3E8]/[0.05] to-[#6C5CE7]/[0.05] p-12">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to build with us?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Let's talk about what you're building and how our team can bring it to production.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-bold text-[#0a0e1a] transition-all hover:scale-105">
                  Start a conversation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold transition-all hover:border-white/25">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

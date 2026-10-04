import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Monitor, TrendingUp, MapPin, HeartPulse, Palette, Zap } from "lucide-react";
import { services, portfolioProjects } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  MapPin: <MapPin size={24} />,
  HeartPulse: <HeartPulse size={24} />,
  Palette: <Palette size={24} />,
  Zap: <Zap size={24} />,
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-charcoal to-brand-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center py-32">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            Strategic Digital Growth
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-brand-white leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Build a Brand That<br />
            <span className="text-gradient-gold">Moves Business</span><br />
            Forward.
          </h1>
          <p className="text-base lg:text-lg text-brand-gray max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            We combine brand strategy, digital design, marketing systems, and AI-enabled workflows to help healthcare practices and growing businesses attract, convert, and retain clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-brand-white text-sm font-light rounded-sm hover:border-brand-gold/60 hover:text-brand-gold transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="py-6 border-y border-white/5 overflow-hidden bg-brand-charcoal/50">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mx-8">
              <span className="text-sm text-brand-gray font-light tracking-wider">Strategy</span>
              <span className="text-brand-gold">◆</span>
              <span className="text-sm text-brand-gray font-light tracking-wider">Brand</span>
              <span className="text-brand-gold">◆</span>
              <span className="text-sm text-brand-gray font-light tracking-wider">Digital</span>
              <span className="text-brand-gold">◆</span>
              <span className="text-sm text-brand-gray font-light tracking-wider">Growth</span>
              <span className="text-brand-gold">◆</span>
              <span className="text-sm text-brand-gray font-light tracking-wider">Systems</span>
              <span className="text-brand-gold">◆</span>
              <span className="text-sm text-brand-gray font-light tracking-wider">Automation</span>
              <span className="text-brand-gold">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Who We Are</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-brand-white mb-6 leading-tight">
                A strategic partner for brands that refuse to blend in.
              </h2>
              <p className="text-brand-gray leading-relaxed mb-4">
                ARAPH Solutions is a digital growth partner built for businesses that want more than a pretty website or a social media presence. We design systems that connect your brand to the right people, at the right time, with the right message.
              </p>
              <p className="text-brand-gray leading-relaxed">
                From healthcare practices to established businesses, we bring together strategy, design, technology, and automation to create sustainable growth engines.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                  alt="ARAPH Solutions team working on strategy"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-brand-gold/20 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">What We Do</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-white mb-4">
              Integrated services for measurable growth
            </h2>
            <p className="text-brand-gray max-w-xl mx-auto">
              Every service we offer is designed to work together — creating a cohesive system that drives real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="group p-8 bg-brand-black/50 border border-white/5 rounded-sm hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="text-brand-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-lg font-medium text-brand-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-brand-gray leading-relaxed mb-5">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-brand-gold/80 font-medium uppercase tracking-wider group-hover:text-brand-gold transition-colors">
                  Explore <ArrowUpRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div>
              <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Selected Work</p>
              <h2 className="text-3xl lg:text-4xl font-serif text-brand-white">
                Projects that demonstrate<br />our approach
              </h2>
            </div>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-brand-gold-light transition-colors"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioProjects.slice(0, 4).map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-charcoal">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  {project.isConcept && (
                    <span className="inline-block text-[10px] uppercase tracking-wider text-brand-gold/70 mb-2">
                      Concept Project
                    </span>
                  )}
                  <p className="text-xs text-brand-gold/80 uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-serif text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 lg:py-32 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Our Process</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-white">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discover", desc: "We listen, research, and understand your business, audience, and goals before proposing anything." },
              { step: "02", title: "Strategize", desc: "We develop a clear plan connecting your brand positioning to measurable growth outcomes." },
              { step: "03", title: "Create", desc: "We design and build — websites, campaigns, content, and systems — with precision and purpose." },
              { step: "04", title: "Optimize", desc: "We measure, learn, and refine continuously to improve performance over time." },
            ].map((item) => (
              <div key={item.step} className="relative p-6 border border-white/5 rounded-sm hover:border-brand-gold/20 transition-colors duration-500">
                <span className="text-4xl font-serif text-brand-gold/20 mb-4 block">{item.step}</span>
                <h3 className="text-lg font-medium text-brand-white mb-2">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 lg:py-32 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 lg:p-12 border border-white/5 rounded-sm bg-brand-charcoal/20">
              <HeartPulse className="text-brand-gold mb-6" size={32} />
              <h3 className="text-2xl font-serif text-brand-white mb-4">Healthcare & Clinics</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                Specialized growth systems for doctors, dental clinics, physiotherapy practices, and healthcare brands. We understand patient acquisition, trust-building, and compliance considerations.
              </p>
              <Link to="/healthcare" className="inline-flex items-center gap-1 text-sm text-brand-gold hover:text-brand-gold-light transition-colors">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
            <div className="p-8 lg:p-12 border border-white/5 rounded-sm bg-brand-charcoal/20">
              <TrendingUp className="text-brand-gold mb-6" size={32} />
              <h3 className="text-2xl font-serif text-brand-white mb-4">Growing Businesses</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                For established businesses ready to scale their digital presence. We build the brand foundation, marketing systems, and automation that turn visibility into revenue.
              </p>
              <Link to="/services" className="inline-flex items-center gap-1 text-sm text-brand-gold hover:text-brand-gold-light transition-colors">
                Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-24 lg:py-32 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">The ARAPH Difference</p>
            <h2 className="text-3xl lg:text-4xl font-serif text-brand-white mb-8">
              We connect the dots between presence, discoverability, and revenue.
            </h2>
            <p className="text-brand-gray leading-relaxed mb-12">
              Most agencies handle one piece. We design the entire system — from how your brand shows up, to how people find you, to how leads become clients, to how clients come back. Every touchpoint, connected.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {["Brand Presence", "Discoverability", "Lead Generation", "Follow-up Systems"].map((item) => (
                <div key={item} className="p-4 border border-white/5 rounded-sm">
                  <p className="text-sm text-brand-white font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-brand-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-brand-white mb-6 leading-tight">
            Let's build something<br />
            <span className="text-gradient-gold">worth talking about.</span>
          </h2>
          <p className="text-brand-gray mb-10 max-w-lg mx-auto">
            Whether you're launching a new brand, growing a healthcare practice, or scaling an established business — we're ready to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300"
          >
            Discuss Your Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

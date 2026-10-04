import { Link } from "react-router-dom";
import { ArrowRight, Monitor, TrendingUp, MapPin, HeartPulse, Palette, Zap } from "lucide-react";
import { services } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  MapPin: <MapPin size={28} />,
  HeartPulse: <HeartPulse size={28} />,
  Palette: <Palette size={28} />,
  Zap: <Zap size={28} />,
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Our Services</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            Integrated digital services<br />for measurable growth
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Every service we offer is designed to work together — creating a cohesive system that drives real business results, not just deliverables.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                to={service.path}
                className="group block p-8 lg:p-12 border border-white/5 rounded-sm bg-brand-black/50 hover:border-brand-gold/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <span className="text-brand-gold/30 text-sm font-mono">0{idx + 1}</span>
                  </div>
                  <div className="lg:col-span-1">
                    <div className="text-brand-gold group-hover:scale-110 transition-transform duration-300">
                      {iconMap[service.icon]}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <h2 className="text-xl lg:text-2xl font-serif text-brand-white group-hover:text-brand-gold transition-colors duration-300 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-brand-gray leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((f) => (
                        <span key={f} className="text-xs px-3 py-1 border border-white/10 text-brand-gray/80 rounded-sm">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="lg:col-span-1 flex justify-end">
                    <ArrowRight className="text-brand-gold/50 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-brand-gray mb-8">
            We'll help you identify the right combination of services for your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300"
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

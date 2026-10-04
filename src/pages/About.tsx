import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "../config/site";

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">About</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            About ARAPH<br />Solutions
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            A strategic digital growth partner built for businesses that want more than surface-level marketing.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-serif text-brand-white mb-6">Our Philosophy</h2>
              <p className="text-brand-gray leading-relaxed mb-6">
                ARAPH Solutions was founded on a simple belief: businesses deserve digital partners who think strategically, not just execute tactically. Too many agencies deliver websites, ads, or social posts without connecting them to actual business outcomes.
              </p>
              <p className="text-brand-gray leading-relaxed mb-6">
                We take a different approach. We start by understanding your business model, your ideal customers, and your growth goals. Then we design systems — not just deliverables — that connect your brand presence to discoverability, lead generation, and client retention.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Whether you're a healthcare practice looking to attract more patients, or a growing business ready to scale your digital presence, we bring the strategy, design, and technical expertise to make it happen.
              </p>
            </div>
            <div>
              <div className="aspect-[4/5] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                  alt="ARAPH Solutions workspace"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-serif text-brand-white mb-12 text-center">What guides our work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Strategy First", desc: "Every project begins with understanding your business, audience, and goals. We don't start designing or building until we have a clear strategic foundation." },
              { title: "Systems Thinking", desc: "We don't build isolated pieces. We design connected systems — where your website, marketing, content, and automation work together to drive growth." },
              { title: "Honest Partnership", desc: "We're transparent about what we can and cannot do. We set realistic expectations, communicate clearly, and treat your business goals as our own." },
            ].map((item) => (
              <div key={item.title} className="p-8 border border-white/5 rounded-sm">
                <h3 className="text-lg font-medium text-brand-white mb-3">{item.title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-6">Industries we serve</h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              We work primarily with healthcare practices and established businesses that are ready to invest in strategic digital growth. Our clients value quality, transparency, and long-term thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Healthcare & Clinics", "Professional Services", "Hospitality", "Real Estate", "Education", "Wellness & Fitness", "Financial Services", "E-commerce"].map((t) => (
                <span key={t} className="text-sm px-4 py-2 border border-white/10 text-brand-gray/80 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-4">Let's work together</h2>
          <p className="text-brand-gray mb-8">
            If you're looking for a digital partner who thinks strategically and delivers with precision, we'd love to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300">
            Get in Touch <ArrowRight size={16} />
          </Link>
          <p className="text-xs text-brand-gray mt-4">{siteConfig.email}</p>
        </div>
      </section>
    </>
  );
}

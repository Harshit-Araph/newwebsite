import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "../data/portfolio";

const serviceDetail = services.find(s => s.id === "branding-content")!;

export default function BrandingContent() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Service</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            Branding &<br />Content
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Strategic brand identities and content systems that communicate your value clearly and create lasting impressions with your audience.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-serif text-brand-white mb-6">What we deliver</h2>
              <ul className="space-y-4">
                {serviceDetail.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-brand-gold mt-0.5 shrink-0" size={18} />
                    <span className="text-brand-gray">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <h3 className="text-lg font-medium text-brand-white mb-4">Our approach</h3>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Branding isn't just a logo. It's the entire experience your audience has with your business — from the words you use to the colors you choose to the way you show up online.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  We develop brand strategies that define your positioning, create visual identities that feel premium and purposeful, and build content frameworks that keep your messaging consistent across every touchpoint.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80"
                  alt="Brand identity design process"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-3">Brand deliverables</h3>
                <div className="flex flex-wrap gap-2">
                  {["Logo Design", "Color System", "Typography", "Brand Voice", "Content Templates", "Social Media Kit", "Brand Guidelines"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 border border-white/10 text-brand-gray/80 rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-black">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-4">Ready to define your brand?</h2>
          <p className="text-brand-gray mb-8">Let's create a brand identity that sets you apart and communicates your value clearly.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300">
            Start Branding <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

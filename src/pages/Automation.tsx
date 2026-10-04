import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "../data/portfolio";

const serviceDetail = services.find(s => s.id === "automation")!;

export default function Automation() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Service</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            AI Workflows &<br />Automation
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Intelligent automation systems that streamline operations, nurture leads, and free your team to focus on high-value work.
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
                  Automation isn't about replacing people — it's about removing repetitive tasks so your team can focus on what matters. We identify bottlenecks in your workflow and build systems that handle them intelligently.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  From lead nurturing sequences to appointment reminders, from follow-up emails to internal process automation — we build systems that work 24/7 without burning out your team.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80"
                  alt="AI automation and workflow systems"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="mt-8 p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-3">Tools & platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["Zapier", "Make.com", "ChatGPT API", "HubSpot", "Notion", "Airtable", "Custom APIs", "n8n"].map((t) => (
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
          <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-4">Ready to automate?</h2>
          <p className="text-brand-gray mb-8">Let's identify the workflows that are slowing you down and build systems that work for you.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300">
            Explore Automation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

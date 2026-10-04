import { Link } from "react-router-dom";
import { ArrowRight, Check, HeartPulse } from "lucide-react";

export default function Healthcare() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Industry Focus</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            Healthcare Growth<br />Solutions
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Specialized digital growth systems for doctors, clinics, and healthcare practices. We combine patient acquisition, reputation management, and practice branding into one integrated system.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <HeartPulse className="text-brand-gold mb-6" size={36} />
              <h2 className="text-2xl font-serif text-brand-white mb-6">Built for healthcare practices</h2>
              <p className="text-brand-gray leading-relaxed mb-8">
                Healthcare marketing requires a different approach. Patients choose providers based on trust, reputation, and accessibility. We build systems that establish credibility, make you discoverable, and convert searches into appointments.
              </p>
              <ul className="space-y-4">
                {[
                  "Patient Acquisition Funnels",
                  "Practice Branding & Positioning",
                  "Google Business Profile for Clinics",
                  "Appointment Booking Integration",
                  "Reputation & Review Management",
                  "Compliance-Aware Web Design",
                  "Automated Patient Follow-up",
                  "Healthcare Content Strategy",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="text-brand-gold mt-0.5 shrink-0" size={18} />
                    <span className="text-brand-gray">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="aspect-[4/3] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80"
                  alt="Healthcare practice digital growth"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
              </div>
              <div className="p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-3">Who we work with</h3>
                <div className="flex flex-wrap gap-2">
                  {["Dental Clinics", "Physiotherapy", "Dermatology", "Multi-specialty", "Wellness Centers", "Diagnostic Labs", "Ayurveda", "Homeopathy"].map((t) => (
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
          <h2 className="text-2xl lg:text-3xl font-serif text-brand-white mb-4">Grow your practice with confidence</h2>
          <p className="text-brand-gray mb-8">Let's discuss how we can help your healthcare practice attract more patients and build lasting trust.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300">
            Discuss Your Practice <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

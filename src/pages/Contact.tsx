import { useState } from "react";
import { siteConfig, getWhatsAppLink, getEmailLink, getPhoneLink } from "../config/site";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  website: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate form submission
    // In production, connect to a form service like Formspree, Netlify Forms, or your own backend
    await new Promise(resolve => setTimeout(resolve, 1500));

    /**
     * FORM INTEGRATION NOTE:
     * To connect this form to a real backend:
     * 1. Sign up for Formspree (https://formspree.io) or similar service
     * 2. Replace the simulated submission with a fetch() call to your form endpoint
     * 3. Example:
     *    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     *      method: "POST",
     *      headers: { "Content-Type": "application/json" },
     *      body: JSON.stringify(formData),
     *    });
     */

    setStatus("success");
    setFormData({ name: "", email: "", company: "", service: "", budget: "", website: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Contact</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            Let's discuss<br />your project
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            Tell us about your business and goals. We'll get back to you within 24 hours to discuss how we can help.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="p-8 border border-brand-gold/30 rounded-sm bg-brand-gold/5 text-center">
                  <h3 className="text-xl font-serif text-brand-white mb-3">Thank you for reaching out</h3>
                  <p className="text-brand-gray">We've received your message and will get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-brand-gold hover:text-brand-gold-light transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-brand-black border ${errors.name ? "border-red-500" : "border-white/10"} rounded-sm text-brand-white text-sm placeholder:text-brand-gray/50 focus:border-brand-gold/50 focus:outline-none transition-colors`}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-brand-black border ${errors.email ? "border-red-500" : "border-white/10"} rounded-sm text-brand-white text-sm placeholder:text-brand-gray/50 focus:border-brand-gold/50 focus:outline-none transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-black border border-white/10 rounded-sm text-brand-white text-sm placeholder:text-brand-gray/50 focus:border-brand-gold/50 focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-black border border-white/10 rounded-sm text-brand-white text-sm placeholder:text-brand-gray/50 focus:border-brand-gold/50 focus:outline-none transition-colors"
                        placeholder="https://yoursite.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-brand-black border ${errors.service ? "border-red-500" : "border-white/10"} rounded-sm text-brand-white text-sm focus:border-brand-gold/50 focus:outline-none transition-colors`}
                      >
                        <option value="">Select a service</option>
                        <option value="website">Website Design & Development</option>
                        <option value="marketing">Digital Marketing & Growth</option>
                        <option value="local-seo">Local SEO & Google Business</option>
                        <option value="healthcare">Healthcare Growth Solutions</option>
                        <option value="branding">Branding & Content</option>
                        <option value="automation">AI Workflows & Automation</option>
                        <option value="multiple">Multiple Services</option>
                      </select>
                      {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-black border border-white/10 rounded-sm text-brand-white text-sm focus:border-brand-gold/50 focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under ₹50,000</option>
                        <option value="50k-1l">₹50,000 – ₹1,00,000</option>
                        <option value="1l-3l">₹1,00,000 – ₹3,00,000</option>
                        <option value="3l-5l">₹3,00,000 – ₹5,00,000</option>
                        <option value="above-5l">Above ₹5,00,000</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-brand-white uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-brand-black border ${errors.message ? "border-red-500" : "border-white/10"} rounded-sm text-brand-white text-sm placeholder:text-brand-gray/50 focus:border-brand-gold/50 focus:outline-none transition-colors resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>Sending... <span className="animate-spin inline-block w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full" /></>
                    ) : (
                      <>Send Message <Send size={16} /></>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Something went wrong. Please try again or contact us directly.</p>
                  )}
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-4">Or reach us directly</h3>
                <ul className="space-y-4">
                  <li>
                    <a href={getEmailLink()} className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-gold transition-colors">
                      <Mail size={16} className="text-brand-gold" /> {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <a href={getPhoneLink()} className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-gold transition-colors">
                      <Phone size={16} className="text-brand-gold" /> {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-gold transition-colors">
                      <MessageCircle size={16} className="text-brand-gold" /> WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-3">Response time</h3>
                <p className="text-sm text-brand-gray">We typically respond within 24 hours during business days.</p>
              </div>

              <div className="p-6 border border-brand-gold/20 rounded-sm bg-brand-gold/5">
                <h3 className="text-sm font-medium text-brand-white mb-3">Prefer a quick chat?</h3>
                <p className="text-sm text-brand-gray mb-4">Send us a WhatsApp message for a faster response.</p>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  <MessageCircle size={16} /> Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

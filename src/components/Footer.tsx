import { Link } from "react-router-dom";
import { siteConfig, getWhatsAppLink, getEmailLink } from "../config/site";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* CTA Band */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-serif text-brand-white mb-3">
              Ready to grow?
            </h3>
            <p className="text-brand-gray text-sm lg:text-base max-w-md">
              Let's discuss how ARAPH Solutions can help your business attract, convert, and retain more clients.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-colors duration-300"
          >
            Start a Project <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <span className="text-xl font-serif font-semibold text-brand-white">ARAPH</span>
                <span className="text-xs text-brand-gray font-light tracking-widest uppercase">Solutions</span>
              </Link>
              <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
                Strategic digital growth partner for healthcare practices and growing businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-medium text-brand-white uppercase tracking-wider mb-4">Services</h4>
              <ul className="space-y-2.5">
                <li><Link to="/services/website-development" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Website Development</Link></li>
                <li><Link to="/services/digital-marketing" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Digital Marketing</Link></li>
                <li><Link to="/services/local-seo" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Local SEO</Link></li>
                <li><Link to="/healthcare" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Healthcare Growth</Link></li>
                <li><Link to="/services/branding-content" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Branding & Content</Link></li>
                <li><Link to="/services/automation" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">AI & Automation</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-medium text-brand-white uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link to="/about" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">About</Link></li>
                <li><Link to="/work" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Selected Work</Link></li>
                <li><Link to="/contact" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium text-brand-white uppercase tracking-wider mb-4">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href={getEmailLink()} className="text-sm text-brand-gray hover:text-brand-gold transition-colors">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-gray hover:text-brand-gold transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-gray">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-xs text-brand-gray/60">
            Strategy · Design · Digital · Growth
          </p>
        </div>
      </div>
    </footer>
  );
}

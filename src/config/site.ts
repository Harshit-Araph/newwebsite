/**
 * ARAPH Solutions — Central Site Configuration
 * 
 * Update all placeholder values below before deploying.
 * Each field has a comment explaining what to replace.
 */

export const siteConfig = {
  // ─── BUSINESS IDENTITY ────────────────────────────────────────────
  businessName: "ARAPH Solutions",
  tagline: "Strategic Digital Growth Partner",
  heroHeadline: "Build a Brand That Moves Business Forward.",
  heroSubheadline: "We combine brand strategy, digital design, marketing systems, and AI-enabled workflows to help healthcare practices and growing businesses attract, convert, and retain clients.",

  // ─── CONTACT — Replace with your actual details ───────────────────
  email: "hello@araphsolutions.com",        // ← Replace with your email
  phone: "+91-XXXXXXXXXX",                  // ← Replace with your phone
  whatsapp: "+91XXXXXXXXXX",                // ← Replace with WhatsApp number (no spaces/dashes)
  
  // ─── SOCIAL LINKS — Replace with your actual URLs ─────────────────
  linkedin: "https://linkedin.com/company/araph-solutions",   // ← Replace
  instagram: "https://instagram.com/araphsolutions",          // ← Replace
  
  // ─── BOOKING / CALENDAR ───────────────────────────────────────────
  bookingUrl: "https://calendly.com/your-link",               // ← Replace with your booking link

  // ─── BASE URL — Update once you have a custom domain ──────────────
  baseUrl: "https://araphsolutions.com",                      // ← Replace with your domain

  // ─── LOGO ─────────────────────────────────────────────────────────
  logoPath: "/favicon.svg",                                   // ← Replace with your logo file path

  // ─── BRAND COLORS (used in Tailwind custom theme) ─────────────────
  colors: {
    black: "#0a0a0a",
    charcoal: "#1a1a1a",
    darkGray: "#2a2a2a",
    mediumGray: "#6b6b6b",
    lightGray: "#e5e5e5",
    offWhite: "#f5f5f3",
    white: "#ffffff",
    gold: "#c9a96e",
    goldLight: "#d4b87a",
    goldDark: "#a88a52",
  },

  // ─── SOCIAL METADATA ──────────────────────────────────────────────
  ogImage: "/og-image.jpg",  // ← Replace with your OG image (1200x630 recommended)

  // ─── WHATSAPP MESSAGE TEMPLATE ────────────────────────────────────
  whatsappMessage: "Hi ARAPH Solutions, I'd like to discuss a project.",
} as const;

// Derived helpers
export const getWhatsAppLink = () => {
  const msg = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=${msg}`;
};

export const getEmailLink = () => `mailto:${siteConfig.email}`;
export const getPhoneLink = () => `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`;

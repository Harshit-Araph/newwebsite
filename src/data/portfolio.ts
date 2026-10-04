export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  isConcept: boolean;
  slug: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "1",
    title: "Meridian Dental Clinic",
    category: "Healthcare Growth",
    description: "Brand identity, website, and local SEO strategy for a premium multi-specialty dental practice. Concept project demonstrating integrated healthcare marketing.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    tags: ["Branding", "Website", "Local SEO", "Healthcare"],
    isConcept: true,
    slug: "meridian-dental",
  },
  {
    id: "2",
    title: "Luxe Interiors Studio",
    category: "Website Development",
    description: "A sophisticated portfolio website for an interior design studio. Concept project showcasing editorial web design and smooth interactions.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    tags: ["Website", "Design", "Development"],
    isConcept: true,
    slug: "luxe-interiors",
  },
  {
    id: "3",
    title: "Vitality Wellness Center",
    category: "Digital Marketing",
    description: "Full-funnel digital marketing strategy including paid campaigns, content marketing, and conversion optimization for a wellness brand. Concept project.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    tags: ["Digital Marketing", "Strategy", "Content"],
    isConcept: true,
    slug: "vitality-wellness",
  },
  {
    id: "4",
    title: "Aether Financial Advisors",
    category: "Branding & Content",
    description: "Complete brand identity system including visual language, tone of voice, and content framework for a boutique financial advisory firm. Concept project.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tags: ["Branding", "Content", "Strategy"],
    isConcept: true,
    slug: "aether-financial",
  },
  {
    id: "5",
    title: "OrthoPlus Physiotherapy",
    category: "Healthcare Growth",
    description: "Patient acquisition system combining Google Business Profile optimization, local SEO, and automated follow-up workflows. Concept project.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["Healthcare", "Local SEO", "Automation"],
    isConcept: true,
    slug: "orthoplus-physio",
  },
  {
    id: "6",
    title: "Noir Restaurant Group",
    category: "Website Development",
    description: "Multi-location restaurant website with online reservations, menu management, and brand storytelling. Concept project demonstrating hospitality web design.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["Website", "Hospitality", "Design"],
    isConcept: true,
    slug: "noir-restaurant",
  },
];

export const services = [
  {
    id: "website-development",
    title: "Website Design & Development",
    shortTitle: "Websites",
    description: "High-performance websites built for conversion, speed, and brand presence. From single-page sites to complex multi-page platforms.",
    features: ["Custom Design", "Responsive Development", "CMS Integration", "Performance Optimization", "SEO-Ready Architecture"],
    icon: "Monitor",
    path: "/services/website-development",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    shortTitle: "Marketing",
    description: "Data-driven marketing strategies that connect your brand with the right audience and convert attention into measurable business growth.",
    features: ["Paid Advertising", "Content Strategy", "Conversion Optimization", "Analytics & Reporting", "Funnel Development"],
    icon: "TrendingUp",
    path: "/services/digital-marketing",
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Business",
    shortTitle: "Local SEO",
    description: "Dominate local search results and Google Maps. We optimize your Google Business Profile and local presence to attract nearby clients.",
    features: ["Google Business Profile", "Local Search Optimization", "Review Management", "Citation Building", "Local Content Strategy"],
    icon: "MapPin",
    path: "/services/local-seo",
  },
  {
    id: "healthcare",
    title: "Healthcare Growth Solutions",
    shortTitle: "Healthcare",
    description: "Specialized digital growth systems for doctors, clinics, and healthcare practices. Patient acquisition, retention, and reputation management.",
    features: ["Patient Acquisition", "Practice Branding", "Appointment Systems", "Reputation Management", "Compliance-Aware Design"],
    icon: "HeartPulse",
    path: "/healthcare",
  },
  {
    id: "branding-content",
    title: "Branding & Content",
    shortTitle: "Branding",
    description: "Strategic brand identities and content systems that communicate your value clearly and create lasting impressions with your audience.",
    features: ["Brand Strategy", "Visual Identity", "Content Creation", "Brand Guidelines", "Messaging Framework"],
    icon: "Palette",
    path: "/services/branding-content",
  },
  {
    id: "automation",
    title: "AI Workflows & Automation",
    shortTitle: "Automation",
    description: "Intelligent automation systems that streamline operations, nurture leads, and free your team to focus on high-value work.",
    features: ["Lead Nurturing", "Workflow Automation", "AI Integration", "CRM Setup", "Process Optimization"],
    icon: "Zap",
    path: "/services/automation",
  },
];

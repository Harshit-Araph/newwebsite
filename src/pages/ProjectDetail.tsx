import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "../data/portfolio";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = portfolioProjects.findIndex(p => p.slug === slug);
  const nextProject = portfolioProjects[(currentIndex + 1) % portfolioProjects.length];

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-brand-gray hover:text-brand-gold transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          {project.isConcept && (
            <span className="inline-block text-xs uppercase tracking-wider text-brand-gold/70 mb-3 border border-brand-gold/20 px-3 py-1 rounded-sm">
              Concept / Demonstration Project
            </span>
          )}
          <p className="text-xs text-brand-gold/80 uppercase tracking-wider mb-2">{project.category}</p>
          <h1 className="text-3xl lg:text-5xl font-serif text-brand-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="aspect-[21/9] bg-brand-charcoal rounded-sm overflow-hidden border border-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-serif text-brand-white mb-6">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-brand-gray leading-relaxed mb-4">
                  This concept project demonstrates our approach to {project.category.toLowerCase()} — combining strategic thinking with clean execution to create meaningful digital experiences.
                </p>
                <p className="text-brand-gray leading-relaxed mb-4">
                  The design prioritizes clarity, brand consistency, and user experience. Every element serves a purpose — from the visual hierarchy to the content structure to the interaction patterns.
                </p>
                <p className="text-brand-gray leading-relaxed">
                  While this is a demonstration project, it reflects the same standards and methodology we apply to every client engagement.
                </p>
              </div>
            </div>
            <div>
              <div className="p-6 border border-white/5 rounded-sm bg-brand-black/50">
                <h3 className="text-sm font-medium text-brand-white mb-4">Project Details</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-xs text-brand-gray uppercase tracking-wider">Category</dt>
                    <dd className="text-sm text-brand-white mt-0.5">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-gray uppercase tracking-wider">Type</dt>
                    <dd className="text-sm text-brand-white mt-0.5">Concept Project</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-brand-gray uppercase tracking-wider">Services</dt>
                    <dd className="mt-1 flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 border border-white/10 text-brand-gray/80 rounded-sm">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 bg-brand-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to={`/work/${nextProject.slug}`} className="group block">
            <p className="text-xs text-brand-gray uppercase tracking-wider mb-3">Next Project</p>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-serif text-brand-white group-hover:text-brand-gold transition-colors duration-300">
                {nextProject.title}
              </h3>
              <ArrowUpRight className="text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={24} />
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif text-brand-white mb-4">Have a similar project?</h2>
          <p className="text-brand-gray mb-8">Let's discuss how we can help bring your vision to life.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black text-sm font-medium rounded-sm hover:bg-brand-gold-light transition-all duration-300">
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}

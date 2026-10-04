import { Link } from "react-router-dom";
import { portfolioProjects } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Work() {
  return (
    <>
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-4">Portfolio</p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-brand-white mb-6 leading-tight">
            Selected Work
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl leading-relaxed">
            A collection of projects that demonstrate our approach to strategy, design, and digital growth. All projects are labeled as concept or demonstration work.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioProjects.map((project) => (
              <Link
                key={project.id}
                to={`/work/${project.slug}`}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[16/10] overflow-hidden bg-brand-charcoal">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  {project.isConcept && (
                    <span className="inline-block text-[10px] uppercase tracking-wider text-brand-gold/70 mb-2">
                      Concept Project
                    </span>
                  )}
                  <p className="text-xs text-brand-gold/80 uppercase tracking-wider mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-serif text-brand-white group-hover:text-brand-gold transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-gray line-clamp-2">{project.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-brand-gold mt-3 font-medium uppercase tracking-wider">
                    View Project <ArrowUpRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

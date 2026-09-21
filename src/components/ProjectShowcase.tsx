import React, { useState } from 'react';
import { Eye, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../data/content';
import { ProjectLightbox } from './ProjectLightbox';

type FilterCategory = 'All' | 'Landscaping' | 'Brickwork' | 'Paving' | 'Outdoor Areas';

interface ProjectShowcaseProps {
  onEnquireProject: (projectName: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onEnquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Landscaping',
    'Brickwork',
    'Paving',
    'Outdoor Areas'
  ];

  const filteredProjects = activeFilter === 'All'
    ? SHOWCASE_PROJECTS
    : SHOWCASE_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-[#FAF9F7] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Context */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Project Portfolio</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight">
            Our Workmanship &amp; Gallery
          </h2>

          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Take a look through our completed residential paving, boundary brickwork, retaining walls, and custom outdoor living upgrades across Melbourne's western suburbs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 active:scale-95 ${
                activeFilter === category
                  ? 'bg-[#171A19] text-[#FAF8F2] shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
              id={`filter-btn-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 flex flex-col cursor-pointer group"
              id={`showcase-card-${project.id}`}
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Suburb badge */}
                <div className="absolute top-3 left-3 bg-[#171A19]/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                  {project.suburbContext}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-semibold text-xs">
                  <Eye className="w-4 h-4 text-[#E3C66B]" />
                  <span>View Project Details</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A87F1B] bg-[#FCF9EE] px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-medium text-stone-600">
                      {project.suburbContext}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[#171A19] leading-snug group-hover:text-[#A87F1B] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-600">
                  <span>Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#171A19] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={onEnquireProject}
      />
    </section>
  );
};

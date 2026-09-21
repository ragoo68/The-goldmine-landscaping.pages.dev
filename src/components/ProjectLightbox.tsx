import React, { useEffect } from 'react';
import { X, ArrowRight, Check, MapPin, Sparkles } from 'lucide-react';
import { ShowcaseProject } from '../data/content';

interface ProjectLightboxProps {
  project: ShowcaseProject | null;
  onClose: () => void;
  onEnquire: (projectTitle: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onEnquire
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        id="project-lightbox-modal"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors"
          aria-label="Close project modal"
          id="close-lightbox-btn"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Main Image Banner */}
          <div className="relative w-full h-72 sm:h-96 bg-stone-900">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"></div>

            {/* Quality Badge */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#E3C66B] text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
              Gold Mine Workmanship
            </div>

            {/* Category Pill */}
            <div className="absolute bottom-4 left-4 sm:left-6">
              <span className="bg-[#C59B27] text-[#171A19] font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#171A19]">
                {project.title}
              </h3>
              <span className="text-sm font-semibold text-stone-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C59B27]" />
                {project.suburbContext}
              </span>
            </div>

            <p className="text-stone-600 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Project highlights */}
            <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                <span>Trade Considerations &amp; Specifications</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
              <p className="text-xs text-stone-500 text-center sm:text-left">
                Planning similar work for your property in Melbourne's west?
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#171A19] text-white hover:bg-[#2A332E] font-semibold text-sm transition-colors shadow-sm"
                id="lightbox-enquire-btn"
              >
                <span>Enquire About Similar Work</span>
                <ArrowRight className="w-4 h-4 text-[#E3C66B]" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

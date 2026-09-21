import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  suburb: string;
  preferredContact: string;
  details: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  details?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselected
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Landscaping',
    suburb: '',
    preferredContact: 'Phone Call',
    details: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Sync preselected service if passed
  useEffect(() => {
    if (preselectedService) {
      // Map to closest option or default
      const allowed = ['Landscaping', 'Bricklaying', 'Paving', 'Retaining Wall', 'Garden Construction', 'Other'];
      const matched = allowed.find(a => preselectedService.toLowerCase().includes(a.toLowerCase())) || 'Other';
      setFormData(prev => ({ ...prev, projectType: matched }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name';
    }

    // Phone validation (Australian formats e.g. 04xx or +61)
    const phoneClean = formData.phone.replace(/[\s()-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Please provide a contact phone number';
    } else if (phoneClean.length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.projectType) {
      errs.projectType = 'Please select a project type';
    }

    if (!formData.details.trim() || formData.details.trim().length < 10) {
      errs.details = 'Please briefly outline what you would like done (min 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Process validated quote enquiry
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
    if (onClearPreselected) onClearPreselected();
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: 'Landscaping',
      suburb: '',
      preferredContact: 'Phone Call',
      details: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#171A19] tracking-tight">
            Let's Talk About Your Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            Reach out via phone, send a WhatsApp message, or complete our enquiry form below to discuss your landscaping and brickwork requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Business Details & Quick CTAs */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Business Contact Card */}
            <div className="bg-[#FAF9F7] rounded-2xl border border-stone-200/90 p-6 sm:p-7 shadow-sm">
              <div className="mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A87F1B] bg-[#FCF9EE] px-2.5 py-1 rounded">
                  Direct Contact
                </span>
                <h3 className="font-display text-xl font-bold text-[#171A19] mt-3">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-stone-600 text-sm mt-1">
                  Professional Landscaping &amp; Bricklaying
                </p>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="space-y-3 mb-6">
                {/* Phone Call button */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-[#171A19] text-white hover:bg-[#2A332E] transition-all shadow-sm group"
                  id="contact-call-direct-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#E3C66B]">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-stone-300 font-medium">Call Us Directly</div>
                      <div className="text-base font-bold text-white">{BUSINESS_INFO.phone}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#E3C66B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* WhatsApp Chat button */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 hover:bg-emerald-100 transition-all group"
                  id="contact-whatsapp-direct-btn"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-emerald-700 font-medium">Chat on WhatsApp</div>
                      <div className="text-base font-bold text-emerald-900">+61 414 297 786</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Service Location Details */}
              <div className="pt-5 border-t border-stone-200 space-y-3.5 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Service Area</div>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      Werribee and surrounding Melbourne western suburbs, Victoria, Australia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2D5A3C] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900">Consultation &amp; Quoting</div>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      Call or message to schedule an on-site consultation and project assessment.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Direct Trade Guarantee Notice */}
            <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-200 text-xs text-stone-600 leading-relaxed">
              <span className="font-bold text-stone-900">Direct Trade Guarantee:</span> All enquiries are reviewed directly by our tradesmen. We inspect your property in person and provide a transparent, itemised quote with zero obligations.
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
              
              {isSubmitted ? (
                /* Success State */
                <div className="py-6 text-center animate-in fade-in duration-200" id="quote-submission-success">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-stone-900 mb-2">
                    Quote Request Received!
                  </h3>

                  <p className="text-stone-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you <strong className="text-stone-900">{submittedData?.fullName}</strong>. We have received your project details and will be in touch shortly. For an immediate reply, you can also send this quote directly to us on WhatsApp.
                  </p>

                  <div className="bg-[#FAF9F7] rounded-xl p-4 border border-stone-200 text-left max-w-md mx-auto text-xs space-y-2 mb-6 text-stone-700">
                    <div className="font-bold text-stone-900 border-b border-stone-200 pb-1 mb-2">
                      Quote Request Summary:
                    </div>
                    <div><span className="text-stone-500">Service:</span> {submittedData?.projectType}</div>
                    <div><span className="text-stone-500">Phone:</span> {submittedData?.phone}</div>
                    <div><span className="text-stone-500">Email:</span> {submittedData?.email}</div>
                    <div><span className="text-stone-500">Preferred Contact:</span> {submittedData?.preferredContact}</div>
                    <div><span className="text-stone-500">Details:</span> {submittedData?.details}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Gold Mine Landscaping, I submitted a quote request for ${submittedData?.projectType}. Name: ${submittedData?.fullName}, Phone: ${submittedData?.phone}. Details: ${submittedData?.details}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:bg-[#20bd5a] transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneClean}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171A19] text-white text-sm font-semibold hover:bg-stone-800"
                    >
                      <Phone className="w-4 h-4 text-[#E3C66B]" />
                      <span>Call {BUSINESS_INFO.phoneLocal}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-sm font-semibold hover:bg-stone-50"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5" id="quote-request-form">
                  <div className="border-b border-stone-100 pb-3 mb-2">
                    <h3 className="font-display text-xl font-bold text-stone-900">
                      Request a Project Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                      Fill out your details below and we will get back to you to discuss your project.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-fullName" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-fullName"
                        type="text"
                        placeholder="e.g. David Mitchell"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                          errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-stone-300 bg-white'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        placeholder="e.g. 0414 297 786"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-stone-300 bg-white'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Suburb */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="e.g. david@example.com.au"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                          errors.email ? 'border-red-400 bg-red-50/30' : 'border-stone-300 bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="form-suburb" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Property Suburb (Melbourne West)
                      </label>
                      <input
                        id="form-suburb"
                        type="text"
                        placeholder="e.g. Werribee / Point Cook"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                      />
                    </div>
                  </div>

                  {/* Project Type & Preferred Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-projectType" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="form-projectType"
                        value={formData.projectType}
                        onChange={(e) => {
                          setFormData({ ...formData, projectType: e.target.value });
                          if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                      >
                        <option value="Landscaping">Landscaping</option>
                        <option value="Bricklaying">Bricklaying</option>
                        <option value="Paving">Paving</option>
                        <option value="Retaining Wall">Retaining Wall</option>
                        <option value="Garden Construction">Garden Construction</option>
                        <option value="Other">Other Outdoor Improvements</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="form-preferredContact" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        id="form-preferredContact"
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40"
                      >
                        <option value="Phone Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                        <option value="Text Message">Text Message</option>
                        <option value="Email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="form-details" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="form-details"
                      rows={4}
                      placeholder="Please describe your project (e.g. approximate area, paving or brickwork required, front yard or backyard layout, site access)..."
                      value={formData.details}
                      onChange={(e) => {
                        setFormData({ ...formData, details: e.target.value });
                        if (errors.details) setErrors({ ...errors, details: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 ${
                        errors.details ? 'border-red-400 bg-red-50/30' : 'border-stone-300 bg-white'
                      }`}
                    ></textarea>
                    {errors.details && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#171A19] text-[#FAF8F2] hover:bg-[#28302C] font-bold text-base transition-all shadow-sm active:scale-98"
                      id="submit-enquiry-btn"
                    >
                      <Send className="w-4 h-4 text-[#E3C66B]" />
                      <span>Send Enquiry</span>
                    </button>
                    <p className="text-[11px] text-stone-500 text-center mt-2.5">
                      Your details are handled directly for quoting purposes. No spam.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

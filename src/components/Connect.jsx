import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@fontsource/nunito';
import '@fontsource/poppins';

const Connect = () => {
  const [formData, setFormData] = useState({
    budget: "",
    timeline: "",
    medium: "",
    inquiry: "",
    name: "",
    organization: "",
    email: "",
    phone: "",
    countryCode: "+91",
    preferredContact: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const isWhitespaceOnly = (str) => !str || !str.trim();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (!touchedFields[name]) {
      setTouchedFields((prev) => ({ ...prev, [name]: true }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const validatePhoneNumber = (phone, countryCode) => {
    if (!phone) return "Phone number is required";
    if (!countryCode) return "Country code is required";
    if (!/^\d+$/.test(phone)) return "Phone number can only contain digits";

    const phoneLength = phone.length;
    switch (countryCode) {
      case '+1': return phoneLength === 10 ? "" : "US/Canada numbers must be 10 digits";
      case '+44': return phoneLength >= 9 && phoneLength <= 10 ? "" : "UK numbers must be 9-10 digits";
      case '+91': return phoneLength === 10 ? "" : "Indian numbers must be 10 digits";
      case '+61': return phoneLength === 9 ? "" : "Australian numbers must be 9 digits";
      case '+81': return phoneLength >= 9 && phoneLength <= 11 ? "" : "Japanese numbers must be 9-11 digits";
      case '+49': return phoneLength >= 10 && phoneLength <= 11 ? "" : "German numbers must be 10-11 digits";
      case '+33': return phoneLength === 9 ? "" : "French numbers must be 9 digits";
      case '+39': return phoneLength >= 9 && phoneLength <= 10 ? "" : "Italian numbers must be 9-10 digits";
      case '+34': return phoneLength === 9 ? "" : "Spanish numbers must be 9 digits";
      case '+86': return phoneLength === 11 ? "" : "Chinese numbers must be 11 digits";
      case '+55': return phoneLength === 10 || phoneLength === 11 ? "" : "Brazilian numbers must be 10-11 digits";
      case '+7': return phoneLength === 10 ? "" : "Russian numbers must be 10 digits";
      case '+27': return phoneLength === 9 ? "" : "South African numbers must be 9 digits";
      case '+82': return phoneLength >= 9 && phoneLength <= 11 ? "" : "Korean numbers must be 9-11 digits";
      case '+65': return phoneLength === 8 ? "" : "Singaporean numbers must be 8 digits";
      case '+66': return phoneLength === 9 ? "" : "Thai numbers must be 9 digits";
      case '+60': return phoneLength >= 9 && phoneLength <= 10 ? "" : "Malaysian numbers must be 9-10 digits";
      default: return phoneLength >= 8 && phoneLength <= 15 ? "" : "Phone number must be 8-15 digits";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.inquiry) newErrors.inquiry = "Purpose of enquiry is required.";
    if (isWhitespaceOnly(formData.name)) {
      newErrors.name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name contains invalid characters";
    }
    if (isWhitespaceOnly(formData.organization)) newErrors.organization = "Organization is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    const phoneError = validatePhoneNumber(formData.phone, formData.countryCode);
    if (phoneError) newErrors.phone = phoneError;
    if (isWhitespaceOnly(formData.medium)) newErrors.medium = "How did you hear about us is required.";
    if (isWhitespaceOnly(formData.message)) {
      newErrors.message = "Message is required.";
    }
    if (!formData.consent) newErrors.consent = "You must consent to the privacy policy.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouchedFields({
      inquiry: true,
      name: true,
      organization: true,
      email: true,
      phone: true,
      countryCode: true,
      medium: true,
      message: true,
      consent: true,
      preferredContact: true,
      timeline: true,
      budget: true,
    });

    const trimmedFormData = {
      ...formData,
      name: formData.name.trim(),
      organization: formData.organization.trim(),
      medium: formData.medium.trim(),
      message: formData.message.trim(),
    };

    setFormData(trimmedFormData);
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please correct the errors in the form.");
      const firstErrorField = Object.keys(validationErrors)[0];
      document.querySelector(`[name="${firstErrorField}"]`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycby9I9Ou6d8rzN1oEO9qRH4_-Kp7bjqhBy5JrMw4pGCVbipDAdPtmGmSEotWLVoP5VJqNg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...trimmedFormData,
            fullPhoneNumber: `${trimmedFormData.countryCode}${trimmedFormData.phone}`,
          }),
        }
      );

      toast.success("Form submitted successfully!");
      setFormData({
        budget: "",
        timeline: "",
        medium: "",
        inquiry: "",
        name: "",
        organization: "",
        email: "",
        phone: "",
        countryCode: "+91",
        preferredContact: "",
        message: "",
        consent: false,
      });
      setTouchedFields({});
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const shouldShowError = (fieldName) => {
    return (touchedFields[fieldName] || isSubmitting) && errors[fieldName];
  };

  return (
    <div>
      <div className="pt-[140px] lg:mt-[84px] relative w-full min-h-screen bg-[#121212] font-sans
       text-white px-0 sm:px-4 lg:px-8 pb-0 lg:pt-16 lg:pb-16">
        <ToastContainer position="top-center" autoClose={5000} />

        {/* Main container with flex layout for all screen sizes */}
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 max-w-7xl mx-auto">

          {/* Branding Section - visible on all screens */}
          <div className=" w-full xl:max-w-[476px] md:rounded-[10px] bg-[#9A8DA0] 
            flex flex-col justify-center items-center xl:items-start px-4 py-6 xl:px-[32px] xl:py-[80px] 
            animate-[brandingPulseDesktop_15s_ease-in-out_infinite] 
            xl:animate-[brandingPulseMobile_15s_ease-in-out_infinite]">
            <p className="font-['Poppins'] font-bold text-xl sm:text-2xl md:text-3xl xl:text-[22px] mb-4 xl:mb-[32px] 
            tracking-wide sm:tracking-wider md:tracking-[10px] xl:tracking-[10px] 
            animate-[brainstormAnim_10s_ease-in-out_infinite] text-shadow-[4px_4px_6px_rgba(255,255,255,0.5)]">BRAINSTORM.</p>
            <p className="font-['Poppins'] font-bold text-xl sm:text-2xl md:text-3xl xl:text-[30px] mb-4 
            xl:mb-[32px] tracking-wide sm:tracking-wider md:tracking-[10px] xl:tracking-[10px] 
            animate-[buildAnim_10s_ease-in-out_infinite] text-shadow-[4px_4px_6px_rgba(255,255,255,0.5)]">BUILD.</p>
            <p className="font-['Poppins'] font-bold text-xl sm:text-2xl md:text-3xl xl:text-[36px]
             mb-4 xl:mb-[24px] tracking-wide sm:tracking-wider md:tracking-[10px] xl:tracking-[10px] 
             animate-[breakthroughAnim_10s_ease-in-out_infinite] text-shadow-[4px_4px_6px_rgba(255,255,255,0.5)] pb-[82px]">BREAKTHROUGH.</p>
            <p className="font-['Nunito'] font-bold text-xs sm:text-sm md:text-base xl:text-[24px] 
            opacity-40 xl:leading-[46px] xl:tracking-[7px] animate-[rolloutAnim_10s_ease-in-out_infinite]">Reach Out & 
            <br />
            Let's Roll</p>
          </div>

          {/* Right Form Section - visible on all screens */}
          <div className="w-full flex justify-center">
            <form className="w-full h-auto bg-[#2c2c2c] rounded-[8px] p-6 lg:p-8"
              onSubmit={handleSubmit}
              noValidate
            >
              <h2 className="font-['Poppins'] w-full lg:w-[383px] leading-[100%] text-2xl lg:text-[24px] font-bold mb-8">
                We would love to hear from you
              </h2>
              {/* Inquiry & Name */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                    Purpose of Enquiry *
                  </label>
                  <div className="relative">
                    <select
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`opacity-[0.54] appearance-none w-full py-3 px-3 lg:py-[13px] lg:px-[13px] pr-10 border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-100 ${formData.inquiry === "" ? "text-[#aaa]" : ""} ${shouldShowError('inquiry') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                    >
                      <option value="" disabled hidden>Purpose of Enquiry</option>
                      <option value="general">General Inquiry</option>
                      <option value="consultation">Project Consultation</option>
                      <option value="new-idea">New Idea</option>
                      <option value="ai">AI Product Development</option>
                      <option value="saas">SaaS / Platform Development</option>
                      <option value="design">Design</option>
                      <option value="uiux">UI/UX Support</option>
                      <option value="automation">Automation / Workflow Solutions</option>
                      <option value="partnership">Partnership or Collaboration</option>
                      <option value="support">Technical Support / Issue</option>
                      <option value="careers">Careers</option>
                      <option value="internships">Internships</option>
                      <option value="other">Other</option>
                    </select>
                    {/* Dropdown arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white opacity-50">
                      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="None" stroke="currentColor">
                        <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {shouldShowError('inquiry') && <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">{errors.inquiry}</span>}
                </div>
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    aria-label="Name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                    className={`py-3 px-3 lg:py-[13px] lg:px-[13px] border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] placeholder:text-[#aaa] ${shouldShowError('name') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                  />
                  {shouldShowError('name') && <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">{errors.name}</span>}
                </div>
              </div>
              {/* Organization & Email */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">Organization *</label>
                  <input
                    type="text"
                    name="organization"
                    placeholder="Enter your Organization"
                    value={formData.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`py-3 px-3 lg:py-[13px] lg:px-[13px] border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] placeholder:text-[#aaa] ${shouldShowError('organization') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                  />
                  {shouldShowError('organization') && <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">{errors.organization}</span>}
                </div>
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Address"
                    aria-label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`py-3 px-3 lg:py-[13px] lg:px-[13px] border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] placeholder:text-[#aaa] ${shouldShowError('email') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                  />
                  {shouldShowError('email') && <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">{errors.email}</span>}
                </div>
              </div>
              {/* How did you hear + Budget */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">How did you hear about us? *</label>
                  <div className="relative">
                    <select
                      name="medium"
                      value={formData.medium}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`opacity-[0.54] appearance-none w-full py-3 px-3 lg:py-[13px] lg:px-[13px] pr-10 border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal ${formData.medium === "" ? "text-[#aaa]" : ""} ${shouldShowError('medium') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                    >
                      <option value="" disabled hidden>How did you hear about us?</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="instagram">Instagram</option>
                      <option value="facebook">Facebook</option>
                      <option value="google">Google</option>
                      <option value="reference">Reference</option>
                      <option value="chatgpt">ChatGPT</option>
                      <option value="event">Event</option>
                      <option value="search-engine">Search Engine</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white opacity-50">
                      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="None" stroke="currentColor">
                        <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {shouldShowError('medium') && <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">{errors.medium}</span>}
                </div>
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                    Estimated Budget (Optional)
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`opacity-[0.54] appearance-none w-full py-3 px-3 lg:py-[13px] lg:px-[13px] pr-10 border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal ${formData.budget === "" ? "text-[#aaa]" : ""}`}
                    >
                      <option value="" disabled hidden>Estimated Budget</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-5000">$1,000 – $5,000</option>
                      <option value="5000-10000">$5,000 – $10,000</option>
                      <option value="10000-plus">$10,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white opacity-50">
                      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="None" stroke="currentColor">
                        <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline & Preferred Contact */}
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-6">
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                    Timeline / Urgency (Optional)
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`opacity-[0.54] appearance-none w-full py-3 px-3 lg:py-[13px] lg:px-[13px] pr-10 border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal ${formData.timeline === "" ? "text-[#aaa]" : ""} `}
                    >
                      <option value="" disabled hidden>How soon do you need this?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1–2 weeks</option>
                      <option value="1-month">1 month</option>
                      <option value="1-3-months">1–3 months</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white opacity-50">
                      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="None" stroke="currentColor">
                        <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:flex-1 flex flex-col">
                  <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                    Preferred Contact Method & Time
                  </label>
                  <input
                    type="text"
                    name="preferredContact"
                    placeholder="Email, Phone, or WhatsApp & time"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`py-3 px-3 lg:py-[13px] lg:px-[13px] border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] placeholder:text-[#aaa] `}
                  />
                </div>
              </div>
              {/* Phone */}
              <div className="w-full lg:flex-1 flex flex-col mb-6">
                <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                  Phone Number *
                </label>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <div className="relative w-full sm:w-[90px] md:w-[200px]">
                    <select
                      name="countryCode"
                      value={formData.countryCode || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`appearance-none py-3 px-4 border-none rounded-[10px] sm:rounded-r-none sm:rounded-l-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] w-full pr-10 ${shouldShowError('phone') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                    >
                      <option value="">Select Code</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (India)</option>
                      <option value="+61">+61 (Aus)</option>
                      <option value="+81">+81 (Japan)</option>
                      <option value="+49">+49 (Ger)</option>
                      <option value="+33">+33 (Fra)</option>
                      <option value="+39">+39 (Italy)</option>
                      <option value="+34">+34 (Spain)</option>
                      <option value="+86">+86 (China)</option>
                      <option value="+55">+55 (Brazil)</option>
                      <option value="+7">+7 (Rus)</option>
                      <option value="+1">+1 (USA)</option>
                      <option value="+27">+27 (South Africa)</option>
                      <option value="+82">+82 (South Korea)</option>
                      <option value="+65">+65 (Singapore)</option>
                      <option value="+66">+66 (Thailand)</option>
                      <option value="+60">+60 (Malaysia)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white opacity-50">
                      <svg className="w-6 h-6" viewBox="0 0 20 20" fill="None" stroke="currentColor">
                        <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onInput={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))}
                    title="Please enter a valid phone number"
                    className={`py-3 px-3 border-none rounded-[10px] sm:rounded-l-none sm:rounded-r-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] w-full ${shouldShowError('phone') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                  />
                </div>
                {shouldShowError('phone') && (
                  <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">
                    {errors.phone}
                  </span>
                )}
              </div>
              {/* Message */}
              <div className="w-full mb-6 flex flex-col">
                <label className="font-['Nunito'] text-base lg:text-[16px] font-normal mb-2 lg:mb-[10px] text-[#f5f5f5] opacity-[0.87]">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Enter Your Message ....."
                  aria-label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`py-3 px-3 lg:py-[13px] lg:px-[13px] border-none rounded-[10px] bg-[#6c6c6c] text-white text-base lg:text-[16px] font-['Nunito'] font-normal opacity-[0.54] placeholder:text-[#aaa] h-[124px] resize-none ${shouldShowError('message') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                ></textarea>
                {shouldShowError('message') && (
                  <span className="text-red-500 text-sm lg:text-[0.8rem] mt-1 lg:mt-[0.25rem] block">
                    {errors.message}
                  </span>
                )}
              </div>
              {/* Consent & Submit */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <div className="flex items-center gap-2 lg:gap-[10px] flex-wrap">
                  <input
                    type="checkbox"
                    id="privacy-policy"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-5 h-5 m-0 ${shouldShowError('consent') ? 'border-red-500 shadow-[0_0_0_1px_#ff4444]' : ''}`}
                  />
                  <label htmlFor="privacy-policy" className="font-['Nunito'] text-base lg:text-[16px] font-normal text-[#f5f5f5] opacity-[0.87]">
                    I consent to the privacy policy
                  </label>
                  {shouldShowError('consent') && <span className="text-red-500 text-sm lg:text-[0.8rem] block w-full lg:w-auto lg:ml-[1.5rem]">{errors.consent}</span>}
                </div>
                <button
                  type="submit"
                  className="w-full lg:w-[145px] h-[57px] relative bg-none border-2 border-[#9d9a9a] rounded-[12px] cursor-pointer flex items-center justify-center overflow-hidden transition-[background_0.3s_ease] hover:bg-[#9A8DA0] disabled:opacity-[0.7] disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.33)] rounded-[12px] opacity-[0.33] z-0"></span>
                  <span className="font-['Nunito'] text-xl lg:text-[24px] font-bold text-[#f5f5f5] relative z-[1] opacity-[1]">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style>{`

              @keyframes brandingPulseMobile {
            0% {
              height: 475px;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
            3% {
              height: 897px;
              background: #9A8DA0;
              color: white;
              opacity: 0.75;
            }
            5% {
              height: 801px;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            7% {
              height: 881px;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            9% {
              height: 892px;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            75% {
              height: 892px;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            85% {
              height: 475px;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
            100% {
              height: 475px;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
          }

          @keyframes brandingPulseDesktop {
            0% {
              height: auto;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
            3% {
              height: auto;
              background: #9A8DA0;
              color: white;
              opacity: 0.75;
            }
            5% {
              height: auto;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            7% {
              height: auto;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            9% {
              height: auto;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            75% {
              height: auto;
              background: #EDECE9;
              color: #121212;
              opacity: 0.96;
            }
            85% {
              height: auto;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
            100% {
              height: auto;
              background: #9A8DA0;
              color: white;
              opacity: 0.65;
            }
          }  
                  @keyframes brainstormAnim {
          0% {
            font-size: 22px;
            color: #EDECE9;
          }
          3% {
            font-size: 54px;
            color: #121212;
            text-shadow: 2px 54px 2px rgba(0, 0, 0, 0.5);
          }
          5% {
            font-size: 42px;
            color: #121212;
            text-shadow: none;
          }
          7% {
            font-size: 46px;
            color: #121212;
            text-shadow: 2px 46px 2px rgba(0, 0, 0, 0.5);
          }
          9% {
            font-size: 48px;
            color: #121212;
            text-shadow: none;
          }
          75% {
            font-size: 48px;
            color: #121212;
          }
          85% {
            font-size: 24px;
            color: #EDECE9;
          }
          100% {
            font-size: 24px;
            color: #EDECE9;
          }
        }

        @keyframes buildAnim {
          0% {
            font-size: 30px;
            color: #EDECE9;
          }
          3% {
            font-size: 50px;
            color: #121212;
            text-shadow: 2px 10px 2px rgba(0, 0, 0, 0.5);
          }
          5% {
            font-size: 35px;
            color: #121212;
            text-shadow: none;
          }
          7% {
            font-size: 42px;
            color: #121212;
            text-shadow: 2px -2px 2px rgba(0, 0, 0, 0.5);
          }
          9% {
            font-size: 40px;
            color: #121212;
            text-shadow: none;
          }
          75% {
            font-size: 40px;
            color: #121212;
          }
          85% {
            font-size: 30px;
            color: #EDECE9;
          }
          100% {
            font-size: 30px            font-size: 30px;
            color: #EDECE9;
          }
        }

        @keyframes breakthroughAnim {
          0% {
            font-size: 36px;
            color: #EDECE9;
          }
          3% {
            font-size: 46px;
            color: #121212;
            text-shadow: 2px 10px 2px rgba(0, 0, 0, 0.5);
          }
          5% {
            font-size: 38px;
            color: #121212;
            text-shadow: none;
          }
          7% {
            font-size: 30px;
            color: #121212;
            text-shadow: 2px -5px 2px rgba(0, 0, 0, 0.5);
          }
          9% {
            font-size: 32px;
            color: #121212;
            text-shadow: none;
          }
          75% {
            font-size: 32px;
            color: #121212;
          }
          85% {
            font-size: 36px;
            color: #EDECE9;
          }
          100% {
            font-size: 36px;
            color: #EDECE9;
          }
        }

        @keyframes rolloutAnim {
          0% {
            opacity: 0;
            transform: translateY(20px);
            color: #EDECE9;
          }
          3% {
            opacity: 0.6;
            transform: translateY(0);
            color: #121212;
          }
          5% {
            opacity: 0.6;
            transform: translateY(0);
            color: #121212;  
          }
          7% {
            opacity: 0.6;
            transform: translateY(0);
            color: #121212;
          }
          9% {
            opacity: 0.6;
            transform: translateY(0);
            color: #121212;
          }
          75% {
            opacity: 0.6;
            transform: translateY(0);
            color: #121212;
          }
          83% {
            opacity: 0;
            transform: translateY(20px);
            color: #EDECE9;
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
            color: #EDECE9;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1279px) {
          .flex-col.xl\\:flex-row {
            flex-direction: column;
          }
          
          .xl\\:max-w-\\[476px\\] {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .animate-\\[brandingPulse_30s_ease-in-out_infinite\\] {
            padding: 2rem 1rem;
          }
          
          .font-\\['Poppins'\\] {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Connect;
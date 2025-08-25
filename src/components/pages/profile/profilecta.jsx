import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";

// Import your images
import SpeedIcon from "../../../assets/clientsuccess/rocket.png";
import AiIcon from "../../../assets/clientsuccess/aibrain.png";
import DesignIcon from "../../../assets/clientsuccess/humanfirst.png";
import OwnershipIcon from "../../../assets/clientsuccess/leaderboard.png";
import HandshakeIcon from "../../../assets/clientsuccess/handshake.png";
import Arrow from "../../../assets/clientsuccess/arrow-icon.png";
import calender from "../../../assets/clientsuccess/calender.png";
import Cloud from "../../../assets/clientsuccess/cloud-upload.png";

const features = [
  {
    image: SpeedIcon,
    title: "Speed to Scale",
    description: "CI/CD pipelines, rapid deployments",
  },
  {
    image: AiIcon,
    title: "AI Inside",
    description: "Embedded ML models and automations",
  },
  {
    image: DesignIcon,
    title: "Human-First Design",
    description: "UI/UX that converts, not just looks good",
  },
  {
    image: OwnershipIcon,
    title: "Full Ownership",
    description: "From wireframe to API to cloud hosting",
  },
];

const RequirementForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    projectCategory: '',
    projectDescription: '',
    budgetRange: '',
    timeline: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Map form fields to Google Sheets columns with proper names
      formDataToSend.append('Full Name', formData.fullName);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Company Name', formData.companyName || 'Not Provided');
      formDataToSend.append('Project Category', formData.projectCategory);
      formDataToSend.append('Project Description', formData.projectDescription);
      formDataToSend.append('Budget Range', formData.budgetRange);
      formDataToSend.append('Timeline', formData.timeline);

      // Add file information
      if (formData.file) {
        formDataToSend.append('File Name', formData.file.name);
        formDataToSend.append('File Size', Math.round(formData.file.size / 1024) + ' KB');
      } else {
        formDataToSend.append('File Name', 'No file uploaded');
        formDataToSend.append('File Size', 'N/A');
      }

      // Empty fields for call form columns to maintain structure
      formDataToSend.append('Call Date', '');
      formDataToSend.append('Time Slot', '');
      formDataToSend.append('Call Goal', '');

      // Add metadata
      formDataToSend.append('Form Type', 'Requirement Submission');
      formDataToSend.append('Timestamp', new Date().toLocaleString());

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyhnZ6iAvhWGid1Bto1BDRIH3Qu6YfExJOUkAFb4AJE2DTOt8SOLPmv8klx4coC8Uo3/exec",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Your requirement has been submitted successfully! We will get back to you soon.');

      // Reset form and close modal
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        projectCategory: '',
        projectDescription: '',
        budgetRange: '',
        timeline: '',
        file: null,
      });
      setStep(1);
      onClose();

    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your requirement. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center space-x-2">
          {step === 2 && (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-white"
            >
              <IoIosArrowBack className=" text-xl" />
            </button>
          )}
          <h2 className="text-lg md:text-[22px] font-[AvenirLTStd-light] font-bold">
            Submit Your Requirement
          </h2>
        </div>

        <button
          className="text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <form className="flex flex-col gap-4 md:gap-6" onSubmit={handleNext}>
        {step === 1 && (
          <>
            {/* Full Name */}
            <div>
              <h3 className="text-xs md:text-[12px] leading-[27px] font-semibold font-[AvenirLTStd-light]">
                Full Name <span className="text-red-500">*</span>
              </h3>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xs md:text-[12px] leading-[27px] font-semibold font-[AvenirLTStd-light]">
                Email Address <span className="text-red-500">*</span>
              </h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email id"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
                required
              />
            </div>

            {/* Company Name */}
            <div>
              <h3 className="text-xs md:text-[12px] leading-[27px] font-semibold font-[AvenirLTStd-light]">
                Company / Brand Name (Optional)
              </h3>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
              />
            </div>

            {/* Project Category */}
            <div>
              <h3 className="text-xs md:text-[12px] leading-[27px] font-semibold font-[AvenirLTStd-light]">
                Project Category <span className="text-red-500">*</span>
              </h3>
              <div className="relative w-full">
                <select
                  name="projectCategory"
                  value={formData.projectCategory}
                  onChange={handleChange}
                  className={`w-full appearance-none px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none
      ${formData.projectCategory ? "text-white" : "text-gray-400"}`}
                  required
                >
                  <option value="" disabled hidden>
                    Select Project Type
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="AI/ML Integration">AI/ML Integration</option>
                  <option value="Other">Other</option>
                </select>

                {/* Custom icon */}
                <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>

            </div>

            {/* Brief Description */}
            <div>
              <h3 className="text-xs md:text-[12px] leading-[27px] font-semibold font-[AvenirLTStd-light]">
                Brief Project Description <span className="text-red-500">*</span>
              </h3>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="Describe your project requirement in a few sentences..."
                className="w-full px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none resize-none"
                rows="4"
                required
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Budget Range */}
            <div>
              <h3 className="text-sm md:text-[14px] font-[AvenirLTStd-light] font-semibold mb-2">
                Budget Range <span className="text-red-500">*</span>
              </h3>
              <div className="relative w-full">
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className={`w-full appearance-none px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none
      ${formData.budgetRange ? "text-white" : "text-gray-400"}`}
                  required
                >
                  <option value="" disabled hidden>
                    Select Budget range
                  </option>
                  <option value="$599 - $999">$599 - $999</option>
                  <option value="$999 - $4,999">$999 - $4,999</option>
                  <option value="$4,999 - $9,999">$4,999 - $9,999</option>
                  <option value="$9,999 - $24,999">$9,999 - $24,999</option>
                  <option value="$24,999+">$24,999+</option>
                </select>

                {/* Custom dropdown icon */}
                <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>

            </div>

            {/* Expected Timeline */}
            <div>
              <h3 className="text-sm md:text-[14px] font-[AvenirLTStd-light] font-semibold mb-2">
                Expected Timeline <span className="text-red-500">*</span>
              </h3>
              <div className="relative w-full">
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`w-full appearance-none px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none
      ${formData.timeline ? "text-white" : "text-gray-400"}`}
                  required
                >
                  <option value="" disabled hidden>
                    Select Expected Timeline
                  </option>
                  <option value="1-2 Weeks (Rush)">1-2 Weeks (Rush)</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2-3 Months">2-3 Months</option>
                  <option value="3+ Months">3+ Months</option>
                </select>

                {/* Custom dropdown icon */}
                <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>

            </div>

            {/* File Upload */}
            <div>
              <h3 className="text-sm md:text-[14px] font-[AvenirLTStd-light] font-semibold mb-2">
                Attach File (Optional)
              </h3>
              <div className="w-full px-3 md:px-4 py-4 md:py-6 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] border border-gray-600 text-center text-gray-400">
                <div className="flex justify-center mb-2">
                  <img
                    src={Cloud}
                    alt="Upload"
                    className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]"
                  />
                </div>
                <p className="text-xs md:text-sm">
                  Drag and drop your file here, or{" "}
                  <label htmlFor="file-upload" className="text-white cursor-pointer underline">
                    browse files
                  </label>
                </p>
                <p className="text-[10px] md:text-xs mt-1">
                  Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                </p>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                {formData.file && (
                  <div className="mt-3 p-2 bg-gray-800 rounded-lg">
                    <p className="text-white text-xs md:text-sm font-semibold">
                      📎 {formData.file.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {Math.round(formData.file.size / 1024)} KB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-2 md:mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-white text-black font-bold font-[AvenirLTStd-light] text-sm md:text-[16px] border border-gray-600 focus:border-white outline-none ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
          >
            {isSubmitting ? "Submitting..." : step === 1 ? "Next Step" : "Submit Requirement"}
          </button>
        </div>
      </form>
    </>
  );
};

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
  <button
    className="w-full bg-[#1e1e1e] text-white rounded-[12px] md:rounded-[15px] px-3 md:px-4 py-2 md:py-3 text-left flex items-center justify-between border border-gray-600 focus:border-white outline-none"
    onClick={onClick}
    ref={ref}
  >
    <span className="text-xs md:text-sm text-gray-400">{value || "Select a date"}</span>
    <img
      src={calender}
      alt="Calendar"
      className="w-4 md:w-5 h-4 md:h-5"
    />
  </button>
));

export default function ProfileCta() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [callGoal, setCallGoal] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetScheduleForm = () => {
    setFormData({ name: '', email: '', company: '' });
    setCurrentStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setCallGoal("");
  };

  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();

      // Add all relevant fields with proper field names
      formDataToSend.append('Full Name', formData.name);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Company Name', formData.company || 'Not Provided');
      formDataToSend.append('Call Date', selectedDate ? selectedDate.toLocaleDateString() : '');
      formDataToSend.append('Time Slot', selectedTime || '');
      formDataToSend.append('Call Goal', callGoal || '');

      // Empty fields for requirement form columns to maintain structure
      formDataToSend.append('Project Category', '');
      formDataToSend.append('Project Description', '');
      formDataToSend.append('Budget Range', '');
      formDataToSend.append('Timeline', '');
      formDataToSend.append('File Name', '');
      formDataToSend.append('File Size', '');

      // Add metadata
      formDataToSend.append('Form Type', 'Strategy Call');
      formDataToSend.append('Timestamp', new Date().toLocaleString());

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbylXiwmmr4Gc1MyBK_BqmcBuMxDeIbaJtEVq1h9rHlHTzo0LWHUyLrLJHbXTWWW4xY/exec",
        {
          method: "POST",
          body: formDataToSend
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      alert('Your call has been scheduled successfully! We will send you a confirmation email shortly.');

      // Reset and close modal
      setIsModalOpen(false);
      resetScheduleForm();

    } catch (error) {
      console.error('Error:', error);
      alert('There was an error scheduling your call. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  return (
    <section className="text-white py-6 md:py-12 lg:py-16 px-4 md:px-6 lg:px-8 mt-[60px] md:mt-[90px] lg:mt-[121px] mb-[40px] md:mb-[60px] lg:mb-[90px]">
      <div className="max-w-[1260px] mx-auto text-center">
        <h2 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[34px] text-[#EDE9E8] leading-[1.2] md:leading-[1.3] lg:leading-[64px] font-[Kollektif] font-bold mb-3 md:mb-4">
          What Makes VibeXio Different
        </h2>
        <p className="text-[#EDE9E8] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[AvenirLTStd] mb-6 md:mb-10 lg:mb-12 max-w-[700px] md:max-w-[800px] mx-auto">
          Every project is not just code—it's a partnership built on speed, intelligence, and reliability.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-10 lg:mb-16 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-[#121212] h-auto min-h-[180px] sm:min-h-[200px] md:h-[200px] lg:h-[224px] p-3 md:p-4 lg:p-6 flex flex-col items-start gap-2 md:gap-3 lg:gap-4 transition-all mx-auto
                ${index % 2 === 0
                  ? 'rounded-tl-[15px] md:rounded-tl-[20px] lg:rounded-tl-[30px] rounded-br-[15px] md:rounded-br-[20px] lg:rounded-br-[30px]'
                  : 'rounded-tr-[15px] md:rounded-tr-[20px] lg:rounded-tr-[30px] rounded-bl-[15px] md:rounded-bl-[20px] lg:rounded-bl-[30px] mt-0 sm:mt-[20px] md:mt-[30px] lg:mt-[52px]'
                }
                shadow-[0_0_7px_0_rgba(237,236,232,0.3)]`}
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '280px'
              }}
            >
              {index % 2 !== 0 && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.55\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.25\'/%3E%3C/svg%3E")',
                    opacity: 0.99
                  }}
                />
              )}

              <div className="bg-gray-100 p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl w-[36px] h-[36px] md:w-[44px] md:h-[44px] lg:w-[52px] lg:h-[52px] z-10 flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[25px] lg:h-[25px] object-contain"
                />
              </div>
              <h3 className="font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] z-10 font-[AvenirLTStd-heavy]">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] z-10 font-[AvenirLTStd-light] w-full md:w-[160px] lg:w-[176px] pr-0 md:pr-[8px] lg:pr-[10px] text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center items-center w-full px-2 md:px-4">
          <div className="rounded-[12px] md:rounded-[15px] lg:rounded-[20px] w-full max-w-[1000px] lg:max-w-[1045px] shadow-[0_0_7px_0_rgba(237,236,232,0.3)] p-4 md:p-6 lg:p-8 flex flex-col items-center relative overflow-hidden">
            <div className="hidden md:block">
              <div className="absolute top-[20px] md:top-[40px] lg:top-[62px] left-[5%] md:left-[10%] lg:left-[250px] animate-diagonal-tl-delay">
                <img src={Arrow} alt="Arrow" className="w-[16px] h-[18px] md:w-[18px] md:h-[20px] lg:w-[23.6px] lg:h-[25.2px] rotate-[165deg]" />
              </div>

              <div className="absolute top-[20px] md:top-[40px] lg:top-[62px] right-[5%] md:right-[10%] lg:right-[250px] animate-diagonal-tr">
                <img src={Arrow} alt="Arrow" className="w-[16px] h-[18px] md:w-[18px] md:h-[20px] lg:w-[23.6px] lg:h-[25.2px] rotate-[290deg]" />
              </div>

              <div className="absolute bottom-[80px] md:bottom-[120px] lg:bottom-[180px] left-[5%] md:left-[10%] lg:left-[250px] animate-diagonal-bl">
                <img src={Arrow} alt="Arrow" className="w-[16px] h-[18px] md:w-[18px] md:h-[20px] lg:w-[23.6px] lg:h-[25.2px] rotate-[115deg]" />
              </div>

              <div className="absolute bottom-[80px] md:bottom-[120px] lg:bottom-[180px] right-[5%] md:right-[10%] lg:right-[250px] animate-diagonal-br-delay">
                <img src={Arrow} alt="Arrow" className="w-[16px] h-[18px] md:w-[18px] md:h-[20px] lg:w-[23.6px] lg:h-[25.2px] rotate-[352deg]" />
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 mb-[30px] md:mb-[50px] lg:mb-[70px] mt-[20px] md:mt-[40px] lg:mt-[60px]">
              <img
                src={HandshakeIcon}
                alt="Handshake"
                className="w-[24px] h-[15px] md:w-[30px] md:h-[19px] lg:w-[37.57px] lg:h-[23.73px] object-contain"
              />
              <h1 className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-[Kollektif] font-bold">
                Ready to Build With Us?
              </h1>
            </div>

            <p className="text-[#EDECE8] leading-[1.2] md:leading-[100%] font-normal mb-[20px] md:mb-[30px] lg:mb-[37px] w-full max-w-[500px] md:max-w-[600px] lg:max-w-[615px] text-[12px] md:text-[14px] lg:text-[16px] font-[AvenirLTStd] text-center">
              Seen something similar to what you're planning? Let's build it better.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-[16px] w-full max-w-[400px] md:max-w-[500px] lg:max-w-[520px] justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#D9D9D9] w-full sm:w-[180px] md:w-[220px] lg:w-[252px] h-[36px] md:h-[40px] lg:h-[46px] font-[AvenirLTStd-heavy] text-[11px] md:text-[12px] lg:text-[14px] text-black font-semibold py-1 md:py-2 px-3 md:px-4 rounded-md hover:bg-gray-200 transition"
              >
                Schedule a Free Strategy Call
              </button>
              <button
                onClick={() => setIsRequirementModalOpen(true)}
                className="border border-[#EDECE8] w-full sm:w-[180px] md:w-[220px] lg:w-[252px] 
                h-[36px] md:h-[40px] lg:h-[46px] font-[AvenirLTStd-heavy] text-[11px] md:text-[12px] 
                lg:text-[14px] py-1 md:py-2 px-3 md:px-4 rounded-md hover:bg-gray-800 transition"
              >
                Submit Your Requirement
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[#121212] mt-[50px]  p-4 md:p-6 lg:p-8 rounded-[20px] md:rounded-[25px] lg:rounded-[30px] w-[90%] max-w-[400px] md:max-w-[450px] lg:max-w-[470px] text-white shadow-[0_0_7px_0_rgba(237,236,232,0.3)] overflow-auto"
            style={{ maxHeight: '90vh' }}>

            <div className="flex justify-between items-center mb-4 md:mb-6">
              {/* Left section: Back arrow (only show if step > 1) + Heading */}
              <div className="flex items-center gap-2">
                {currentStep !== 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="text-white"
                  >
                    <IoIosArrowBack className="text-xl" />
                  </button>
                )}
                <h2 className="text-base md:text-lg lg:text-[22px] font-[AvenirLTStd-light] font-bold">
                  Schedule a Free Strategy Call
                </h2>
              </div>

              {/* Right section: Close button */}
              <button
                className="text-gray-400 hover:text-white text-xl ml-4"
                onClick={() => {
                  setIsModalOpen(false);
                  resetScheduleForm();
                }}
              >
                ✕
              </button>
            </div>



            {currentStep === 1 ? (
              <>
                <form className="flex flex-col gap-4 md:gap-6" onSubmit={(e) => {
                  e.preventDefault();
                  setCurrentStep(2);
                }}>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs md:text-[12px] leading-[24px] md:leading-[27px] font-semibold font-[AvenirLTStd-light]">Full Name
                      <span className="text-red-500"> *</span>
                    </h3>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-[#1e1e1e] font-[AvenirLTStd-light] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs md:text-[12px] leading-[24px] md:leading-[27px] font-semibold font-[AvenirLTStd-light]">Email Address
                      <span className="text-red-500"> *</span>
                    </h3>
                    <div className="flex flex-col">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email id"
                        value={formData.email}
                        onChange={handleChange}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-[#1e1e1e] font-[AvenirLTStd-light] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs md:text-[12px] leading-[24px] md:leading-[27px] font-semibold font-[AvenirLTStd-light]">Company / Brand Name (Optional)</h3>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        name="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={handleChange}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-[#1e1e1e] font-[AvenirLTStd-light] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-2 md:mt-4">
                    <button
                      type="submit"
                      className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-white text-black font-bold font-[AvenirLTStd-light] text-sm md:text-[16px] border border-gray-600 focus:border-white outline-none hover:bg-gray-200"
                    >
                      Next step
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <div className="mb-4 md:mb-6">
                  <h3 className="text-sm md:text-[14px] font-[AvenirLTStd-light] font-semibold mb-2">
                    Select a Date
                    <span className="text-red-500"> *</span>
                  </h3>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      minDate={new Date()}
                      maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
                      filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                      customInput={<CustomDateInput />}
                      calendarClassName="react-datepicker-dark "
                    />
                  </div>
                </div>

                {selectedDate && (
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-sm md:text-[14px] font-[AvenirLTStd-light] font-semibold mb-2">
                      Available Time Slots
                      <span className="text-red-500"> *</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTime(slot)}
                          className={`px-3 py-2 rounded-[10px] text-xs md:text-sm border ${selectedTime === slot ? 'bg-white text-black border-white' : 'border-gray-600 hover:border-gray-400'}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-4 md:mb-6">
                  <h3 className="text-xs md:text-[12px] leading-[24px] md:leading-[27px] font-semibold font-[AvenirLTStd-light]">
                    Your Goal in This Call <span className="text-red-500">*</span>
                  </h3>
                  <div className="relative w-full">
                    <select
                      value={callGoal}
                      onChange={(e) => setCallGoal(e.target.value)}
                      className={`w-full appearance-none px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] font-[AvenirLTStd-light] bg-[#1e1e1e] text-xs md:text-[12px] border border-gray-600 focus:border-white outline-none
      ${callGoal ? "text-white" : "text-gray-400"}`}
                      required
                    >
                      <option value="" disabled hidden>
                        Select What is Your Goal
                      </option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Web/App Development">Web/App Development</option>
                      <option value="ERP/Dashboard">ERP/Dashboard</option>
                      <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Other">Other</option>
                    </select>

                    {/* Custom dropdown icon */}
                    <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                  </div>
                </div>

                <div className="flex gap-3 mt-2 md:mt-4">
                  <button
                    onClick={handleScheduleSubmit}
                    disabled={isSubmitting || !selectedDate || !selectedTime || !callGoal}
                    className={`flex-1 px-3 md:px-4 py-2 md:py-3 rounded-[12px] md:rounded-[15px] bg-white text-black font-bold font-[AvenirLTStd-light] text-sm md:text-[16px] border border-gray-600 focus:border-white outline-none ${isSubmitting || !selectedDate || !selectedTime || !callGoal
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-gray-200"
                      }`}
                  >
                    {isSubmitting ? "Scheduling..." : "Schedule Call"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Requirement Modal */}
      {isRequirementModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="bg-[#121212] mt-[95px] p-8 md:p-6 lg:p-8 rounded-[20px] md:rounded-[25px] lg:rounded-[30px] w-[90%] max-w-[400px] md:max-w-[450px] lg:max-w-[470px] text-white shadow-[0_0_7px_0_rgba(237,236,232,0.3)] overflow-auto scrollbar-hide"
            style={{ maxHeight: '80vh' }}
          >
            <RequirementForm onClose={() => setIsRequirementModalOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
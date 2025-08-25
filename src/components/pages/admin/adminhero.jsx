import React, { useState, useEffect } from "react";

const AdminHero = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState("");
  const [services, setServices] = useState([]);
  const [serviceInput, setServiceInput] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [removedTechImages, setRemovedTechImages] = useState([]);
  const [image, setImage] = useState(null);

  // Modal-specific states
  const [bannerImage, setBannerImage] = useState(null);
  const [headingText, setHeadingText] = useState("");
  const [challengeText, setChallengeText] = useState("");

  // New separate 4-point sections
  const [solutionPoints, setSolutionPoints] = useState([""]);
  const [featurePoints, setFeaturePoints] = useState([""]);
  const [impactPoints, setImpactPoints] = useState([""]);

  const [mainBannerImage, setMainBannerImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [projects, setProjects] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const categoryOptions = [
    "Web", "AI", "CRM", "Ecommerce", "Design", "Analytics", "DevOps",
    "App", "Power BI", "Tableau", "Custom AI", "Custom", "Cloud"
  ];

  const API_BASE = import.meta.env.VITE_API_BASE;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/portfolio`);
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Check file size (350KB max)
    if (file.size > 350 * 1024) {
      setImage(null);
      setErrors((prev) => ({
        ...prev,
        image: `File size must be less than 350KB (uploaded: ${(file.size / 1024).toFixed(1)}KB)`,
      }));
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === 1036 && img.height === 696) {
        setImage(file);
        setErrors((prev) => ({ ...prev, image: "" }));
      } else {
        setImage(null);
        setErrors((prev) => ({
          ...prev,
          image: `Image must be 1036x696px (uploaded: ${img.width}x${img.height}px)`,
        }));
      }
      URL.revokeObjectURL(img.src);
    };
  };

  const handleBannerImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Check file size (350KB max)
    if (file.size > 350 * 1024) {
      setBannerImage(null);
      setErrors((prev) => ({
        ...prev,
        bannerImage: `File size must be less than 350KB (uploaded: ${(file.size / 1024).toFixed(1)}KB)`,
      }));
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === 3592 && img.height === 936) {
        setBannerImage(file);
        setErrors((prev) => ({ ...prev, bannerImage: "" }));
      } else {
        setBannerImage(null);
        setErrors((prev) => ({
          ...prev,
          bannerImage: `Banner image must be 3592x936px (uploaded: ${img.width}x${img.height}px)`,
        }));
      }
      URL.revokeObjectURL(img.src);
    };
  };

  const handleMainBannerImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // ✅ Size check (350KB max)
    if (file.size > 350 * 1024) {
      setMainBannerImage(null);
      setErrors((prev) => ({
        ...prev,
        image: `File size must be less than 350KB (uploaded: ${(file.size / 1024).toFixed(1)}KB)`,
      }));
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width === 710 && img.height === 279) {
        setMainBannerImage(file);
        setErrors((prev) => ({ ...prev, image: "" }));
      } else {
        setMainBannerImage(null);
        setErrors((prev) => ({
          ...prev,
          image: `Image must be 710x279px (uploaded: ${img.width}x${img.height}px)`,
        }));
      }
      URL.revokeObjectURL(img.src);
    };
  };

  const addService = () => {
    if (serviceInput.trim()) {
      setServices([...services, serviceInput.trim()]);
      setServiceInput("");
      setErrors(prev => ({ ...prev, services: "" }));
    }
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleTechImages = (e) => {
    const files = Array.from(e.target.files);

    // Create unique identifiers for new files
    const newTechImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      isNew: true,
      id: `${file.name}-${file.size}-${Date.now()}` // Unique ID for each file
    }));

    setTechStack(prev => {
      // Filter out any duplicates by checking against existing IDs
      const existingIds = prev.map(item => item.id);
      const filteredNewImages = newTechImages.filter(
        img => !existingIds.includes(img.id)
      );
      return [...prev, ...filteredNewImages];
    });

    setErrors(prev => ({ ...prev, techStack: "" }));
  };

  const removeTechImage = (index) => {
    setTechStack(prev => {
      const imageToRemove = prev[index];
      if (!imageToRemove.isNew && imageToRemove.preview) {
        const imagePath = imageToRemove.preview.includes(API_BASE)
          ? imageToRemove.preview.replace(API_BASE, "")
          : imageToRemove.preview;
        setRemovedTechImages(r => [...r, imagePath]);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!categories.trim()) newErrors.categories = "Category is required";

    if (services.length === 0 || services.every(s => !s.trim())) {
      newErrors.services = "At least one valid service is required";
    }

    if (techStack.length === 0) {
      newErrors.techStack = "At least one tech stack image is required";
    }

    if (!image && !editingId) {
      newErrors.image = "Main image is required";
    }

    if (!bannerImage && !editingId) {
      newErrors.bannerImage = "Banner image is required";
    }

    if (!mainBannerImage && !editingId) {
      newErrors.mainBannerImage = "Main banner image is required";
    }

    if (!headingText.trim()) {
      newErrors.headingText = "Heading text is required";
    }

    if (!challengeText.trim()) {
      newErrors.challengeText = "Challenge text is required";
    }

    if (solutionPoints.length === 0 || solutionPoints.every(p => !p.trim())) {
      newErrors.solutionPoints = "At least one solution point is required";
    }

    if (featurePoints.length === 0 || featurePoints.every(p => !p.trim())) {
      newErrors.featurePoints = "At least one feature point is required";
    }

    if (impactPoints.length === 0 || impactPoints.every(p => !p.trim())) {
      newErrors.impactPoints = "At least one impact point is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("categories", JSON.stringify([categories]));
    formData.append("services", JSON.stringify(services));

    if (image) formData.append("image", image);
    if (bannerImage) formData.append("bannerImage", bannerImage);
    if (mainBannerImage) formData.append("mainBannerImage", mainBannerImage);

    formData.append("headingText", headingText);
    formData.append("challengeText", challengeText);

    formData.append("solutionPoints", JSON.stringify(solutionPoints));
    formData.append("featurePoints", JSON.stringify(featurePoints));
    formData.append("impactPoints", JSON.stringify(impactPoints));

    // Append new tech stack images
    techStack
      .filter(t => t.isNew && t.file)
      .forEach(t => formData.append("techStack", t.file));

    // Append remaining tech stack images (server-side paths)
    formData.append(
      "remainingTechStack",
      JSON.stringify(
        techStack
          .filter(t => !t.isNew)
          .map(t => {
            if (t.preview.includes(API_BASE)) {
              return t.preview.replace(API_BASE, "");
            }
            return t.preview;
          })
      )
    );

    formData.append("removedTechStack", JSON.stringify(removedTechImages));

    try {
      const url = editingId
        ? `${API_BASE}/api/portfolio/${editingId}`
        : `${API_BASE}/api/portfolio`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });

      if (res.ok) {
        alert(editingId ? "✅ Project updated!" : "✅ Project saved!");
        resetForm();
        fetchProjects();
      } else {
        const errText = await res.text();
        console.error("Server error:", errText);
        alert("❌ Failed to save project");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setCategories("");
    setServices([]);
    setTechStack([]);
    setRemovedTechImages([]);
    setImage(null);
    setBannerImage(null);
    setHeadingText("");
    setChallengeText("");
    setSolutionPoints([""]);
    setFeaturePoints([""]);
    setImpactPoints([""]);
    setMainBannerImage(null);
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`${API_BASE}/api/portfolio/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        alert("🗑 Project deleted!");
        fetchProjects();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (project) => {
    setTitle(project.title);
    setCategories(project.categories?.[0] || "");
    setServices(project.services || []);

    setTechStack(
      project.techStack?.map((url, index) => ({
        file: null,
        preview: url.startsWith("http") ? url : `${API_BASE}${url}`,
        isNew: false,
        id: `existing-${index}-${url}` // Unique ID for existing images
      })) || []
    );

    setRemovedTechImages([]);
    setImage(null);
    setBannerImage(null);
    setHeadingText(project.headingText || "");
    setChallengeText(project.challengeText || "");
    setSolutionPoints(project.solutionPoints || [""]);
    setFeaturePoints(project.featurePoints || [""]);
    setImpactPoints(project.impactPoints || [""]);
    setMainBannerImage(null);
    setEditingId(project._id);
  };

  const btnClass =
    "bg-gradient-to-r from-[#2b2b2b] to-[#1a1a1a] text-white text-[16px] font-medium px-[28px] py-[10px] rounded-[40px] cursor-pointer transition-all duration-500 ease-in-out hover:opacity-80";

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 py-12 flex flex-col items-center pt-[140px]">
      <div className="w-full max-w-5xl">
        <p className="mb-2">Upload images (max size: 350KB)</p>
        <form onSubmit={handleSubmit} className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg space-y-6">
          {/* Title & Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded-lg bg-[#2a2a2a]"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>
            <div>
              <label>Categories</label>
              <select
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                className="w-full p-2 rounded-lg bg-[#2a2a2a]"
              >
                <option value="">-- Select Category --</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.categories && <p className="text-red-500 text-sm">{errors.categories}</p>}
            </div>
          </div>

          {/* Services */}
          <div>
            <label>Services</label>
            <div className="flex gap-2 flex-wrap">
              <input
                type="text"
                value={serviceInput}
                onChange={(e) => setServiceInput(e.target.value)}
                className="w-[250px] p-2 rounded-lg bg-[#2a2a2a]"
              />
              <button type="button" onClick={addService} className={btnClass}>
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {services.map((service, index) => (
                <span
                  key={index}
                  className="bg-blue-500 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {service}
                  <button type="button" onClick={() => removeService(index)}>×</button>
                </span>
              ))}
            </div>
            {errors.services && <p className="text-red-500">{errors.services}</p>}

          </div>

          {/* Tech Stack */}
          <div className="flex flex-col gap-2">
            <label>Tech Stack Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleTechImages}
              key={techStack.length} // Force re-render to clear input
            />
            {errors.techStack && <p className="text-red-500 text-sm">{errors.techStack}</p>}
            <div className="flex flex-wrap gap-3 mt-3">
              {techStack.map((tech, index) => (
                <div key={tech.id} className="relative w-16 h-16">
                  <img
                    src={tech.preview}
                    className="w-full h-full object-cover rounded-lg"
                    alt={`tech-${index}`}
                  />
                  <button
                    type="button"
                    onClick={() => removeTechImage(index)}
                    className="absolute top-[-8px] right-[-8px] bg-red-600 text-white w-5 h-5 rounded-full"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="flex flex-col gap-2">
            <label>Main Image (1036x696 only)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageUpload}
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
          </div>

          <h1 className="text-center text-[16px]" >Learn more Modal</h1>
          {/* Modal Fields */}
          <div className="flex flex-col gap-2">
            <label>Banner Image (3592x936 only)</label>
            <input type="file" accept="image/*" onChange={handleBannerImageUpload} />
            {errors.bannerImage && (
              <p className="text-red-500 text-sm">{errors.bannerImage}</p>
            )}
          </div>

          <div>
            <label>Heading Text</label>
            <input
              type="text"
              value={headingText}
              onChange={(e) => {
                const maxLength = 81;
                const value = e.target.value;
                if (value.length <= maxLength) {
                  setHeadingText(value);
                } else {
                  setHeadingText(value.slice(0, maxLength));
                }
              }}
              className="w-full p-2 rounded-lg bg-[#2a2a2a]"
            />
            <p className="text-sm text-gray-400 mt-2">
              Max 81 characters allowed. Current: {headingText.length} characters.
            </p>
            {errors.headingText && <p className="text-red-500">{errors.headingText}</p>}
          </div>

          <div>
            <label>Challenge Text</label>
            <textarea
              value={challengeText}
              onChange={(e) => setChallengeText(e.target.value)}
              className="w-full p-2 rounded-lg bg-[#2a2a2a]"
            />
            {errors.challengeText && <p className="text-red-500">{errors.challengeText}</p>}
          </div>

          {/* Our Solution */}
          <div>
            <label className="font-semibold">Our Solution</label>
            {solutionPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updated = [...solutionPoints];
                    updated[idx] = e.target.value;
                    setSolutionPoints(updated);
                  }}
                  className="flex-1 p-2 rounded-lg bg-[#2a2a2a]"
                  placeholder={`Point ${idx + 1}`}
                />
                {solutionPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setSolutionPoints(solutionPoints.filter((_, i) => i !== idx))
                    }
                    className="bg-red-500 text-white w-8 h-8 rounded-full"
                  >
                    –
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setSolutionPoints([...solutionPoints, ""])}
              className="mt-2 px-3 py-1 bg-blue-500 rounded-lg text-sm hover:bg-blue-600"
            >
              + Add Point
            </button>
            {errors.solutionPoints && <p className="text-red-500">{errors.solutionPoints}</p>}
          </div>

          {/* Key Features */}
          <div>
            <label className="font-semibold">Key Features</label>
            {featurePoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updated = [...featurePoints];
                    updated[idx] = e.target.value;
                    setFeaturePoints(updated);
                  }}
                  className="flex-1 p-2 rounded-lg bg-[#2a2a2a]"
                  placeholder={`Point ${idx + 1}`}
                />
                {featurePoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setFeaturePoints(featurePoints.filter((_, i) => i !== idx))
                    }
                    className="bg-red-500 text-white w-8 h-8 rounded-full"
                  >
                    –
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFeaturePoints([...featurePoints, ""])}
              className="mt-2 px-3 py-1 bg-blue-500 rounded-lg text-sm hover:bg-blue-600"
            >
              + Add Point
            </button>
            {errors.featurePoints && <p className="text-red-500">{errors.featurePoints}</p>}
          </div>

          {/* Impact / Results */}
          <div>
            <label className="font-semibold">Impact / Results</label>
            {impactPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const updated = [...impactPoints];
                    updated[idx] = e.target.value;
                    setImpactPoints(updated);
                  }}
                  className="flex-1 p-2 rounded-lg bg-[#2a2a2a]"
                  placeholder={`Point${idx + 1}`}
                />
                {impactPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setImpactPoints(impactPoints.filter((_, i) => i !== idx))
                    }
                    className="bg-red-500 text-white w-8 h-8 rounded-full"
                  >
                    –
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => setImpactPoints([...impactPoints, ""])}
              className="mt-2 px-3 py-1 bg-blue-500 rounded-lg text-sm hover:bg-blue-600"
            >
              + Add Point
            </button>
            {errors.impactPoints && <p className="text-red-500">{errors.impactPoints}</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label>Main Banner Image (710x279px)</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainBannerImageUpload}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          <button type="submit" className={`${btnClass} w-full`}>
            {editingId ? "Update Project" : "Save Project"}
          </button>
        </form>

        {/* Project List */}
        <div className="mt-12">
          <h2 className="text-2xl mb-4">All Projects</h2>
          {projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#1e1e1e] p-4 rounded-lg flex flex-col md:flex-row md:justify-between gap-4 mb-4"
            >
              {/* Image + Details */}
              <div className="flex flex-col sm:flex-row gap-4">
                <img
                  src={`${API_BASE}${project.image}`}
                  alt={project.title}
                  className="w-full sm:w-20 sm:h-20 object-cover rounded"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{project.categories}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 sm:gap-4 md:flex-col">
                <button
                  onClick={() => handleEdit(project)}
                  className="border border-[#EDECE8] rounded-[10px] py-[6px] px-[20px] sm:px-[45px] hover:bg-[#EDECE8] hover:text-black duration-300 ease-in-out w-full md:w-auto"
                >
                  EDIT
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="border border-[#5C5B5B] rounded-[10px] py-[6px] px-[20px] sm:px-[45px] hover:bg-[#EDECE8] hover:text-black duration-300 ease-in-out w-full md:w-auto"
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminHero;
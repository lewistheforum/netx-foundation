import React, { useEffect, useRef, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  role: string;
  projectName: string;
  projectWebsite: string;
  socialMediaLinks: string;
  teamLocation: string;
  dealSize: string;
  projectDescription: string;
  projectCategory: string[];
}

const ApplicationForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    role: "",
    projectName: "",
    projectWebsite: "",
    socialMediaLinks: "",
    teamLocation: "",
    dealSize: "$0K",
    projectDescription: "",
    projectCategory: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedCategories = checked
        ? [...prev.projectCategory, value]
        : prev.projectCategory.filter((cat) => cat !== value);
      return { ...prev, projectCategory: updatedCategories };
    });
  };

  const rangeRef = useRef<HTMLInputElement>(null);

  const handleDealSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    const dealSizes = ["$0M", "$100K", "$500K", "$1M", "$5M", "$10M", "$15M"];
    setFormData((prev) => ({
      ...prev,
      dealSize: dealSizes[index],
    }));
  };

  useEffect(() => {
    if (rangeRef.current) {
      const index = [
        "$0M",
        "$100K",
        "$500K",
        "$1M",
        "$5M",
        "$10M",
        "$15M",
      ].indexOf(formData.dealSize);
      const percentage = (index / 6) * 100;
      rangeRef.current.style.background = `linear-gradient(to right, white 0%, white ${percentage}%, #4b5563 ${percentage}%, #4b5563 100%)`;
    }
  }, [formData.dealSize]);

  const validateForm = (): boolean => {
    const requiredFields = [
      { field: "fullName", label: "Full Name" },
      { field: "email", label: "Email" },
      { field: "role", label: "Your Role" },
      { field: "projectName", label: "Project Name" },
      { field: "teamLocation", label: "Team Location" },
      { field: "projectDescription", label: "Project Description" },
    ];

    for (const field of requiredFields) {
      const value = formData[field.field as keyof FormData];
      if (typeof value === "string" && !value.trim()) {
        toast({
          title: "",
          description: `${field.label} is required.`,
          className: "bg-red-500 text-white border-red-600",
        });
        return false;
      }
    }

    if (formData.dealSize === "$0M") {
      toast({
        title: "",
        description: "Deal Size must be greater than $0M.",
        className: "bg-red-500 text-white border-red-600",
      });
      return false;
    }

    if (formData.projectCategory.length === 0) {
      toast({
        title: "",
        description: "Please select at least one Project Category.",
        className: "bg-red-500 text-white border-red-600",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      toast({
        title: "",
        description: "Submitted successfully!",
        className: "bg-green-500 text-white border-green-600",
      });
      onClose();
    }
  };

  return (
    <div className="min-h-[90vh] bg-black text-white p-6">
      <div className="max-h-[80vh] overflow-y-auto scroll-bar-style">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <h2 className="text-2xl font-bold text-center">Application Form</h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name*</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium">Your Role*</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
              required
            />
          </div>

          {/* Project Name */}
          <div>
            <label className="block text-sm font-medium">Project Name*</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
              required
            />
          </div>

          {/* Project Website */}
          <div>
            <label className="block text-sm font-medium">Project Website</label>
            <input
              type="url"
              name="projectWebsite"
              value={formData.projectWebsite}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
            />
          </div>

          {/* Social Media Links */}
          <div>
            <label className="block text-sm font-medium">
              Social Media Links (X, Telegram, Discord, Medium/Substack,
              Facebook)
            </label>
            <input
              type="text"
              name="socialMediaLinks"
              value={formData.socialMediaLinks}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
            />
          </div>

          {/* Team Location */}
          <div>
            <label className="block text-sm font-medium">Team Location*</label>
            <input
              type="text"
              name="teamLocation"
              value={formData.teamLocation}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black"
              required
            />
          </div>

          {/* Deal Size */}
          <div>
            <label className="block text-sm font-medium">
              Deal Size* (Choose funding size via slider)
            </label>
            <div className="flex flex-col items-center space-x-0 mt-1">
              <div className="flex justify-center gap-9 w-full text-sm mb-3">
                <div className="ml-3">$0M</div>
                <div>$100K</div>
                <div>$500K</div>
                <div>$1M</div>
                <div>$5M</div>
                <div>$10M</div>
                <div>$15M</div>
              </div>
              <input
                ref={rangeRef}
                type="range"
                min="0"
                max="6"
                value={[
                  "$0K",
                  "$100K",
                  "$500K",
                  "$1M",
                  "$5M",
                  "$10M",
                  "$15M",
                ].indexOf(formData.dealSize)}
                onChange={handleDealSizeChange}
                // className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
                className="custom-range h-2 accent-white"
              />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label className="block text-sm font-medium">
              Project Description* (250 words)
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="mt-1 w-full bg-[#D9D9D9] border border-gray-600 p-2 text-black h-24"
              required
            />
          </div>

          {/* Project Category */}
          <div>
            <label className="block text-sm font-medium">
              Project Category*
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {[
                "DeFi",
                "Token",
                "Wallet",
                "AI",
                "NFT",
                "Game",
                "Aggregator",
                "Infrastructure",
              ].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    value={category}
                    checked={formData.projectCategory.includes(category)}
                    onChange={handleCheckboxChange}
                    className="custom-checkbox mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;

import React, { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";

const TelegramForm = forwardRef((props, ref) => {
  const {t}=useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    status: "",
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);

  // Use your actual bot token and chat ID here
  const botToken = "7293515432:AAEWpue19pCDPc8T99sG6TpBJy9Louekl7A"; // Replace with your bot token
  const chatId = "6451696981"; // Replace with your chat ID

  const cities = [
    "Addis Ababa",
    "Dire Dawa",
    "Mekelle",
    "Gondar",
    "Bahir Dar",
    "Hawassa",
    "Adama",
    "Jimma",
    "Dessie",
    "Harar",
  ];

  const statuses = ["Unemployed", "Student", "Employed", "Business Owner"];

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const { name, phone, city, status } = formData;
    const message = `📋 New Submission:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🏙 City: ${city}\n💼 Status: ${status}`;
    
    // The API URL remains the same, but it's hidden from the user.
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        setStatusMessage("Your information has been received successfully!");
        setFormData({ name: "", phone: "", city: "", status: "" });
        setErrors({});
      } else {
        setStatusMessage("Failed to submit your information. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred while submitting your information. Please try again.");
    }
  };

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }
    if (!formData.city) {
      newErrors.city = "City is required.";
    }
    if (!formData.status) {
      newErrors.status = "Status is required.";
    }
    return newErrors;
  };

  return (
      <div 
        className="w-full max-w-lg p-8 bg-teal-50 shadow-xl "
        ref={ref}
      >
        {/* Form Heading */}
        <h2 className="text-2xl font-bold text-teal-800 mb-6 text-center">
          {t("formTitle")}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-teal-700 font-semibold mb-1">
              {t("formName")}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("formNamePlaceholder")}
              className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-teal-700 font-semibold mb-1">
              {t("formPhone")}
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              placeholder={t("formPhonePlaceholder")}
              className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            />
            <p className="text-gray-500 text-sm mt-1 text-right">{t("formPhoneExample")}</p>
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* City Dropdown */}
          <div>
            <label htmlFor="city" className="block text-teal-700 font-semibold mb-1">
              {t("formCity")}
            </label>
            <select
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            >
              <option value="" disabled>Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-600 text-sm mt-1">{errors.city}</p>}
          </div>

          {/* Status Dropdown */}
          <div>
            <label htmlFor="status" className="block text-teal-700 font-semibold mb-1">
              {t("formStatus")}
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
            >
              <option value="" disabled>Select your status</option>
              {statuses.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
            {errors.status && <p className="text-red-600 text-sm mt-1">{errors.status}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-semibold py-3 rounded-md shadow-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
          >
            {t("formSubmitButton")}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-6 text-center text-teal-700 font-semibold">{statusMessage}</p>
        )}
      </div>
  );
});

export default TelegramForm;

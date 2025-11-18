import { useState } from "react";

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted:", formData);
    setTimeout(() => {
      window.alert("Email submitted!");
      setLoading(false);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className="
              w-full px-4 py-2 text-sm rounded-lg bg-slate-900/60
              border border-slate-700 text-gray-200
              focus:ring-2 focus:ring-purple-500 focus:border-purple-500
              transition-all outline-none
              shadow-inner shadow-black/20
            "
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="
              w-full px-4 py-2 text-sm rounded-lg bg-slate-900/60
              border border-slate-700 text-gray-200
              focus:ring-2 focus:ring-purple-500 focus:border-purple-500
              transition-all outline-none
              shadow-inner shadow-black/20
            "
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or just say hello..."
            className="
              w-full px-4 py-2 text-sm rounded-lg bg-slate-900/60
              border border-slate-700 text-gray-200
              focus:ring-2 focus:ring-purple-500 focus:border-purple-500
              transition-all outline-none resize-none
              shadow-inner shadow-black/20
            "
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full px-6 py-3 rounded-lg font-medium text-white
          bg-linear-to-r from-purple-600 to-pink-600
          hover:from-purple-500 hover:to-pink-500
          transition-all duration-300 shadow-lg
          hover:shadow-purple-500/30 hover:-translate-y-[2px]
        "
      >
        {isLoading ? "Loading..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

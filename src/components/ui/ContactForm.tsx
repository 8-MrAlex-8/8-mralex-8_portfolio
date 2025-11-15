import { useState } from "react"

const ContactForm = () => {
    const [isLoading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Form submission logic will be implemented later
        console.log("Form submitted:", formData)
        setTimeout(() => {
            window.alert("Email submitted!");
            setLoading(false);
        }, 300);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                        placeholder="your.email@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                        placeholder="What's this about?"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 text-sm border border-neutral-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-md hover:shadow-lg hover:cursor-pointer transform hover:-translate-y-0.5"
            >
                {isLoading ? "Loading..." : "Send Message"}
            </button>
        </form>
    )
}

export default ContactForm


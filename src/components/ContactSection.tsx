"use client";

import { useState } from "react";

// TODO: Replace with your Google Form details
const GOOGLE_FORM_ACTION = "YOUR_GOOGLE_FORM_ACTION_URL";
const GOOGLE_FORM_ENTRIES = {
  name: "entry.YOUR_NAME_ENTRY_ID",
  email: "entry.YOUR_EMAIL_ENTRY_ID",
  message: "entry.YOUR_MESSAGE_ENTRY_ID",
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const formBody = new URLSearchParams();
      formBody.append(GOOGLE_FORM_ENTRIES.name, formData.name);
      formBody.append(GOOGLE_FORM_ENTRIES.email, formData.email);
      formBody.append(GOOGLE_FORM_ENTRIES.message, formData.message);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // Google Forms doesn't return success status in no-cors mode
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container bg-darker grid-bg relative">
      {/* Section header */}
      <div className="text-center mb-12">
        <span className="text-muted font-mono text-sm">{"// contact"}</span>
        <h2 className="section-title mt-2">
          <span className="text-light">{"<"}</span>
          Contact
          <span className="text-light">{" />"}</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Terminal-style form */}
        <div className="card">
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-800">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-2 text-muted font-mono text-sm">~/contact/send_message.sh</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-muted font-mono text-sm mb-2">
                <span className="text-secondary">$</span> echo $NAME
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-darker border border-gray-700 px-4 py-3 font-mono text-light focus:border-primary focus:outline-none transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-muted font-mono text-sm mb-2">
                <span className="text-secondary">$</span> echo $EMAIL
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-darker border border-gray-700 px-4 py-3 font-mono text-light focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-muted font-mono text-sm mb-2">
                <span className="text-secondary">$</span> cat {"<<<"} MESSAGE
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-darker border border-gray-700 px-4 py-3 font-mono text-light focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-primary disabled:opacity-50"
            >
              <span className="text-dark">
                {status === "sending" ? "sending..." : "./send_message.sh"}
              </span>
            </button>

            {status === "success" && (
              <p className="text-primary font-mono text-sm text-center mt-4">
                Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 font-mono text-sm text-center mt-4">
                Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p className="text-muted font-mono text-sm mb-4">
            <span className="text-secondary">#</span> Or reach me directly
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/daiki-tadokoro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [GitHub]
            </a>
            <a
              href="https://x.com/daiki_tadokoro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [X]
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [Email]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

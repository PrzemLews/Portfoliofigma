import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.kim@example.com",
      link: "mailto:alex.kim@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://linkedin.com",
      color: "#0077B5",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com",
      color: "#333",
    },
    {
      icon: Twitter,
      label: "Twitter",
      link: "https://twitter.com",
      color: "#1DA1F2",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#FFF8F0] py-20 border-b-8 border-[#374151]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-[#374151] mb-6">
            GET IN <span className="bg-[#FFC133] px-4 py-2 border-4 border-[#374151]">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto border-l-6 border-[#FF8A5B] pl-4 inline-block text-left">
            Have a project in mind or just want to chat about design? I'd love to hear
            from you. Let's create something amazing together!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#374151] mb-8 border-b-8 border-[#FFC133] inline-block pb-2">
                CONTACT INFORMATION
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Feel free to reach out through any of these channels. I typically respond
                within 24 hours.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <>
                      <div className="w-12 h-12 bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center mr-4">
                        <Icon size={24} className="text-[#374151]" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1 font-bold">{info.label}</div>
                        <div className="text-lg font-bold text-[#374151]">
                          {info.value}
                        </div>
                      </div>
                    </>
                  );

                  return info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-[#FFF8F0] border-4 border-[#374151] hover:border-[#FFC133] transition-all hover:translate-x-2"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-[#FFF8F0] border-4 border-[#374151]"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-[#374151] mb-4 border-b-4 border-[#FFC133] inline-block pb-1">
                  CONNECT WITH ME
                </h3>
                <div className="flex space-x-4 mt-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-[#374151] hover:bg-[#FFC133] border-4 border-[#374151] flex items-center justify-center transition-all hover:translate-y-[-4px]"
                        aria-label={social.label}
                      >
                        <Icon size={20} className="text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-[#FFF8F0] p-8 border-4 border-[#374151]">
                <h2 className="text-3xl font-bold text-[#374151] mb-6 border-b-8 border-[#FFC133] inline-block pb-2">
                  SEND A MESSAGE
                </h2>

                {submitMessage && (
                  <div className="mb-6 p-4 bg-[#10B981] border-4 border-[#374151]">
                    <p className="text-white font-bold">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div>
                    <label htmlFor="name" className="block text-[#374151] mb-2 font-bold">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-4 border-[#374151] focus:border-[#FFC133] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#374151] mb-2 font-bold">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-4 border-[#374151] focus:border-[#FFC133] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[#374151] mb-2 font-bold">
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-4 border-[#374151] focus:border-[#FFC133] focus:outline-none transition-colors"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#374151] mb-2 font-bold">
                      MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border-4 border-[#374151] focus:border-[#FFC133] focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 border-4 border-[#374151] font-bold transition-all flex items-center justify-center ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#FFC133] hover:bg-[#FF8A5B] text-[#374151] hover:translate-y-[-4px]"
                    }`}
                  >
                    {isSubmitting ? (
                      "SENDING..."
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-[#FFC133] border-y-8 border-[#374151]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-[#374151] border-4 border-[#374151] mb-6">
            <span className="text-[#FFC133] font-bold">✨ CURRENTLY AVAILABLE FOR PROJECTS</span>
          </div>
          <h2 className="text-4xl font-bold text-[#374151] mb-6 border-b-8 border-[#374151] inline-block pb-2">
            LET'S BUILD SOMETHING GREAT
          </h2>
          <p className="text-xl text-[#374151] font-medium mt-6">
            I'm currently accepting new projects and would love to discuss how we can
            work together to bring your ideas to life.
          </p>
        </div>
      </section>
    </div>
  );
}

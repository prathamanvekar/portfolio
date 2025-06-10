"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  ExternalLink,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Error occurred while sending message.");
  }

  setIsSubmitting(false);
  setFormData({ name: "", email: "", message: "" });
};


  const contactMethods = [
    {
      id: "email",
      icon: Mail,
      title: "email",
      value: "anvekarprathamesh13@gm...",
      href: "mailto:anvekarprathamesh13@gmail.com",
      description: "drop me a line anytime",
    },
    {
      id: "location",
      icon: MapPin,
      title: "location",
      value: "pune, india",
      href: "https://g.co/kgs/ZivMVif",
      description: "available for remote work",
    },
  ];

  const socialLinks = [
    {
      id: "github",
      icon: Github,
      name: "github",
      username: "prathamanvekar",
      url: "https://github.com/prathamanvekar",
      color: "hover:text-gray-800",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      name: "linkedin",
      username: "prathamanvekar",
      url: "https://linkedin.com/in/prathamanvekar",
      color: "hover:text-blue-600",
    },
    {
      id: "twitter",
      icon: Twitter,
      name: "twitter",
      username: "prathamiscool",
      url: "https://twitter.com/prathamiscool",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section className="pb-10 z-10 font-serif" id="contact">
      <div className="flex flex-col max-w-8xl px-6 pb-8 mx-auto">
        <div className="w-full pb-8">
          <h2 className="text-6xl font-semibold leading-none tracking-tighter py-5">
            contact me
          </h2>

          <p className="text-2xl mb-8">
            i'm always open to discussing new{" "}
            <span className="font-semibold text-blue-500">projects</span>,{" "}
            <span className="font-semibold text-blue-500">opportunities</span>,
            and{" "}
            <span className="font-semibold text-blue-500">collaborations</span>.
            let's create something amazing together.
          </p>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.id}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group p-6 border-2 transition-all duration-300 ${
                  hoveredCard === method.id
                    ? "border-blue-500 bg-blue-50 transform scale-105"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center mb-4">
                  <method.icon className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-2xl font-semibold">{method.title}</h3>
                </div>
                <p className="text-xl font-medium text-blue-500 mb-2">
                  {method.value}
                </p>
                <p className="text-lg text-gray-600">{method.description}</p>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors mt-2" />
              </motion.a>
            ))}
          </div>

          <hr className="my-8 border-blue-500" />

          {/* Social profiles */}
          <div className="mb-12">
            <h3 className="text-3xl font-semibold leading-none tracking-tighter pb-6">
              connect with me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`group flex items-center p-4 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:bg-blue-50 ${social.color}`}
                >
                  <social.icon className="w-8 h-8 mr-4 text-gray-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xl font-semibold">{social.name}</div>
                    <div className="text-lg text-gray-600">
                      @{social.username}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 ml-auto text-gray-400 group-hover:text-blue-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          <hr className="my-8 border-blue-500" />

          {/* Contact form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-semibold leading-none tracking-tighter pb-6">
                send a message
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                have a project in mind? let's discuss how we can work together
                to bring your ideas to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center text-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>usually respond within 24 hours</span>
                </div>
                <div className="flex items-center text-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>available for freelance projects</span>
                </div>
                <div className="flex items-center text-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span>open to full-time opportunities</span>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 text-xl bg-transparent border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-xl text-gray-500 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-blue-500 bg-white px-2">
                      name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 text-xl bg-transparent border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors peer"
                      placeholder=" "
                    />
                    <label className="absolute left-4 top-4 text-xl text-gray-500 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-blue-500 bg-white px-2">
                      email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-4 text-xl bg-transparent border-2 border-gray-200 focus:border-blue-500 outline-none resize-none transition-colors peer"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-4 top-4 text-xl text-gray-500 transition-all peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-blue-500 bg-white px-2">
                    message
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-blue-500 text-white px-8 py-4 text-xl font-semibold hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        sending...
                      </>
                    ) : (
                      <>
                        send
                        <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

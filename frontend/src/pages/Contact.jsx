import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const needOptions = [
  "Software & Application Development",
  "UI/UX & Creative Design",
  "Cloud, DevOps & IT Infrastructure",
  "Cybersecurity & Database Solutions",
  "AI, Automation & System Integration",
  "Digital Business & IT Consulting",
  "Outsourcing",
  "Internship / Careers",
  "Other",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Just exploring",
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  need: "",
  timeline: "",
  message: "",
};

const inputClass =
  "mt-2 w-full rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.need) newErrors.need = "Please select what you need.";
    if (!form.message.trim())
      newErrors.message = "Please tell us a little about your project.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      console.error("VITE_API_URL is not configured.");
      alert("API URL is missing. Please check your frontend .env file.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/enquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Submission failed:", data);
        alert(
          data.message ||
            "Could not submit enquiry. Please check the server and form errors.",
        );
        return;
      }

      setSent(true);
      setForm({ ...emptyForm });
      setErrors({});
      alert("Enquiry submitted successfully!");
    } catch (error) {
      console.error("Connection error:", error);
      alert("Could not connect to the Laravel server.");
    }
  };

  const contactCards = [
    {
      title: "Visit our office",
      lines: [
        "Head Office: No. 280/A, Illukwaththa, Kadugannawa, Sri Lanka",
        "Work Site: No. 84/11/1/2, Wiliyam Gopallawa MW, Kandy, Sri Lanka",
      ],
    },
    {
      title: "Call us",
      lines: [
        "+94 74 369 2999 | +94 78 889 5941",
        "yakunextechnologies@gmail.com",
      ],
    },
    {
      title: "Send an enquiry",
      lines: [
        "Prefer a quick chat? Message us on WhatsApp and we will respond as soon as possible.",
      ],
    },
  ];
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Contact Us
            </p>
             <h1 className="mt-3 text-4xl font-bold md:text-5xl text-white">
              Let's talk about your project
            </h1>
            <p className="mt-3 max-w-2xl text-slate-300">
              Whether you need a new website, a custom system or expert IT
              support, share a few details and our team will reply within one
              working day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">Contact details</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            {contactCards.map((contact) => (
              <div
                key={contact.title}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-gold"
              >
                <h3 className="text-lg font-semibold text-gold">
                  {contact.title}
                </h3>
                <div className="mt-4 space-y-1 text-white">
                  {contact.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {contact.title === "Send an enquiry" && (
                  <a
                    href="https://wa.me/94777851550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block self-start rounded-md bg-gold px-6 py-3 text-sm font-bold text-white transition hover:bg-gold/80"
                  >
                    Message on WhatsApp
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">Project Enquiry</h2>
          <p className="mt-2 text-gold">
            Tell us about your idea and we will get back to you with the next
            steps.
          </p>
          {sent && (
            <p
              role="status"
              className="mt-6 rounded-md border border-gold/50 bg-gold/10 p-4 text-gold"
            >
              Thank you! Your enquiry has been received. We will reply within
              one working day.
            </p>
          )}

          <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="font-semibold text-white">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Nimal Perera"
                className={inputClass}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="font-semibold text-white">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={inputClass}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="font-semibold text-white">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+94 7X XXX XXXX"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="company" className="font-semibold text-white">
                Company / Organization
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Optional"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="need" className="font-semibold text-white">
                What do you need?
              </label>
              <select
                id="need"
                name="need"
                value={form.need}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a service</option>
                {needOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {errors.need && (
                <p className="mt-1 text-sm text-red-400">{errors.need}</p>
              )}
            </div>

            <div>
              <label htmlFor="timeline" className="font-semibold text-white">
                Preferred timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select a timeline</option>
                {timelineOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="font-semibold text-white">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Briefly describe your goals, features and any deadlines"
                className={inputClass}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-md bg-gold px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/80"
            >
              Send Message
            </button>

            <p className="text-sm text-slate-400">
              Your enquiry will be stored in our database for review. Email
              notifications are not enabled yet.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;

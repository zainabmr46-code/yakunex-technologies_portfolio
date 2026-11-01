import React from "react";
import picture from "../assets/picture.jpg";
import { Link } from "react-router-dom";

const coreValues = [
  { title: "Innovation", text: "embrace new technologies and creative ideas." },
  { title: "Quality", text: " deliver reliable, high-quality solutions." },
  { title: "Integrity", text: "act honestly and transparently." },
  {
    title: "Customer satisfaction",
    text: "understand client needs and create lasting value.",
  },
  {
    title: "Teamwork",
    text: "collaborate respectfully and work toward shared goals",
  },
  {
    title: "Continuous learning",
    text: "develop technical knowledge and professional skills. ",
  },
  {
    title: "Responsibility",
    text: "respect security, privacy, and ethical practices. ",
  },
];

function About() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              About Us
            </p>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl text-white">
              Company Background
            </h1>
            <p className="mt-5 max-w-2xl text-slate-300">
              Yakunex Technologies (Pvt) Ltd provides IT-related services and
              solutions intended to help businesses and individuals solve
              practical problems. Its areas of interest include software
              development, web and mobile applications, IT infrastructure,
              cybersecurity, artificial intelligence, cloud computing, and other
              technology-related services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="max-auto grid max-w-7xl px-6 py-16 lg:grid-cols-[2fr_1fr]">
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-10">
            <h2 className="text-2xl font-bold text-white">Core Values</h2>

            <ul className="mt-6 grid gap-4 text-lg text-white sm:grid-cols-2">
              {coreValues.map((value) => (
                <li key={value.title}>
                  <span className="font-semibold text-gold">{value.title}</span>
                  : {value.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-zoom-in relative mx-auto flex h-[min(70vw,42vh)] w-[min(70vw,42vh)] shrink-0 items-center translate-y justify-center">
            <div className="animate-glow absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
            <div className="animate-orbit absolute inset-0 rounded-full border-2 border-dashed border-gold/50" />
            <div className="relative h-[88%] w-[88%] rounded-full bg-gradient-to-br from-yellow-300 via-gold to-amber-700 p-1.5 sm:p-2">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
                <img
                  src={picture}
                  alt="Yakunex Technologies (Pvt) Ltd logo"
                  className="h-[66%] w-[66%] -translate-y-1 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w7xl px-6 py-16">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-3xl font-bold text-white">Company Vision </h2>

              <p className="mt-3 text-slate-300">
                To become a trusted and innovative technology company recognized
                for delivering high-quality IT solutions that empower
                businesses, connect communities, and create a smarter digital
                future.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-3xl font-bold text-white">Company Mission</h2>
              <p className="mt-3 text-slate-300">
                To deliver reliable, secure, and innovative technology solutions
                tailored to client needs. The company aims to support digital
                transformation through software development, web and mobile
                applications, cloud computing, cybersecurity, artificial
                intelligence, and other IT services, while fostering creativity,
                continuous learning, and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

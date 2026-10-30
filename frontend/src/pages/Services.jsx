import React from "react";
import { Link } from "react-router-dom";
import { Services as services } from "../Data/Services";

function Services() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">
            What will we do for you?
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl text-white">
            Main Services
          </h1>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">
            Six service areas covering the full lifecycle of digital products,
            from software development and creative design to cloud
            infrastructure, cybersecurity, automation, and digital business
            solutions.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:scale-[1.02] hover:border-gold"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need a service not listed here?
          </h2>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-gold px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/80"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Services;

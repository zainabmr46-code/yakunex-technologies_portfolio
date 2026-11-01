import { Link } from "react-router-dom";
import picture from "../assets/picture.jpg";
import Automation from "../assets/Automation.jpg";
import Cloud from "../assets/Cloud.jpg";
import Cybersecurity from "../assets/Cybersecurity.jpg";
import Software from "../assets/Software.jpg";
import Creative from "../assets/Creative.jpg";
import Digital from "../assets/Digital.jpg";
import ProjectData from "../Data/Projects";

import { Services } from "../Data/Services";
import Reveal from "../components/Reveal";

function Home() {
  return (
    <>
      <section className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-gold">
              Technology with purpose · Kandy, Sri Lanka
            </p>
            <h2
              className="animate-fade-up mt-3 text-5xl font-bold text-white"
              style={{ animationDelay: "150ms" }}
            >
              Smart IT solutions for{" "}
              <span
                className="animate-shine bg-gradient-to-r from-gold via-yellow-200
              to-gold bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                growing businesses
              </span>
            </h2>

            <p
              className="animate-fade-up mt-5 max-w-2xl text-slate-300"
              style={{ animationDelay: "300ms" }}
            >
              Yakunex Technologies (Pvt) Ltd provides IT-related services and
              solutions intended to help businesses and individuals solve
              practical problems, including software development, web and mobile
              applications, IT infrastructure, cybersecurity, artificial
              intelligence and cloud computing.
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap gap-4"
              style={{ animationDelay: "450ms" }}
            >
              <Link
                to="/projects"
                className="w-[150px] rounded-md bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-gold/80"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className=" w-[150px] rounded-md border border-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="animate-zoom-in relative mx-auto flex h-[min(70vw,42vh)] w-[min(70vw,42vh)] shrink-0 items-center justify-center">
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
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              What will we do for you?
            </p>
            <h2 className="text-3xl font-bold text-white">Main Services</h2>
            <p className="mt-4 text-slate-300">
              Six service areas covering the full lifecycle of digital products,
              from software development and creative design to cloud
              infrastructure, cybersecurity, automation, and digital business
              solutions.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 100}
                className="h-full"
              >
                <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:scale-[1.02] hover:border-gold">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                Our Works
              </p>
              <h2 className="text-3xl font-bold text-white">
                Featured Projects
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {ProjectData.filter((project) => project.featured).map(
                (project, index) => (
                  <Reveal
                    key={project.id}
                    delay={index * 120}
                    className="h-full"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-1 hover:border-gold">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-52 w-full bg-slate-800 object-cover"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                          {project.category}
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-white">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-auto inline-block pt-6 text-sm font-semibold text-gold hover:underline"
                        >
                          View on GitHub ↗
                        </a>
                      </div>
                    </article>
                  </Reveal>
                ),
              )}
            </div>

            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 active:translate-y-0"
              >
                See all projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w7xl px-6 py-16">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-3xl font-bold text-white">
                  Company Vision
                </h2>
                <p className="mt-3 text-slate-300">
                  To become a trusted and innovative technology company
                  recognized for delivering high-quality IT solutions that
                  empower businesses, connect communities, and create a smarter
                  digital future.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="h-full">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-3xl font-bold text-white">
                  Company Mission
                </h2>
                <p className="mt-3 text-slate-300">
                  To deliver reliable, secure, and innovative technology
                  solutions tailored to client needs. The company aims to
                  support digital transformation through software development,
                  web and mobile applications, cloud computing, cybersecurity,
                  artificial intelligence, and other IT services, while
                  fostering creativity, continuous learning, and professional
                  growth.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUTSOURCING AND CALL TO ACTION */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-stretch gap-8 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  Work with us
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Outsourcing &amp; Careers
                </h2>
                <p className="mt-4 text-slate-300">
                  Yakunex Technologies offers outsourcing support for software,
                  web, design and IT projects. We also welcome interns and
                  graduates who want to learn, grow and build their careers with
                  a team that values innovation, teamwork and continuous
                  learning.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150} className="h-full">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">
                  Ready to start your project?
                </p>
                <h2 className="mt-2 text-3xl font-bold text-white">
                  Let's work together
                </h2>
                <p className="mt-4 text-slate-300">
                  Tell us what you need and our team will get back to you with
                  the right solution for your business.
                </p>

                {/* Link styled directly: a <button> inside a <Link> is invalid HTML */}
                <Link
                  to="/contact"
                  className="mt-8 inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/30 active:translate-y-0"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

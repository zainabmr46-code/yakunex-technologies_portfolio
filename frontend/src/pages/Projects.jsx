
import { useState } from "react";
import projectData from "../Data/Projects";

const filters = [
  "All",
  "Laravel",
  "React",
  "MySQL",
  "REST API",
  "JWT",
  "Java",
  "OOP",
  "HTML",
  "CSS",
  "JavaScript",
];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectData
      : projectData.filter((project) =>
          project.technologies.some(
            (technology) =>
              technology.toLowerCase() === activeFilter.toLowerCase()
          )
        );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold">
          Our Works
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-5xl">
          Projects
        </h1>

        <p className="mt-5 max-w-3xl leading-7 text-slate-300">
          Explore selected academic and personal projects that demonstrate
          practical experience in software development, web technologies,
          and database integration.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "border-gold bg-gold text-slate-950"
                  : "border-slate-700 text-slate-300 hover:border-gold hover:text-gold"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-gold"
            >
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

                <h2 className="mt-2 text-xl font-bold">
                  {project.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
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
                  className="mt-6 inline-flex w-fit items-center rounded-md border border-gold px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-slate-950"
                >
                  View on GitHub ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-10 text-slate-400">
            No projects match this technology.
          </p>
        )}
      </section>
    </main>
  );
}

export default Projects;

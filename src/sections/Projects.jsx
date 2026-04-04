const projects = [
  {
    title: "Churn Prediction",
    description:
      "Reduje el churn potencial en un 18% mediante un modelo de machine learning entrenado con datos históricos de clientes.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    link: "https://github.com/Ryujin010",
  },
  {
    title: "A/B Testing",
    description:
      "Optimicé la tasa de conversión en un 12% mediante análisis estadístico de experimentos controlados.",
    tech: ["Python", "Statsmodels", "SQL"],
    link: "https://github.com/Ryujin010",
  },
  {
    title: "Dashboard YouTube",
    description:
      "Construí un dashboard interactivo que permite analizar KPIs clave y mejorar la toma de decisiones.",
    tech: ["Power BI", "DAX"],
    link: "https://github.com/Ryujin010",
  },
  {
    title: "Video Game Analysis",
    description:
      "Analicé tendencias globales de ventas identificando patrones clave para estrategia de mercado.",
    tech: ["Python", "Pandas", "Matplotlib"],
    link: "https://github.com/Ryujin010",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-2xl font-semibold mb-8">
        Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            {/* TECNOLOGÍAS */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a href={project.link} target="_blank">
              <button className="bg-white text-black px-4 py-2 rounded-lg">
                Ver en GitHub
              </button>
            </a>

          </div>
        ))}

      </div>
    </section>
  );
}
const projects = [
  {
    title: "Global Earthquake Analysis",
    description:
      "Proyecto de análisis de datos sísmicos globales para identificar patrones y tendencias (1900–2025).",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    image: "/images/earthquake.png",
    github: "https://github.com/Ryujin010/Global_Earthquake_Analysis",
    live: "https://jesus-enrique-leon-arteaga-portfolio-profesional-data-analyst.streamlit.app/",
    featured: true,
  },
  {
    title: "Data Analysis Capstone - TripleTen",
    description:
      "Proyecto final enfocado en resolver problemas reales de negocio con análisis de datos.",
    tech: ["Python", "Pandas", "Scikit-learn", "SciPy"],
    image: "/images/capstone.png",
    github: "https://github.com/Ryujin010/data-analysis-capstone-tripleten",
    live: "https://jesus-enrique-leon-arteaga-portfolio-profesional-data-analyst.streamlit.app/",
  },
  {
    title: "Churn Prediction",
    description:
      "Reduje el churn potencial en un 18% mediante un modelo de machine learning.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    image: "/images/churn.png",
    github: "https://github.com/Ryujin010/gym-churn-prediction-model-fitness",
    live: "",
  },
  {
    title: "A/B Testing Optimization",
    description:
      "Optimicé la tasa de conversión en un 12% mediante análisis estadístico.",
    tech: ["Python", "Statsmodels", "SQL"],
    image: "/images/ab.png",
    github: "https://github.com/Ryujin010/marketing-funnel-aab-test",
    live: "https://jesus-enrique-leon-arteaga-portfolio-profesional-data-analyst.streamlit.app/",
    featured: true,
  },
  {
    title: "YouTube Analytics Dashboard",
    description:
      "Dashboard interactivo para análisis de KPIs.",
    tech: ["Power BI", "DAX"],
    image: "/images/youtube.png",
    github: "https://github.com/Ryujin010/proyecto_dashboard_youtube",
    live: "https://jesus-enrique-leon-arteaga-portfolio-profesional-data-analyst.streamlit.app/",
  },
  {
    title: "Video Game Sales Analysis",
    description:
      "Análisis de tendencias globales de ventas.",
    tech: ["Python", "Pandas"],
    image: "/images/games.png",
    github: "https://github.com/Ryujin010/Proyecto-Tienda-de-Video-Juegos",
    live: "https://jesus-enrique-leon-arteaga-portfolio-profesional-data-analyst.streamlit.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Proyectos Destacados
      </h2>

      {/* 🔥 PROYECTO DESTACADO */}
      {projects
        .filter((p) => p.featured)
        .map((project, index) => (
          <div
            key={index}
            className="mb-12 bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-6 w-full"
            />

            <h3 className="text-2xl font-bold mb-3">
              ⭐ {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-slate-600 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={project.github} target="_blank">
                <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}

      {/* 🧩 RESTO DE PROYECTOS */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects
          .filter((p) => !p.featured)
          .map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />

              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

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

              <div className="flex gap-3">
                <a href={project.github} target="_blank">
                  <button className="bg-white text-black px-4 py-2 rounded-lg">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>

    </section>
  );
}
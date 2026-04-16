export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen flex flex-col justify-center">

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Data Analyst | Python | SQL | Business Insights.
      </h1>

      {/*<p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        Analista de datos enfocado en transformar información compleja en insights
        claros y accionables para la toma de decisiones estratégicas. Experiencia en
        análisis, machine learning y visualización de datos aplicada a entornos
        fintech y startups.
      </p>*/}

      <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
        Analista de datos enfocado en transformar datos en decisiones estratégicas.
        Experiencia en análisis exploratorio, visualización y machine learning aplicado
        a problemas de negocio en entornos fintech y startups.
      </p>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">

        {/* BOTÓN PROYECTOS */}
        <a href="#projects">
          <button className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition">
            Ver Proyectos
          </button>
        </a>

        {/* GITHUB */}
        <a href="https://github.com/Ryujin010" target="_blank">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold">
            GitHub
          </button>
        </a>

        {/* LINKEDIN */}
        <a href="https://www.linkedin.com/in/jesus-enrique-leon-arteaga-606204a7" target="_blank">
          <button className="border px-6 py-3 rounded-xl font-semibold hover:bg-slate-700 transition">
            LinkedIn
          </button>
        </a>

      </div>

    </section>
  );
}
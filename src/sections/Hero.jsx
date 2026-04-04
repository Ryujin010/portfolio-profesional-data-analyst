export default function Hero() {
  return (
    <section className="text-center py-20 px-6">

      <h1 className="text-5xl font-bold mb-4">
        Data Analyst & Full Stack Developer
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto">
        Transformo datos en decisiones estratégicas y construyo soluciones web completas basadas en análisis.
      </p>

      <div className="flex justify-center gap-4 mt-6">

        <a href="https://github.com/Ryujin010" target="_blank">
          <button className="bg-white text-black px-4 py-2 rounded-lg">
            GitHub
          </button>
        </a>

        <a href="https://www.linkedin.com/in/jesus-enrique-leon-arteaga-606204a7" target="_blank">
          <button className="border px-4 py-2 rounded-lg">
            LinkedIn
          </button>
        </a>

      </div>

    </section>
  );
}
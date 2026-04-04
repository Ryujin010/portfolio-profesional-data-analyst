export default function Contact() {
  return (
    <section id="contact" className="text-center py-20 px-6">

      <h2 className="text-2xl font-semibold mb-4">
        Contacto
      </h2>

      <p className="text-gray-400 mb-6">
        Abierto a oportunidades como Data Analyst / BI Analyst / Full Stack Developer
      </p>

      <div className="flex justify-center gap-4">

        <a href="mailto:jesuse.gjn@gmail.com">
          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Enviar Email
          </button>
        </a>

        <a href="https://github.com/Ryujin010" target="_blank">
          <button className="border px-4 py-2 rounded-lg">
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
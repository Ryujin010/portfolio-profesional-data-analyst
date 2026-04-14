export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">

      <h2 className="text-2xl font-semibold mb-6">
        Stack & Herramientas
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {[
          "Python",
          "SQL",
          "Pandas",
          "NumPy",
          "Scikit-learn",
          "Power BI",
          "React",
          "Tailwind",
          "Git & GitHub",
          "Jupyter Notebook",
          "Matplotlib",
          "Statsmodels",
          "SciPy",
          "Seaborn",
          "Streamlit",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-slate-800 p-4 rounded-xl text-center"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}
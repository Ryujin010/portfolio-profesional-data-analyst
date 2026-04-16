/*export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} Jesús Enrique León Arteaga
    </footer>
  );
}*/

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-slate-700 mt-10">

      <p className="text-gray-400">
        © 2026 - Jesus Enrique Leon Arteaga - Data Analyst Portfolio
      </p>

      <div className="flex justify-center gap-6 mt-4">

        <a href="https://github.com/Ryujin010" target="_blank">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/jesus-enrique-leon-arteaga-606204a7" target="_blank">
          LinkedIn
        </a>

      </div>

    </footer>
  );
}
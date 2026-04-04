export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      
      <h1 className="text-xl font-bold">JELA.dev</h1>

      <div className="flex gap-6 text-sm">
        <a href="#about" className="hover:text-blue-400">Sobre mí</a>
        <a href="#projects" className="hover:text-blue-400">Proyectos</a>
        <a href="#contact" className="hover:text-blue-400">Contacto</a>
      </div>

    </nav>
  );
}
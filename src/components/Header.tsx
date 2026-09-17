export default function Header() {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

      <div className="text-xl font-bold tracking-tight">
        LC<span className="text-emerald-400">.</span>
      </div>

      <nav className="hidden gap-8 text-sm text-zinc-400 md:flex">
        <a href="#projects" className="transition hover:text-white">
          Projetos
        </a>

        <a href="#lab" className="transition hover:text-white">
          Engineering Lab
        </a>

        <a href="#about" className="transition hover:text-white">
          Sobre
        </a>

        <a href="#contact" className="transition hover:text-white">
          Contato
        </a>
      </nav>

    </header>
  );
}
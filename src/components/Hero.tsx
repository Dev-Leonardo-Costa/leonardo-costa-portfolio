import SystemStatus from "./SystemStatus";

const technologies = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
  "AWS",
  "RabbitMQ",
];

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

      <div>
        <p className="mb-5 font-mono text-sm tracking-widest text-emerald-400">
          BACKEND SOFTWARE ENGINEER
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Leonardo
          <br />
          Costa
        </h1>

        <h2 className="mt-7 max-w-xl text-2xl leading-relaxed text-zinc-300 sm:text-3xl">
          Transformo problemas reais em{" "}
          <span className="text-white">
            software confiável.
          </span>
        </h2>

        <p className="mt-6 max-w-xl leading-7 text-zinc-500">
          Desenvolvimento backend com foco em Java, Spring Boot,
          APIs REST, bancos de dados e arquitetura de software.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 font-mono text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-emerald-400 px-6 py-3 font-medium text-black transition hover:bg-emerald-300"
          >
            Explorar projetos
          </a>

          <a
            href="https://github.com/Dev-Leonardo-Costa"
            className="rounded-md border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            GitHub ↗
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3 font-mono text-xs text-zinc-500">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>

      <SystemStatus />

    </section>
  );
}
export default function About() {
  const principles = [
    {
      number: "01",
      title: "Backend first",
      description:
        "Foco em regras de negócio, APIs, persistência, segurança e confiabilidade.",
    },
    {
      number: "02",
      title: "Código com contexto",
      description:
        "Não apenas implementar funcionalidades, mas entender o problema que o software precisa resolver.",
    },
    {
      number: "03",
      title: "Evolução contínua",
      description:
        "Projetos são utilizados como laboratório para arquitetura, cloud, mensageria e observabilidade.",
    },
  ];

  const stack = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "PostgreSQL",
    "Oracle",
    "Docker",
    "RabbitMQ",
    "AWS",
    "Git",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      className="border-t border-zinc-900 bg-[#080b10]"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">

        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT */}
          <div>
            <p className="font-mono text-sm tracking-widest text-emerald-400">
              ABOUT / ENGINEER
            </p>

            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Leonardo
              <br />
              Costa<span className="text-emerald-400">.</span>
            </h2>

            <p className="mt-8 font-mono text-xs text-zinc-600">
              BACKEND SOFTWARE ENGINEER
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <p className="max-w-3xl text-xl leading-9 text-zinc-300">
              Desenvolvedor de software com foco em backend Java,
              construindo APIs e sistemas com atenção a regras de
              negócio, segurança, persistência e qualidade de código.
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
              Minha experiência envolve desenvolvimento e evolução
              de aplicações Java, integração com bancos de dados,
              manutenção de sistemas e construção de projetos que
              exploram problemas reais de engenharia de software.
            </p>

            {/* STACK */}
            <div className="mt-12">

              <p className="font-mono text-xs tracking-widest text-zinc-600">
                CORE STACK
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded border border-zinc-800 px-3 py-2 font-mono text-xs text-zinc-500 transition hover:border-emerald-400/30 hover:text-emerald-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* PRINCIPLES */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:grid-cols-3">

          {principles.map((principle) => (
            <div
              key={principle.number}
              className="bg-[#080b10] p-7"
            >

              <span className="font-mono text-xs text-emerald-400">
                {principle.number}
              </span>

              <h3 className="mt-8 text-lg font-semibold text-zinc-200">
                {principle.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {principle.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
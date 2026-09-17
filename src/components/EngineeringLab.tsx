import Link from "next/link";

// ROTAS DA APP
const labs = [
    {
        number: "01",
        status: "IMPLEMENTED",
        title: "PIX Idempotency",
        question: "Como impedir o processamento duplicado de uma operação?",
        technologies: ["Java", "PostgreSQL", "Request Hash"],
        href: "/lab/pix-idempotency",
    },
    {
        number: "02",
        status: "NEXT",
        title: "Async Processing",
        question: "Quando processamento assíncrono é melhor que REST síncrono?",
        technologies: ["Spring Boot", "RabbitMQ"],
        href: null,
    },
    {
        number: "03",
        status: "PLANNED",
        title: "Caching Strategy",
        question: "Quando Redis realmente melhora uma API?",
        technologies: ["Spring Boot", "Redis"],
        href: null,
    },
    {
        number: "04",
        status: "PLANNED",
        title: "API Resilience",
        question: "Como uma API reage quando uma dependência fica indisponível?",
        technologies: ["Retry", "Timeout", "Circuit Breaker"],
        href: null,
    },
    {
        number: "05",
        status: "IMPLEMENTED",
        title: "Observability",
        question: "Como observar o comportamento de uma aplicação em produção?",
        technologies: ["Actuator", "Micrometer", "Prometheus"],
        href: null,
    },
    {
        number: "06",
        status: "PLANNED",
        title: "Load Testing",
        question: "Como medir o comportamento da API sob carga?",
        technologies: ["k6", "Spring Boot", "PostgreSQL"],
        href: null,
    },
];

export default function EngineeringLab() {
    return (
        <section
            id="lab"
            className="border-t border-zinc-900 bg-[#080b10] px-6 py-32"
        >
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 lg:grid-cols-2">
                    <div>
                        <p className="font-mono text-sm tracking-widest text-emerald-400">
                            ENGINEERING LAB
                        </p>

                        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                            Eu não apenas uso
                            <br />
                            tecnologias.
                            <span className="text-zinc-400"> Eu testo ideias.</span>
                        </h2>
                    </div>

                    <div className="flex items-end">
                        <p className="max-w-xl leading-8 text-zinc-500">
                            Pequenos experimentos focados em problemas específicos de
                            backend, arquitetura, performance, mensageria e observabilidade.
                        </p>
                    </div>
                </div>

                <div className="mt-20 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-3">
                    {labs.map((lab) => (
                        <LabCard key={lab.number} {...lab} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function LabCard({
    number,
    status,
    title,
    question,
    technologies,
    href,
}: {
    number: string;
    status: string;
    title: string;
    question: string;
    technologies: string[];
    href: string | null;
}) {
    const implemented = status === "IMPLEMENTED";

    return (
        <article className="group bg-[#080b10] p-7 transition hover:bg-zinc-950">

            <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">
                    LAB_{number}
                </span>

                <span
                    className={`font-mono text-[10px] ${implemented
                            ? "text-emerald-400"
                            : "text-zinc-600"
                        }`}
                >
                    {implemented ? "● " : "○ "}
                    {status}
                </span>
            </div>

            <h3 className="mt-12 text-xl font-semibold text-zinc-200">
                {title}
            </h3>

            <p className="mt-4 min-h-14 text-sm leading-6 text-zinc-500">
                {question}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span
                        key={technology}
                        className="font-mono text-[11px] text-zinc-600"
                    >
                        #{technology.replaceAll(" ", "-").toLowerCase()}
                    </span>
                ))}
            </div>

            <div className="mt-10 border-t border-zinc-900 pt-5">

                {implemented && href ? (
                    <Link
                        href={href}
                        className="font-mono text-xs text-emerald-400 transition hover:text-emerald-300"
                    >
                        EXPLORE LAB →
                    </Link>
                ) : (
                    <span className="font-mono text-xs text-zinc-700">
                        COMING SOON
                    </span>
                )}

            </div>

        </article>
    );
}
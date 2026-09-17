import Link from "next/link";

export default function FeaturedProject() {
    return (
        <section
            id="projects"
            className="border-t border-zinc-900 bg-[#080b10] px-6 py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* IDENTIFICAÇÃO */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="font-mono text-sm text-emerald-400">
                        01
                    </span>

                    <div className="h-px w-12 bg-zinc-800" />

                    <span className="font-mono text-sm tracking-widest text-zinc-500">
                        FEATURED ENGINEERING CASE
                    </span>
                </div>

                <div className="grid gap-16 lg:grid-cols-2">

                    {/* CONTEÚDO */}
                    <div>
                        <p className="font-mono text-xs tracking-widest text-zinc-500">
                            FINTECH / BACKEND
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            Banking Platform
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                            Uma API bancária desenvolvida para explorar problemas reais
                            de segurança, transações financeiras, agendamentos e
                            consistência de dados.
                        </p>

                        {/* STACK */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {[
                                "Java 21",
                                "Spring Boot",
                                "PostgreSQL",
                                "Docker",
                                "Flyway",
                                "JWT",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* DESAFIO */}
                        <div className="mt-12">
                            <p className="font-mono text-xs tracking-widest text-emerald-400">
                                {"// O DESAFIO"}
                            </p>

                            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
                                Modelar operações bancárias com regras de negócio,
                                autenticação, persistência e operações PIX, evitando
                                transformar o projeto em apenas mais um CRUD.
                            </p>
                        </div>


                        {/* DECISÕES */}
                        <div className="mt-10">
                            <p className="font-mono text-xs tracking-widest text-emerald-400">
                                {"// DECISÕES DE ENGENHARIA"}
                            </p>

                            <div className="mt-5 space-y-3 font-mono text-sm text-zinc-400">
                                <p>→ Flyway para versionamento do banco</p>
                                <p>→ JWT para autenticação e autorização</p>
                                <p>→ Global Exception Handler</p>
                                <p>→ Docker para ambiente reproduzível</p>
                                <p>→ MapStruct para mapeamento entre camadas</p>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/projects/bank-api"
                                className="rounded-md bg-emerald-400 px-6 py-3 font-medium text-black transition hover:bg-emerald-300"
                            >
                                Explorar case completo →
                            </Link>

                            <a
                                href="https://github.com/Dev-Leonardo-Costa/bank-api"
                                className="rounded-md border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                            >
                                Ver código no GitHub ↗
                            </a>
                        </div>

                    </div>

                    {/* ARQUITETURA */}
                    <div className="flex items-center">
                        <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950 p-8">

                            <div className="mb-8 flex justify-between font-mono text-xs">
                                <span className="text-zinc-500">
                                    architecture.bank
                                </span>

                                <span className="text-emerald-400">
                                    ● RUNNING
                                </span>
                            </div>

                            <div className="space-y-4 font-mono text-sm">

                                <ArchitectureBox title="CLIENT" />

                                <Arrow />

                                <ArchitectureBox title="REST API" subtitle="Spring Boot" />

                                <Arrow />

                                <div className="grid grid-cols-3 gap-3">
                                    <ArchitectureBox title="ACCOUNT" />
                                    <ArchitectureBox title="PIX" />
                                    <ArchitectureBox title="AUTH" />
                                </div>

                                <Arrow />

                                <ArchitectureBox
                                    title="POSTGRESQL"
                                    subtitle="Persistence Layer"
                                />

                            </div>

                            <div className="mt-8 border-t border-zinc-800 pt-6">
                                <p className="font-mono text-xs text-zinc-600">
                                    request → authentication → business rules → persistence
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function ArchitectureBox({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    return (
        <div className="rounded border border-zinc-800 bg-zinc-900/40 p-4 text-center">
            <p className="text-zinc-300">{title}</p>

            {subtitle && (
                <p className="mt-1 text-xs text-zinc-600">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

function Arrow() {
    return (
        <div className="text-center text-emerald-400">
            ↓
        </div>
    );
}
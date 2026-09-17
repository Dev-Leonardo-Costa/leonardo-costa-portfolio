export default function Contact() {
    return (
        <section
            id="contact"
            className="border-t border-zinc-900 bg-[#080b10]"
        >
            <div className="mx-auto max-w-7xl px-6 py-32">

                <p className="font-mono text-sm tracking-widest text-emerald-400">
                    CONTACT / LET&apos;S TALK
                </p>

                <div className="mt-8 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">

                    {/* LEFT */}
                    <div>
                        <h2 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                            Tem um problema interessante
                            <br />
                            para resolver
                            <span className="text-emerald-400">?</span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
                            Estou aberto a oportunidades em desenvolvimento backend,
                            projetos Java e conversas sobre engenharia de software.
                        </p>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=devleonardo27@gmail.com&su=Contato%20pelo%20portfólio"
                            className="mt-10 inline-flex items-center gap-3 rounded-md bg-emerald-400 px-6 py-3 font-mono text-sm font-semibold text-black transition hover:bg-emerald-300"
                        >
                            ENTRAR EM CONTATO
                            <span>→</span>
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col justify-end">

                        <p className="font-mono text-xs tracking-widest text-zinc-600">
                            FIND ME ONLINE
                        </p>

                        <div className="mt-6 border-t border-zinc-800">

                            <SocialLink
                                label="GitHub"
                                href="https://github.com/Dev-Leonardo-Costa"
                            />

                            <SocialLink
                                label="LinkedIn"
                                href="https://www.linkedin.com/in/leonardo-s-costa/"
                            />

                            <SocialLink
                                label="Email"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=devleonardo27@gmail.com&su=Contato%20pelo%20portfólio"
                            />

                        </div>

                    </div>

                </div>

            </div>

            <footer className="border-t border-zinc-900">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} Leonardo Costa
                    </p>

                    <p>
                        JAVA / SPRING BOOT / BACKEND
                    </p>

                </div>
            </footer>

        </section>
    );
}

function SocialLink({
    label,
    href,
}: {
    label: string;
    href: string;
}) {
    return (
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devleonardo27@gmail.com&su=Contato%20pelo%20portfólio"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between border-b border-zinc-800 py-5 transition hover:border-emerald-400/30"
        >
            <span className="text-zinc-400 transition group-hover:text-white">
                {label}
            </span>

            <span className="font-mono text-emerald-400 transition group-hover:translate-x-1">
                ↗
            </span>
        </a>
    );
}
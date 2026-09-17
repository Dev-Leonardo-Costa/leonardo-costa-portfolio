import Link from "next/link";

export default function PixIdempotencyLab() {
    return (
        <main className="min-h-screen bg-[#080b10] text-white">

            {/* HEADER */}
            <header className="border-b border-zinc-900">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

                    <Link
                        href="/"
                        className="font-mono text-xs text-zinc-500 transition hover:text-emerald-400"
                    >
                        ← ENGINEERING LAB
                    </Link>

                    <span className="font-mono text-xs text-zinc-600">
                        LAB_01
                    </span>

                </div>
            </header>

            {/* HERO */}
            <section className="mx-auto max-w-7xl px-6 py-24">

                <p className="font-mono text-sm text-emerald-400">
                    ENGINEERING LAB / 01
                </p>

                <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
                    PIX Idempotency
                    <span className="text-emerald-400">_</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
                    Investigando como uma API financeira pode identificar
                    requisições repetidas e reduzir o risco de processar
                    a mesma intenção mais de uma vez.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    {[
                        "Java 21",
                        "Spring Boot",
                        "PostgreSQL",
                        "Idempotency Key",
                        "Request Hash",
                    ].map((technology) => (
                        <span
                            key={technology}
                            className="rounded border border-zinc-800 px-3 py-2 font-mono text-xs text-zinc-500"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

            </section>

            {/* PROBLEM */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-16 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                01 / THE PROBLEM
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                E se o cliente
                                <br />
                                enviar duas vezes?
                            </h2>

                            <p className="mt-8 max-w-xl leading-8 text-zinc-500">
                                Em sistemas distribuídos, uma requisição pode ser
                                processada enquanto o cliente não recebe a resposta.
                                Um timeout ou problema de rede pode fazer o cliente
                                tentar novamente.
                            </p>
                        </div>

                        <ProblemFlow />

                    </div>

                </div>
            </section>

            {/* DATA MODEL */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                02 / DATA MODEL
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Identificando
                                <br />
                                a intenção da operação.
                            </h2>
                        </div>

                        <p className="max-w-xl leading-8 text-zinc-500">
                            O Bank API possui uma estrutura específica para
                            registrar chaves de idempotência e associá-las
                            às transações processadas.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 lg:grid-cols-2">

                        <DatabaseModel
                            name="pix_idempotency"
                            fields={[
                                "id                 BIGSERIAL PK",
                                "idempotency_key    VARCHAR(100) UNIQUE",
                                "transaction_id     BIGINT FK",
                                "request_hash       VARCHAR(64)",
                                "created_at         TIMESTAMP",
                            ]}
                        />

                        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8">

                            <p className="font-mono text-xs text-zinc-600">
                                WHY THESE FIELDS?
                            </p>

                            <div className="mt-8 space-y-8">

                                <FieldExplanation
                                    field="idempotency_key"
                                    description="Identificador único enviado para representar uma tentativa lógica de operação."
                                />

                                <FieldExplanation
                                    field="request_hash"
                                    description="Permite registrar uma representação do conteúdo associado à requisição."
                                />

                                <FieldExplanation
                                    field="transaction_id"
                                    description="Relaciona o registro de idempotência com uma transação."
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* SOLUTION */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                03 / SOLUTION
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Uma chave.
                                <br />
                                Uma intenção.
                            </h2>
                        </div>

                        <p className="max-w-xl leading-8 text-zinc-500">
                            Antes de movimentar qualquer saldo, a API tenta reservar
                            a Idempotency-Key no PostgreSQL. O resultado dessa operação
                            determina se o PIX deve continuar ou se uma requisição
                            anterior precisa ser recuperada.
                        </p>

                    </div>

                    <div className="mt-16 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                        {/* HEADER */}
                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

                            <span className="font-mono text-xs text-zinc-500">
                                PixService.transfer()
                            </span>

                            <span className="font-mono text-xs text-emerald-400">
                                IDEMPOTENT FLOW
                            </span>

                        </div>

                        <div className="p-6 sm:p-10">

                            <SolutionStep
                                number="01"
                                title="VALIDATE KEY"
                                description="A Idempotency-Key é obrigatória e possui limite de 100 caracteres."
                            />

                            <SolutionArrow label="valid" />

                            <SolutionStep
                                number="02"
                                title="GENERATE REQUEST HASH"
                                description="sourceAccountId + pixKey + amount são utilizados para gerar um SHA-256."
                            />

                            <SolutionArrow label="SHA-256" />

                            <SolutionStep
                                number="03"
                                title="RESERVE KEY"
                                description="PostgreSQL tenta inserir a chave utilizando ON CONFLICT DO NOTHING."
                                active
                            />

                            <div className="my-10 grid gap-6 lg:grid-cols-2">

                                {/* NEW REQUEST */}
                                <DecisionPath
                                    status="RESERVED = 1"
                                    title="NEW REQUEST"
                                    items={[
                                        "Preparar transferência",
                                        "Validar ownership",
                                        "Validar regras do PIX",
                                        "Movimentar saldos",
                                        "Criar Transaction",
                                        "Associar Transaction à Idempotency-Key",
                                        "Retornar resultado",
                                    ]}
                                />

                                {/* DUPLICATED KEY */}
                                <DecisionPath
                                    status="RESERVED = 0"
                                    title="KEY ALREADY EXISTS"
                                    items={[
                                        "Buscar registro existente",
                                        "Comparar request_hash",
                                        "Payload diferente → conflito",
                                        "Payload igual → recuperar Transaction",
                                        "Retornar resultado existente",
                                    ]}
                                    warning
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ATOMIC RESERVATION */}
            <section className="border-t border-zinc-900">
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                04 / ATOMIC RESERVATION
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Deixe o banco
                                <br />
                                decidir quem reservou.
                            </h2>

                            <p className="mt-8 max-w-xl leading-8 text-zinc-500">
                                A Idempotency-Key possui uma restrição UNIQUE.
                                A tentativa de reserva é feita diretamente no PostgreSQL
                                utilizando ON CONFLICT DO NOTHING.
                            </p>

                            <div className="mt-10 space-y-4">

                                <ReservationResult
                                    value="1"
                                    title="Reserva realizada"
                                    description="A requisição continua para o processamento do PIX."
                                />

                                <ReservationResult
                                    value="0"
                                    title="Chave já existente"
                                    description="A API recupera o registro existente e verifica o request hash."
                                    warning
                                />

                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
                                <span className="font-mono text-xs text-zinc-500">
                                    PixIdempotencyRepository.java
                                </span>

                                <span className="font-mono text-xs text-emerald-400">
                                    PostgreSQL
                                </span>
                            </div>

                            <pre className="overflow-x-auto p-6 font-mono text-sm leading-7 text-zinc-400">
                                <code>{`INSERT INTO pix_idempotency (
                                            idempotency_key,
                                            request_hash,
                                            created_at
                                        )
                                        VALUES (
                                            :idempotencyKey,
                                            :requestHash,
                                            CURRENT_TIMESTAMP
                                        )
                                        ON CONFLICT (idempotency_key)
                                        DO NOTHING;`}
                                </code>
                            </pre>

                            <div className="border-t border-zinc-800 p-6">
                                <p className="font-mono text-xs text-zinc-600">
                                    DATABASE CONSTRAINT
                                </p>

                                <p className="mt-3 font-mono text-sm text-emerald-400">
                                    UNIQUE (idempotency_key)
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}


function ProblemFlow() {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">

            <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-600">
                    FAILURE SCENARIO
                </span>

                <span className="font-mono text-xs text-amber-400">
                    RETRY DETECTED
                </span>
            </div>

            <FlowStep
                number="01"
                title="CLIENT"
                description="Envia uma operação PIX."
            />

            <FlowArrow label="request" />

            <FlowStep
                number="02"
                title="BANK API"
                description="Recebe e processa a requisição."
            />

            <FlowArrow label="network failure" warning />

            <FlowStep
                number="03"
                title="TIMEOUT"
                description="O cliente não recebe uma resposta conclusiva."
                warning
            />

            <FlowArrow label="retry" warning />

            <FlowStep
                number="04"
                title="CLIENT RETRY"
                description="A mesma intenção pode ser enviada novamente."
                warning
            />

            <div className="mt-8 rounded-lg border border-amber-400/20 bg-amber-400/5 p-5">
                <p className="font-mono text-xs text-amber-400">
                    ENGINEERING QUESTION
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                    Como distinguir uma nova operação de uma repetição
                    causada por retry?
                </p>
            </div>

        </div>
    );
}

function FlowStep({
    number,
    title,
    description,
    warning = false,
}: {
    number: string;
    title: string;
    description: string;
    warning?: boolean;
}) {
    return (
        <div
            className={`rounded-lg border p-5 ${warning
                ? "border-amber-400/20 bg-amber-400/5"
                : "border-zinc-800 bg-zinc-900/30"
                }`}
        >
            <div className="flex gap-5">

                <span
                    className={`font-mono text-xs ${warning ? "text-amber-400" : "text-emerald-400"
                        }`}
                >
                    {number}
                </span>

                <div>
                    <p className="font-mono text-sm text-zinc-200">
                        {title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}

function FlowArrow({
    label,
    warning = false,
}: {
    label: string;
    warning?: boolean;
}) {
    return (
        <div className="ml-8 flex h-12 items-center gap-4">

            <div
                className={`h-full border-l ${warning
                    ? "border-amber-400/30"
                    : "border-zinc-800"
                    }`}
            />

            <span
                className={`font-mono text-[10px] ${warning
                    ? "text-amber-400"
                    : "text-zinc-700"
                    }`}
            >
                {label}
            </span>

        </div>
    );
}

function DatabaseModel({
    name,
    fields,
}: {
    name: string;
    fields: string[];
}) {
    return (
        <div className="overflow-hidden rounded-xl border border-emerald-400/30 bg-zinc-950">

            <div className="border-b border-emerald-400/20 bg-emerald-400/5 px-6 py-5">
                <p className="font-mono text-sm text-emerald-400">
                    {name}
                </p>
            </div>

            <div className="space-y-4 p-6">
                {fields.map((field) => (
                    <p
                        key={field}
                        className="whitespace-pre font-mono text-xs text-zinc-500"
                    >
                        {field}
                    </p>
                ))}
            </div>

        </div>
    );
}

function FieldExplanation({
    field,
    description,
}: {
    field: string;
    description: string;
}) {
    return (
        <div>
            <p className="font-mono text-sm text-emerald-400">
                {field}
            </p>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
                {description}
            </p>
        </div>
    );
}

function SolutionStep({
    number,
    title,
    description,
    active = false,
}: {
    number: string;
    title: string;
    description: string;
    active?: boolean;
}) {
    return (
        <div
            className={`rounded-lg border p-6 ${active
                ? "border-emerald-400/30 bg-emerald-400/5"
                : "border-zinc-800 bg-zinc-900/30"
                }`}
        >
            <div className="flex gap-5">

                <span className="font-mono text-xs text-emerald-400">
                    {number}
                </span>

                <div>
                    <p className="font-mono text-sm text-zinc-200">
                        {title}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
}

function SolutionArrow({
    label,
}: {
    label: string;
}) {
    return (
        <div className="ml-8 flex h-12 items-center gap-4">

            <div className="h-full border-l border-emerald-400/20" />

            <span className="font-mono text-[10px] text-emerald-400">
                {label}
            </span>

        </div>
    );
}

function DecisionPath({
    status,
    title,
    items,
    warning = false,
}: {
    status: string;
    title: string;
    items: string[];
    warning?: boolean;
}) {
    return (
        <div
            className={`rounded-xl border p-6 ${warning
                ? "border-amber-400/20 bg-amber-400/5"
                : "border-emerald-400/20 bg-emerald-400/5"
                }`}
        >

            <p
                className={`font-mono text-xs ${warning
                    ? "text-amber-400"
                    : "text-emerald-400"
                    }`}
            >
                {status}
            </p>

            <h3 className="mt-4 font-mono text-sm text-zinc-200">
                {title}
            </h3>

            <div className="mt-6 space-y-4">

                {items.map((item, index) => (
                    <div
                        key={item}
                        className="flex items-start gap-3"
                    >

                        <span className="font-mono text-[10px] text-zinc-700">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm text-zinc-500">
                            {item}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

function ReservationResult({
  value,
  title,
  description,
  warning = false,
}: {
  value: string;
  title: string;
  description: string;
  warning?: boolean;
}) {
  return (
    <div className="flex gap-5 rounded-lg border border-zinc-800 bg-zinc-950 p-5">

      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded font-mono text-sm ${
          warning
            ? "bg-amber-400/10 text-amber-400"
            : "bg-emerald-400/10 text-emerald-400"
        }`}
      >
        {value}
      </div>

      <div>
        <p className="font-mono text-sm text-zinc-300">
          {title}
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>

    </div>
  );
}
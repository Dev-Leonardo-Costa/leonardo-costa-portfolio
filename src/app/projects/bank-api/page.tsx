import Link from "next/link";

const technologies = [
    "Java 21",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "Flyway",
    "JWT",
    "MapStruct",
];

export default function BankApiPage() {
    return (
        <main className="min-h-screen bg-[#080b10] text-white">

            {/* HEADER */}
            <header className="border-b border-zinc-900">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                    <Link
                        href="/"
                        className="font-mono text-sm text-zinc-500 transition hover:text-white"
                    >
                        ← VOLTAR AO PORTFÓLIO
                    </Link>

                    <span className="font-mono text-xs text-emerald-400">
                        CASE_01
                    </span>
                </div>
            </header>

            {/* HERO DO CASE */}
            <section className="mx-auto max-w-7xl px-6 pb-20 pt-24">

                <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">

                    <div>
                        <p className="font-mono text-sm tracking-widest text-emerald-400">
                            ENGINEERING CASE / 01
                        </p>

                        <h1 className="mt-6 text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                            Banking
                            <br />
                            Platform<span className="text-emerald-400">_</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
                            Uma plataforma backend para explorar problemas reais de
                            operações financeiras, segurança, persistência,
                            agendamentos e consistência de dados.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded border border-zinc-800 bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-400"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* METADADOS */}
                    <div className="flex items-end">
                        <div className="w-full border-l border-zinc-800 pl-8 font-mono text-sm">

                            <ProjectInfo label="TYPE" value="Backend API" />
                            <ProjectInfo label="STATUS" value="In development" />
                            <ProjectInfo label="RUNTIME" value="Java 21" />
                            <ProjectInfo label="DATABASE" value="PostgreSQL" />

                        </div>
                    </div>

                </div>
            </section>

            {/* NAVEGAÇÃO */}
            <nav className="sticky top-0 z-20 border-y border-zinc-900 bg-[#080b10]/95 backdrop-blur">
                <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-6 py-5 font-mono text-xs">

                    <a href="#overview" className="text-emerald-400">
                        01 OVERVIEW
                    </a>

                    <a
                        href="#architecture"
                        className="whitespace-nowrap text-zinc-500 transition hover:text-white"
                    >
                        02 ARCHITECTURE
                    </a>

                    <a
                        href="#request-flow"
                        className="whitespace-nowrap text-zinc-500 transition hover:text-white"
                    >
                        03 REQUEST FLOW
                    </a>

                    <a
                        href="#database"
                        className="text-zinc-500 transition hover:text-white"
                    >
                        04 DATABASE
                    </a>

                    <a
                        href="#security"
                        className="text-zinc-500 transition hover:text-white"
                    >
                        05 SECURITY
                    </a>

                </div>
            </nav>

            {/* OVERVIEW */}
            <section
                id="overview"
                className="mx-auto max-w-7xl px-6 py-28"
            >
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

                    <div>
                        <p className="font-mono text-sm text-emerald-400">
                            01 / OVERVIEW
                        </p>

                        <h2 className="mt-5 text-4xl font-bold tracking-tight">
                            Por que esse
                            <br />
                            projeto existe?
                        </h2>
                    </div>

                    <div>
                        <p className="max-w-3xl text-xl leading-9 text-zinc-300">
                            O objetivo não é simplesmente construir mais uma API
                            bancária baseada em CRUD.
                        </p>

                        <p className="mt-6 max-w-3xl leading-8 text-zinc-500">
                            O projeto foi criado para trabalhar problemas encontrados
                            em sistemas backend: autenticação, regras de negócio,
                            operações PIX, agendamentos, persistência, migrations,
                            validação de dados e tratamento consistente de erros.
                        </p>

                        {/* CARDS */}
                        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800 sm:grid-cols-3">

                            <Metric
                                number="01"
                                title="Segurança"
                                description="Autenticação e autorização utilizando JWT."
                            />

                            <Metric
                                number="02"
                                title="Consistência"
                                description="Regras de negócio para operações financeiras."
                            />

                            <Metric
                                number="03"
                                title="Evolução"
                                description="Migrations versionadas utilizando Flyway."
                            />

                        </div>

                    </div>

                </div>
            </section>

            {/* ARCHITECTURE */}
            <section
                id="architecture"
                className="border-t border-zinc-900"
            >
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="mb-16">
                        <p className="font-mono text-sm text-emerald-400">
                            02 / ARCHITECTURE
                        </p>

                        <h2 className="mt-5 text-4xl font-bold tracking-tight">
                            Como o sistema está organizado?
                        </h2>

                        <p className="mt-5 max-w-2xl leading-8 text-zinc-500">
                            A aplicação separa entrada HTTP, regras de negócio,
                            segurança e persistência para reduzir acoplamento
                            e facilitar a evolução do sistema.
                        </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">

                        <div className="mb-10 flex items-center justify-between font-mono text-xs">
                            <span className="text-zinc-500">
                                bank-api / architecture
                            </span>

                            <span className="text-emerald-400">
                                ● SYSTEM ONLINE
                            </span>
                        </div>

                        <div className="mx-auto max-w-4xl">

                            <ArchitectureNode
                                title="CLIENT"
                                subtitle="HTTP / JSON"
                            />

                            <FlowArrow />

                            <ArchitectureNode
                                title="REST CONTROLLERS"
                                subtitle="API Layer"
                            />

                            <FlowArrow />

                            <div className="grid gap-4 md:grid-cols-3">
                                <ArchitectureNode
                                    title="AUTH"
                                    subtitle="JWT / Security"
                                />

                                <ArchitectureNode
                                    title="ACCOUNT"
                                    subtitle="Business Rules"
                                />

                                <ArchitectureNode
                                    title="PIX"
                                    subtitle="Transfers / Schedules"
                                />
                            </div>

                            <FlowArrow />

                            <div className="grid gap-4 md:grid-cols-2">
                                <ArchitectureNode
                                    title="SERVICE LAYER"
                                    subtitle="Application Logic"
                                />

                                <ArchitectureNode
                                    title="REPOSITORIES"
                                    subtitle="Spring Data JPA"
                                />
                            </div>

                            <FlowArrow />

                            <ArchitectureNode
                                title="POSTGRESQL"
                                subtitle="Persistence"
                                active
                            />

                        </div>
                    </div>

                </div>
            </section>

            {/* REQUEST FLOW */}
            <section
                id="request-flow"
                className="border-t border-zinc-900"
            >
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                03 / REQUEST FLOW
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                O que acontece
                                <br />
                                em uma operação PIX?
                            </h2>

                            <p className="mt-6 max-w-md leading-7 text-zinc-500">
                                Acompanhe uma requisição desde a entrada na API
                                até a persistência da operação.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                            {/* TERMINAL HEADER */}
                            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

                                <div className="flex gap-2">
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                                </div>

                                <span className="font-mono text-xs text-zinc-600">
                                    request.trace
                                </span>

                            </div>

                            {/* REQUEST */}
                            <div className="border-b border-zinc-800 p-6 font-mono text-sm">

                                <div className="flex gap-3">
                                    <span className="text-emerald-400">
                                        POST
                                    </span>

                                    <span className="text-zinc-300">
                                        /api/pix
                                    </span>
                                </div>

                                <div className="mt-4 text-xs leading-6 text-zinc-600">
                                    <p>Authorization: Bearer ********</p>
                                    <p>Content-Type: application/json</p>
                                </div>

                            </div>

                            {/* FLOW */}
                            <div className="p-6 sm:p-8">

                                <RequestStep
                                    number="01"
                                    title="JWT FILTER"
                                    description="Token recebido e identidade autenticada."
                                />

                                <RequestConnector label="authenticated" />

                                <RequestStep
                                    number="02"
                                    title="VALIDATION"
                                    description="Payload e dados da operação são validados."
                                />

                                <RequestConnector label="valid" />

                                <RequestStep
                                    number="03"
                                    title="PIX SERVICE"
                                    description="Regras de negócio da transferência são executadas."
                                />

                                <RequestConnector label="transaction" />

                                <RequestStep
                                    number="04"
                                    title="POSTGRESQL"
                                    description="Operação é persistida no banco de dados."
                                />

                                <RequestConnector label="success" />

                                <div className="flex items-center justify-between rounded-lg border border-emerald-400/30 bg-emerald-400/5 p-5 font-mono">
                                    <span className="text-sm text-zinc-400">
                                        RESPONSE
                                    </span>

                                    <span className="text-sm text-emerald-400">
                                        201 CREATED
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* DATABASE */}
            <section
                id="database"
                className="border-t border-zinc-900"
            >
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="mb-16 grid gap-10 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                04 / DATABASE
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Consistência começa
                                <br />
                                no modelo de dados.
                            </h2>
                        </div>

                        <p className="max-w-xl leading-8 text-zinc-500">
                            O PostgreSQL não é utilizado apenas como armazenamento.
                            Constraints, relacionamentos, índices, auditoria e
                            idempotência ajudam a proteger as regras do domínio financeiro.
                        </p>

                    </div>

                    {/* DATABASE SCHEMA */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">

                        <div className="mb-10 flex items-center justify-between font-mono text-xs">
                            <span className="text-zinc-500">
                                bank-api / database.schema
                            </span>

                            <span className="text-emerald-400">
                                PostgreSQL
                            </span>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-3">

                            <DatabaseTable
                                name="CUSTOMERS"
                                fields={[
                                    "id              PK",
                                    "full_name",
                                    "cpf",
                                    "email           UNIQUE",
                                    "active",
                                    "created_at",
                                ]}
                            />

                            <DatabaseTable
                                name="ACCOUNTS"
                                highlight
                                fields={[
                                    "id              PK",
                                    "number          UNIQUE",
                                    "agency",
                                    "balance         NUMERIC(19,2)",
                                    "daily_pix_limit NUMERIC(19,2)",
                                    "customer_id     FK",
                                ]}
                            />

                            <DatabaseTable
                                name="PIX_KEYS"
                                fields={[
                                    "id              PK",
                                    "type",
                                    "key_value       UNIQUE",
                                    "account_id      FK",
                                    "created_at",
                                ]}
                            />

                            <DatabaseTable
                                name="TRANSACTIONS"
                                highlight
                                fields={[
                                    "id              PK",
                                    "type",
                                    "status",
                                    "amount          NUMERIC(19,2)",
                                    "source_account  FK",
                                    "destination     FK",
                                ]}
                            />

                            <DatabaseTable
                                name="PIX_SCHEDULES"
                                fields={[
                                    "id              PK",
                                    "source_account  FK",
                                    "pix_key",
                                    "amount",
                                    "scheduled_at    TIMESTAMPTZ",
                                    "status",
                                ]}
                            />

                            <DatabaseTable
                                name="PIX_IDEMPOTENCY"
                                highlight
                                fields={[
                                    "id              PK",
                                    "idempotency_key UNIQUE",
                                    "request_hash",
                                    "transaction_id  FK",
                                    "created_at",
                                ]}
                            />

                        </div>

                        {/* RELATIONSHIPS */}
                        <div className="mt-10 border-t border-zinc-800 pt-8">

                            <p className="font-mono text-xs tracking-widest text-zinc-600">
                                RELATIONSHIPS
                            </p>

                            <div className="mt-6 grid gap-3 font-mono text-xs sm:grid-cols-2">

                                <Relation from="CUSTOMERS" to="ACCOUNTS" type="1:N" />

                                <Relation from="ACCOUNTS" to="PIX_KEYS" type="1:N" />

                                <Relation from="ACCOUNTS" to="TRANSACTIONS" type="1:N" />

                                <Relation from="ACCOUNTS" to="PIX_SCHEDULES" type="1:N" />

                                <Relation
                                    from="TRANSACTIONS"
                                    to="PIX_IDEMPOTENCY"
                                    type="1:0..1"
                                />

                                <Relation
                                    from="TRANSACTIONS"
                                    to="TRANSACTION_AUDIT"
                                    type="1:N"
                                />

                            </div>

                        </div>

                    </div>

                    {/* ENGINEERING DECISIONS */}
                    <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">

                        <DatabaseDecision
                            number="01"
                            title="Precisão monetária"
                            description="NUMERIC(19,2) evita representar valores financeiros utilizando ponto flutuante."
                        />

                        <DatabaseDecision
                            number="02"
                            title="Idempotência PIX"
                            description="Uma chave única identifica requisições repetidas e ajuda a evitar processamento duplicado."
                        />

                        <DatabaseDecision
                            number="03"
                            title="Auditoria"
                            description="Operações podem gerar registros independentes contendo ação, status, responsável e detalhes."
                        />

                        <DatabaseDecision
                            number="04"
                            title="Timezone"
                            description="Agendamentos PIX utilizam TIMESTAMP WITH TIME ZONE para tratar corretamente instantes no tempo."
                        />

                    </div>

                    {/* EVOLUTION LOG */}
                    <div className="mt-24">

                        <div className="mb-12 grid gap-8 lg:grid-cols-2">

                            <div>
                                <p className="font-mono text-xs tracking-widest text-emerald-400">
                                    DATABASE / EVOLUTION LOG
                                </p>

                                <h3 className="mt-4 text-3xl font-bold tracking-tight">
                                    O schema evoluiu junto
                                    <br />
                                    com o domínio.
                                </h3>
                            </div>

                            <p className="max-w-xl leading-7 text-zinc-500">
                                As migrations registram como novas necessidades foram
                                incorporadas ao sistema sem recriar o banco a cada mudança.
                                Cada alteração possui uma versão reproduzível pelo Flyway.
                            </p>

                        </div>

                        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                            {/* TERMINAL HEADER */}
                            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">

                                <div className="flex items-center gap-3">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                    <span className="font-mono text-xs text-zinc-500">
                                        flyway_schema_history
                                    </span>
                                </div>

                                <span className="font-mono text-xs text-zinc-600">
                                    13 migrations
                                </span>

                            </div>

                            <div className="divide-y divide-zinc-900">

                                <Migration
                                    version="V4"
                                    title="Accounts"
                                    description="Introdução das contas bancárias, saldo, agência e relacionamento com clientes."
                                />

                                <Migration
                                    version="V5"
                                    title="Transactions"
                                    description="Registro de movimentações entre contas com validação de valores positivos."
                                />

                                <Migration
                                    version="V6"
                                    title="PIX Keys"
                                    description="Chaves PIX únicas vinculadas às contas bancárias."
                                />

                                <Migration
                                    version="V7"
                                    title="Daily PIX Limit"
                                    description="Limite diário incorporado à conta para controlar operações PIX."
                                />

                                <Migration
                                    version="V8"
                                    title="PIX Scheduling"
                                    description="Suporte ao agendamento de transferências PIX."
                                />

                                <Migration
                                    version="V9"
                                    title="PIX Idempotency"
                                    description="Proteção contra o processamento duplicado da mesma operação."
                                    important
                                />

                                <Migration
                                    version="V10"
                                    title="Request Hash"
                                    description="Hash da requisição adicionado ao mecanismo de idempotência."
                                />

                                <Migration
                                    version="V11"
                                    title="Transaction Audit"
                                    description="Criação de trilha de auditoria para operações financeiras."
                                    important
                                />

                                <Migration
                                    version="V12"
                                    title="Audit Details"
                                    description="Campo de detalhes da auditoria evoluído de VARCHAR para TEXT."
                                />

                                <Migration
                                    version="V13"
                                    title="Timezone"
                                    description="Agendamentos migrados para TIMESTAMP WITH TIME ZONE."
                                    important
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* SECURITY */}
            <section
                id="security"
                className="border-t border-zinc-900"
            >
                <div className="mx-auto max-w-7xl px-6 py-28">

                    {/* INTRO */}
                    <div className="grid gap-10 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                05 / SECURITY
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Autenticação stateless
                                <br />
                                com Spring Security.
                            </h2>
                        </div>

                        <p className="max-w-xl leading-8 text-zinc-500">
                            A API utiliza Spring Security e JWT para autenticação.
                            Credenciais são validadas pelo AuthenticationManager,
                            senhas são verificadas com BCrypt e requisições protegidas
                            passam por um filtro JWT antes de alcançar os endpoints.
                        </p>

                    </div>

                    {/* SECURITY OVERVIEW */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-2">

                        {/* LOGIN FLOW */}
                        <SecurityFlow
                            label="FLOW / TOKEN ISSUANCE"
                            endpoint="POST /auth/login"
                            steps={[
                                {
                                    number: "01",
                                    title: "AuthController",
                                    description: "Recebe e valida o LoginRequest.",
                                },
                                {
                                    number: "02",
                                    title: "AuthService",
                                    description: "Encaminha as credenciais para autenticação.",
                                },
                                {
                                    number: "03",
                                    title: "AuthenticationManager",
                                    description: "Executa o processo de autenticação.",
                                },
                                {
                                    number: "04",
                                    title: "DaoAuthenticationProvider",
                                    description: "Utiliza UserDetailsService e BCrypt.",
                                },
                                {
                                    number: "05",
                                    title: "JwtService",
                                    description: "Gera um JWT assinado para o usuário autenticado.",
                                },
                            ]}
                            result="200 OK / Bearer Token"
                        />

                        {/* PROTECTED REQUEST */}
                        <SecurityFlow
                            label="FLOW / PROTECTED REQUEST"
                            endpoint="Authorization: Bearer <token>"
                            steps={[
                                {
                                    number: "01",
                                    title: "JwtAuthenticationFilter",
                                    description: "Intercepta a requisição uma vez por request.",
                                },
                                {
                                    number: "02",
                                    title: "JwtService",
                                    description: "Extrai o subject e verifica assinatura e expiração.",
                                },
                                {
                                    number: "03",
                                    title: "UserDetailsService",
                                    description: "Carrega usuário e authorities pelo e-mail.",
                                },
                                {
                                    number: "04",
                                    title: "SecurityContext",
                                    description: "Registra a autenticação validada na requisição.",
                                },
                                {
                                    number: "05",
                                    title: "Protected Endpoint",
                                    description: "A requisição autenticada segue pela filter chain.",
                                },
                            ]}
                            result="AUTHENTICATED"
                        />

                    </div>

                    {/* SECURITY DECISIONS */}
                    <div className="mt-16">

                        <p className="font-mono text-xs tracking-widest text-zinc-600">
                            SECURITY / ENGINEERING DECISIONS
                        </p>

                        <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 md:grid-cols-2 lg:grid-cols-4">

                            <SecurityDecision
                                number="01"
                                title="STATELESS"
                                description="SessionCreationPolicy.STATELESS mantém a API sem sessão HTTP no servidor."
                            />

                            <SecurityDecision
                                number="02"
                                title="BCrypt"
                                description="BCryptPasswordEncoder é utilizado pelo provider para verificar as credenciais."
                            />

                            <SecurityDecision
                                number="03"
                                title="Roles"
                                description="Authorities são carregadas das roles associadas ao usuário."
                            />

                            <SecurityDecision
                                number="04"
                                title="401 / 403"
                                description="Handlers personalizados tratam falhas de autenticação e acesso negado."
                            />

                        </div>
                    </div>

                    {/* PUBLIC / PROTECTED */}
                    <div className="mt-16 grid gap-6 lg:grid-cols-2">

                        <RouteGroup
                            title="PUBLIC ROUTES"
                            status="PERMIT ALL"
                            routes={[
                                "/auth/**",
                                "POST /customers",
                                "/swagger-ui/**",
                                "/v3/api-docs/**",
                                "/actuator/health",
                                "/actuator/prometheus",
                            ]}
                        />

                        <RouteGroup
                            title="PROTECTED ROUTES"
                            status="AUTH REQUIRED"
                            routes={[
                                "Accounts",
                                "Transactions",
                                "PIX Keys",
                                "PIX Operations",
                                "PIX Schedules",
                                "Other API resources",
                            ]}
                            protectedRoute
                        />

                    </div>

                </div>
            </section>

            {/* OBSERVABILITY */}
            <section
                id="observability"
                className="border-t border-zinc-900"
            >
                <div className="mx-auto max-w-7xl px-6 py-28">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div>
                            <p className="font-mono text-sm text-emerald-400">
                                06 / OBSERVABILITY
                            </p>

                            <h2 className="mt-5 text-4xl font-bold tracking-tight">
                                Não basta funcionar.
                                <br />
                                É preciso observar.
                            </h2>
                        </div>

                        <p className="max-w-xl leading-8 text-zinc-500">
                            A aplicação utiliza Spring Boot Actuator e Micrometer
                            para expor informações operacionais e métricas da API.
                            O fluxo de autenticação também possui métricas próprias
                            para registrar sucessos e falhas.
                        </p>

                    </div>

                    {/* DASHBOARD */}
                    <div className="mt-16 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

                        {/* HEADER */}
                        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

                            <div className="flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                                <span className="font-mono text-xs text-zinc-500">
                                    bank-api / runtime
                                </span>
                            </div>

                            <span className="font-mono text-xs text-emerald-400">
                                OBSERVABLE
                            </span>

                        </div>

                        {/* METRICS */}
                        <div className="grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4">

                            <ObservabilityMetric
                                label="APPLICATION"
                                value="UP"
                                description="Actuator health"
                            />

                            <ObservabilityMetric
                                label="AUTH SUCCESS"
                                value="COUNTER"
                                description="bank.auth.success.total"
                            />

                            <ObservabilityMetric
                                label="AUTH FAILURE"
                                value="COUNTER"
                                description="bank.auth.failed.total"
                            />

                            <ObservabilityMetric
                                label="EXPORT"
                                value="PROMETHEUS"
                                description="/actuator/prometheus"
                            />

                        </div>

                        {/* PIPELINE */}
                        <div className="p-6 sm:p-10">

                            <p className="font-mono text-xs tracking-widest text-zinc-600">
                                METRICS PIPELINE
                            </p>

                            <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">

                                <ObservabilityNode
                                    title="APPLICATION"
                                    subtitle="Spring Boot"
                                />

                                <ObservabilityArrow />

                                <ObservabilityNode
                                    title="MICROMETER"
                                    subtitle="MeterRegistry"
                                    active
                                />

                                <ObservabilityArrow />

                                <ObservabilityNode
                                    title="PROMETHEUS"
                                    subtitle="/actuator/prometheus"
                                />

                            </div>

                        </div>

                    </div>

                    {/* CUSTOM METRICS */}
                    <div className="mt-8 grid gap-6 lg:grid-cols-2">

                        <MetricCode
                            metric="bank.auth.success.total"
                            event="Authentication successful"
                        />

                        <MetricCode
                            metric="bank.auth.failed.total"
                            event="Authentication failed"
                        />

                    </div>

                    {/* WHY */}
                    <div className="mt-16 border-l border-emerald-400 pl-6">

                        <p className="font-mono text-xs text-emerald-400">
                            ENGINEERING NOTE
                        </p>

                        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
                            Métricas de autenticação permitem observar o comportamento
                            da aplicação sem depender apenas de logs, criando uma base
                            para monitoramento e alertas.
                        </p>

                    </div>

                </div>
            </section>

        </main>
    );
}

function ProjectInfo({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex justify-between border-b border-zinc-900 py-4">
            <span className="text-zinc-600">{label}</span>
            <span className="text-zinc-300">{value}</span>
        </div>
    );
}

function Metric({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-[#080b10] p-6">
            <span className="font-mono text-xs text-emerald-400">
                {number}
            </span>

            <h3 className="mt-4 font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
                {description}
            </p>
        </div>
    );
}

function ArchitectureNode({
    title,
    subtitle,
    active = false,
}: {
    title: string;
    subtitle: string;
    active?: boolean;
}) {
    return (
        <div
            className={`rounded-lg border p-5 text-center font-mono ${active
                ? "border-emerald-400/40 bg-emerald-400/5"
                : "border-zinc-800 bg-zinc-900/40"
                }`}
        >
            <p
                className={
                    active
                        ? "text-emerald-400"
                        : "text-zinc-300"
                }
            >
                {title}
            </p>

            <p className="mt-2 text-xs text-zinc-600">
                {subtitle}
            </p>
        </div>
    );
}

function FlowArrow() {
    return (
        <div className="py-4 text-center font-mono text-emerald-400">
            ↓
        </div>
    );
}

function RequestStep({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="flex gap-5 rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">

            <span className="font-mono text-xs text-emerald-400">
                {number}
            </span>

            <div>
                <h3 className="font-mono text-sm text-zinc-200">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {description}
                </p>
            </div>

        </div>
    );
}

function RequestConnector({
    label,
}: {
    label: string;
}) {
    return (
        <div className="flex h-16 items-center gap-4 pl-6 font-mono text-xs">

            <div className="h-full w-px bg-zinc-800" />

            <span className="text-zinc-600">
                ↓ {label}
            </span>

        </div>
    );
}

function DatabaseTable({
    name,
    fields,
    highlight = false,
}: {
    name: string;
    fields: string[];
    highlight?: boolean;
}) {
    return (
        <div
            className={`overflow-hidden rounded-lg border ${highlight
                ? "border-emerald-400/30"
                : "border-zinc-800"
                }`}
        >
            <div
                className={`border-b px-5 py-4 font-mono text-sm ${highlight
                    ? "border-emerald-400/20 bg-emerald-400/5 text-emerald-400"
                    : "border-zinc-800 bg-zinc-900/50 text-zinc-300"
                    }`}
            >
                {name}
            </div>

            <div className="space-y-3 p-5">
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

function Relation({
    from,
    to,
    type,
}: {
    from: string;
    to: string;
    type: string;
}) {
    return (
        <div className="flex items-center justify-between rounded border border-zinc-800 bg-zinc-900/30 p-4">

            <span className="text-zinc-500">
                {from}
            </span>

            <span className="mx-3 text-emerald-400">
                {type} →
            </span>

            <span className="text-zinc-300">
                {to}
            </span>

        </div>
    );
}

function DatabaseDecision({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-[#080b10] p-6">

            <span className="font-mono text-xs text-emerald-400">
                {number}
            </span>

            <h3 className="mt-4 font-semibold text-zinc-200">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
                {description}
            </p>

        </div>
    );
}


function Migration({
    version,
    title,
    description,
    important = false,
}: {
    version: string;
    title: string;
    description: string;
    important?: boolean;
}) {
    return (
        <div className="grid gap-4 px-6 py-6 transition hover:bg-zinc-900/30 sm:grid-cols-[80px_180px_1fr] sm:items-center">

            <div className="font-mono text-sm text-emerald-400">
                {version}
            </div>

            <div className="flex items-center gap-3">

                {important && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                )}

                <span className="font-mono text-sm text-zinc-300">
                    {title}
                </span>

            </div>

            <p className="text-sm leading-6 text-zinc-500">
                {description}
            </p>

        </div>
    );
}

type SecurityStep = {
    number: string;
    title: string;
    description: string;
};

function SecurityFlow({
    label,
    endpoint,
    steps,
    result,
}: {
    label: string;
    endpoint: string;
    steps: SecurityStep[];
    result: string;
}) {
    return (
        <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

            <div className="border-b border-zinc-800 px-6 py-5">
                <p className="font-mono text-xs text-zinc-600">
                    {label}
                </p>

                <p className="mt-3 font-mono text-sm text-emerald-400">
                    {endpoint}
                </p>
            </div>

            <div className="p-6">

                {steps.map((step, index) => (
                    <div key={step.number}>

                        <div className="flex gap-5 rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">

                            <span className="font-mono text-xs text-emerald-400">
                                {step.number}
                            </span>

                            <div>
                                <p className="font-mono text-sm text-zinc-200">
                                    {step.title}
                                </p>

                                <p className="mt-2 text-sm leading-6 text-zinc-500">
                                    {step.description}
                                </p>
                            </div>

                        </div>

                        {index < steps.length - 1 && (
                            <div className="h-10 border-l border-zinc-800 ml-8" />
                        )}

                    </div>
                ))}

                <div className="mt-5 flex items-center justify-between rounded-lg border border-emerald-400/30 bg-emerald-400/5 p-5">

                    <span className="font-mono text-xs text-zinc-500">
                        RESULT
                    </span>

                    <span className="font-mono text-xs text-emerald-400">
                        {result}
                    </span>

                </div>

            </div>

        </div>
    );
}

function SecurityDecision({
    number,
    title,
    description,
}: {
    number: string;
    title: string;
    description: string;
}) {
    return (
        <div className="bg-[#080b10] p-6">

            <span className="font-mono text-xs text-emerald-400">
                {number}
            </span>

            <h3 className="mt-4 font-mono text-sm text-zinc-200">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-500">
                {description}
            </p>

        </div>
    );
}

function RouteGroup({
    title,
    status,
    routes,
    protectedRoute = false,
}: {
    title: string;
    status: string;
    routes: string[];
    protectedRoute?: boolean;
}) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

            <div className="flex items-center justify-between">

                <p className="font-mono text-xs text-zinc-500">
                    {title}
                </p>

                <span
                    className={`font-mono text-xs ${protectedRoute
                        ? "text-amber-400"
                        : "text-emerald-400"
                        }`}
                >
                    {status}
                </span>

            </div>

            <div className="mt-6 space-y-3">

                {routes.map((route) => (
                    <div
                        key={route}
                        className="rounded border border-zinc-800 bg-zinc-900/30 px-4 py-3 font-mono text-xs text-zinc-400"
                    >
                        {route}
                    </div>
                ))}

            </div>

        </div>
    );
}

function ObservabilityMetric({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-950 p-6">

      <p className="font-mono text-xs text-zinc-600">
        {label}
      </p>

      <p className="mt-4 font-mono text-lg text-emerald-400">
        {value}
      </p>

      <p className="mt-2 font-mono text-xs text-zinc-600">
        {description}
      </p>

    </div>
  );
}

function ObservabilityNode({
  title,
  subtitle,
  active = false,
}: {
  title: string;
  subtitle: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-6 text-center ${
        active
          ? "border-emerald-400/30 bg-emerald-400/5"
          : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      <p
        className={`font-mono text-sm ${
          active ? "text-emerald-400" : "text-zinc-300"
        }`}
      >
        {title}
      </p>

      <p className="mt-2 font-mono text-xs text-zinc-600">
        {subtitle}
      </p>

    </div>
  );
}

function ObservabilityArrow() {
  return (
    <div className="text-center font-mono text-emerald-400">
      →
    </div>
  );
}

function MetricCode({
  metric,
  event,
}: {
  metric: string;
  event: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-zinc-600">
          CUSTOM METRIC
        </span>

        <span className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>

      <p className="mt-6 break-all font-mono text-sm text-emerald-400">
        {metric}
      </p>

      <p className="mt-3 text-sm text-zinc-500">
        {event}
      </p>

    </div>
  );
}
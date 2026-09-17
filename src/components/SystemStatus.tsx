import Status from "./Status";

export default function SystemStatus() {
  return (
    <div className="relative">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl">

        <div className="mb-8 flex items-center justify-between">
          <span className="font-mono text-sm text-zinc-400">
            SYSTEM STATUS
          </span>

          <span className="font-mono text-xs text-emerald-400">
            ● ONLINE
          </span>
        </div>

        <div className="space-y-5 font-mono text-sm">
          <Status name="API" value="ONLINE" />
          <Status name="DATABASE" value="ONLINE" />
          <Status name="BUILD" value="PASSING" />
          <Status name="DEPLOYMENT" value="STABLE" />
        </div>

        <div className="my-8 border-t border-zinc-800" />

        <div className="font-mono text-xs leading-6 text-zinc-500">
          <p>runtime: Java 21</p>
          <p>framework: Spring Boot</p>
          <p>environment: production</p>
          <p>location: Brazil</p>
        </div>

      </div>
    </div>
  );
}
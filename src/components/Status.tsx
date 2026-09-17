type StatusProps = {
  name: string;
  value: string;
};

export default function Status({ name, value }: StatusProps) {
  return (
    <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
      <span className="text-zinc-500">{name}</span>

      <span className="text-emerald-400">
        ● {value}
      </span>
    </div>
  );
}
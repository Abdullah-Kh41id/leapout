type Props = {
  compact?: boolean;
};

export default function SiteHeader({ compact = false }: Props) {
  return (
    <header className={`animate-fade-in text-center ${compact ? "mb-6" : "mb-5"}`}>
      <p className="font-display text-[1.65rem] font-bold leading-none tracking-tight text-white sm:text-3xl">
        Leap<span className="text-ember"> Out</span>
      </p>
    </header>
  );
}

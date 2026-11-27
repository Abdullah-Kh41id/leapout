type Props = {
  compact?: boolean;
};

export default function SiteHeader({ compact = false }: Props) {
  return (
    <header className={`animate-fade-in ${compact ? "mb-6" : "mb-5"}`}>
      <div className="flex items-end gap-3">
        <div>
          <p className="font-display text-[1.65rem] font-bold leading-none tracking-tight text-white sm:text-3xl">
            Leap<span className="text-ember"> Out</span>
          </p>
          {!compact && (
            <p className="mt-2 text-sm text-mist sm:text-[15px]">Stop scrolling. Start doing.</p>
          )}
        </div>
      </div>
    </header>
  );
}

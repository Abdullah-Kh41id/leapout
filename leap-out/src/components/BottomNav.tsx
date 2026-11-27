"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Discover",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: "/map",
    label: "Map",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="m3.5 7 5.5-2.5L15 7l5.5-2.5V17L15 19.5 9 17 3.5 19.5V7Z" strokeLinejoin="round" />
        <path d="M9 4.5V17M15 7v12.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/saved",
    label: "Saved",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M12 20.5 5.2 14c-2-2-2-5.2.3-7.1 2-1.7 4.9-1.2 6.5.8 1.6-2 4.5-2.5 6.5-.8 2.3 1.9 2.3 5.1.3 7.1L12 20.5Z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-border/80 bg-ink/90 backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Main"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-2 pt-2 pb-2">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href} className="flex-1">
              <Link
                href={link.href}
                className={`flex flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors ${
                  active ? "text-ember" : "text-mist-soft hover:text-mist-bright"
                }`}
              >
                <span className={active ? "scale-105 transition-transform" : ""}>{link.icon}</span>
                <span className="text-[11px] font-medium tracking-wide">{link.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

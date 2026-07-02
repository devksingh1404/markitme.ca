'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f8f0e7] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-slate-950">
          <span className="text-2xl font-bold tracking-tight">MARKIT</span>
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[rgb(37,99,235)] to-fuchsia-500 bg-clip-text text-transparent">ME</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 transition-colors hover:text-cyan-600 hover:bg-gradient-to-r hover:from-[rgb(37,99,235)]/10 hover:via-fuchsia-200/10 hover:to-cyan-200/10 rounded-2xl px-3 py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button className="rounded-full bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 px-6 py-3 text-white hover:from-[rgb(29,78,216)] hover:via-fuchsia-500 hover:to-cyan-400">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-slate-400 hover:text-cyan-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-[#f8f0e7] px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-gradient-to-r hover:from-[rgb(37,99,235)]/10 hover:via-fuchsia-200/10 hover:to-cyan-200/10 hover:text-cyan-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="rounded-full bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 px-6 py-3 text-white hover:from-[rgb(29,78,216)] hover:via-fuchsia-500 hover:to-cyan-400">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

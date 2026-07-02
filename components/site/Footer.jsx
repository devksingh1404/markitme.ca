import Link from 'next/link';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">MARKIT</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-[rgb(37,99,235)] to-fuchsia-500 bg-clip-text text-transparent">ME</span>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-300">
              Light, elegant branding and digital marketing for businesses that want a clean, modern presence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Explore</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-fuchsia-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              <li>Toronto, ON</li>
              <li>
                <Link href="mailto:info@markitme.ca" className="transition hover:text-fuchsia-400">
                  info@markitme.ca
                </Link>
              </li>
              <li>
                <Link href="tel:+14165551234" className="transition hover:text-fuchsia-400">
                  +1 (416) 555-1234
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Legal</h3>
            <div className="mt-6 flex flex-col gap-3 text-sm text-slate-300">
              <Link href="/privacy" className="transition hover:text-fuchsia-400">Privacy Policy</Link>
              <Link href="/terms" className="transition hover:text-fuchsia-400">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} MarkitMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

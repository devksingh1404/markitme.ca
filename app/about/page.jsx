import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, TrendingUp } from 'lucide-react';

const highlights = [
  { icon: Rocket, title: 'Purposeful Strategy', desc: 'Every project begins with research, clarity, and measurable goals.' },
  { icon: Sparkles, title: 'Bold Creative', desc: 'We create visuals and messaging that stand out and feel authentic.' },
  { icon: TrendingUp, title: 'Performance Focused', desc: 'Our work is designed to drive traffic, leads, and growth.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f0e7] text-slate-950">
      <header className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-600">About</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">What Makes MarkitMe Different</h1>
            <p className="mt-4 max-w-2xl text-slate-600">We blend design, video, branding, and digital strategy to help fast-growing businesses create results that last.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">Talk to Us</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-16 lg:grid-cols-2 items-start">
        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white">
            <img src="https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Marketing team planning" className="w-full h-full object-cover" />
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <item.icon className="w-6 h-6" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h2>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-slate-600 leading-8">MarkitMe was built for founders and teams who want a marketing partner that cares about every detail. We combine creative strategy, elevated visuals, and smart execution so your brand can grow with confidence.</p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
            <ul className="space-y-4 text-slate-600">
              <li className="rounded-2xl bg-slate-50 p-4">Research and strategy before design.</li>
              <li className="rounded-2xl bg-slate-50 p-4">Creative direction that stays true to your brand.</li>
              <li className="rounded-2xl bg-slate-50 p-4">Performance tracking and campaign refinement.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

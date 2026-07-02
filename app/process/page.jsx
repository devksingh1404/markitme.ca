import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, Zap, TrendingUp } from 'lucide-react';

const steps = [
  { title: 'Discover', detail: 'We learn your brand, goals, and audience before we start.', icon: Rocket },
  { title: 'Create', detail: 'We design and produce content that supports your business objectives.', icon: Sparkles },
  { title: 'Launch', detail: 'We launch campaigns and websites with clear tracking and strategy.', icon: Zap },
  { title: 'Grow', detail: 'We optimize performance and refine your marketing for growth.', icon: TrendingUp },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#f8f0e7] text-slate-950">
      <header className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-600">Process</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">How We Build Your Brand and Campaigns</h1>
            <p className="mt-4 max-w-2xl text-slate-600">A clear workflow that keeps your project transparent, fast, and focused on results.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">Start Today</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-10 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:shadow-lg hover:border-cyan-200">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-600 text-white">
                <step.icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h2>
              <p className="text-slate-600">{step.detail}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 rounded-[2rem] bg-slate-900 px-8 py-14 text-white">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Working with MarkitMe</p>
              <h2 className="mt-6 text-4xl font-bold">A process built for clarity, speed, and growth.</h2>
              <p className="mt-4 text-slate-300">We combine strategy, creative, and technical execution so your launch is smooth and your results are measurable.</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="font-semibold text-white">Clear check-ins</h3>
                <p className="mt-2 text-slate-400">We keep you informed at every milestone with a shared plan and regular updates.</p>
              </div>
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="font-semibold text-white">Fast execution</h3>
                <p className="mt-2 text-slate-400">We move quickly without cutting corners, so your campaign launches on schedule.</p>
              </div>
              <div className="rounded-3xl bg-slate-800 p-6">
                <h3 className="font-semibold text-white">Continuous optimization</h3>
                <p className="mt-2 text-slate-400">We measure performance and refine the campaign until it starts delivering real ROI.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

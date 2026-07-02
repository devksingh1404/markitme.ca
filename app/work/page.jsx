import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const projects = [
  { title: 'Navira Settlement', desc: 'Immigration & settlement services', category: 'Brand Design', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { title: 'Harmony Rehab', desc: 'Specialized massage therapy services', category: 'Web Design', image: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { title: 'New Construction Projects', desc: 'Pre-construction real estate experience', category: 'Marketing', image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { title: 'Centum Financial', desc: 'Financial services rebrand', category: 'Video Production', image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200' },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f8f0e7] text-slate-950">
      <header className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-400">Work</p>
            <h1 className="mt-3 text-4xl font-bold">Recent Projects That Drove Growth</h1>
            <p className="mt-4 max-w-2xl text-slate-400">A selection of recent campaigns, websites, and branding projects built for businesses across Toronto and beyond.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-300 hover:text-white">Home</Link>
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950">See More Work</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="mb-4 inline-flex items-center rounded-full bg-[#f8f0e7] px-4 py-2 text-sm font-semibold text-[#0ea5e9]">{project.category}</div>
                <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
                <p className="text-slate-400 mb-6">{project.desc}</p>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span>Designed for measurable results and brand clarity.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

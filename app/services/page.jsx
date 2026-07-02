import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Video, TrendingUp, Target, BarChart3, Share2, Palette, Zap, Megaphone } from 'lucide-react';

const services = {
  brandContent: [
    { icon: Video, title: 'Videography', desc: 'Video is your most powerful marketing tool today.' },
    { icon: Target, title: 'Photography', desc: 'Professional photos that showcase your products.' },
    { icon: Palette, title: 'Brand Shoots', desc: 'Consistent visuals across your entire brand.' },
    { icon: BarChart3, title: 'Editing & Post-production', desc: 'Raw footage transformed into polished content.' },
  ],
  digital: [
    { icon: Globe, title: 'Website Design', desc: 'Clean websites your visitors enjoy using.' },
    { icon: TrendingUp, title: 'SEO Optimization', desc: 'Get found by the right customers.' },
    { icon: Target, title: 'Landing Pages', desc: 'Focused pages designed to convert.' },
    { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Clear insights on what matters.' },
  ],
  marketing: [
    { icon: Share2, title: 'Social Media Marketing', desc: 'Your brand stays active and engaging.' },
    { icon: Palette, title: 'Brand Design', desc: 'Campaigns with clear purpose and audience.' },
    { icon: Zap, title: 'Lead Generation', desc: 'More of the right leads, less chasing.' },
    { icon: Megaphone, title: 'Paid Advertising', desc: 'Targeted campaigns that reach your audience.' },
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f0e7] text-slate-950">
      <header className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-600">Services</p>
            <h1 className="mt-3 text-4xl font-bold text-slate-900">What We Do for Growing Brands</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              From video production to full digital growth strategies, we build campaigns and websites that help businesses win online.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white">Start a Project</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        <section>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">Brand & Content Production</span>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-900">Create memorable brand experiences across video, photography, and creative direction.</h2>
            <p className="mt-4 text-slate-600">We help brands tell stories through visuals that feel modern, clear, and professionally produced.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.brandContent.map((item, idx) => (
              <Card key={idx} className="border border-slate-100 hover:border-cyan-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-cyan-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Digital Presence</span>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-900">Websites, SEO, landing pages, and analytics.</h2>
            <p className="mt-4 text-slate-600">Everything we build is designed to perform for your audience and convert more visitors into customers.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.digital.map((item, idx) => (
              <Card key={idx} className="border border-slate-100 hover:border-slate-300 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center justify-center rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">Marketing & Growth</span>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-900">Growth campaigns that help your business stand out and scale.</h2>
            <p className="mt-4 text-slate-600">From paid media to branding and lead generation, we build systems that move the needle.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.marketing.map((item, idx) => (
              <Card key={idx} className="border border-slate-100 hover:border-teal-200 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-teal-600">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

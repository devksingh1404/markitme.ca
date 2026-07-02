import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8f0e7] text-slate-950">
      <header className="border-b border-slate-200 bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-cyan-300">Contact</p>
            <h1 className="mt-3 text-4xl font-bold">Talk to the team behind MarkitMe</h1>
            <p className="mt-4 max-w-2xl text-slate-300">We’re ready to help your brand grow with strategy, design, and digital marketing.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-slate-300 hover:text-white">Home</Link>
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950">Book a Call</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid gap-16 lg:grid-cols-2">
        <div className="space-y-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Get in Touch</h2>
            <p className="text-slate-600 mb-8">Send a message and we’ll respond quickly with the next step for your marketing, website, or video project.</p>
            <div className="space-y-6 text-slate-700">
              <div>
                <p className="font-semibold text-slate-950">Email</p>
                <a href="mailto:info@markitme.ca" className="text-cyan-500 hover:text-cyan-600">info@markitme.ca</a>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Phone</p>
                <a href="tel:+14165551234" className="text-cyan-500 hover:text-cyan-600">+1 (416) 555-1234</a>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Location</p>
                <p className="text-slate-600">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">Why Work With Us</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="rounded-3xl bg-slate-900/80 p-5">A full-service digital marketing studio with video, web design, branding, and performance expertise.</li>
              <li className="rounded-3xl bg-slate-900/80 p-5">Custom strategy built around your audience and growth goals.</li>
              <li className="rounded-3xl bg-slate-900/80 p-5">Clear communication and fast delivery from a team you can trust.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input type="text" className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input type="email" className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Service</label>
              <select className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 focus:border-cyan-500 focus:outline-none">
                <option>Website Design</option>
                <option>Video Production</option>
                <option>Brand Strategy</option>
                <option>Social Media Marketing</option>
                <option>SEO Optimization</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea rows="5" className="w-full rounded-3xl border border-slate-700 bg-slate-900 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none" placeholder="Tell us about your project" />
            </div>
            <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-3xl py-5">Send Message</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

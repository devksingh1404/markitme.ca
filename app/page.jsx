'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from '@/components/ui/accordion';
import { Video, Camera, Palette, Monitor, Globe, TrendingUp, Share2, Target, BarChart3, Megaphone, ChevronRight, Play, ArrowRight, Sparkles, Zap, Rocket, CheckCircle2, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter, } from 'lucide-react';
const services = {
    brandContent: [
        { icon: Video, title: 'Videography', desc: 'Video is your most powerful marketing tool today' },
        { icon: Camera, title: 'Photography', desc: 'Professional photos that showcase your products' },
        { icon: Sparkles, title: 'Brand Shoots', desc: 'Consistent visuals across your entire brand' },
        { icon: Monitor, title: 'Editing & Post-production', desc: 'Raw footage transformed into polished content' },
    ],
    digital: [
        { icon: Globe, title: 'Website Design', desc: 'Clean websites your visitors enjoy using' },
        { icon: TrendingUp, title: 'SEO Optimization', desc: 'Get found by the right customers' },
        { icon: Target, title: 'Landing Pages', desc: 'Focused pages designed to convert' },
        { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Clear insights on what matters' },
    ],
    marketing: [
        { icon: Share2, title: 'Social Media Marketing', desc: 'Your brand stays active and engaging' },
        { icon: Palette, title: 'Brand Design', desc: 'Campaigns with clear purpose and audience' },
        { icon: Zap, title: 'Lead Generation', desc: 'More of the right leads, less chasing' },
        { icon: Megaphone, title: 'Paid Advertising', desc: 'Targeted campaigns that reach your audience' },
    ],
};
const projects = [
    {
        title: 'Navira Settlement',
        desc: 'Immigration & settlement services',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Brand Design',
    },
    {
        title: 'Harmony Rehab',
        desc: 'Specialized massage therapy services',
        image: 'https://images.pexels.com/photos/3184320/pexels-photo-3184320.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Web Design',
    },
    {
        title: 'New Construction Projects',
        desc: 'Pre-construction real estate experience',
        image: 'https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Marketing',
    },
    {
        title: 'Centum Financial',
        desc: 'Financial services rebrand',
        image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800',
        category: 'Video Production',
    },
];
const processSteps = [
    { step: '01', title: 'Discover', desc: 'We learn your brand, audience, and goals before touching any tool.', icon: Rocket },
    { step: '02', title: 'Create', desc: 'Visuals, campaigns, and systems built specifically for your business.', icon: Sparkles },
    { step: '03', title: 'Launch', desc: 'We execute across all platforms with precision and brand consistency.', icon: Zap },
    { step: '04', title: 'Grow', desc: 'We track, report clearly, and refine until metrics move upward.', icon: TrendingUp },
];
const faqs = [
    {
        q: 'What services does MarkitMe offer?',
        a: 'We build modern websites, develop brand strategies, create digital marketing plans, and optimize revenue growth—all under one roof.',
    },
    {
        q: 'How much does a website cost?',
        a: 'Cost depends on scope: number of pages, features (e-commerce, blog, custom design), and complexity. We provide a fair, custom quote after understanding your exact needs.',
    },
    {
        q: 'How long does a project take?',
        a: 'For a simple website: a few weeks. For larger or custom projects: 6–12 weeks, depending on complexity and feedback speed.',
    },
    {
        q: 'Are your websites mobile-friendly?',
        a: 'Yes. All our websites are fully responsive—they work smoothly on desktop, tablet, and mobile.',
    },
    {
        q: 'Can I update my website myself?',
        a: 'Absolutely. We build on a content-management system (CMS) so you can easily edit text, images, and pages without technical knowledge.',
    },
    {
        q: 'Do you provide SEO services?',
        a: 'Yes. We include basic SEO optimization—proper structure, metadata, mobile-friendly design, and fast loading—to help your site rank and perform.',
    },
];
const trustedBrands = [
    { name: 'C2H', width: 100 },
    { name: 'Mobile', width: 80 },
    { name: 'Navira', width: 90 },
    { name: 'Crescendo', width: 110 },
    { name: 'Centum', width: 85 },
    { name: 'Harmony', width: 95 },
    { name: 'Legal', width: 80 },
    { name: 'Phoenix', width: 90 },
];
export default function Home() {
    return (<div className="min-h-screen bg-[#fbf8f3]">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[rgb(37,99,235)]/25 via-fuchsia-200/30 to-cyan-200/20 rounded-full blur-3xl opacity-80 animate-float"/>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-fuchsia-200/20 via-[rgb(37,99,235)]/15 to-cyan-200/10 rounded-full blur-3xl opacity-50 animate-float delay-300"/>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-cyan-200/20 via-[rgb(37,99,235)]/15 to-fuchsia-200/15 rounded-full blur-2xl opacity-55 animate-float delay-500"/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(37,99,235)] to-fuchsia-500 text-white rounded-full text-sm font-medium animate-fade-up shadow-lg shadow-[rgb(37,99,235)]/20">
                <Sparkles className="w-4 h-4"/>
                <span>Toronto's Premier Digital Agency</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up delay-100">
                <span className="text-slate-900">We Build</span>
                <br />
                <span className="bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Brands That</span>
                <br />
                <span className="text-slate-900">Grow</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-xl animate-fade-up delay-200">
                Marketing should do more than look good—it should create momentum.
                We partner with businesses to turn ideas into powerful visuals and measurable growth.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Button size="lg" className="bg-gradient-to-r from-[rgb(37,99,235)] to-fuchsia-500 hover:from-[rgb(29,78,216)] hover:to-fuchsia-500 text-white rounded-full px-8 h-14 text-lg group shadow-lg shadow-[rgb(37,99,235)]/15 transition-all duration-300 hover:-translate-y-0.5">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-cyan-500 text-cyan-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-fuchsia-500 hover:to-cyan-300 hover:text-white transition-colors duration-300">
                  <Play className="mr-2 w-5 h-5"/>
                  Watch Our Reel
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-up delay-400">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">150+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-slate-200"/>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="w-px h-12 bg-slate-200"/>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">5+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in delay-200">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Creative team collaboration" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"/>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600"/>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Project Delivered</div>
                    <div className="text-sm text-slate-500">Just now</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float delay-300">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white"/>
                    <div className="w-8 h-8 rounded-full bg-teal-500 border-2 border-white"/>
                    <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-white"/>
                  </div>
                  <div className="text-sm font-medium text-slate-900">Team of 12+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-2.5 bg-slate-400 rounded-full animate-bounce"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything Your Brand Needs to <span className="bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-lg text-slate-600">
              From videography to web design to social media marketing—we have all the tools to elevate your brand.
            </p>
          </div>

          {/* Brand & Content */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white">
                <Video className="w-6 h-6"/>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Brand & Content Production</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.brandContent.map((service, idx) => (<Card key={idx} className="service-card group cursor-pointer border border-slate-100 hover:border-cyan-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:via-[rgb(37,99,235)]/20 group-hover:to-cyan-300 flex items-center justify-center mb-4 transition-colors">
                      <service.icon className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors"/>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* Digital Presence */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white">
                <Globe className="w-6 h-6"/>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Digital Presence & Websites</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.digital.map((service, idx) => (<Card key={idx} className="service-card group cursor-pointer border border-slate-100 hover:border-cyan-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:via-[rgb(37,99,235)]/20 group-hover:to-cyan-300 flex items-center justify-center mb-4 transition-colors">
                      <service.icon className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors"/>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>))}
            </div>
          </div>

          {/* Marketing & Growth */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6"/>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Marketing & Growth Strategy</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.marketing.map((service, idx) => (<Card key={idx} className="service-card group cursor-pointer border border-slate-100 hover:border-cyan-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:via-[rgb(37,99,235)]/20 group-hover:to-cyan-300 flex items-center justify-center mb-4 transition-colors">
                      <service.icon className="w-6 h-6 text-slate-700 group-hover:text-cyan-600 transition-colors"/>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-sm">{service.desc}</p>
                  </CardContent>
                </Card>))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section id="about" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Team working together" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-8 max-w-xs">
                <div className="text-4xl font-bold text-cyan-600 mb-2">5+</div>
                <div className="text-slate-900 font-semibold">Years of Excellence</div>
                <div className="text-slate-500 text-sm mt-1">Helping brands grow</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(37,99,235)]/10 via-fuchsia-200/20 to-cyan-200/10 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  Why Choose Us
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  What Makes Us <span className="bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Different</span>
                </h2>
                <p className="text-lg text-slate-600">
                  At MarkitMe, we believe marketing should do more than look good—it should create momentum.
                  Everything we produce is designed to drive visibility, engagement, and measurable results.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white shrink-0">
                    <Sparkles className="w-7 h-7"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Creative That Connects</h3>
                    <p className="text-slate-600">Great marketing starts with great storytelling. Our team crafts visuals and experiences that capture attention and build trust.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shrink-0">
                    <Zap className="w-7 h-7"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Built by Specialists</h3>
                    <p className="text-slate-600">Designers, videographers, developers, and strategists working together—so every piece of your brand feels consistent and impactful.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 flex items-center justify-center text-white shrink-0">
                    <TrendingUp className="w-7 h-7"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Focused on Real Growth</h3>
                    <p className="text-slate-600">We don't create content just to fill your feed. Everything we produce drives visibility, engagement, and measurable results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section id="process" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How We <span className="bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-lg text-slate-600">
              Our process is built around strategy, creativity, and measurable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => (<div key={idx} className="relative group">
                <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-cyan-100 transition-all duration-300">
                  <div className="text-6xl font-bold text-slate-100 group-hover:text-cyan-100 transition-colors mb-4">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-cyan-600 flex items-center justify-center text-white mb-4 transition-colors">
                    <step.icon className="w-6 h-6"/>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500">{step.desc}</p>
                </div>
                {idx < 3 && (<div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-slate-300"/>
                  </div>)}
              </div>))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[rgb(37,99,235)]/10 via-fuchsia-200/20 to-cyan-200/10 text-cyan-300 rounded-full text-sm font-medium mb-4">
              Our Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Latest <span className="text-cyan-300">Projects</span>
            </h2>
            <p className="text-lg text-slate-400">
              A showcase of brands we've helped grow and transform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (<div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"/>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-cyan-200 text-sm font-medium mb-1">{project.category}</div>
                    <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                    <p className="text-slate-300 text-sm">{project.desc}</p>
                  </div>
                </div>
              </div>))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full px-8 border-slate-600 text-white hover:bg-slate-800">
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5"/>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-[rgb(37,99,235)] via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-slate-600">
              Couldn't find what you were looking for? Write to us at
              <a href="mailto:info@markitme.ca" className="text-cyan-500 hover:underline ml-1">info@markitme.ca</a>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (<AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-200 rounded-xl px-6 data-[state=open]:bg-slate-50">
                <AccordionTrigger className="hover:no-underline py-5 text-left">
                  <span className="text-lg font-medium text-slate-900 pr-4">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>))}
          </Accordion>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Trusted by Growing Brands</h2>
            <p className="text-slate-500">Join businesses that have transformed their digital presence with us</p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-12 brand-scroll" style={{ width: 'fit-content' }}>
            {[...trustedBrands, ...trustedBrands].map((brand, idx) => (<div key={idx} className="flex items-center justify-center h-16 px-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xl font-bold text-slate-400 hover:text-slate-600 transition-colors">
                  {brand.name}
                </span>
              </div>))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 lg:py-32 bg-[#f8f0e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-950">
                Ready to Transform <span className="text-[#ec4899]">Your Brand?</span>
              </h2>
              <p className="text-lg text-slate-600">
                Let's discuss your project and see how we can help your business move forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <Mail className="w-5 h-5 text-cyan-500"/>
                  <a href="mailto:info@markitme.ca" className="text-slate-900 hover:text-cyan-500 transition-colors">
                    info@markitme.ca
                  </a>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <Phone className="w-5 h-5 text-cyan-500"/>
                  <a href="tel:+14165551234" className="text-slate-900 hover:text-cyan-500 transition-colors">
                    +1 (416) 555-1234
                  </a>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <MapPin className="w-5 h-5 text-cyan-500"/>
                  <span>Toronto, Ontario, Canada</span>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                  <Instagram className="w-5 h-5"/>
                </a>
                <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                  <Facebook className="w-5 h-5"/>
                </a>
                <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                  <Linkedin className="w-5 h-5"/>
                </a>
                <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors">
                  <Twitter className="w-5 h-5"/>
                </a>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-slate-200">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-900 mb-2 block">First Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-950 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John"/>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-900 mb-2 block">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-950 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Doe"/>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-900 mb-2 block">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-950 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@example.com"/>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-900 mb-2 block">Project Type</label>
                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-950 focus:outline-none focus:border-cyan-500 transition-colors">
                      <option>Website Design</option>
                      <option>Brand Strategy</option>
                      <option>Video Production</option>
                      <option>Social Media Marketing</option>
                      <option>SEO Optimization</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-900 mb-2 block">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-950 placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Tell us about your project..."/>
                  </div>
                  <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg py-6 text-lg font-medium">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5"/>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>);
}

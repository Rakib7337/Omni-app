import { Check } from 'lucide-react';
import { PROBLEM_SOLUTIONS } from '../data/omniData';

export function ProblemSolutionSection() {
  return (
    <section
      id="why-switch"
      className="scroll-mt-20 border-b border-slate-200/60 py-16 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
            Why Switch to OmniDownloader?
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            Built for people tired of ad-ridden converters and fragmented apps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Instead of juggling messy download websites, ad-heavy video apps, and slow online
            converters, OmniDownloader brings saving, ad-free watching, clean browsing, and clip
            editing together in one simple Android app.
          </p>
        </div>

        {/* Asymmetric 3-Column Glassmorphic Bento Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {PROBLEM_SOLUTIONS.map((item, idx) => {
            const colSpan = idx === 0 ? 'lg:col-span-5' : idx === 1 ? 'lg:col-span-4' : 'lg:col-span-3';
            return (
              <article
                key={item.index}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`${colSpan} glass-surface flex flex-col justify-between rounded-2xl border p-6 sm:p-8`}
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-[#0288D1] dark:text-[#06B6D4]">
                    {item.index}
                  </span>
                  <p className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">
                    Replaces: {item.tiredOf}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-[#0F172A] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-slate-200/70 pt-4 dark:border-white/10">
                  {item.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0288D1] dark:text-[#06B6D4]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

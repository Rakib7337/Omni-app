import { Check, Minus, X } from 'lucide-react';
import type { LocalizedContent } from '../data/omniData';

interface ComparisonSectionProps {
  copy: LocalizedContent['comparisonSection'];
}

export function ComparisonSection({ copy }: ComparisonSectionProps) {
  return (
    <section
      id="comparison"
      className="scroll-mt-20 border-b border-slate-200/60 py-16 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
            {copy.kicker}
          </p>
          <h2
            className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]"
            style={{ textWrap: 'balance' }}
          >
            {copy.heading}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">{copy.subtitle}</p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="glass-surface mt-10 overflow-x-auto rounded-2xl border"
        >
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200/70 bg-slate-100/60 dark:border-white/10 dark:bg-white/5">
                <th scope="col" className="px-6 py-4 font-display font-semibold text-[#0F172A] dark:text-white">
                  {copy.headers.feature}
                </th>
                <th scope="col" className="px-6 py-4 font-display font-semibold text-slate-600 dark:text-slate-300">
                  {copy.headers.freeSites}
                </th>
                <th scope="col" className="px-6 py-4 font-display font-semibold text-slate-600 dark:text-slate-300">
                  {copy.headers.standardApps}
                </th>
                <th
                  scope="col"
                  className="bg-gradient-to-r from-[#0288D1]/15 to-[#06B6D4]/15 px-6 py-4 font-display font-bold text-[#0288D1] dark:text-[#06B6D4]"
                >
                  {copy.headers.omni}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
              {copy.rows.map((row) => (
                <tr key={row.capability} className="transition-colors hover:bg-white/40 dark:hover:bg-white/5">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-[#0F172A] dark:text-slate-100"
                  >
                    {row.capability}
                  </th>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    <span className="inline-flex items-start gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                      <span>{row.webConverters}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                    <span className="inline-flex items-start gap-2">
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                      <span>{row.basicPlayers}</span>
                    </span>
                  </td>
                  <td className="bg-gradient-to-r from-[#0288D1]/8 to-[#06B6D4]/8 px-6 py-4 font-medium text-[#0F172A] dark:text-white">
                    <span className="inline-flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0288D1] dark:text-[#06B6D4]" aria-hidden="true" />
                      <span>{row.omniDownloader}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

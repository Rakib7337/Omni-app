import { useState } from 'react';
import { CheckCircle2, Download, Smartphone } from 'lucide-react';
import type { LocalizedContent } from '../data/omniData';

interface DownloadReleaseSectionProps {
  copy: LocalizedContent['downloadSection'];
}

export function DownloadReleaseSection({ copy }: DownloadReleaseSectionProps) {
  const [downloadStarted, setDownloadStarted] = useState(false);
  const { release } = copy;

  return (
    <section
      id="download"
      className="border-b border-slate-200/60 py-16 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="glass-surface grid items-center gap-10 rounded-2xl border p-6 sm:p-10 lg:grid-cols-12"
        >
          <div className="min-w-0 lg:col-span-7">
            <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
              {copy.kickerPrefix} {release.version}
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              {copy.heading}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {copy.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={release.downloadUrl}
                download={release.filename}
                rel="noopener noreferrer"
                onClick={() => setDownloadStarted(true)}
                className="download-gradient-cta inline-flex max-w-full shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                <Download className="h-4 w-4 shrink-0" />
                <span>{copy.downloadCta}</span>
              </a>
            </div>

            {downloadStarted && (
              <div
                role="status"
                className="mt-4 rounded-xl border border-[#0288D1]/30 bg-[#0288D1]/10 px-4 py-3 text-xs font-medium text-[#0288D1] dark:border-[#06B6D4]/30 dark:bg-[#06B6D4]/10 dark:text-[#06B6D4]"
              >
                {copy.downloadingPrefix} {release.filename} {copy.downloadingSuffix}
              </div>
            )}
          </div>

          {/* App Info & Simple Install Steps */}
          <div className="glass-card-subtle flex min-w-0 flex-col justify-between rounded-xl border p-6 lg:col-span-5">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#0F172A] dark:text-white">
                <Smartphone className="h-4 w-4 text-[#0288D1] dark:text-[#06B6D4]" />
                <span>{copy.detailsTitle}</span>
              </div>

              <dl className="mt-4 space-y-3 text-xs">
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
                  <dt className="shrink-0 text-slate-500 dark:text-slate-400">
                    {copy.installerFileLabel}
                  </dt>
                  <dd className="truncate font-mono font-medium text-[#0F172A] dark:text-slate-100">
                    {release.filename}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
                  <dt className="shrink-0 text-slate-500 dark:text-slate-400">
                    {copy.appVersionLabel}
                  </dt>
                  <dd className="font-mono font-medium text-[#0F172A] dark:text-slate-100">
                    {release.version}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-200 pb-2 dark:border-slate-800">
                  <dt className="shrink-0 text-slate-500 dark:text-slate-400">
                    {copy.compatibilityLabel}
                  </dt>
                  <dd className="font-mono font-medium text-[#0F172A] dark:text-slate-100">
                    {release.compatibility}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                {release.notes}
              </p>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                {copy.stepsTitle}
              </p>
              <ul className="mt-2.5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {copy.steps.map((step) => (
                  <li key={step} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0288D1] dark:text-[#06B6D4]" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Globe, Moon, Sun } from 'lucide-react';
import type { ApkReleaseInfo, LocalizedContent } from '../data/omniData';
import type { AppLanguage, AppTheme } from '../utils/validation';
import { PhoneMockup } from './PhoneMockup';

interface HeroSectionProps {
  theme: AppTheme;
  onToggleTheme: (nextTheme: AppTheme) => void;
  lang: AppLanguage;
  onChangeLang: (nextLang: AppLanguage) => void;
  copy: LocalizedContent['hero'];
  release: ApkReleaseInfo;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({
  theme,
  onToggleTheme,
  lang,
  onChangeLang,
  copy,
  release,
  onNavigate,
}: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-x-clip border-b border-slate-200/60 pt-6 pb-12 sm:pt-8 sm:pb-16 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Metadata + Language & Theme Mode Controls */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 pb-4 dark:border-white/10">
          <p className="text-xs font-medium leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
            <span className="inline-block">{copy.metaParts[0]}</span>
            <span aria-hidden="true" className="mx-2 text-slate-400">
              ·
            </span>
            <span className="inline-block">{copy.metaParts[1]}</span>
            <span aria-hidden="true" className="mx-2 text-slate-400">
              ·
            </span>
            <span className="inline-block">{copy.metaParts[2]}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Glassmorphic Language Segmented Control (BN / EN) */}
            <div
              role="group"
              aria-label={copy.languageAria}
              className="glass-card-subtle inline-flex items-center rounded-xl border p-1"
            >
              <span aria-hidden="true" className="px-2 text-slate-500 dark:text-slate-400">
                <Globe className="h-3.5 w-3.5" />
              </span>
              <button
                type="button"
                onClick={() => onChangeLang('bn')}
                aria-pressed={lang === 'bn'}
                className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  lang === 'bn'
                    ? 'soft-gradient-cta text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {copy.bnLabel}
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                aria-pressed={lang === 'en'}
                className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  lang === 'en'
                    ? 'soft-gradient-cta text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {copy.enLabel}
              </button>
            </div>

            {/* Glassmorphic Theme Segmented Control (Light default / Dark) */}
            <div
              role="group"
              aria-label={copy.themeAria}
              className="glass-card-subtle inline-flex items-center rounded-xl border p-1"
            >
              <button
                type="button"
                onClick={() => onToggleTheme('light')}
                aria-pressed={theme === 'light'}
                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  theme === 'light'
                    ? 'soft-gradient-cta text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                {copy.lightLabel}
              </button>
              <button
                type="button"
                onClick={() => onToggleTheme('dark')}
                aria-pressed={theme === 'dark'}
                className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-150 ${
                  theme === 'dark'
                    ? 'soft-gradient-cta text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                {copy.darkLabel}
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
            <h1
              className="max-w-2xl font-display font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]"
              style={{
                fontSize: 'clamp(2.15rem, 3.9vw, 3.65rem)',
                lineHeight: lang === 'bn' ? 1.18 : 1.07,
                textWrap: 'balance',
              }}
            >
              {copy.headlineBefore}
              <span className="bg-gradient-to-r from-[#0288D1] via-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                {copy.headlineHighlight}
              </span>
              {copy.headlineAfter}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {copy.subtitle}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={release.downloadUrl}
                download={release.filename}
                rel="noopener noreferrer"
                className="download-gradient-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#059669]"
              >
                {copy.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('features');
                }}
                className="glass-card-subtle inline-flex shrink-0 items-center whitespace-nowrap rounded-xl border px-6 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0288D1] dark:text-slate-100 dark:hover:bg-slate-800/70"
              >
                {copy.secondaryCta}
              </a>
            </div>

            <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
              {copy.footnote}
            </p>
          </div>

          {/* Device Preview with Soft Gradient Halo */}
          <div className="relative flex min-w-0 flex-col items-center justify-center lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-[#0288D1]/20 via-[#06B6D4]/15 to-[#6366F1]/20 blur-3xl"
            />
            <div className="relative w-full">
              <PhoneMockup primaryImgAlt={copy.primaryMockupAlt} />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Glassmorphic Trust Strip Below Hero Split */}
        <div className="glass-surface mt-10 grid grid-cols-1 divide-y divide-slate-200/70 rounded-2xl border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-white/10">
          {copy.trustStats.map((stat) => (
            <div key={stat.label} className="p-5 sm:p-6">
              <p className="font-display text-xl font-bold tracking-tight text-[#0F172A] tabular-nums dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-sm font-semibold text-transparent">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

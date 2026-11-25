import { ArrowRight, Moon, Sun } from 'lucide-react';
import { APK_RELEASE, TRUST_STATS } from '../data/omniData';
import { PhoneMockup } from './PhoneMockup';

interface HeroSectionProps {
  theme: 'light' | 'dark';
  onToggleTheme: (nextTheme: 'light' | 'dark') => void;
  onNavigate: (sectionId: string) => void;
}

export function HeroSection({ theme, onToggleTheme, onNavigate }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative overflow-x-clip border-b border-slate-200/60 pt-6 pb-12 sm:pt-8 sm:pb-16 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Metadata + Theme Mode Switch Row */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/70 pb-4 dark:border-white/10">
          <p className="text-xs font-medium leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300">
            <span className="inline-block">Android App</span>
            <span aria-hidden="true" className="mx-2 text-slate-400">
              ·
            </span>
            <span className="inline-block">Ad-Free Watching</span>
            <span aria-hidden="true" className="mx-2 text-slate-400">
              ·
            </span>
            <span className="inline-block">4K Video, MP3 &amp; Clip Studio</span>
          </p>

          {/* Glassmorphic Theme Segmented Control */}
          <div
            role="group"
            aria-label="Color theme"
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
              Light
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
              Dark
            </button>
          </div>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="flex min-w-0 flex-col justify-center lg:col-span-7">
            <h1
              className="max-w-2xl font-display font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.75rem)',
                lineHeight: 1.07,
                textWrap: 'balance',
              }}
            >
              Save Videos, Watch Ad-Free, and{' '}
              <span className="bg-gradient-to-r from-[#0288D1] via-[#06B6D4] to-[#6366F1] bg-clip-text text-transparent">
                Master Every Clip
              </span>{' '}
              in One App.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Download 4K videos, crisp MP3s, and full playlists from 1,000+ platforms, browse
              without pop-ups, watch video feeds ad-free, and trim or convert clips right on your
              Android phone.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={APK_RELEASE.downloadUrl}
                download={APK_RELEASE.filename}
                rel="noopener noreferrer"
                className="soft-gradient-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0288D1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
              >
                Get OmniDownloader APK
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
                Explore App Screens
              </a>
            </div>

            <p className="mt-4 font-mono text-xs text-slate-500 dark:text-slate-400">
              Android 8.0+ · Free to use · No sign-up required
            </p>
          </div>

          {/* Device Preview with Soft Gradient Halo */}
          <div className="relative flex min-w-0 flex-col items-center justify-center lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-tr from-[#0288D1]/20 via-[#06B6D4]/15 to-[#6366F1]/20 blur-3xl"
            />
            <div className="relative w-full">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Glassmorphic Trust Strip Below Hero Split */}
        <div className="glass-surface mt-10 grid grid-cols-1 divide-y divide-slate-200/70 rounded-2xl border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 dark:divide-white/10">
          {TRUST_STATS.map((stat) => (
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

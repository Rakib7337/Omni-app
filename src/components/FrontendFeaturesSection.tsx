import { useState } from 'react';
import {
  ArrowLeftRight,
  ClipboardPaste,
  Compass,
  FolderOpen,
  Gauge,
  Globe,
  HardDrive,
  LayoutGrid,
  Link2,
  ListFilter,
  Music,
  Scissors,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Smartphone,
  Tv,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { AppFeatureShowcase, LocalizedContent } from '../data/omniData';

type FilterTab = 'all' | AppFeatureShowcase['id'];

interface FrontendFeaturesSectionProps {
  copy: LocalizedContent['featuresSection'];
}

const FEATURE_META_ICONS: Record<
  AppFeatureShowcase['id'],
  {
    headerIcon: LucideIcon;
    highlightIcons: [LucideIcon, LucideIcon, LucideIcon];
  }
> = {
  saver: {
    headerIcon: Link2,
    highlightIcons: [ClipboardPaste, Zap, Globe],
  },
  formats: {
    headerIcon: SlidersHorizontal,
    highlightIcons: [ArrowLeftRight, Music, Gauge],
  },
  feeds: {
    headerIcon: Tv,
    highlightIcons: [Compass, ShieldCheck, Search],
  },
  library: {
    headerIcon: FolderOpen,
    highlightIcons: [HardDrive, ListFilter, Scissors],
  },
};

function ScreenshotPhoneFrame({
  imageSrc,
  imageAlt,
  title,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <div className="relative mx-auto w-[220px] shrink-0 sm:w-[232px]">
      {/* Side Hardware Buttons */}
      <div
        aria-hidden="true"
        className="absolute top-24 -right-[2.5px] h-11 w-[2.5px] rounded-r-sm bg-slate-400/90 dark:bg-slate-600"
      />
      <div
        aria-hidden="true"
        className="absolute top-38 -right-[2.5px] h-6 w-[2.5px] rounded-r-sm bg-slate-400/90 dark:bg-slate-600"
      />
      <div
        aria-hidden="true"
        className="absolute top-28 -left-[2.5px] h-8 w-[2.5px] rounded-l-sm bg-slate-400/80 dark:bg-slate-700"
      />

      {/* Sculpted Titanium Outer Rim */}
      <div className="rounded-[38px] bg-gradient-to-br from-slate-200 via-white to-slate-400 p-[2.5px] shadow-[0_22px_50px_-14px_rgba(15,23,42,0.22)] ring-1 ring-slate-900/10 dark:from-slate-500/75 dark:via-slate-700/70 dark:to-slate-900 dark:ring-white/10 dark:shadow-[0_26px_55px_-14px_rgba(2,6,23,0.85)]">
        {/* Inner OLED Bezel */}
        <div className="rounded-[35.5px] bg-[#0B101B] p-[5.5px] ring-1 ring-inset ring-white/20">
          {/* Edge-to-Edge App Screen */}
          <div className="relative aspect-[9/20] overflow-hidden rounded-[30px] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950">
            {/* Fallback layer visible only if image fails */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-slate-500 dark:text-slate-400"
            >
              <Smartphone className="h-7 w-7 text-[#0288D1] dark:text-[#06B6D4]" />
              <span className="text-xs font-semibold">{title}</span>
            </div>

            <img
              src={imageSrc}
              alt={imageAlt}
              referrerPolicy="no-referrer"
              className="relative h-full w-full object-cover object-top"
            />

            {/* Subtle Top Punch-Hole Camera */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1.5 left-1/2 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center rounded-full bg-[#090D16] ring-1 ring-black/20"
            >
              <div className="h-1 w-1 rounded-full bg-slate-700" />
            </div>

            {/* Subtle Glass Sheen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function FrontendFeaturesSection({ copy }: FrontendFeaturesSectionProps) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const visibleFeatures =
    activeTab === 'all' ? copy.items : copy.items.filter((item) => item.id === activeTab);

  return (
    <section
      id="features"
      className="scroll-mt-20 border-b border-slate-200/60 py-16 sm:py-24 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end" data-aos="fade-up">
          <div className="max-w-xl">
            <p className="bg-gradient-to-r from-[#0288D1] to-[#06B6D4] bg-clip-text text-xs font-semibold tracking-wide text-transparent">
              {copy.kicker}
            </p>
            <h2
              className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-[#F8FAFC]"
              style={{ textWrap: 'balance' }}
            >
              {copy.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {copy.subtitle}
            </p>
          </div>

          {/* Interactive Screen Filter Segmented Bar */}
          <div
            role="tablist"
            aria-label={copy.filterAria}
            className="glass-card-subtle inline-flex shrink-0 flex-wrap items-center gap-1 rounded-xl border p-1 lg:flex-nowrap"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              onClick={() => setActiveTab('all')}
              className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                activeTab === 'all'
                  ? 'soft-gradient-cta text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{copy.allScreensLabel}</span>
            </button>
            {copy.items.map((item) => {
              const selected = activeTab === item.id;
              const TabIcon = FEATURE_META_ICONS[item.id].headerIcon;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                    selected
                      ? 'soft-gradient-cta text-white'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  <TabIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Cards with Real Screenshot Android Phone Mockups */}
        <div
          className={`mt-12 grid gap-8 ${
            visibleFeatures.length === 1 ? 'mx-auto max-w-3xl grid-cols-1' : 'lg:grid-cols-2'
          }`}
        >
          {visibleFeatures.map((feature, idx) => {
            const { headerIcon: FeatureHeaderIcon, highlightIcons } =
              FEATURE_META_ICONS[feature.id];
            return (
              <article
                key={feature.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="glass-surface grid items-center gap-8 rounded-3xl border p-6 sm:grid-cols-12 sm:p-8"
              >
                <div className="flex min-w-0 flex-col justify-between sm:col-span-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="glass-card-subtle inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-[#0288D1] dark:text-[#06B6D4]">
                        <FeatureHeaderIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-sm font-semibold text-[#0288D1] dark:text-[#06B6D4]">
                        {feature.index}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-[#0F172A] sm:text-2xl dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {feature.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/70 pt-4 dark:border-white/10">
                    {feature.highlights.map((highlight, highlightIdx) => {
                      const HighlightIcon = highlightIcons[highlightIdx] ?? Link2;
                      return (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-200"
                        >
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#0288D1]/10 text-[#0288D1] dark:bg-[#06B6D4]/15 dark:text-[#06B6D4]">
                            <HighlightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex items-center justify-center sm:col-span-6">
                  <ScreenshotPhoneFrame
                    imageSrc={feature.imageSrc}
                    imageAlt={feature.imageAlt}
                    title={feature.title}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

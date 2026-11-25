import { ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../data/omniData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent">
      {/* Final Call-to-Action Band */}
      <div className="border-b border-slate-200/60 bg-gradient-to-r from-[#0288D1]/8 via-[#06B6D4]/8 to-[#6366F1]/8 py-16 sm:py-20 dark:border-white/10">
        <div
          data-aos="fade-up"
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8"
        >
          <div>
            <h2
              className="font-display text-2xl font-bold tracking-tight text-[#0F172A] sm:text-4xl dark:text-white"
              style={{ textWrap: 'balance' }}
            >
              Take Control of Your Media on Android.
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
              One simple app for 4K downloads, ad-free video feeds, clean browsing, and quick clip
              editing.
            </p>
          </div>
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('download');
            }}
            className="soft-gradient-cta inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0288D1]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
          >
            Download OmniDownloader
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Quiet Dynamic Footer */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 md:flex-row md:items-center dark:border-slate-800/80">
          <div>
            <p className="font-display text-base font-bold text-[#0F172A] dark:text-white">
              OmniDownloader
            </p>
            <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400">
              Built for Android by Rakib Hasan —{' '}
              <a
                href="mailto:rhpro111@gmail.com"
                className="text-[#0288D1] hover:underline dark:text-[#06B6D4]"
              >
                rhpro111@gmail.com
              </a>
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className="text-xs font-medium text-slate-600 transition-colors hover:text-[#0F172A] dark:text-slate-400 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-slate-500 sm:flex-row sm:items-center dark:text-slate-400">
          <p>© {currentYear} OmniDownloader · Rakib Hasan. All rights reserved.</p>
          <p className="max-w-xl sm:text-right">
            Intended strictly for responsible personal and authorized offline media use. Respect
            content creators and applicable platform terms.
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ApkReleaseInfo, LocalizedContent, NavItem } from '../data/omniData';

interface NavbarProps {
  activeSection: string;
  navItems: NavItem[];
  copy: LocalizedContent['navbar'];
  release: ApkReleaseInfo;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ activeSection, navItems, copy, release, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1120]/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Title + Logo Mark */}
        <a
          href="#top"
          onClick={(e) => handleLinkClick(e, 'top')}
          className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-display text-lg font-bold tracking-tight text-[#0F172A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0288D1] dark:text-[#F8FAFC]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 28 28"
            className="h-7 w-7 shrink-0"
            fill="none"
          >
            <defs>
              <linearGradient id="omni-logo-grad" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0288D1" />
                <stop offset="55%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
            <rect width="28" height="28" rx="7" fill="url(#omni-logo-grad)" />
            <path
              d="M14 7v10m0 0-4-4m4 4 4-4M8.5 20.5h11"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>OmniDownloader</span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label={copy.primaryNavAria} className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative shrink-0 whitespace-nowrap py-1 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0288D1] ${
                  isActive
                    ? 'text-[#0288D1] dark:text-[#06B6D4]'
                    : 'text-slate-600 hover:text-[#0F172A] dark:text-slate-300 dark:hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#0288D1] to-[#06B6D4]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={release.downloadUrl}
            download={release.filename}
            rel="noopener noreferrer"
            className="soft-gradient-cta hidden shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4] sm:inline-flex"
          >
            {copy.downloadCta}
          </a>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? copy.closeMenuAria : copy.openMenuAria}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0288D1] lg:hidden dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-4 lg:hidden dark:border-slate-800 dark:bg-[#0F172A]"
        >
          <nav aria-label={copy.mobileNavAria} className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0288D1]/10 text-[#0288D1] dark:bg-[#06B6D4]/15 dark:text-[#06B6D4]'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={release.downloadUrl}
              download={release.filename}
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#0288D1] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0277BD]"
            >
              {copy.downloadCta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { shouldShowScrollTop } from '../utils/validation';

interface ScrollToTopFabProps {
  label: string;
}

export function ScrollToTopFab({ label }: ScrollToTopFabProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(shouldShowScrollTop(window.scrollY));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label={label}
      title={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`glass-surface fixed right-5 bottom-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-2xl border text-[#0288D1] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#06B6D4]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4] sm:right-7 sm:bottom-7 dark:text-[#06B6D4] ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0288D1]/15 via-[#06B6D4]/10 to-[#6366F1]/15"
      />
      <ArrowUp className="relative h-5 w-5" />
    </button>
  );
}

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ComparisonSection } from './components/ComparisonSection';
import { DeveloperFaqSection } from './components/DeveloperFaqSection';
import { DownloadReleaseSection } from './components/DownloadReleaseSection';
import { Footer } from './components/Footer';
import { FrontendFeaturesSection } from './components/FrontendFeaturesSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { ScrollToTopFab } from './components/ScrollToTopFab';
import { getLocalizedContent } from './data/omniData';
import {
  AppLanguage,
  AppTheme,
  resolveActiveSection,
  resolveInitialLanguage,
  resolveInitialTheme,
} from './utils/validation';

export default function App() {
  const [theme, setTheme] = useState<AppTheme>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('omni-theme') : null;
      return resolveInitialTheme(saved);
    } catch {
      return 'light';
    }
  });

  const [lang, setLang] = useState<AppLanguage>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('omni-lang') : null;
      return resolveInitialLanguage(saved);
    } catch {
      return 'bn';
    }
  });

  const [activeSection, setActiveSection] = useState<string>('features');
  const content = getLocalizedContent(lang);

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('omni-theme', theme);
    } catch {
      // Ignore storage errors in restricted sandboxes
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.pageTitle;
    try {
      localStorage.setItem('omni-lang', lang);
    } catch {
      // Ignore storage errors in restricted sandboxes
    }
  }, [lang, content.pageTitle]);

  useEffect(() => {
    const handleScroll = () => {
      const positions = content.navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          return {
            id: item.id,
            top: el ? el.getBoundingClientRect().top + window.scrollY : Number.POSITIVE_INFINITY,
          };
        })
        .filter((item) => Number.isFinite(item.top));

      const nextActive = resolveActiveSection(positions, window.scrollY, 180);
      if (nextActive) {
        setActiveSection(nextActive);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.navItems]);

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF]/60 to-[#F8FAFC] text-[#0F172A] dark:from-[#0B1120] dark:via-[#0F172A] dark:to-[#090E1A] dark:text-[#F8FAFC]">
      {/* Soft Ambient Gradient Backdrop */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-[#0288D1]/12 blur-[120px] dark:bg-[#0288D1]/18" />
        <div className="absolute top-1/3 -right-28 h-[460px] w-[460px] rounded-full bg-[#06B6D4]/10 blur-[120px] dark:bg-[#06B6D4]/14" />
        <div className="absolute bottom-0 left-0 h-[480px] w-[480px] rounded-full bg-[#6366F1]/10 blur-[130px] dark:bg-[#6366F1]/16" />
      </div>

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          navItems={content.navItems}
          copy={content.navbar}
          release={content.downloadSection.release}
          onNavigate={handleNavigate}
        />

        <main>
          <HeroSection
            theme={theme}
            onToggleTheme={setTheme}
            lang={lang}
            onChangeLang={setLang}
            copy={content.hero}
            release={content.downloadSection.release}
            onNavigate={handleNavigate}
          />
          <FrontendFeaturesSection copy={content.featuresSection} />
          <ProblemSolutionSection copy={content.whySwitchSection} />
          <ComparisonSection copy={content.comparisonSection} />
          <DownloadReleaseSection copy={content.downloadSection} />
          <DeveloperFaqSection lang={lang} copy={content.faqAndCreatorSection} />
        </main>

        <Footer
          navItems={content.navItems}
          copy={content.footer}
          release={content.downloadSection.release}
          onNavigate={handleNavigate}
        />
        <ScrollToTopFab label={content.footer.scrollToTopLabel} />
      </div>
    </div>
  );
}

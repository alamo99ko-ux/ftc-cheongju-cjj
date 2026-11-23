import { useRef, useEffect } from 'react';
import { Locale, SectionTab } from '../data/ftcData';
import { LanguageToggle } from './LanguageToggle';

interface StickySectionNavProps {
  tabs: SectionTab[];
  activeId: string;
  onSelectSection: (id: string) => void;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function StickySectionNav({
  tabs,
  activeId,
  onSelectSection,
  locale,
  onLocaleChange,
}: StickySectionNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const activeButton = container.querySelector<HTMLButtonElement>(`[data-tab-id="${activeId}"]`);
    if (activeButton) {
      const left = activeButton.offsetLeft - container.clientWidth / 2 + activeButton.clientWidth / 2;
      container.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
    }
  }, [activeId]);

  return (
    <div
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-y border-slate-200"
      role="navigation"
      aria-label="Section quick navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-13 flex items-center justify-between gap-3">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 flex-1 min-w-0"
        >
          {tabs.map((tab) => {
            const isActive = activeId === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                data-tab-id={tab.id}
                onClick={() => onSelectSection(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                  isActive
                    ? 'bg-blue-900 text-white'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <span className="hidden lg:inline">{tab.label}</span>
                <span className="lg:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div className="shrink-0 pl-2 border-l border-slate-200">
          <LanguageToggle locale={locale} onChange={onLocaleChange} variant="light" />
        </div>
      </div>
    </div>
  );
}

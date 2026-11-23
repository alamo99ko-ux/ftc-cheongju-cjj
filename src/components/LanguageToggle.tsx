import { Locale } from '../data/ftcData';

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  variant?: 'light' | 'dark';
}

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
];

export function LanguageToggle({ locale, onChange, variant = 'light' }: LanguageToggleProps) {
  const containerClass =
    variant === 'dark'
      ? 'bg-slate-900/80 border border-slate-700/80'
      : 'bg-slate-100 border border-slate-200';

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-lg shrink-0 ${containerClass}`}
      role="group"
      aria-label="Language selection"
    >
      {LANGUAGES.map((lang) => {
        const isActive = locale === lang.code;
        const activeClass =
          variant === 'dark'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'bg-white text-slate-900 shadow-sm';
        const inactiveClass =
          variant === 'dark'
            ? 'text-slate-300 hover:text-white'
            : 'text-slate-600 hover:text-slate-900';

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onChange(lang.code)}
            aria-pressed={isActive}
            className={`px-2.5 sm:px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              isActive ? activeClass : inactiveClass
            }`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

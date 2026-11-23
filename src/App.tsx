import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Globe,
  MapPin,
  Plane,
  Radio,
  ShieldCheck,
  Users,
} from 'lucide-react';
import {
  CONTENT,
  IMAGES,
  Locale,
  OFFICIAL_CJU_URL,
  PORTAL_DOMAIN,
} from './data/ftcData';
import { LanguageToggle } from './components/LanguageToggle';
import { ResilientImage } from './components/ResilientImage';
import { StickySectionNav } from './components/StickySectionNav';

export default function App() {
  const [locale, setLocale] = useState<Locale>('ko');
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedSimulatorId, setSelectedSimulatorId] = useState<string>('ftd-da40');
  const [airportFilter, setAirportFilter] = useState<'all' | 'base' | 'cross-country'>('all');

  const t = CONTENT[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title =
      'ftc cheongju | Cheongju University Flight Training Center — 청주대학교 비행교육원';
  }, [locale]);

  useEffect(() => {
    const sectionIds = t.sectionTabs.map((tab) => tab.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-96px 0px -65% 0px',
        threshold: 0.05,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [t.sectionTabs]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveSection(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeSimulator =
    t.simulators.items.find((item) => item.id === selectedSimulatorId) ?? t.simulators.items[0];

  const filteredAirports = t.airports.airports.filter((ap) =>
    airportFilter === 'all' ? true : ap.type === airportFilter
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Bar: strict 3-zone contract */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-950 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            {t.header.brand}
          </a>

          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
            aria-label="Primary navigation"
          >
            {t.header.navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="hover:text-slate-950 hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="shrink-0">
            <a
              href={OFFICIAL_CJU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              <span>{t.header.ctaLabel}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0">
            <ResilientImage
              src={IMAGES.heroDa40}
              alt="Cheongju University Flight Training Center Diamond DA-40NG"
              className="w-full h-full object-cover object-center"
              fallbackTitle="Cheongju University Flight Training Center · DA-40NG"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/35"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40"
              aria-hidden="true"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
            {/* Institutional Meta & Immediate Language Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/15">
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-200">
                <span>{t.hero.institutionLine}</span>
                <span aria-hidden="true" className="text-slate-400">
                  ·
                </span>
                <span className="font-mono-tabular text-blue-300 font-medium">
                  {t.hero.domainTag}
                </span>
              </div>

              <div className="self-start sm:self-auto">
                <LanguageToggle locale={locale} onChange={setLocale} variant="dark" />
              </div>
            </div>

            <div className="pt-8 lg:pt-12 max-w-3xl">
              <h1
                className="font-display font-bold tracking-tight text-white leading-[1.15] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.15rem, 4.2vw, 3.65rem)' }}
              >
                {t.hero.title}
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection('overview')}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>{t.hero.primaryCta}</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href={OFFICIAL_CJU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-700/90 hover:bg-blue-600 border border-blue-500/40 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <span>청주대학교 비행교육원</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Explicit Korean direct link verification strip */}
              <div className="mt-6 pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-300">
                <span>{t.hero.officialSitePrefix}:</span>
                <a
                  href={OFFICIAL_CJU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:text-white underline underline-offset-4 font-medium inline-flex items-center gap-1"
                >
                  <span>{t.hero.officialSiteLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <span aria-hidden="true" className="text-slate-500">
                  ·
                </span>
                <span className="font-mono-tabular text-slate-300">https://{PORTAL_DOMAIN}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Width 4-Column KPI Strip */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {t.hero.kpis.map((kpi, idx) => (
                <div
                  key={kpi.label}
                  className={`py-6 ${idx % 2 === 0 ? 'pr-4 sm:px-6' : 'pl-4 sm:px-6'} first:pl-0 last:pr-0`}
                >
                  <div className="font-display font-bold text-2xl sm:text-3xl text-blue-950 font-mono-tabular">
                    {kpi.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{kpi.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">{kpi.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-page Sticky Section Jump Tabs + Language Switcher */}
        <StickySectionNav
          tabs={t.sectionTabs}
          activeId={activeSection}
          onSelectSection={scrollToSection}
          locale={locale}
          onLocaleChange={setLocale}
        />

        {/* 01. Overview & Locations */}
        <section id="overview" className="scroll-mt-16 py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                {t.overview.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.overview.lead}</p>
            </div>

            {/* Key institutional definition strip */}
            <dl className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-xl p-6">
              <div>
                <dt className="text-xs font-medium text-slate-500">{t.overview.establishedLabel}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {t.overview.establishedValue}
                </dd>
              </div>
              <div className="md:border-l md:border-slate-200 md:pl-6">
                <dt className="text-xs font-medium text-slate-500">{t.overview.authorityLabel}</dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900">
                  {t.overview.authorityValue}
                </dd>
              </div>
              <div className="md:border-l md:border-slate-200 md:pl-6">
                <dt className="text-xs font-medium text-slate-500">{t.overview.portalLabel}</dt>
                <dd className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-900">
                  <span className="font-mono-tabular text-blue-900">{t.overview.portalValue}</span>
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                  <a
                    href={OFFICIAL_CJU_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 underline underline-offset-4"
                  >
                    <span>청주대학교 비행교육원</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </dd>
              </div>
            </dl>

            {/* Dual Base Cards */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {t.overview.bases.map((base) => (
                <article
                  key={base.code}
                  className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="font-mono-tabular font-semibold text-blue-900">
                        {base.code}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{base.tag}</span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-slate-950">
                      {base.name}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {base.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-start gap-2.5 text-sm text-slate-700">
                    <MapPin className="w-4 h-4 text-blue-800 mt-0.5 shrink-0" />
                    <span>{base.address}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 02. Aircraft Fleet & Count */}
        <section id="fleet" className="scroll-mt-16 py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                  {t.fleet.heading}
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.fleet.lead}</p>
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-900 font-mono-tabular shrink-0">
                {t.fleet.totalSummary}
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {t.fleet.items.map((aircraft, index) => (
                <article
                  key={aircraft.id}
                  className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
                >
                  <div
                    className={`lg:col-span-5 relative min-h-[240px] sm:min-h-[300px] ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <ResilientImage
                      src={aircraft.image}
                      alt={aircraft.imageAlt}
                      className="w-full h-full object-cover lg:absolute lg:inset-0"
                      fallbackTitle={aircraft.model}
                    />
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium text-slate-500">{aircraft.category}</p>
                          <h3 className="mt-1 font-display text-2xl font-bold text-slate-950">
                            {aircraft.model}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-500 block">
                            {t.fleet.specLabels.count}
                          </span>
                          <span className="font-display text-2xl font-bold text-blue-900 font-mono-tabular">
                            {aircraft.count}
                          </span>
                        </div>
                      </div>

                      <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-6 border-t border-slate-200 text-sm">
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.engine}</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">{aircraft.engine}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.avionics}</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">{aircraft.avionics}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.cruise}</dt>
                          <dd className="mt-0.5 font-medium text-slate-900 font-mono-tabular">
                            {aircraft.cruiseSpeed}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.range}</dt>
                          <dd className="mt-0.5 font-medium text-slate-900 font-mono-tabular">
                            {aircraft.range}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.fuel}</dt>
                          <dd className="mt-0.5 font-medium text-slate-900">{aircraft.fuel}</dd>
                        </div>
                        <div>
                          <dt className="text-xs text-slate-500">{t.fleet.specLabels.role}</dt>
                          <dd className="mt-0.5 font-semibold text-blue-900">{aircraft.role}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03. Facilities & Runways */}
        <section
          id="facilities"
          className="scroll-mt-16 py-14 sm:py-20 bg-slate-50 border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                {t.facilities.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.facilities.lead}</p>
            </div>

            {/* Wide Runway Showcase Image */}
            <figure className="mt-8">
              <div className="aspect-[16/9] max-h-[460px] w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-900">
                <ResilientImage
                  src={IMAGES.muanRunway}
                  alt={t.facilities.imageCaption}
                  className="w-full h-full object-cover"
                  fallbackTitle={t.facilities.imageCaption}
                />
              </div>
              <figcaption className="mt-2.5 text-xs text-slate-500">
                {t.facilities.imageCaption}
              </figcaption>
            </figure>

            {/* Runway Spec Table (Responsive) */}
            <div className="mt-8 bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.facilities.tableHeaders.airport}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.facilities.tableHeaders.runway}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.facilities.tableHeaders.dimensions}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.facilities.tableHeaders.navaids}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {t.facilities.bases.map((base) => (
                      <tr key={base.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-5">
                          <div className="font-semibold text-slate-950">{base.name}</div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {base.code} · {base.role}
                          </div>
                        </td>
                        <td className="py-4 px-5 font-mono-tabular font-medium text-slate-900 whitespace-nowrap">
                          {base.runwayHeading}
                        </td>
                        <td className="py-4 px-5 font-mono-tabular text-slate-800 whitespace-nowrap">
                          {base.runwayDim}
                        </td>
                        <td className="py-4 px-5 text-slate-700">{base.navaids}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Ground Support Facilities */}
            <div className="mt-10">
              <h3 className="font-display text-lg font-bold text-slate-900">
                {t.facilities.supportSpacesTitle}
              </h3>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.facilities.supportSpaces.map((space, idx) => (
                  <div
                    key={space.title}
                    className="bg-white border border-slate-200 rounded-xl p-5"
                  >
                    <div className="text-xs font-mono-tabular font-semibold text-blue-900">
                      0{idx + 1}.
                    </div>
                    <h4 className="mt-2 font-semibold text-slate-950 text-base">{space.title}</h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{space.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04. Training Equipment & Simulators (High-Contrast Navy Section for Rhythm) */}
        <section
          id="simulators"
          className="scroll-mt-16 py-14 sm:py-20 bg-slate-950 text-white border-b border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance]">
                {t.simulators.heading}
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">{t.simulators.lead}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6 flex flex-col">
                <div className="aspect-[4/3] w-full flex-1 rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                  <ResilientImage
                    src={IMAGES.ftdSimulator}
                    alt={t.simulators.imageCaption}
                    className="w-full h-full object-cover"
                    fallbackTitle={t.simulators.imageCaption}
                  />
                </div>
                <p className="mt-2.5 text-xs text-slate-400">{t.simulators.imageCaption}</p>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8">
                <div>
                  {/* Interactive Equipment Tabs */}
                  <div
                    className="flex flex-wrap gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg"
                    role="tablist"
                    aria-label="Simulator Equipment Selector"
                  >
                    {t.simulators.items.map((sim) => {
                      const active = sim.id === activeSimulator.id;
                      return (
                        <button
                          key={sim.id}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setSelectedSimulatorId(sim.id)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                            active
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-300 hover:text-white hover:bg-slate-800'
                          }`}
                        >
                          {sim.name.split(' (')[0]}
                        </button>
                      );
                    })}
                  </div>

                  <h3 className="mt-6 font-display text-xl sm:text-2xl font-bold text-white">
                    {activeSimulator.name}
                  </h3>

                  <dl className="mt-5 space-y-4 border-t border-slate-800 pt-5 text-sm">
                    <div>
                      <dt className="text-xs text-slate-400">{t.simulators.certLabel}</dt>
                      <dd className="mt-0.5 font-semibold text-blue-300">
                        {activeSimulator.certification}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400">{t.simulators.platformLabel}</dt>
                      <dd className="mt-0.5 text-slate-200">{activeSimulator.platform}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400">{t.simulators.creditLabel}</dt>
                      <dd className="mt-0.5 text-slate-200">{activeSimulator.creditHours}</dd>
                    </div>
                  </dl>

                  <ul className="mt-6 space-y-2.5 border-t border-slate-800 pt-5 text-sm text-slate-300">
                    {activeSimulator.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-mono-tabular mt-0.5">—</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05. Flight Training Curriculum */}
        <section
          id="curriculum"
          className="scroll-mt-16 py-14 sm:py-20 bg-white border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                {t.curriculum.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.curriculum.lead}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.curriculum.stages.map((stage) => (
                <article
                  key={stage.code}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono-tabular">
                      <span className="font-semibold text-blue-900">Stage {stage.step}</span>
                      <span className="text-slate-500 font-semibold">{stage.code}</span>
                    </div>

                    <h3 className="mt-3 font-display text-lg font-bold text-slate-950">
                      {stage.title}
                    </h3>

                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{stage.summary}</p>

                    <ul className="mt-5 space-y-1.5 text-xs sm:text-sm text-slate-700 border-t border-slate-200 pt-4">
                      {stage.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-2">
                          <span className="text-blue-700 font-bold">·</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <dl className="mt-6 pt-4 border-t border-slate-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-slate-500">{t.curriculum.aircraftLabel}</dt>
                      <dd className="font-semibold text-slate-900 font-mono-tabular">
                        {stage.aircraft}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <dt className="text-slate-500">{t.curriculum.hoursLabel}</dt>
                      <dd className="font-medium text-blue-900 text-right">{stage.hours}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 06. Operating Airports & Training Environment */}
        <section
          id="airports"
          className="scroll-mt-16 py-14 sm:py-20 bg-slate-50 border-b border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                  {t.airports.heading}
                </h2>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.airports.lead}</p>
              </div>

              <div
                className="inline-flex items-center p-1 bg-white border border-slate-200 rounded-lg self-start lg:self-auto shrink-0"
                role="group"
                aria-label="Filter operating airports"
              >
                {(
                  [
                    { key: 'all', label: t.airports.filterAll },
                    { key: 'base', label: t.airports.filterBase },
                    { key: 'cross-country', label: t.airports.filterXc },
                  ] as const
                ).map((item) => {
                  const active = airportFilter === item.key;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setAirportFilter(item.key)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
                        active
                          ? 'bg-blue-900 text-white'
                          : 'text-slate-600 hover:text-slate-950'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.airports.tableHeaders.icao}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.airports.tableHeaders.airport}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.airports.tableHeaders.runway}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.airports.tableHeaders.time}
                      </th>
                      <th className="py-3.5 px-5 whitespace-nowrap">
                        {t.airports.tableHeaders.focus}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-sm">
                    {filteredAirports.map((ap) => (
                      <tr key={ap.icao} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-5 font-mono-tabular font-bold text-blue-900 whitespace-nowrap">
                          {ap.icao}
                        </td>
                        <td className="py-4 px-5 font-semibold text-slate-950 whitespace-nowrap">
                          {ap.name}
                        </td>
                        <td className="py-4 px-5 font-mono-tabular text-slate-700 whitespace-nowrap">
                          {ap.runway}
                        </td>
                        <td className="py-4 px-5 font-mono-tabular text-slate-700 whitespace-nowrap">
                          {ap.flightTimeFromMuan}
                        </td>
                        <td className="py-4 px-5 text-slate-600">{ap.trainingFocus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.airports.environmentPoints.map((point, idx) => (
                <div key={point.title} className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="flex items-center gap-2 text-blue-900">
                    {idx === 0 && <Plane className="w-4 h-4" />}
                    {idx === 1 && <Compass className="w-4 h-4" />}
                    {idx === 2 && <Radio className="w-4 h-4" />}
                    <h3 className="font-display font-bold text-base text-slate-950">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. Staff & Flight Instructors */}
        <section id="staff" className="scroll-mt-16 py-14 sm:py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                {t.staff.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.staff.lead}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.staff.units.map((unit, idx) => (
                <article
                  key={unit.role}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span className="font-mono-tabular font-semibold text-blue-900">
                        0{idx + 1}.
                      </span>
                      <span className="font-semibold text-slate-600">{unit.headcount}</span>
                    </div>

                    <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-slate-950">
                      {unit.role}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {unit.responsibility}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-medium text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                    <span>{unit.qualification}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 08. Trainee Scale & Annual Training Capacity */}
        <section id="capacity" className="scroll-mt-16 py-14 sm:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 [text-wrap:balance]">
                {t.capacity.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">{t.capacity.lead}</p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.capacity.metrics.map((m) => (
                <div key={m.label} className="bg-white border border-slate-200 rounded-xl p-6">
                  <div className="text-xs font-medium text-slate-500">{m.label}</div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-blue-950 font-mono-tabular">
                      {m.value}
                    </span>
                    <span className="text-xs font-medium text-slate-500">{m.unit}</span>
                  </div>
                  <p className="mt-3 pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                    {m.context}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-slate-950">
                <Users className="w-5 h-5 text-blue-900" />
                <h3 className="font-display text-lg font-bold">
                  {t.capacity.cohortBreakdownTitle}
                </h3>
              </div>

              <div className="mt-5 divide-y divide-slate-200">
                {t.capacity.cohorts.map((c) => (
                  <div
                    key={c.group}
                    className="py-4 first:pt-2 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center text-sm"
                  >
                    <div className="md:col-span-3 font-semibold text-slate-950">{c.group}</div>
                    <div className="md:col-span-3 font-mono-tabular text-xs sm:text-sm text-blue-900 font-medium">
                      {c.base}
                    </div>
                    <div className="md:col-span-4 text-slate-600">{c.focus}</div>
                    <div className="md:col-span-2 md:text-right font-mono-tabular font-semibold text-slate-900">
                      {c.volume}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Institutional Footer */}
      <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="font-display text-lg font-bold text-white">
                {t.footer.brandTitle}
              </div>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5 font-mono-tabular text-blue-300">
                  <Globe className="w-3.5 h-3.5" />
                  {t.footer.portalText}
                </span>
                <span aria-hidden="true">·</span>
                <span>{t.footer.tel}</span>
              </div>
            </div>

            <a
              href={OFFICIAL_CJU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors duration-150 self-start lg:self-auto whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <span>청주대학교 비행교육원 (cju.ac.kr/043dic)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-400">
            <p>{t.footer.cheongjuAddr}</p>
            <p>{t.footer.muanAddr}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
            <p>{t.footer.copyright}</p>
            <a
              href={OFFICIAL_CJU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white underline underline-offset-4"
            >
              {t.footer.officialLinkLabel}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

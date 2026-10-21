/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  DELIVERABLES_DATA,
  INTEGRATIONS_DATA,
  IntegrationSystem,
  METHOD_STEPS
} from './data/brands';
import {
  ConfiguredEstimate,
  IntegrationBlueprintModal,
  LeadCaptureFormSection,
  PriceEstimatorSection,
  StarburstIcon
} from './components/Screens';

export default function App() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [activeDeliverableId, setActiveDeliverableId] = useState<string>('audit');
  const [selectedSystemForModal, setSelectedSystemForModal] = useState<IntegrationSystem | null>(null);
  const [selectedDiagramNode, setSelectedDiagramNode] = useState<string | null>(null);
  const [estimateAttached, setEstimateAttached] = useState<boolean>(false);

  const [estimate, setEstimate] = useState<ConfiguredEstimate>({
    selectedModuleIds: ['audit-blueprint', 'workflow-automation'],
    teamScale: '16-50',
    stackDepth: '4-6',
    weeklyManualHours: 45,
    hourlyRate: 65,
    lowEstimate: 18000,
    highEstimate: 22000,
    estimatedWeeks: 6,
    monthlyHoursSaved: 111,
    annualSavings: 86580,
    paybackMonths: '2.5'
  });

  const currentStep = METHOD_STEPS[activeStepIndex];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSystemById = (id: string) => {
    const found = INTEGRATIONS_DATA.find((item) => item.id === id);
    if (found) {
      setSelectedSystemForModal(found);
    }
  };

  const handleSendEstimateToLeadForm = () => {
    setEstimateAttached(true);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#141414] text-[#F0F0ED] font-sans antialiased selection:bg-[#FF7417] selection:text-white">
      {/* BEGIN: MainHeader */}
      <header className="w-full border-b border-[#2B2B2B] bg-[#141414]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#about"
            aria-label="Lairdwell Consulting Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <StarburstIcon className="w-5 h-5 text-[#FF7417]" />
            <span className="font-bold text-xl tracking-tight text-white">Lairdwell</span>
          </a>

          {/* Zone 2: Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] text-[#9A9A9A] font-medium tracking-wide">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              About Us
            </a>
            <a
              href="#method"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('method');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              How We Work
            </a>
            <a
              href="#deliverables"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('deliverables');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Deliverables
            </a>
            <a
              href="#estimator"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('estimator');
              }}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Price Estimator
            </a>
          </nav>

          {/* Zone 3: Right Action CTA */}
          <div className="shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-flex items-center text-[12px] font-mono tracking-wider text-[#D1D1D1] hover:text-white border border-[#3A3A3A] hover:border-[#666666] px-3.5 py-1.5 transition-all whitespace-nowrap shrink-0"
            >
              Book Consultation <span className="ml-1.5 font-sans">→</span>
            </a>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      <main>
        {/* BEGIN: HeroSection */}
        <section className="max-w-[1400px] mx-auto px-6 pt-6 pb-12" id="about">
          <div className="relative w-full rounded-sm overflow-hidden hero-gradient p-10 sm:p-14 md:p-20 border border-[#383838]/60 min-h-[460px] flex flex-col justify-center">
            {/* Subtle scanline / texture overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#00000022_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
            <div className="relative z-10 max-w-2xl">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E0E0D8]/80 mb-6">
                [ Lairdwell Consulting ]
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-[1.1] mb-8 font-sans">
                We help businesses
                <br />
                work smarter with AI
              </h1>
              <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#D6D6CF] max-w-xl font-normal font-sans">
                Lairdwell is a modern AI consulting and business automation company that eliminates repetitive tasks and improves workflows. Rather than selling generic, off-the-shelf software, we work with your team to understand your operations, identify inefficiencies, and build custom solutions that integrate with the tools and systems you already use.
              </p>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: MarqueeSystemGrid */}
        <section className="max-w-[1400px] mx-auto px-6 mb-24" id="integrations">
          {/* Top Row: 5-column responsive CSS Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 border-y border-[#262626] text-xs uppercase tracking-wider text-[#737373] divide-x divide-[#262626]">
            <button
              type="button"
              onClick={() => handleOpenSystemById('crm-sync')}
              className="py-4 px-6 flex items-center justify-center font-bold tracking-widest text-[#B0B0B0] hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              <span className="mr-1.5 font-mono text-sm text-[#FF7417]">╱╲</span> SALESFORCE
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('hubspot')}
              className="py-4 px-6 flex items-center justify-center font-serif lowercase italic text-[#B0B0B0] tracking-normal text-base hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 mr-1.5 text-current inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3a9 9 0 0 0 0 18" />
              </svg>
              hubspot
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('estimator')}
              className="py-4 px-6 col-span-2 md:col-span-1 flex items-center justify-center text-[11px] font-mono tracking-widest text-[#7D7D7D] hover:text-white text-center bg-[#161616] transition-colors cursor-pointer"
            >
              Integrated with your stack
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('netsuite')}
              className="py-4 px-6 flex items-center justify-center font-mono font-bold tracking-widest text-[#B0B0B0] hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              <span className="mr-2 text-xs">≈</span> NETSUITE
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('workspace')}
              className="py-4 px-6 flex items-center justify-center font-serif tracking-widest text-[#B0B0B0] text-sm hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              † Workspace
            </button>
          </div>

          {/* Bottom Row: 6-column responsive CSS Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-b border-[#262626] text-xs uppercase tracking-wider text-[#8A8A8A] divide-x divide-[#262626]">
            <button
              type="button"
              onClick={() => handleOpenSystemById('slack')}
              className="py-4 px-4 flex items-center justify-center font-mono tracking-widest text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              SLACK
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('airtable')}
              className="py-4 px-4 flex items-center justify-center font-sans tracking-tight text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              <svg
                className="w-3 h-3 mr-1 opacity-70"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11 5L6 9H2v6h4l5 4V5z" />
              </svg>
              airtable
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('notion')}
              className="py-4 px-4 flex items-center justify-center font-mono lowercase tracking-wide text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              ¶ notion
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('stripe')}
              className="py-4 px-4 flex items-center justify-center font-sans italic lowercase tracking-wider text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              ↗ stripe
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('snowflake')}
              className="py-4 px-4 flex items-center justify-center font-serif italic capitalize tracking-wide text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              ◊ Snowflake
            </button>
            <button
              type="button"
              onClick={() => handleOpenSystemById('postgres')}
              className="py-4 px-4 flex items-center justify-center font-mono tracking-wider text-xs hover:text-white hover:bg-[#181818] transition-colors cursor-pointer"
            >
              • POSTGRES
            </button>
          </div>
        </section>
        {/* END: MarqueeSystemGrid */}

        {/* BEGIN: StatementSection */}
        <section className="max-w-[1400px] mx-auto px-6 mb-32" id="platform">
          <div className="text-center mb-16">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-4">
              [ Our View ]
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-[#EFEFEA] max-w-3xl mx-auto leading-tight">
              Real leverage comes from custom workflows,
              <br className="hidden sm:inline" /> not another off-the-shelf tool
            </h2>
          </div>

          {/* 3 Pillars CSS Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Col 1 */}
            <div className="border-t border-[#333333] pt-6 flex flex-col justify-between">
              <div className="w-9 h-9 border border-[#303030] bg-[#171717] flex items-center justify-center mb-10 text-[#A0A0A0]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <p className="text-[13px] leading-relaxed text-[#969696] font-normal">
                Every business runs on thousands of daily operational handoffs: how requests enter, how documents are reviewed, how data is verified, and how teams coordinate.
              </p>
            </div>

            {/* Col 2 */}
            <div className="border-t border-[#333333] pt-6 flex flex-col justify-between">
              <div className="w-9 h-9 border border-[#303030] bg-[#171717] flex items-center justify-center mb-10 text-[#A0A0A0]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
              </div>
              <p className="text-[13px] leading-relaxed text-[#969696] font-normal">
                Off-the-shelf software forces your people to adapt to rigid templates. Disconnected SaaS tools create new silos, leaving staff stuck copying data between tabs.
              </p>
            </div>

            {/* Col 3 */}
            <div className="border-t border-[#333333] pt-6 flex flex-col justify-between">
              <div className="w-9 h-9 border border-[#303030] bg-[#171717] flex items-center justify-center mb-10 text-[#A0A0A0]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <p className="text-[13px] leading-relaxed text-[#969696] font-normal">
                Lairdwell audits your operations first, then builds practical AI and custom automations that integrate directly into the tools and systems your team already uses.
              </p>
            </div>
          </div>
        </section>
        {/* END: StatementSection */}

        {/* BEGIN: MethodSection */}
        <section className="max-w-[1400px] mx-auto px-6 mb-32" id="method">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-6 mb-12">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-2">
                Method
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white">
                How we work
              </h2>
            </div>
            <p className="text-xs font-mono text-[#828282] mt-4 md:mt-0 tracking-wide">
              Three stages take your operations from manual bottlenecks to production automation.
            </p>
          </div>

          {/* Interactive Diagram & Selector 12-Col CSS Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Steps Selection (Left 4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              {METHOD_STEPS.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                return (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setSelectedDiagramNode(null);
                    }}
                    className={`w-full text-left p-5 border transition-colors relative rounded-sm cursor-pointer ${
                      isActive
                        ? 'border-[#383838] bg-[#191919]'
                        : 'border-[#262626] bg-[#141414] hover:border-[#383838] group'
                    }`}
                  >
                    <div
                      className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${
                        isActive
                          ? 'text-[#7C7C7C]'
                          : 'text-[#5E5E5E] group-hover:text-[#888]'
                      }`}
                    >
                      {step.label}
                    </div>
                    <h3
                      className={`text-sm font-semibold ${
                        isActive
                          ? 'text-white mb-2'
                          : 'text-[#8C8C8C] group-hover:text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                    {isActive && (
                      <p className="text-[12px] leading-relaxed text-[#A4A4A4]">
                        {step.description}
                      </p>
                    )}
                    {isActive && (
                      <>
                        <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-white" />
                        <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-white" />
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Diagram Board (Right 8 Cols) */}
            <div className="lg:col-span-8 border border-[#262626] bg-[#161616]/70 p-8 sm:p-12 relative rounded-sm min-h-[440px] flex flex-col justify-center">
              {/* Top and bottom technical corner brackets */}
              <span className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#444]" />
              <span className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[#444]" />
              <span className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[#444]" />
              <span className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#444]" />

              {/* Column Headers */}
              <div className="grid grid-cols-3 text-center text-[11px] font-mono tracking-[0.2em] text-[#696969] uppercase mb-10">
                <div className={currentStep.activeNode === 'sources' ? 'text-[#A3A3A3]' : ''}>
                  EXISTING SYSTEMS
                </div>
                <div className={currentStep.activeNode === 'channels' ? 'text-[#A3A3A3]' : ''}>
                  CUSTOM ENGINE
                </div>
                <div className={currentStep.activeNode === 'outcomes' ? 'text-[#A3A3A3]' : ''}>
                  OUTCOMES
                </div>
              </div>

              {/* Circuit Diagram Content */}
              <div className="relative grid grid-cols-3 gap-6 items-center">
                {/* Column 1: Existing Systems */}
                <div className="flex flex-col gap-6 items-center z-10">
                  {/* Docs / ERP Node */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDiagramNode('Documents & ERP: Invoices, contracts, spreadsheets & POs')
                    }
                    className={`w-16 h-16 border bg-[#1A1A1A] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                      currentStep.activeNode === 'sources' || selectedDiagramNode?.startsWith('Documents')
                        ? 'border-[#555] hover:border-[#FF7417]'
                        : 'border-[#383838] hover:border-[#555]'
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-[#888] mb-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <line x1="4" x2="20" y1="6" y2="6" />
                      <line x1="4" x2="20" y1="12" y2="12" />
                      <line x1="4" x2="14" y1="18" y2="18" />
                    </svg>
                    <span className="text-[9px] font-mono uppercase text-[#777]">Docs</span>
                  </button>

                  {/* Comms / Inbox Node */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDiagramNode('Inbox & Chat: Slack, email threads, support & approvals')
                    }
                    className={`w-16 h-16 border bg-[#1A1A1A] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                      currentStep.activeNode === 'sources' || selectedDiagramNode?.startsWith('Inbox')
                        ? 'border-[#555] hover:border-[#FF7417]'
                        : 'border-[#383838] hover:border-[#555]'
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-[#888] mb-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span className="text-[9px] font-mono uppercase text-[#777]">Comms</span>
                  </button>

                  {/* CRM / DB Node */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDiagramNode('CRM & Databases: Salesforce, HubSpot, SQL & internal records')
                    }
                    className={`w-16 h-16 border bg-[#1A1A1A] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                      currentStep.activeNode === 'sources' || selectedDiagramNode?.startsWith('CRM')
                        ? 'border-[#555] hover:border-[#FF7417]'
                        : 'border-[#383838] hover:border-[#555]'
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-[#888] mb-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <line x1="21" x2="16.65" y1="21" y2="16.65" />
                    </svg>
                    <span className="text-[9px] font-mono uppercase text-[#777]">CRM / DB</span>
                  </button>
                </div>

                {/* Column 2: Custom Automation Hub */}
                <div className="flex flex-col items-center justify-center z-10">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDiagramNode('Workflow Engine: Custom AI orchestration, validation & routing')
                    }
                    className={`w-20 h-20 border bg-[#1C1C1C] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                      currentStep.activeNode === 'channels'
                        ? 'border-[#FF7417]'
                        : 'border-[#3E3E3E] hover:border-[#666]'
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-[#999] mb-1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    <span className="text-[10px] font-mono uppercase text-[#999] tracking-wider">
                      Workflow
                    </span>
                  </button>
                </div>

                {/* Column 3: Outcomes */}
                <div className="flex flex-col gap-10 items-center z-10">
                  {/* Efficiency Node */}
                  <div className="relative group">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDiagramNode('Efficiency: Elimination of manual data entry & faster cycle times')
                      }
                      className={`w-20 h-20 border bg-[#1A1A1A] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                        currentStep.activeNode === 'outcomes'
                          ? 'border-[#FF7417]'
                          : 'border-[#444] hover:border-[#FF7417]'
                      }`}
                    >
                      <StarburstIcon className="w-7 h-7 text-[#FF7417] mb-1" />
                      <span className="text-[9px] font-mono uppercase text-[#A4A4A4]">
                        Velocity
                      </span>
                    </button>
                    {/* Floating Value Badge */}
                    <span className="absolute -top-3 -right-6 text-[9px] font-mono text-[#FF7417] bg-[#221711] border border-[#FF7417]/40 px-1.5 py-0.5 rounded-none whitespace-nowrap">
                      {currentStep.valueBadge}
                    </span>
                  </div>

                  {/* Scale / Margin Node */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDiagramNode('Capacity: Higher operational output without adding headcount')
                    }
                    className={`w-20 h-20 border bg-[#1A1A1A] flex flex-col items-center justify-center rounded-sm transition-colors cursor-pointer ${
                      currentStep.activeNode === 'outcomes'
                        ? 'border-[#666]'
                        : 'border-[#383838] hover:border-[#666]'
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-[#7E7E7E] mb-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <span className="text-[9px] font-mono uppercase text-[#777]">
                      Capacity
                    </span>
                  </button>
                </div>

                {/* SVG Flow Connections Underlay */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none fill-none"
                  viewBox="0 0 600 280"
                  preserveAspectRatio="none"
                >
                  {/* Sources to Workflow */}
                  <path
                    d="M 135 45 C 200 45, 200 140, 260 140"
                    stroke={currentStep.activeNode === 'sources' ? '#525252' : '#353535'}
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 135 140 L 260 140"
                    stroke={currentStep.activeNode === 'sources' ? '#525252' : '#353535'}
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 135 235 C 200 235, 200 140, 260 140"
                    stroke={currentStep.activeNode === 'sources' ? '#525252' : '#353535'}
                    strokeWidth="1.2"
                  />
                  {/* Workflow to Outcomes */}
                  <path
                    d="M 340 140 C 400 140, 400 75, 460 75"
                    stroke={currentStep.activeNode === 'outcomes' ? '#FF7417' : '#353535'}
                    strokeOpacity={currentStep.activeNode === 'outcomes' ? '0.7' : '1'}
                    strokeWidth="1.2"
                  />
                  <path
                    d="M 340 140 C 400 140, 400 205, 460 205"
                    stroke={currentStep.activeNode === 'outcomes' ? '#666666' : '#353535'}
                    strokeWidth="1.2"
                  />
                </svg>
              </div>

              {/* Subtle interactive readout bar when a node is clicked */}
              {selectedDiagramNode && (
                <div className="mt-8 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#A3A3A3]">
                  <span>{selectedDiagramNode}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedDiagramNode(null)}
                    className="text-[#737373] hover:text-white ml-4 cursor-pointer"
                  >
                    [CLEAR]
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        {/* END: MethodSection */}

        {/* BEGIN: DeliverablesSection */}
        <section className="max-w-[1400px] mx-auto px-6 mb-32" id="deliverables">
          <div className="mb-14">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-3">
              [ Deliverables ]
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white mb-2">
              What every engagement includes
            </h2>
            <p className="text-xs font-mono text-[#828282] tracking-wide">
              Four concrete outputs delivered with every Lairdwell implementation.
            </p>
          </div>

          {/* 4 Deliverable Cards CSS Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERABLES_DATA.map((item) => {
              const isSelected = item.id === activeDeliverableId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveDeliverableId(item.id)}
                  className={`text-left border bg-[#161616] p-6 flex flex-col justify-between min-h-[220px] transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#383838]'
                      : 'border-[#2B2B2B] hover:border-[#383838]'
                  }`}
                >
                  <div>
                    {isSelected ? (
                      <div className="flex items-center gap-2 mb-6">
                        <span className="w-4 h-1 bg-[#FF7417]" />
                        <span className="w-1.5 h-1 bg-[#FF7417]" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 mb-6">
                        <span className="w-1.5 h-1.5 bg-[#444]" />
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[12px] leading-relaxed text-[#969696]">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
        {/* END: DeliverablesSection */}

        {/* BEGIN: PriceEstimatorSection (Replaces the Team / Minds Behind the Signals section) */}
        <PriceEstimatorSection
          estimate={estimate}
          onChangeEstimate={(updated) => setEstimate(updated)}
          onSendToLeadForm={handleSendEstimateToLeadForm}
        />
        {/* END: PriceEstimatorSection */}

        {/* BEGIN: CtaBanner */}
        <section className="max-w-[1400px] mx-auto px-6 mb-24">
          <div className="relative w-full rounded-sm overflow-hidden cta-gradient p-10 sm:p-16 border border-[#452317] min-h-[340px] flex items-center justify-between">
            {/* Left CTA Text */}
            <div className="relative z-10 max-w-md">
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF8B42] mb-4">
                [ Custom AI &amp; Automation ]
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-8">
                Eliminate repetitive
                <br />
                work across your stack
              </h2>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center text-[12px] font-mono tracking-wider text-white border border-white/30 hover:border-white px-4 py-2 transition-all bg-black/20 backdrop-blur-sm"
              >
                Schedule Workflow Audit <span className="ml-2 font-sans">→</span>
              </a>
            </div>

            {/* Right Magnetic Orbit Diagram Graphic */}
            <div className="hidden md:flex relative items-center justify-center w-[480px] h-[300px]">
              <svg
                className="absolute inset-0 w-full h-full"
                fill="none"
                viewBox="0 0 480 300"
              >
                <ellipse
                  cx="240"
                  cy="150"
                  rx="220"
                  ry="80"
                  stroke="#FF7417"
                  strokeOpacity="0.35"
                  strokeWidth="0.75"
                />
                <ellipse
                  cx="240"
                  cy="150"
                  rx="170"
                  ry="110"
                  stroke="#FF7417"
                  strokeOpacity="0.45"
                  strokeWidth="0.75"
                />
                <ellipse
                  cx="240"
                  cy="150"
                  rx="110"
                  ry="135"
                  stroke="#FF7417"
                  strokeOpacity="0.55"
                  strokeWidth="0.75"
                />
                <path
                  d="M 30 150 C 30 20, 240 20, 240 150 C 240 280, 30 280, 30 150"
                  stroke="#FF7417"
                  strokeOpacity="0.4"
                  strokeWidth="0.6"
                />
                <path
                  d="M 450 150 C 450 20, 240 20, 240 150 C 240 280, 450 280, 450 150"
                  stroke="#FF7417"
                  strokeOpacity="0.4"
                  strokeWidth="0.6"
                />
                <circle cx="50" cy="150" fill="#FF7417" r="3" />
                <circle cx="430" cy="150" fill="#FF7417" r="3" />
                <circle cx="120" cy="80" fill="#FF7417" r="2.5" />
                <circle cx="360" cy="80" fill="#FF7417" r="2.5" />
                <circle cx="150" cy="220" fill="#FF7417" r="2.5" />
                <circle cx="330" cy="220" fill="#FF7417" r="2.5" />
                <circle cx="240" cy="285" fill="#FF7417" r="2" />
                <circle cx="240" cy="15" fill="#FF7417" r="2" />
              </svg>

              <div className="relative z-10 w-24 h-24 bg-[#FF7417] flex items-center justify-center shadow-2xl">
                <svg
                  className="w-14 h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <line x1="12" x2="12" y1="2" y2="22" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <line x1="4.93" x2="19.07" y1="4.93" y2="19.07" />
                  <line x1="19.07" x2="4.93" y1="4.93" y2="19.07" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* END: CtaBanner */}

        {/* BEGIN: Bottom Lead Capture Form Section */}
        <LeadCaptureFormSection
          estimate={estimate}
          estimateAttached={estimateAttached}
        />
        {/* END: Bottom Lead Capture Form Section */}
      </main>

      {/* BEGIN: MainFooter */}
      <footer className="w-full border-t border-[#242424] bg-[#111111] pt-16 pb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Top Row: Statement & Link Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">
            {/* Left Tagline */}
            <div className="md:col-span-5">
              <p className="text-xl sm:text-2xl text-[#E8E8E2] max-w-sm font-normal tracking-tight leading-snug">
                Practical AI consulting
                <br />
                and custom workflow automation
              </p>
            </div>

            {/* Right Nav Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Col 1 */}
              <div>
                <h5 className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-widest mb-4">
                  Explore
                </h5>
                <ul className="space-y-2.5 text-xs text-[#909090]">
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#platform"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('platform');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Our View
                    </a>
                  </li>
                  <li>
                    <a
                      href="#method"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('method');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      How We Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#estimator"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('estimator');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Price Estimator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Book Audit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 2 */}
              <div>
                <h5 className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-widest mb-4">
                  Capabilities
                </h5>
                <ul className="space-y-2.5 text-xs text-[#909090]">
                  <li>
                    <a
                      href="#estimator"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('estimator');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Operations Discovery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#estimator"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('estimator');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Workflow Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#estimator"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('estimator');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Custom AI Agents
                    </a>
                  </li>
                  <li>
                    <a
                      href="#estimator"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('estimator');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      Document Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="#integrations"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('integrations');
                      }}
                      className="hover:text-white transition-colors"
                    >
                      API &amp; Legacy Bridges
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3 */}
              <div>
                <h5 className="text-[11px] font-mono text-[#5A5A5A] uppercase tracking-widest mb-4">
                  Integrations
                </h5>
                <ul className="space-y-2.5 text-xs text-[#909090]">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpenSystemById('crm-sync')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Salesforce &amp; HubSpot
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpenSystemById('netsuite')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      NetSuite &amp; Finance
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpenSystemById('workspace')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Google Workspace
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpenSystemById('slack')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      Slack &amp; Internal Ops
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleOpenSystemById('postgres')}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      SQL &amp; Data Warehouses
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle: Big Brand Signature & Spectrum Chart */}
          <div className="pt-12 pb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-b border-[#222222]">
            {/* Large Bold Wordmark with Icon */}
            <div className="flex items-center gap-4">
              <svg
                className="w-14 h-14 sm:w-20 sm:h-20 text-[#FF7417] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <line x1="4.93" x2="19.07" y1="4.93" y2="19.07" />
                <line x1="19.07" x2="4.93" y1="4.93" y2="19.07" />
              </svg>
              <span className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none">
                Lairdwell
              </span>
            </div>

            {/* Abstract Color Spectrum / Swatch Bar */}
            <div className="w-64 h-16 border border-[#333333] relative overflow-hidden bg-gradient-to-r from-[#4d6a5d] via-[#a36940] to-[#2f1915] flex">
              <div className="w-full h-full grid grid-cols-12 opacity-30 divide-x divide-black pointer-events-none">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer / Legal Row */}
          <div className="pt-8 text-[11px] font-mono text-[#555555] tracking-wide flex flex-col sm:flex-row justify-between gap-4">
            <div>
              © 2026 Lairdwell Consulting • Custom AI Consulting &amp; Business Automation
            </div>
          </div>
        </div>
      </footer>
      {/* END: MainFooter */}

      {/* Integration Blueprint Modal */}
      <IntegrationBlueprintModal
        system={selectedSystemForModal}
        onClose={() => setSelectedSystemForModal(null)}
        onScrollToEstimator={() => scrollToSection('estimator')}
      />
    </div>
  );
}

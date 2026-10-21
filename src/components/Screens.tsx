import React, { useState } from 'react';
import {
  ESTIMATOR_MODULES,
  INTEGRATIONS_DATA,
  IntegrationSystem
} from '../data/brands';

export interface ConfiguredEstimate {
  selectedModuleIds: string[];
  teamScale: '1-15' | '16-50' | '51-200' | '200+';
  stackDepth: '2-3' | '4-6' | '7+';
  weeklyManualHours: number;
  hourlyRate: number;
  lowEstimate: number;
  highEstimate: number;
  estimatedWeeks: number;
  monthlyHoursSaved: number;
  annualSavings: number;
  paybackMonths: string;
}

export function StarburstIcon({ className = 'w-5 h-5 text-[#FF7417]' }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

export function SystemWordmark({ system }: { system: IntegrationSystem }) {
  switch (system.displayStyle) {
    case 'nexim':
      return (
        <span className="inline-flex items-center font-bold tracking-widest text-xs uppercase">
          <span className="mr-1.5 font-mono text-sm text-[#FF7417]">╱╲</span> {system.name}
        </span>
      );
    case 'graphe':
      return (
        <span className="inline-flex items-center font-serif italic tracking-normal text-base">
          <svg className="w-3.5 h-3.5 mr-1.5 text-current inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0 0 18" />
          </svg>
          {system.name}
        </span>
      );
    case 'northwave':
      return (
        <span className="inline-flex items-center font-mono font-bold tracking-widest text-xs uppercase">
          <span className="mr-2 text-xs">≈</span> {system.name}
        </span>
      );
    case 'ferro':
      return (
        <span className="inline-flex items-center font-serif tracking-widest text-sm uppercase">
          † {system.name}
        </span>
      );
    case 'halden':
      return (
        <span className="inline-flex items-center font-mono tracking-widest text-xs uppercase">
          {system.name}
        </span>
      );
    case 'echoa':
      return (
        <span className="inline-flex items-center font-sans tracking-tight text-xs uppercase">
          <svg className="w-3 h-3 mr-1 opacity-70" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
          </svg>
          {system.name}
        </span>
      );
    case 'parlo':
      return (
        <span className="inline-flex items-center font-mono lowercase tracking-wide text-xs">
          ¶ {system.name}
        </span>
      );
    case 'driftly':
      return (
        <span className="inline-flex items-center font-sans italic tracking-wider text-xs">
          ↗ {system.name}
        </span>
      );
    case 'saelle':
      return (
        <span className="inline-flex items-center font-serif italic capitalize tracking-wide text-sm">
          ◊ {system.name}
        </span>
      );
    case 'ostrel':
      return (
        <span className="inline-flex items-center font-mono tracking-wider text-xs uppercase">
          • {system.name}
        </span>
      );
  }
}

export function IntegrationBlueprintModal({
  system,
  onClose,
  onScrollToEstimator
}: {
  system: IntegrationSystem | null;
  onClose: () => void;
  onScrollToEstimator: () => void;
}) {
  if (!system) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl border border-[#383838] bg-[#161616] text-[#F0F0ED] relative overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="absolute top-0 left-0 w-2 h-2 bg-[#FF7417]" />
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF7417]" />

        <div className="p-6 sm:p-8 border-b border-[#292929] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#191919]">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7417] mb-2">
              [ Custom Integration Blueprint • {system.category} ]
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="text-2xl text-white">
                <SystemWordmark system={system} />
              </div>
              <span className="text-xs font-mono text-[#8A8A8A]">•</span>
              <span className="text-xs font-mono text-[#D1D1D1] tabular-nums">
                AVG RECLAIMED: <strong className="text-white">{system.hoursSavedPerMonth} HRS/MO</strong>
              </span>
              <span className="text-xs font-mono text-[#FF7417] tabular-nums">
                (-{system.errorReductionPct}% MANUAL ERRORS)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onScrollToEstimator();
              }}
              className="text-[11px] font-mono uppercase tracking-wider text-[#D1D1D1] hover:text-white border border-[#3A3A3A] hover:border-[#666] px-3 py-1.5 transition-colors cursor-pointer whitespace-nowrap"
            >
              Estimate This Integration →
            </button>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="text-xs font-mono text-[#8A8A8A] hover:text-white border border-[#2B2B2B] hover:border-[#555] px-3 py-1.5 transition-colors cursor-pointer"
            >
              ESC
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm text-[#D6D6CF] leading-relaxed">{system.summary}</p>

          <div className="space-y-4">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373]">
              Production Workflow Examples
            </div>
            {system.automatedWorkflows.map((wf, idx) => (
              <div key={idx} className="border border-[#292929] bg-[#141414] p-5 space-y-3">
                <div className="flex items-center justify-between gap-4 border-b border-[#242424] pb-3">
                  <h4 className="text-sm font-semibold text-white">{wf.title}</h4>
                  <span className="text-[11px] font-mono text-[#FF7417] whitespace-nowrap">
                    {wf.impact}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1 text-xs">
                  <div>
                    <span className="font-mono uppercase text-[10px] tracking-widest text-[#737373] block mb-1">
                      Before (Manual Bottleneck)
                    </span>
                    <p className="text-[#969696] leading-relaxed">{wf.before}</p>
                  </div>
                  <div>
                    <span className="font-mono uppercase text-[10px] tracking-widest text-[#FF7417] block mb-1">
                      After (Lairdwell Custom Pipeline)
                    </span>
                    <p className="text-[#D6D6CF] leading-relaxed">{wf.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PriceEstimatorSection({
  estimate,
  onChangeEstimate,
  onSendToLeadForm
}: {
  estimate: ConfiguredEstimate;
  onChangeEstimate: (updated: ConfiguredEstimate) => void;
  onSendToLeadForm: () => void;
}) {
  const recompute = (
    selectedModuleIds: string[],
    teamScale: ConfiguredEstimate['teamScale'],
    stackDepth: ConfiguredEstimate['stackDepth'],
    weeklyManualHours: number,
    hourlyRate: number
  ): ConfiguredEstimate => {
    const activeMods = ESTIMATOR_MODULES.filter((m) => selectedModuleIds.includes(m.id));
    const baseSum = activeMods.reduce((acc, m) => acc + m.baseCost, 0) || 4500;
    const baseWeeks = activeMods.reduce((acc, m) => acc + m.weeksAdded, 0) || 2;

    const scaleMultiplier =
      teamScale === '1-15'
        ? 1.0
        : teamScale === '16-50'
        ? 1.2
        : teamScale === '51-200'
        ? 1.45
        : 1.8;

    const stackAddon =
      stackDepth === '2-3' ? 0 : stackDepth === '4-6' ? 2500 : 5500;

    const rawMid = Math.round((baseSum * scaleMultiplier + stackAddon) / 250) * 250;
    const lowEstimate = rawMid;
    const highEstimate = Math.round((rawMid * 1.22) / 250) * 250;

    const combinedEfficiency = Math.min(
      0.82,
      activeMods.reduce((acc, m) => acc + m.efficiencyMultiplier, 0) || 0.25
    );

    const monthlyHoursSaved = Math.round(weeklyManualHours * 4.33 * combinedEfficiency);
    const annualSavings = Math.round(monthlyHoursSaved * 12 * hourlyRate);
    const monthlyDollarSavings = monthlyHoursSaved * hourlyRate;
    const paybackMonths =
      monthlyDollarSavings > 0
        ? Math.max(0.8, lowEstimate / monthlyDollarSavings).toFixed(1)
        : '2.5';

    const estimatedWeeks =
      stackDepth === '7+' ? baseWeeks + 2 : stackDepth === '4-6' ? baseWeeks + 1 : baseWeeks;

    return {
      selectedModuleIds,
      teamScale,
      stackDepth,
      weeklyManualHours,
      hourlyRate,
      lowEstimate,
      highEstimate,
      estimatedWeeks,
      monthlyHoursSaved,
      annualSavings,
      paybackMonths
    };
  };

  const toggleModule = (id: string) => {
    let nextIds: string[];
    if (estimate.selectedModuleIds.includes(id)) {
      if (estimate.selectedModuleIds.length === 1) return; // keep at least 1 selected
      nextIds = estimate.selectedModuleIds.filter((item) => item !== id);
    } else {
      nextIds = [...estimate.selectedModuleIds, id];
    }
    onChangeEstimate(
      recompute(
        nextIds,
        estimate.teamScale,
        estimate.stackDepth,
        estimate.weeklyManualHours,
        estimate.hourlyRate
      )
    );
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-32" id="estimator">
      {/* Header matching the reference layout */}
      <div className="text-center mb-16">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#737373] mb-4">
          [ Price Estimator ]
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-normal tracking-tight text-[#EFEFEA] mb-3">
          Estimate your automation investment &amp; ROI
        </h2>
        <p className="text-xs font-mono text-[#828282] max-w-2xl mx-auto tracking-wide">
          Configure your workflow scope, existing software stack, and manual hours to calculate custom implementation pricing and payback period.
        </p>
      </div>

      {/* 12-Column Responsive CSS Grid Container */}
      <div className="border border-[#292929] bg-[#161616] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#292929]">
          {/* Left 7 Cols: Interactive Scope & Operations Configurator */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 space-y-10">
            {/* Step A: Modules */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A3A3A3]">
                  01. Select Automation &amp; AI Modules
                </span>
                <span className="text-[11px] font-mono text-[#737373]">
                  {estimate.selectedModuleIds.length} SELECTED
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ESTIMATOR_MODULES.map((mod) => {
                  const isSelected = estimate.selectedModuleIds.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleModule(mod.id)}
                      className={`text-left p-4 border transition-colors relative cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#FF7417] bg-[#1D1612]'
                          : 'border-[#2B2B2B] bg-[#141414] hover:border-[#444]'
                      }`}
                    >
                      {isSelected && (
                        <>
                          <span className="absolute -top-[1px] -left-[1px] w-1.5 h-1.5 bg-[#FF7417]" />
                          <span className="absolute -bottom-[1px] -right-[1px] w-1.5 h-1.5 bg-[#FF7417]" />
                        </>
                      )}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-semibold text-white">{mod.name}</span>
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                              isSelected
                                ? 'border-[#FF7417]/50 text-[#FF7417] bg-[#291A11]'
                                : 'border-[#333] text-[#777]'
                            }`}
                          >
                            +${mod.baseCost.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed text-[#969696]">
                          {mod.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step B: Team Scale & Stack Depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#262626]">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.18em] text-[#A3A3A3] mb-3">
                  02. Team Size Impacted
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: '1-15', label: '1–15 Staff' },
                      { id: '16-50', label: '16–50 Staff' },
                      { id: '51-200', label: '51–200 Staff' },
                      { id: '200+', label: '200+ Staff' }
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() =>
                        onChangeEstimate(
                          recompute(
                            estimate.selectedModuleIds,
                            opt.id,
                            estimate.stackDepth,
                            estimate.weeklyManualHours,
                            estimate.hourlyRate
                          )
                        )
                      }
                      className={`py-2.5 px-3 text-xs font-mono border transition-colors cursor-pointer ${
                        estimate.teamScale === opt.id
                          ? 'border-white bg-[#222222] text-white'
                          : 'border-[#2B2B2B] bg-[#141414] text-[#8A8A8A] hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.18em] text-[#A3A3A3] mb-3">
                  03. Existing Tools to Connect
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: '2-3', label: '2–3 Tools' },
                      { id: '4-6', label: '4–6 Tools' },
                      { id: '7+', label: '7+ Stack' }
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() =>
                        onChangeEstimate(
                          recompute(
                            estimate.selectedModuleIds,
                            estimate.teamScale,
                            opt.id,
                            estimate.weeklyManualHours,
                            estimate.hourlyRate
                          )
                        )
                      }
                      className={`py-2.5 px-2 text-xs font-mono border transition-colors cursor-pointer ${
                        estimate.stackDepth === opt.id
                          ? 'border-white bg-[#222222] text-white'
                          : 'border-[#2B2B2B] bg-[#141414] text-[#8A8A8A] hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#737373] mt-2">
                  e.g. CRM, ERP, Slack, Email, SQL, Spreadsheets
                </p>
              </div>
            </div>

            {/* Step C: Repetitive Hours & Hourly Cost */}
            <div className="pt-6 border-t border-[#262626] space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="manual-hours-slider"
                    className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A3A3A3]"
                  >
                    04. Weekly Team Hours Spent on Repetitive Tasks
                  </label>
                  <span className="text-sm font-mono font-semibold text-[#FF7417] tabular-nums">
                    {estimate.weeklyManualHours} hrs / week
                  </span>
                </div>
                <input
                  id="manual-hours-slider"
                  type="range"
                  min={10}
                  max={200}
                  step={5}
                  value={estimate.weeklyManualHours}
                  onChange={(e) =>
                    onChangeEstimate(
                      recompute(
                        estimate.selectedModuleIds,
                        estimate.teamScale,
                        estimate.stackDepth,
                        Number(e.target.value),
                        estimate.hourlyRate
                      )
                    )
                  }
                  className="w-full accent-[#FF7417] bg-[#262626] h-1.5 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-[#666] mt-1">
                  <span>10 hrs/wk (Single workflow)</span>
                  <span>80 hrs/wk (Multi-team)</span>
                  <span>200 hrs/wk (Cross-company)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#A3A3A3]">
                  05. Avg. Fully-Loaded Staff Hourly Cost
                </span>
                <div className="flex items-center gap-2">
                  {[45, 65, 95, 125].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() =>
                        onChangeEstimate(
                          recompute(
                            estimate.selectedModuleIds,
                            estimate.teamScale,
                            estimate.stackDepth,
                            estimate.weeklyManualHours,
                            rate
                          )
                        )
                      }
                      className={`px-3 py-1.5 text-xs font-mono border transition-colors cursor-pointer tabular-nums ${
                        estimate.hourlyRate === rate
                          ? 'border-[#FF7417] bg-[#221711] text-white'
                          : 'border-[#2B2B2B] bg-[#141414] text-[#8A8A8A] hover:text-white'
                      }`}
                    >
                      ${rate}/hr
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Live Investment Readout & ROI Ledger */}
          <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 bg-[#141414] flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between border-b border-[#262626] pb-4 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7417]">
                  [ Estimated Project Summary ]
                </span>
                <span className="text-[11px] font-mono text-[#8A8A8A] tabular-nums">
                  EST. TIMELINE: ~{estimate.estimatedWeeks} WEEKS
                </span>
              </div>

              {/* Primary Investment Range */}
              <div className="mb-8">
                <div className="text-xs text-[#969696] mb-2">
                  Estimated Custom Implementation Investment
                </div>
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-mono tabular-nums">
                  ${estimate.lowEstimate.toLocaleString()} – ${estimate.highEstimate.toLocaleString()}
                </div>
                <div className="text-[11px] font-mono text-[#737373] mt-1.5">
                  Fixed-scope milestone billing • Full IP &amp; source code ownership
                </div>
              </div>

              {/* 3-Card ROI Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="border border-[#292929] bg-[#181818] p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7D7D] mb-1">
                    Time Reclaimed
                  </div>
                  <div className="text-lg font-mono font-semibold text-white tabular-nums">
                    {estimate.monthlyHoursSaved} hrs/mo
                  </div>
                </div>
                <div className="border border-[#292929] bg-[#181818] p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7D7D] mb-1">
                    Annual Savings
                  </div>
                  <div className="text-lg font-mono font-semibold text-[#FF7417] tabular-nums">
                    ${estimate.annualSavings.toLocaleString()}/yr
                  </div>
                </div>
                <div className="border border-[#292929] bg-[#181818] p-4">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7D7D] mb-1">
                    Est. Payback
                  </div>
                  <div className="text-lg font-mono font-semibold text-white tabular-nums">
                    {estimate.paybackMonths} mos
                  </div>
                </div>
              </div>

              {/* Included Scope Breakdown */}
              <div className="border-t border-[#262626] pt-5 mb-8">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#737373] mb-3">
                  Configured Scope Line Items
                </div>
                <ul className="space-y-2 text-xs text-[#D1D1D1]">
                  {ESTIMATOR_MODULES.filter((m) =>
                    estimate.selectedModuleIds.includes(m.id)
                  ).map((mod) => (
                    <li key={mod.id} className="flex items-center justify-between font-mono">
                      <span className="font-sans text-[#B0B0B0]">• {mod.name}</span>
                      <span className="text-[#8A8A8A] tabular-nums">
                        ${mod.baseCost.toLocaleString()}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between font-mono text-[11px] text-[#737373] pt-2 border-t border-[#222]">
                    <span>
                      Scale &amp; Integration Complexity ({estimate.teamScale} staff,{' '}
                      {estimate.stackDepth} tools)
                    </span>
                    <span>Included</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={onSendToLeadForm}
              className="w-full bg-[#FF7417] hover:bg-[#e5630d] text-white font-mono text-xs uppercase tracking-widest py-4 px-6 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              Lock In Estimate &amp; Request Audit <span>↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const COMMON_STACK_TOOLS = [
  'Salesforce',
  'HubSpot',
  'Slack',
  'Google Workspace',
  'Microsoft 365',
  'NetSuite / QuickBooks',
  'Airtable / Notion',
  'PostgreSQL / Custom DB'
];

export function LeadCaptureFormSection({
  estimate,
  estimateAttached
}: {
  estimate: ConfiguredEstimate;
  estimateAttached: boolean;
}) {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>(['Slack', 'Google Workspace']);
  const [workflowGoals, setWorkflowGoals] = useState('');
  const [includeEstimate, setIncludeEstimate] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [submittedLead, setSubmittedLead] = useState<{
    refId: string;
    name: string;
    company: string;
    email: string;
  } | null>(null);

  const toggleTool = (tool: string) => {
    if (selectedTools.includes(tool)) {
      setSelectedTools(selectedTools.filter((t) => t !== tool));
    } else {
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail.trim())) {
      setEmailError('Please enter a valid work email address.');
      return;
    }
    setEmailError('');
    const randomRef = `LW-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedLead({
      refId: randomRef,
      name: fullName.trim(),
      company: companyName.trim() || 'your organization',
      email: workEmail.trim()
    });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 mb-32" id="contact">
      <div className="border border-[#2B2B2B] bg-[#161616] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#292929]">
          {/* Left 5 Columns: Consultation Context & Attached Estimate */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-[#151515]">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7417] mb-4">
                [ Start an Engagement ]
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white leading-tight mb-6">
                Build custom AI around the way your team works
              </h2>
              <p className="text-[13px] leading-relaxed text-[#969696] mb-10">
                Tell us about your operations, existing software tools, and the repetitive workflows slowing your team down. A Lairdwell principal architect will review your stack and prepare a concrete automation roadmap.
              </p>

              {/* 3 Process Commitments */}
              <div className="space-y-6 border-t border-[#262626] pt-8 mb-10">
                <div>
                  <div className="text-xs font-mono text-white mb-1">
                    01. Operations-First Discovery
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    We audit your actual day-to-day workflows before recommending any model or automation architecture.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-white mb-1">
                    02. Zero Rip-and-Replace
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    Every solution plugs directly into your existing CRM, ERP, inbox, and internal databases.
                  </p>
                </div>
                <div>
                  <div className="text-xs font-mono text-white mb-1">
                    03. Clear ROI &amp; Fixed-Scope Delivery
                  </div>
                  <p className="text-xs text-[#8A8A8A] leading-relaxed">
                    Transparent milestone pricing tied directly to hours saved and operational throughput.
                  </p>
                </div>
              </div>
            </div>

            {/* Live Estimator Snapshot Box */}
            <div className="border border-[#333333] bg-[#1A1A1A] p-5 relative">
              <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#FF7417]" />
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2">
                <span>Configured Estimate Snapshot</span>
                {estimateAttached && (
                  <span className="text-[#FF7417]">• LINKED FROM ESTIMATOR</span>
                )}
              </div>
              <div className="flex items-baseline justify-between font-mono tabular-nums mb-1">
                <span className="text-lg font-semibold text-white">
                  ${estimate.lowEstimate.toLocaleString()} – ${estimate.highEstimate.toLocaleString()}
                </span>
                <span className="text-xs text-[#FF7417]">
                  {estimate.monthlyHoursSaved} hrs/mo saved
                </span>
              </div>
              <div className="text-[11px] font-mono text-[#737373]">
                {estimate.selectedModuleIds.length} modules • {estimate.teamScale} staff •{' '}
                {estimate.stackDepth} connected systems
              </div>
            </div>
          </div>

          {/* Right 7 Columns: Validated Lead Capture Form */}
          <div className="lg:col-span-7 p-8 sm:p-12">
            {submittedLead ? (
              <div className="h-full flex flex-col justify-center py-8">
                <div className="border border-[#383838] bg-[#141414] p-8 relative">
                  <span className="absolute top-0 left-0 w-2 h-2 bg-[#FF7417]" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF7417]" />
                  <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF7417] mb-3">
                    [ Consultation Request Confirmed • Ref {submittedLead.refId} ]
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white mb-4">
                    Thank you, {submittedLead.name}.
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                    We have logged the operational workflow brief for{' '}
                    <strong className="text-white">{submittedLead.company}</strong> and sent a confirmation copy to{' '}
                    <span className="text-white font-mono text-xs">{submittedLead.email}</span>. A Lairdwell solutions architect will respond within one business day with your discovery agenda.
                  </p>

                  {includeEstimate && (
                    <div className="border border-[#292929] bg-[#181818] p-4 mb-6 font-mono text-xs space-y-1 tabular-nums">
                      <div className="text-[#737373] uppercase text-[10px]">
                        Attached Estimate Configuration
                      </div>
                      <div className="text-white">
                        Projected Range: ${estimate.lowEstimate.toLocaleString()} – $
                        {estimate.highEstimate.toLocaleString()} (~{estimate.estimatedWeeks} weeks)
                      </div>
                      <div className="text-[#FF7417]">
                        Target ROI: {estimate.monthlyHoursSaved} hrs/mo reclaimed ($
                        {estimate.annualSavings.toLocaleString()}/yr savings)
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setSubmittedLead(null)}
                    className="text-xs font-mono uppercase tracking-wider text-[#D1D1D1] hover:text-white border border-[#383838] hover:border-white px-4 py-2 transition-colors cursor-pointer"
                  >
                    Submit Another Workflow Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#111111] border border-[#2E2E2E] focus:border-[#FF7417] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2"
                    >
                      Work Email *
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={workEmail}
                      onChange={(e) => {
                        setWorkEmail(e.target.value);
                        if (emailError) setEmailError('');
                      }}
                      className="w-full bg-[#111111] border border-[#2E2E2E] focus:border-[#FF7417] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none transition-colors"
                    />
                    {emailError && (
                      <p className="text-xs font-mono text-[#FF7417] mt-1.5">{emailError}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lead-company"
                    className="block text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    required
                    placeholder="Northstar Logistics Group"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#111111] border border-[#2E2E2E] focus:border-[#FF7417] px-4 py-3 text-sm text-white placeholder-[#555] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2.5">
                    Existing Tools &amp; Systems Used
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {COMMON_STACK_TOOLS.map((tool) => {
                      const active = selectedTools.includes(tool);
                      return (
                        <button
                          key={tool}
                          type="button"
                          onClick={() => toggleTool(tool)}
                          className={`py-2 px-2.5 text-[11px] font-mono text-left border transition-colors cursor-pointer truncate ${
                            active
                              ? 'border-[#FF7417] bg-[#221711] text-white'
                              : 'border-[#2B2B2B] bg-[#111111] text-[#8A8A8A] hover:text-white'
                          }`}
                        >
                          {active ? '✓ ' : '+ '}
                          {tool}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="lead-goals"
                    className="block text-[11px] font-mono uppercase tracking-widest text-[#A3A3A3] mb-2"
                  >
                    What repetitive tasks or workflow bottlenecks do you want to eliminate? *
                  </label>
                  <textarea
                    id="lead-goals"
                    rows={4}
                    required
                    placeholder="e.g., Our operations team spends 40+ hours a week manually reconciling PDF vendor invoices against NetSuite and copying client onboarding data between HubSpot and Slack..."
                    value={workflowGoals}
                    onChange={(e) => setWorkflowGoals(e.target.value)}
                    className="w-full bg-[#111111] border border-[#2E2E2E] focus:border-[#FF7417] p-4 text-sm text-white placeholder-[#555] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="inline-flex items-center gap-2.5 text-xs text-[#B0B0B0] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeEstimate}
                      onChange={(e) => setIncludeEstimate(e.target.checked)}
                      className="accent-[#FF7417] w-4 h-4 cursor-pointer"
                    />
                    <span>
                      Attach my configured price estimate (${estimate.lowEstimate.toLocaleString()}{' '}
                      – ${estimate.highEstimate.toLocaleString()})
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF7417] hover:bg-[#e5630d] text-white font-mono text-xs uppercase tracking-widest py-4 px-6 transition-colors cursor-pointer"
                >
                  Request Custom Workflow Audit →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export interface IntegrationSystem {
  id: string;
  name: string;
  displayStyle: 'nexim' | 'graphe' | 'northwave' | 'ferro' | 'halden' | 'echoa' | 'parlo' | 'driftly' | 'saelle' | 'ostrel';
  category: string;
  hoursSavedPerMonth: number;
  errorReductionPct: number;
  summary: string;
  automatedWorkflows: {
    title: string;
    before: string;
    after: string;
    impact: string;
  }[];
}

export const INTEGRATIONS_DATA: IntegrationSystem[] = [
  {
    id: 'crm-sync',
    name: 'SALESFORCE',
    displayStyle: 'nexim',
    category: 'CRM & Revenue Operations',
    hoursSavedPerMonth: 68,
    errorReductionPct: 94,
    summary: 'Automated lead enrichment, call-transcript CRM field extraction, and instant quote generation directly inside Salesforce.',
    automatedWorkflows: [
      {
        title: 'Discovery Call to Structured CRM Opportunity',
        before: 'Account executives spend 25 minutes per call typing notes, updating MEDDIC fields, and drafting follow-up emails.',
        after: 'Lairdwell pipeline ingests meeting transcripts, populates custom Salesforce objects, and stages follow-up tasks automatically.',
        impact: '6.2 hrs saved per rep / week'
      },
      {
        title: 'Multi-System Contract & Billing Handoff',
        before: 'Manual copy-paste from closed-won opportunities into finance spreadsheets and provisioning queues.',
        after: 'Zero-touch webhook pipeline validates contract terms, generates invoices, and triggers onboarding workspace creation.',
        impact: '100% elimination of billing handoff delays'
      }
    ]
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    displayStyle: 'graphe',
    category: 'Marketing & Pipeline Automation',
    hoursSavedPerMonth: 52,
    errorReductionPct: 91,
    summary: 'Custom AI lead routing, inbound intent scoring, and automated multi-channel nurture sequences connected to internal databases.',
    automatedWorkflows: [
      {
        title: 'Intelligent Inbound Triage & Enrichment',
        before: 'Operations staff manually research inbound form submissions before assigning territories.',
        after: 'Automated firmographic lookup, custom fit scoring, and instant Slack brief sent to the assigned owner in under 8 seconds.',
        impact: '4.5x faster lead response time'
      }
    ]
  },
  {
    id: 'netsuite',
    name: 'NETSUITE',
    displayStyle: 'northwave',
    category: 'ERP, Finance & Procurement',
    hoursSavedPerMonth: 84,
    errorReductionPct: 97,
    summary: 'Automated invoice OCR extraction, purchase order 3-way matching, and anomaly detection integrated with NetSuite.',
    automatedWorkflows: [
      {
        title: 'Unstructured Vendor Invoice & PO Reconciliation',
        before: 'AP clerks manually key line items from PDF attachments into ERP tables and chase line-item discrepancies.',
        after: 'Vision-language extraction parses multi-page PDFs, validates against NetSuite POs, and flags only true variances for human approval.',
        impact: '84 hrs reclaimed per month in Finance'
      }
    ]
  },
  {
    id: 'workspace',
    name: 'Workspace',
    displayStyle: 'ferro',
    category: 'Document, Email & Calendar Operations',
    hoursSavedPerMonth: 45,
    errorReductionPct: 89,
    summary: 'Inbox triage agents, automated proposal assembly in Docs/Slides, and intelligent cross-team scheduling workflows.',
    automatedWorkflows: [
      {
        title: 'Shared Inbox Classification & Draft Generation',
        before: 'Support and operations teams manually sort hundreds of daily client emails, attachments, and status inquiries.',
        after: 'Custom AI classifier labels threads, extracts attachments to structured folders, and prepares context-aware draft replies.',
        impact: '71% faster client turnaround'
      }
    ]
  },
  {
    id: 'slack',
    name: 'SLACK',
    displayStyle: 'halden',
    category: 'Internal Operations & Approvals',
    hoursSavedPerMonth: 38,
    errorReductionPct: 92,
    summary: 'Custom Slack approval bots, real-time operational exception alerts, and natural-language internal knowledge assistants.',
    automatedWorkflows: [
      {
        title: 'One-Click Executive Deal & Expense Approvals',
        before: 'Managers log into four separate portals to approve discounts, vendor requests, and project change orders.',
        after: 'Structured Slack approval cards with full context write decisions directly back to underlying ERP and CRM systems.',
        impact: 'Approval cycle cut from 2 days to 14 minutes'
      }
    ]
  },
  {
    id: 'airtable',
    name: 'airtable',
    displayStyle: 'echoa',
    category: 'Operations & Production Tracking',
    hoursSavedPerMonth: 49,
    errorReductionPct: 90,
    summary: 'Bi-directional sync between operational Airtable bases, client portals, and production databases without brittle scripts.',
    automatedWorkflows: [
      {
        title: 'Automated Project Status & Client Reporting',
        before: 'Project managers spend Friday afternoons compiling status updates across bases into client slides.',
        after: 'Automated weekly digest generator compiles live milestone metrics and dispatches tailored client summaries.',
        impact: '12 hrs saved every Friday across PMs'
      }
    ]
  },
  {
    id: 'notion',
    name: 'notion',
    displayStyle: 'parlo',
    category: 'Knowledge Base & SOP Retrieval',
    hoursSavedPerMonth: 42,
    errorReductionPct: 88,
    summary: 'Grounded internal AI search across SOPs, engineering wikis, and historical project post-mortems.',
    automatedWorkflows: [
      {
        title: 'Instant SOP & Policy Answer Engine',
        before: 'New hires and field staff repeatedly ping senior leads for process rules buried in hundreds of Notion pages.',
        after: 'Citation-backed internal assistant answers operational questions with exact links to verified company SOPs.',
        impact: '60% fewer internal interruption pings'
      }
    ]
  },
  {
    id: 'stripe',
    name: 'Stripe',
    displayStyle: 'driftly',
    category: 'Billing, Subscriptions & Usage',
    hoursSavedPerMonth: 36,
    errorReductionPct: 96,
    summary: 'Automated usage metering, dunning recovery workflows, and custom revenue recognition sync.',
    automatedWorkflows: [
      {
        title: 'Custom Usage Metering & Overage Automation',
        before: 'Finance exports product usage CSVs monthly to calculate tiered client overages by hand.',
        after: 'Automated nightly aggregation pushes verified usage quantities directly to Stripe subscription schedules.',
        impact: 'Zero leakage on usage-based billing'
      }
    ]
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    displayStyle: 'saelle',
    category: 'Data Warehouse & Executive Intelligence',
    hoursSavedPerMonth: 60,
    errorReductionPct: 95,
    summary: 'Automated data hygiene pipelines, natural-language SQL reporting for operations leads, and proactive anomaly detection.',
    automatedWorkflows: [
      {
        title: 'Plain-English Operational Margin Queries',
        before: 'Department heads wait days in the data team queue for ad-hoc margin and fulfillment reports.',
        after: 'Governed semantic query layer lets operations leads pull verified KPI breakdowns immediately.',
        impact: 'Self-serve reporting in 15 seconds'
      }
    ]
  },
  {
    id: 'postgres',
    name: 'POSTGRES',
    displayStyle: 'ostrel',
    category: 'Core Databases & Legacy Systems',
    hoursSavedPerMonth: 74,
    errorReductionPct: 98,
    summary: 'Secure middleware connecting on-premise or cloud SQL databases with modern AI workflows and third-party APIs.',
    automatedWorkflows: [
      {
        title: 'Legacy Database to Modern Workflow Bridge',
        before: 'Staff export CSVs from core SQL tables and re-upload them into external SaaS tools twice a day.',
        after: 'Event-driven change-data-capture pipeline synchronizes records in real time with full audit logging.',
        impact: 'Eliminates manual CSV exports permanently'
      }
    ]
  }
];

export interface MethodStep {
  stepNumber: number;
  label: string;
  title: string;
  description: string;
  activeNode: 'sources' | 'channels' | 'outcomes';
  valueBadge: string;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    stepNumber: 1,
    label: 'Step 1',
    title: 'Operational Discovery & Audit',
    description:
      'Lairdwell maps how work actually moves across your company—identifying repetitive tasks, manual data handoffs, and the highest-ROI automation opportunities.',
    activeNode: 'sources',
    valueBadge: 'ROI +3.8x'
  },
  {
    stepNumber: 2,
    label: 'Step 2',
    title: 'Custom AI & Workflow Build',
    description:
      'Rather than forcing you into generic software, we engineer custom AI pipelines, document processors, and automations around your exact business logic.',
    activeNode: 'channels',
    valueBadge: '-78% MANUAL TIME'
  },
  {
    stepNumber: 3,
    label: 'Step 3',
    title: 'Native Stack Integration',
    description:
      'Every solution connects directly into the CRM, ERP, inbox, and database tools your team already uses, complete with training and reliability monitoring.',
    activeNode: 'outcomes',
    valueBadge: '99.4% ACCURACY'
  }
];

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
}

export const DELIVERABLES_DATA: DeliverableItem[] = [
  {
    id: 'audit',
    title: 'Operational workflow audit',
    description:
      'A clear blueprint of your current processes, pinpointing where manual repetition costs hours and where AI delivers immediate payback.'
  },
  {
    id: 'custom-build',
    title: 'Custom AI & automation build',
    description:
      'Production-ready automations, intelligent document workflows, and internal AI assistants tailored to your operational rules.'
  },
  {
    id: 'integration',
    title: 'Existing stack integration',
    description:
      'Direct API, webhook, and database connections into the software your staff already relies on—with zero rip-and-replace disruption.'
  },
  {
    id: 'enablement',
    title: 'Team training & governance',
    description:
      'Complete technical documentation, human-in-the-loop controls, and hands-on team onboarding so improvements stick long term.'
  }
];

export interface EstimatorModule {
  id: string;
  name: string;
  subtitle: string;
  baseCost: number;
  weeksAdded: number;
  efficiencyMultiplier: number;
}

export const ESTIMATOR_MODULES: EstimatorModule[] = [
  {
    id: 'audit-blueprint',
    name: 'Operational Discovery & ROI Blueprint',
    subtitle: 'Department workflow mapping, bottleneck quantification, and technical architecture spec.',
    baseCost: 4500,
    weeksAdded: 2,
    efficiencyMultiplier: 0.15
  },
  {
    id: 'workflow-automation',
    name: 'Cross-System Workflow Automation',
    subtitle: 'Eliminate manual copy-paste and sync data across CRM, ERP, email, and project tools.',
    baseCost: 8500,
    weeksAdded: 3,
    efficiencyMultiplier: 0.42
  },
  {
    id: 'custom-ai-agents',
    name: 'Practical AI Agents & Document Triage',
    subtitle: 'Automated PDF/invoice extraction, inbox routing, and grounded internal SOP assistants.',
    baseCost: 11500,
    weeksAdded: 4,
    efficiencyMultiplier: 0.55
  },
  {
    id: 'legacy-middleware',
    name: 'Custom API & Database Integration',
    subtitle: 'Bespoke middleware connecting proprietary SQL databases or legacy systems to modern tools.',
    baseCost: 7500,
    weeksAdded: 3,
    efficiencyMultiplier: 0.30
  }
];

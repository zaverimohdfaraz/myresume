// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Faraz Zaveri",
  role: "Full Stack Developer",
  location: "Mumbai, India",
  email: "farazzaveri26@gmail.com",
  phone: "+91 89281 73115",
  phoneHref: "tel:+918928173115",
  whatsapp:
    "https://api.whatsapp.com/send?phone=918928173115&text=Hi%20Faraz%2C%20I%20found%20you%20through%20your%20portfolio.",
  linkedin: "https://www.linkedin.com/in/faraz-zaveri-09209738a",
  github: "https://github.com/zaverimohdfaraz",
  resume: "/resume/Faraz_Zaveri_Resume.pdf",
  photo: "/images/faraz-zaveri.jpg",
};

export const intro =
  "CRMs, CMS platforms and business websites, built end to end — from the first screen a client sees to the database behind it. Two years in, with Next.js, Node.js, MongoDB and Laravel doing most of the work.";

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Nexora Solutions Pvt. Ltd.",
    period: "Nov 2025 – Present",
    points: [
      "Build and ship custom CRM products and client websites end to end with Next.js (App Router), TypeScript, Tailwind CSS and MongoDB, deployed on Vercel.",
      "Developed the MK Marine Operations Portal: a shared CRM for clients, vessels, enquiries, quotations, sales, purchases, payments, reminders, reports and automatic activity logging.",
      "Built the Perfectgration immigration CRM, now live, with team pipelines (Social Media, Sales, Case Manager), SLA escalations, case documents and automated email reminders.",
      "Built sr-college.com and nexorasoln.com with Nodemailer-powered enquiry and quote forms.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Nexgeno Technology",
    period: "6 months",
    points: [
      "Developed web applications and CMS platforms with secure authentication and REST API integrations.",
      "Built and extended CRM modules: Leads, Attendance, Reminders and Proposals.",
      "Implemented role-based access control, optimised queries and built responsive UIs with React.js and Next.js.",
      "Deployed and maintained apps on cloud and shared hosting.",
    ],
  },
  {
    role: "RPA Developer",
    company: "Median IT Solutions",
    period: "6 months",
    points: [
      "Designed, developed and deployed RPA bots to automate repetitive, rule-based processes such as data entry, report generation and file handling.",
      "Integrated bots with third-party APIs, web portals and MySQL/MongoDB databases.",
      "Contributed to backend services for beHer, an ML-powered Android app.",
      "Monitored, maintained and fixed automations for production stability.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Imperial Digital Solutions",
    period: "3 months",
    points: [
      "Collected, cleaned and organised large datasets for accuracy and consistency.",
      "Analysed data to find trends supporting business decisions.",
      "Built reports and dashboards for stakeholders.",
    ],
  },
];

export const bio = [
  "I'm a full stack developer in Mumbai. For the last two years I've built business software for clients: CRMs with roles and workflows, CMS platforms, online stores and company websites.",
  "I own projects end to end, from talking to the client and designing the screens to building the database, APIs and deployment. Most of my work is in Next.js, Node.js, MongoDB and Laravel.",
  "Before full stack work I spent time on RPA bots and data analysis, which is why I still pay attention to how a business actually moves its data and its people.",
];

export const services = [
  { title: "Custom CRM systems", text: "Pipelines, roles and permissions, reminders, documents, reports and activity logs, shaped around how a team works." },
  { title: "Websites that bring enquiries", text: "Fast, SEO-friendly sites in Next.js with enquiry and quote forms that reach your inbox." },
  { title: "CMS and admin dashboards", text: "Role-based dashboards so your team can manage content, products and orders without calling a developer." },
  { title: "Process automation", text: "RPA bots and API integrations that take repetitive data entry, reports and file handling off people's desks." },
];

export const education = [
  { title: "MCA", place: "University of Mumbai" },
  { title: "B.Sc. IT", place: "University of Mumbai" },
  { title: "HSC (Science)", place: "Guru Nanak Khalsa College, Mumbai" },
  { title: "SSC", place: "Holy Cross High School" },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Laravel (PHP)", "CodeIgniter", "Django (Python)", "REST APIs", "RBAC", "Nodemailer"] },
  { group: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  { group: "Deploy & tools", items: ["Git", "GitHub", "Docker", "AWS", "Azure", "Vercel", "Railway", "Render", "Cloudflare"] },
  { group: "Automation & data", items: ["RPA", "Workflow automation", "Data cleaning", "Reporting", "Dashboards"] },
];

// Projects are grouped by complexity, not by who they were for.
export const tiers = [
  { id: "systems", title: "CRM and business systems", text: "Multi-user systems with roles, workflows, pipelines and reporting." },
  { id: "apps", title: "Web applications and e-commerce", text: "Dashboards, CMS platforms, online stores and apps with real users and data." },
  { id: "sites", title: "Websites", text: "Company and institution websites with enquiry forms, SEO and responsive layouts." },
] as const;
export type Tier = (typeof tiers)[number]["id"];

export type Project = {
  slug: string;
  name: string;
  kind: string; // e.g. "CRM", "Website"
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  client: string; // who the project was delivered for
  tier: Tier;
  url?: string; // without protocol
  image?: string;
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "mk-marine-operations-crm",
    name: "MK Marine Operations CRM",
    kind: "CRM",
    summary: "Shared operations portal for a marine services company, used by partners in different cities.",
    description:
      "A private portal for MK Marine Services India LLP, paired with a public company website. Two partners working from different cities run enquiries, quotations and payments in one place, and every action is logged so each can see what the other did.",
    highlights: [
      "Step-by-step enquiry flow: client → vessel → requirement → marine product selection → summary",
      "Quotations, sales, purchases and client/supplier payments with cost vs selling price",
      "Important Notes between users with priority and read/unread state",
      "Reminders that move from Scheduled to Upcoming to Due, surfaced on the dashboard",
      "Reports with monthly, quarterly, 6-month, yearly and custom periods",
      "Automatic activity timeline across clients, vessels and enquiries",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    role: "Full Stack Developer",
    client: "MK Marine Services India LLP",
    tier: "systems",
    featured: true,
  },
  {
    slug: "shri-ram-college-website",
    name: "Shri Ram College of Commerce",
    kind: "Website",
    summary: "Full website for a Mumbai commerce college: courses, admissions, faculty and enquiries.",
    description:
      "A complete website for Jana Seva Sangh's Shri Ram College of Commerce in Bhandup, Mumbai. Built to give students and parents every detail about the college, with large readable type, the college's red brand colour and solid mobile layouts.",
    highlights: [
      "Courses, admissions, faculty and campus information in one place",
      "Enquiry forms delivered to the college by email through Nodemailer — no database needed",
      "Responsive layouts tuned for phones, where most students browse",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer", "Vercel"],
    role: "Full Stack Developer",
    client: "Shri Ram College of Commerce, Mumbai",
    tier: "sites",
    url: "sr-college.com",
    featured: true,
  },
  {
    slug: "perfectgration-immigration-crm",
    name: "Perfectgration Immigration CRM",
    kind: "CRM",
    summary: "Visa and immigration CRM that carries a lead from first message to embassy outcome.",
    description:
      "Built from scratch for a Saudi-based visa and immigration agency. Each lead moves through Social Media, Sales and Case Manager teams with clear handoffs, and the CRM flags anything that sits too long at a stage.",
    highlights: [
      "Lead → first call → assessment → appointment → deal → documents → submission → outcome",
      "Escalations, e.g. no call logged within 24 hours turns the lead red",
      "Departments (Study, Work, Visit, Skilled, EB2-NIW) visible on every team member",
      "Case documents stored on Cloudflare, email reminders through EmailJS",
      "Team notepad where each note is addressed to chosen departments and people",
    ],
    stack: ["Next.js", "MongoDB", "Cloudflare", "EmailJS", "Vercel"],
    role: "Full Stack Developer",
    client: "Perfectgration (visa and immigration agency)",
    tier: "systems",
    featured: true,
  },
  {
    slug: "nexora-solutions-website",
    name: "Nexora Solutions",
    kind: "Website",
    summary: "Agency website for a software company, with contact and quote forms.",
    description:
      "The company website for Nexora Solutions, presenting its services in enterprise applications, AI, cloud, data and its CRM product. Light and fast, with motion used sparingly.",
    highlights: [
      "Contact and quote forms backed by MongoDB and Nodemailer",
      "Framer Motion animations and a custom node-network logo",
      "SEO-focused page structure",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "Nodemailer"],
    role: "Full Stack Developer",
    client: "Nexora Solutions",
    tier: "sites",
    url: "nexorasoln.com",
    featured: true,
  },
  {
    slug: "modular-crm-system",
    name: "Modular CRM System",
    kind: "CRM",
    summary: "Reusable CRM architecture with filtering, reporting dashboards and granular permissions.",
    description:
      "A CRM built as reusable modules so it can be fitted to different clients: Leads, Attendance, Reminders and Proposals, all behind role-based access control.",
    highlights: ["Advanced filtering and reporting dashboards", "Granular, role-based permissions", "Modules reused across client deployments"],
    stack: ["React.js", "Next.js", "Node.js", "MongoDB"],
    role: "Full Stack Developer Intern",
    client: "Nexgeno Technology",
    tier: "systems",
  },
  {
    slug: "nexgeno-cms",
    name: "Nexgeno CMS Dashboard",
    kind: "CMS",
    summary: "Role-based MERN CMS with secure authentication and content workflows.",
    description:
      "A role-based content management system for a web services company, with API-driven architecture. Also built the UI of the site's sub-pages and many interface changes.",
    highlights: ["Secure authentication and roles", "Content workflows", "API-driven architecture"],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js"],
    role: "Full Stack Developer Intern",
    client: "Nexgeno Technology",
    tier: "apps",
    featured: true,
    url: "nexgeno.in",
    image: "/images/projects/nexgeno.jpg",
  },
  {
    slug: "stylia-ecommerce",
    name: "Stylia",
    kind: "E-commerce",
    summary: "CMS-integrated store with products, cart, checkout, orders and admin dashboards.",
    description: "An online store with its own CMS, so the client manages products and orders from an admin dashboard.",
    highlights: ["Product management", "Cart, checkout and orders", "Admin dashboards"],
    stack: ["Next.js", "Node.js", "MongoDB"],
    role: "Full Stack Developer",
    client: "Stylia",
    tier: "apps",
    url: "stylia.in",
  },
  {
    slug: "lijjat-papad",
    name: "Lijjat Papad",
    kind: "E-commerce",
    summary: "E-commerce application for one of India's best-known food brands.",
    description: "An e-commerce application built on Laravel 9, covering the product catalogue and online ordering.",
    highlights: ["Product catalogue and ordering", "Admin-side management"],
    stack: ["Laravel 9", "PHP", "MySQL"],
    role: "Full Stack Developer",
    client: "Lijjat Papad",
    tier: "apps",
    url: "lijjat.com",
    image: "/images/projects/lijjat.jpg",
  },
  {
    slug: "vallum",
    name: "Vallum",
    kind: "CMS",
    summary: "CMS-driven website with a React frontend and Node.js backend.",
    description: "A CMS application where the client edits site content through a dashboard backed by a Node.js API.",
    highlights: ["React frontend", "Node.js content API", "Client-managed content"],
    stack: ["React.js", "Node.js"],
    role: "Full Stack Developer",
    client: "Vallum",
    tier: "sites",
    url: "vallum.in",
    image: "/images/projects/vallum.jpg",
  },
  {
    slug: "attari-classes-lms",
    name: "Attari Classes LMS",
    kind: "LMS",
    summary: "Learning management system for a coaching institute.",
    description: "A customised learning management system for courses, students and enrolments, built on CodeIgniter.",
    highlights: ["Course and student management", "Customised enrolment flows"],
    stack: ["CodeIgniter 3", "PHP", "MySQL"],
    role: "Full Stack Developer",
    client: "Attari Classes",
    tier: "systems",
    url: "lms.attariclasses.in",
    image: "/images/projects/attari-classes.jpg",
  },
  {
    slug: "motiwala-and-sons",
    name: "Motiwala & Sons",
    kind: "Custom app",
    summary: "Customised business application built on Laravel.",
    description: "A custom web application built around the client's business process on Laravel 9.",
    highlights: ["Custom modules for the client's workflow"],
    stack: ["Laravel 9", "PHP", "MySQL"],
    role: "Full Stack Developer",
    client: "Motiwala & Sons",
    tier: "apps",
    url: "escrowv.com",
    image: "/images/projects/motiwala.jpg",
  },
  {
    slug: "website-designing-mumbai",
    name: "Website Designing Mumbai",
    kind: "Website",
    summary: "Service company website with a custom contact-form API.",
    description: "Complete UI development for a web design agency's site, plus a custom API to handle contact form submissions.",
    highlights: ["Full UI build", "Custom contact form API"],
    stack: ["PHP"],
    role: "Full Stack Developer",
    client: "Website Designing Mumbai",
    tier: "sites",
    url: "websitedesigningmumbai.in",
    image: "/images/projects/websitedesigning.jpg",
  },
  {
    slug: "nova",
    name: "Nova",
    kind: "CMS",
    summary: "Next.js site with its own CMS backend.",
    description: "Complete UI development in Next.js and a CMS backend for managing the content.",
    highlights: ["Next.js frontend", "CMS backend"],
    stack: ["Next.js", "Node.js"],
    role: "Full Stack Developer",
    client: "Nova",
    tier: "sites",
    url: "novaa-pi.vercel.app",
    image: "/images/projects/nova.jpg",
  },
  {
    slug: "beher-android-app",
    name: "beHer",
    kind: "Android app",
    summary: "Machine-learning skincare recommendations with Google Shopping integration.",
    description: "An Android app that recommends skincare products using machine learning and pulls product listings through Google Shopping APIs. Contributed to its backend services.",
    highlights: ["ML-based recommendations", "Google Shopping API integration"],
    stack: ["Node.js", "REST APIs", "Machine learning"],
    role: "Backend contributor",
    client: "beHer",
    tier: "apps",
  },
];

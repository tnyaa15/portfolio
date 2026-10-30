// Portfolio Default Configuration and Data
export const initialPortfolioData = {
  personal: {
    name: "Alex Morgan",
    enrollmentNo: "2024CS0198",
    title: "Full-Stack Developer & UI/UX Specialist",
    tagline: "Crafting scalable web applications and elegant digital experiences with modern technologies & AI-assisted workflows.",
    bio: "Passionate Computer Science student and software engineer with a strong foundation in modern web development, algorithms, and human-centered design. Experienced in building responsive, accessible, and high-performance applications using React, Tailwind CSS, and Node.js. Enthusiastic about integrating AI tools to optimize development workflows and solve real-world problems.",
    email: "alex.morgan.dev@example.com",
    phone: "+1 (555) 019-2834",
    location: "San Francisco, CA / Hybrid",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    statusBadge: "Available for Internships & Full-time Roles",
    hostedUrl: "https://alexmorgan-portfolio.vercel.app",
    githubRepoUrl: "https://github.com/alexmorgan/portfolio-master"
  },
  socialLinks: {
    linkedin: "https://linkedin.com/in/alexmorgan-dev",
    github: "https://github.com/alexmorgan",
    leetcode: "https://leetcode.com/alex_code_forge",
    behance: "https://behance.net/alexmorgandesign",
    twitter: "https://x.com/alexmorgan_dev"
  },
  stats: [
    { label: "Projects Shipped", value: "15+" },
    { label: "LeetCode Solved", value: "350+" },
    { label: "Code Commits", value: "1,200+" },
    { label: "Client / Hackathon Rating", value: "4.9/5" }
  ],
  techCategories: [
    {
      category: "Frontend Development",
      description: "Building responsive, accessible, and lightning-fast user interfaces",
      skills: [
        { name: "React.js", level: 92, badge: "Advanced", icon: "react" },
        { name: "Tailwind CSS", level: 95, badge: "Mastery", icon: "tailwind" },
        { name: "JavaScript (ES6+)", level: 90, badge: "Advanced", icon: "js" },
        { name: "HTML5 / Semantic Web", level: 95, badge: "Mastery", icon: "html" },
        { name: "CSS3 / Animations", level: 90, badge: "Advanced", icon: "css" },
        { name: "TypeScript", level: 82, badge: "Intermediate", icon: "ts" }
      ]
    },
    {
      category: "Backend & Databases",
      description: "Robust server logic, resilient APIs, and reliable data storage",
      skills: [
        { name: "Node.js", level: 85, badge: "Advanced", icon: "node" },
        { name: "Express.js", level: 86, badge: "Advanced", icon: "server" },
        { name: "RESTful APIs", level: 90, badge: "Advanced", icon: "api" },
        { name: "MongoDB", level: 80, badge: "Intermediate", icon: "database" },
        { name: "PostgreSQL", level: 78, badge: "Intermediate", icon: "database" }
      ]
    },
    {
      category: "DevOps & Deployment",
      description: "CI/CD pipelines, version control, and cloud hosting ecosystems",
      skills: [
        { name: "Vercel", level: 94, badge: "Production", icon: "cloud" },
        { name: "GitHub Pages", level: 92, badge: "Production", icon: "github" },
        { name: "Git & GitHub", level: 90, badge: "Advanced", icon: "git" },
        { name: "Vite / Webpack", level: 85, badge: "Advanced", icon: "box" }
      ]
    },
    {
      category: "AI-Augmented Engineering",
      description: "Harnessing cutting-edge AI models for design, coding & review",
      skills: [
        { name: "ChatGPT (OpenAI)", level: 96, badge: "Power User", icon: "bot" },
        { name: "GitHub Copilot", level: 92, badge: "Daily Driver", icon: "copilot" },
        { name: "v0.dev (Vercel)", level: 88, badge: "Prototyping", icon: "sparkles" },
        { name: "Google Antigravity", level: 94, badge: "Agentic Dev", icon: "cpu" }
      ]
    }
  ],
  aiToolsBreakdown: [
    {
      tool: "ChatGPT (GPT-4o)",
      icon: "message-square",
      category: "Architecture & Planning",
      badge: "Ideation & Refactoring",
      description: "Used for system design planning, database schema generation, test case brainstorming, and drafting concise developer documentation.",
      benefits: [
        "Synthesized architectural patterns and component hierarchies before coding",
        "Assisted in crafting accessible color palettes and UX copy",
        "Refactored complex state machines and edge-case validation routines"
      ],
      efficiencyGain: "+45% faster planning"
    },
    {
      tool: "GitHub Copilot",
      icon: "terminal",
      category: "In-Editor Code Generation",
      badge: "Real-Time Autocomplete",
      description: "Assisted inside VS Code with real-time autocompletions for repetitive utility functions, Tailwind class combinations, and TypeScript interfaces.",
      benefits: [
        "Accelerated writing of boilerplate API fetch wrappers and hooks",
        "Suggested edge-case checks for responsive breakpoints and touch events",
        "Reduced syntax lookups and context-switching overhead"
      ],
      efficiencyGain: "+35% coding speed"
    },
    {
      tool: "v0.dev by Vercel",
      icon: "sparkles",
      category: "Generative UI Prototyping",
      badge: "Design-to-Code",
      description: "Leveraged for rapid visual experimentation, wireframe concepts, and exploring accessible Tailwind UI components before fine-tuning.",
      benefits: [
        "Rapidly scaffolded UI component layouts and responsive grids",
        "Explored modern glassmorphic and high-contrast dark mode card treatments",
        "Streamlined micro-interaction layouts and typography hierarchy"
      ],
      efficiencyGain: "+50% UI ideation"
    },
    {
      tool: "Google Antigravity",
      icon: "cpu",
      category: "Agentic Full-Stack Development",
      badge: "Autonomous Pair Programmer",
      description: "Employed as an autonomous agentic pair programmer to scaffold project configurations, verify deployment readiness, and generate standardized academic submission reports.",
      benefits: [
        "Automated workspace structuring and environment configuration",
        "Generated clean semantic markup adhering strictly to academic rubrics",
        "Prepared automated PDF export and interactive live customizer tools"
      ],
      efficiencyGain: "+60% end-to-end delivery"
    }
  ],
  projects: [
    {
      id: "ai-nexus",
      title: "AI Nexus — Prompt-to-Component Workspace",
      category: "Full-Stack",
      description: "An interactive web app that transforms natural language prompts into responsive Tailwind React components with live preview and code export.",
      longDescription: "AI Nexus empowers developers and designers to rapidly prototype UI concepts. Features syntax highlighting, multi-device viewport toggle, copy-to-clipboard, and history tracking with local storage persistence.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Node.js", "OpenAI API", "Vercel"],
      liveUrl: "https://ai-nexus-demo.vercel.app",
      githubUrl: "https://github.com/alexmorgan/ai-nexus-workspace",
      featured: true,
      metrics: "500+ Components Generated • 4.8★ Rating"
    },
    {
      id: "crypto-pulse",
      title: "CryptoPulse — Real-Time Financial Dashboard",
      category: "Frontend",
      description: "Modern crypto portfolio and market analytics platform featuring interactive candlestick charts, live WebSocket price feeds, and custom watchlists.",
      longDescription: "Built with high-performance React state management and Tailwind CSS. Connects to CoinGecko and Binance APIs to stream live price updates, 24h volume analytics, and profit/loss simulations.",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Chart.js", "WebSockets", "GitHub Pages"],
      liveUrl: "https://alexmorgan.github.io/crypto-pulse",
      githubUrl: "https://github.com/alexmorgan/crypto-pulse-dashboard",
      featured: true,
      metrics: "Live WebSocket Feeds • Sub-100ms Latency"
    },
    {
      id: "dev-community",
      title: "DevSprint — Peer Learning & Problem Hub",
      category: "Full-Stack",
      description: "A collaborative platform for engineering students to track LeetCode problems, share clean solutions, and conduct peer mock interviews.",
      longDescription: "Features markdown code solution rendering, tagging by data structure & algorithm topics, difficulty heatmaps, and discussion threads with upvoting.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Vercel"],
      liveUrl: "https://devsprint-hub.vercel.app",
      githubUrl: "https://github.com/alexmorgan/devsprint-community",
      featured: true,
      metrics: "1,200+ Active Users • 450+ Solutions Shared"
    },
    {
      id: "zenith-ui",
      title: "Zenith UI — Glassmorphism Design System",
      category: "UI/UX",
      description: "An open-source design kit and UI library featuring 40+ accessible React components styled with modern translucent glassmorphic Tailwind themes.",
      longDescription: "Designed in Figma and implemented in React + Tailwind. Includes dark/light mode toggle, ARIA accessibility compliance, and full keyboard navigation support.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Figma", "Storybook", "Vercel"],
      liveUrl: "https://zenith-ui.vercel.app",
      githubUrl: "https://github.com/alexmorgan/zenith-ui-kit",
      featured: false,
      metrics: "40+ Components • 100% ARIA Compliant"
    }
  ],
  experience: [
    {
      period: "2024 — Present",
      role: "Frontend Engineering Intern",
      organization: "HyperScale Tech Labs",
      location: "San Francisco, CA (Remote)",
      description: "Collaborated with senior engineers to rebuild client-facing dashboards using React and Tailwind CSS, improving Lighthouse performance score from 68 to 96.",
      achievements: [
        "Reduced initial bundle size by 38% through route-based code splitting and lazy loading",
        "Integrated GitHub Copilot into the team's PR review workflow, cutting review cycle times by 20%"
      ]
    },
    {
      period: "2023 — 2024",
      role: "Undergraduate Teaching Assistant — Web Technologies",
      organization: "Department of Computer Science & Engineering",
      location: "Campus",
      description: "Mentored over 80+ sophomore students in HTML5, CSS3, JavaScript ES6+, and responsive design principles. Conducted weekly hands-on coding labs.",
      achievements: [
        "Authored 10 interactive assignment boilerplate repositories on GitHub",
        "Awarded 'Best TA of the Semester' by student vote"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Institute of Technology & Engineering",
      duration: "2023 — 2027 (Expected)",
      grade: "GPA: 3.88 / 4.00 (Dean's Honor List)",
      courses: [
        "Data Structures & Algorithms",
        "Web Application Architecture",
        "Database Management Systems",
        "Human-Computer Interaction",
        "Artificial Intelligence & Machine Learning"
      ]
    }
  ]
};

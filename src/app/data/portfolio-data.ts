export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Distributed Systems' | 'Backend APIs' | 'Real-Time / WebSockets' | 'AI & Search' | 'Offline-First';
  featured: boolean;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  videoDemoUrl?: string;
  apiDocsUrl?: string;
  highlights: string[];
  architectureDiagram?: string;
  systemFlow?: {
    nodes: string[];
    description: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  durationMonths: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon?: string; level?: 'Expert' | 'Advanced' | 'Proficient'; tag?: string }[];
}

export interface DSAStats {
  totalSolved: number;
  leetcodeProfile: string;
  topics: { name: string; count: number; percentage: number; icon: string }[];
}

export interface ConceptItem {
  title: string;
  category: string;
  description: string;
  keyPoints: string[];
  icon: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'milestone';
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Mayank Kumar',
    role: 'Python Backend Developer',
    secondaryRoles: ['Full-Stack Engineer', 'Systems Engineer', 'API Architect'],
    tagline: 'Specialized in building high-concurrency REST APIs, WebSocket architectures, distributed system simulations & AI-powered backend workflows.',
    location: 'India 🇮🇳',
    email: 'mkkotlin@gmail.com',
    phoneEncoded: 'KzkxIDg3NTc4MzYwMzY=',
    googleClientId: '53525565630-fh80agsign7gnvcd3ueq9lecmnrlkvmd.apps.googleusercontent.com',
    github: 'https://github.com/mkkotlin',
    linkedin: 'https://linkedin.com/in/mayank20py',
    leetcode: 'https://leetcode.com/u/44_mayank/',
    resumePdfUrl: 'Mayank_Kumar_Resume.pdf',
    stats: {
      yearsExperience: '2 Years 6 Months',
      productionImpact: '50-70m → 30-45m Job Speedup',
      leetcodeSolved: '200+',
      cgpa: '8.39 / 10'
    }
  },

  aboutSummary: `Python Backend Engineer with 2 Years & 6 Months of production experience at Infosys (Oct 2022 – Apr 2025). Demonstrated expertise in optimizing large-scale enterprise database workflows, designing resilient REST & WebSocket microservices using FastAPI & Django, building offline-first PWA tools with Angular & IndexedDB, and implementing AI semantic search engines. Proven track record of tuning complex SQL queries, reducing production execution times by over 30%, and driving high-throughput system architectures.`,

  education: {
    degree: 'B. Tech in Computer Science and Engineering',
    institution: 'Computer Science & Engineering',
    duration: '2018 - 2022',
    cgpa: '8.39 / 10',
    highlights: [
      'Core focus on Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.',
      'Graduated with First Class Distinction (CGPA 8.39 / 10).'
    ]
  },

  experience: [
    {
      company: 'Infosys',
      role: 'System Engineer',
      location: 'Bhubaneswar, India',
      period: 'Oct 2022 – Apr 2025',
      durationMonths: '2 Years 6 Months',
      summary: 'Engineered backend workflow validations, monitored critical production jobs, and optimized enterprise database pipelines in a large-scale enterprise environment.',
      achievements: [
        'Optimized SQL queries by eliminating redundant data retrieval and refining filtering logic, reducing production validation job execution time from 50–70 minutes to 30–45 minutes (~35-40% speed boost) while preserving 100% business functionality.',
        'Investigated critical production incidents by analyzing application logs, SQL query execution plans, and enterprise workflows to identify root causes and deliver timely resolutions.',
        'Developed and enhanced automated SQL scripts for enterprise data validation, troubleshooting, operational reporting, and production support.',
        'Performed end-to-end analysis of enterprise data flows across interconnected business modules to diagnose failures and minimize production downtime.',
        'Collaborated with cross-functional global teams to validate bug fixes, optimize system pipelines, and maintain zero-downtime SLA compliance.',
        'Documented technical findings, RCA reports, and troubleshooting runbooks to improve knowledge sharing across engineering teams.'
      ],
      technologies: ['Python', 'SQL', 'PostgreSQL', 'Oracle', 'Linux', 'CI/CD', 'Enterprise Architecture', 'Log Analysis']
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'nodelabcanvas',
      title: 'NodeLabCanvas',
      subtitle: 'Interactive Distributed System Design Playground & Engine',
      category: 'Distributed Systems',
      featured: true,
      description: 'An interactive drag-and-drop distributed system playground enabling developers to model microservice architectures (Clients, API Servers, Databases, Message Queues, Workers, Load Balancers) with real-time WebSocket state streaming.',
      techStack: ['Django', 'Django Channels', 'Angular', 'RxJS', 'Tailwind CSS', 'WebSockets', 'SVG'],
      githubUrl: 'https://github.com/mkkotlin/NodeLabCanvas',
      videoDemoUrl: 'https://www.youtube.com/watch?v=r56pB8pnaAQ',
      highlights: [
        'Implemented dynamic SVG-based wire connections and drag-and-drop node positioning with automatic backend persistence using Django services.',
        'Engineered a Python simulation engine using Django Channels and WebSockets to stream real-time request routing, load balancing, and queue updates.',
        'Developed interactive request-flow visualizers with animated SVG rendering optimized using Angular change detection & RxJS event operators.',
        'Currently expanding routing algorithms, worker pool scheduling, and rate-limiting middleware simulation.'
      ],
      systemFlow: {
        nodes: ['Client Browser', 'Load Balancer (Round Robin)', 'Django API Gateways', 'Redis / RabbitMQ Queue', 'Async Worker Nodes', 'PostgreSQL Cluster'],
        description: 'Simulates request dispatching, buffer queues, worker processing latency, and database query roundtrips.'
      }
    },
    {
      id: 'support-ticket-system',
      title: 'Support Ticket System',
      subtitle: 'Multi-Role Role-Based API & Management Hub',
      category: 'Backend APIs',
      featured: true,
      description: 'A robust full-stack support ticket management platform with FastAPI REST endpoints, backend-enforced RBAC (CUSTOMER, AGENT, ADMIN), JWT security, and interactive React frontend.',
      techStack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Alembic', 'JWT', 'React', 'Axios'],
      githubUrl: 'https://github.com/mkkotlin/Ticketing-React',
      liveDemoUrl: 'https://rticketflow.vercel.app/',
      videoDemoUrl: 'https://www.youtube.com/watch?v=RStdoM8-1E8',
      apiDocsUrl: 'https://backend-4617ffc5.fastapicloud.dev/docs',
      highlights: [
        'Built secure FastAPI REST APIs supporting granular RBAC (Customer, Agent, Admin) with password hashing (Bcrypt) and protected route middleware.',
        'Implemented ticket lifecycle management (OPEN → IN_PROGRESS → RESOLVED → CLOSED) with pagination, categories, comments, and agent assignments.',
        'Managed version-controlled schema evolution using Alembic migrations with PostgreSQL ORM via SQLAlchemy.',
        'Deployed production FastAPI backend on Cloud infrastructure and React client on Vercel.'
      ]
    },
    {
      id: 'realtime-kanban',
      title: 'Real-Time Collaboration Task Board',
      subtitle: 'WebSocket-Powered Distributed Kanban Platform',
      category: 'Real-Time / WebSockets',
      featured: true,
      description: 'Multi-user collaborative Kanban application supporting instantaneous task synchronization across multiple connected clients with drag-and-drop support.',
      techStack: ['Django', 'Django REST Framework', 'Django Channels', 'Angular', 'PostgreSQL', 'SQLite', 'WebSockets', 'Angular CDK'],
      githubUrl: 'https://github.com/mkkotlin/AsynColl',
      videoDemoUrl: 'https://www.youtube.com/watch?v=HVXrbnWtyBs',
      highlights: [
        'Designed real-time WebSocket sync using Django Channels to broadcast task moves, card edits, and column reorders instantaneously.',
        'Implemented drag-and-drop card interaction using Angular CDK with multi-column constraint handling.',
        'Solved complex card ordering challenges using bulk update strategies to guarantee atomic database consistency.',
        'Optimized ORM queries using select_related and prefetch_related, eliminating N+1 queries and speeding up board loading.'
      ]
    },
    {
      id: 'connectnest-ai',
      title: 'ConnectNest | AI Social Network',
      subtitle: 'AI-Powered Semantic Search & Real-Time Social Platform',
      category: 'AI & Search',
      featured: true,
      description: 'Full-stack social networking platform equipped with Sentence-Transformer AI model for vector similarity content discovery and real-time activity feeds.',
      techStack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Sentence-Transformers', 'Django Channels', 'Daphne', 'WebSockets', 'JavaScript'],
      githubUrl: 'https://github.com/mkkotlin/ConnectNest',
      videoDemoUrl: 'https://www.youtube.com/watch?v=oDJvo0yghaE',
      highlights: [
        'Built an AI semantic search engine leveraging Sentence-Transformers (all-MiniLM-L6-v2) and cosine similarity for context-aware discovery.',
        'Optimized search latency by precomputing and persisting 384-dimensional vector embeddings in PostgreSQL, bypassing runtime inference overhead.',
        'Implemented lazy loading for deep learning model initialization to ensure ultra-fast application cold-start times.',
        'Delivered real-time notifications, dynamic timelines, and friend request updates via WebSockets & Daphne.'
      ]
    },
    {
      id: 'offline-first-notes',
      title: 'Offline-First Notes Engine',
      subtitle: 'IndexedDB Offline Resilience & Conflict-Aware Sync',
      category: 'Offline-First',
      featured: false,
      description: 'An offline-first note-taking engine using browser IndexedDB for local zero-latency edits with automated background sync upon network restoration.',
      techStack: ['Django', 'Django REST Framework', 'Angular', 'Dexie.js', 'IndexedDB', 'RxJS'],
      githubUrl: 'https://github.com/mkkotlin/offline-first-notes-app',
      videoDemoUrl: 'https://www.youtube.com/watch?v=mh2hXi35kiY',
      highlights: [
        'Utilized Dexie.js over IndexedDB to enable persistent client-side storage, allowing instant offline read/write operations.',
        'Engineered conflict-aware background synchronization algorithms that trigger seamlessly when network connectivity is re-established.',
        'Designed visual online/offline network status indicators and pending synchronization queue trackers.'
      ]
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', tag: 'Primary' },
        { name: 'TypeScript', tag: 'Primary' },
        { name: 'SQL', tag: 'Primary' },
        { name: 'Java', tag: 'Proficient' },
        { name: 'HTML5 / CSS3', tag: 'Proficient' }
      ]
    },
    {
      title: 'Backend Frameworks',
      skills: [
        { name: 'FastAPI', tag: 'Core' },
        { name: 'Django', tag: 'Core' },
        { name: 'Django REST Framework (DRF)', tag: 'Core' },
        { name: 'SQLAlchemy', tag: 'ORM' },
        { name: 'Django Channels', tag: 'WebSockets' },
        { name: 'Spring Boot', tag: 'Proficient' }
      ]
    },
    {
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', tag: 'Core DB' },
        { name: 'SQLite', tag: 'Embedded DB' },
        { name: 'Oracle SQL', tag: 'Enterprise DB' },
        { name: 'IndexedDB / Dexie.js', tag: 'Client DB' },
        { name: 'Alembic', tag: 'Migrations' }
      ]
    },
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular', tag: 'Core' },
        { name: 'RxJS', tag: 'Reactive' },
        { name: 'React', tag: 'Proficient' },
        { name: 'Angular CDK', tag: 'UI Drag&Drop' },
        { name: 'Tailwind CSS / Vanilla CSS', tag: 'Styling' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'Linux CLI & Shell', tag: 'OS' },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'Docker', tag: 'Containerization' },
        { name: 'Vercel / Cloud Deployments', tag: 'Hosting' },
        { name: 'CI/CD Pipelines', tag: 'Automation' }
      ]
    },
    {
      title: 'Architecture & Concepts',
      skills: [
        { name: 'REST API Design', tag: 'Architecture' },
        { name: 'WebSockets & Real-Time', tag: 'Protocol' },
        { name: 'JWT Auth & RBAC', tag: 'Security' },
        { name: 'Object-Oriented Programming (OOP)', tag: 'Fundamentals' },
        { name: 'Data Structures & Algorithms', tag: 'Core DSA' },
        { name: 'SQL Query Optimization', tag: 'Performance' },
        { name: 'Distributed Systems', tag: 'Design' },
        { name: 'Offline-First Sync', tag: 'Pattern' }
      ]
    }
  ] as SkillCategory[],

  dsaStats: {
    totalSolved: 200,
    leetcodeProfile: 'https://leetcode.com/u/44_mayank/',
    topics: [
      { name: 'Arrays & Hashing', count: 42, percentage: 85, icon: 'array' },
      { name: 'Two Pointers & Sliding Window', count: 28, percentage: 80, icon: 'pointers' },
      { name: 'Trees & Binary Search Trees', count: 30, percentage: 75, icon: 'tree' },
      { name: 'Dynamic Programming', count: 24, percentage: 70, icon: 'dp' },
      { name: 'Stack, Queue & Heap', count: 26, percentage: 78, icon: 'stack' },
      { name: 'Graphs & BFS/DFS', count: 22, percentage: 72, icon: 'graph' },
      { name: 'SQL & Database Queries', count: 35, percentage: 90, icon: 'sql' }
    ]
  } as DSAStats,

  concepts: [
    {
      title: 'OOP & SOLID Principles',
      category: 'Core Fundamentals',
      description: 'Designing modular, extensible software systems using Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.',
      keyPoints: ['Loose Coupling & High Cohesion', 'Encapsulation & Abstraction', 'Dependency Injection'],
      icon: 'layers'
    },
    {
      title: 'REST API & OpenAPI Design',
      category: 'Backend Architecture',
      description: 'Designing clean, predictable, stateless HTTP APIs with proper status codes, payload pagination, rate limiting, and automated Swagger/OpenAPI documentation.',
      keyPoints: ['Resource Orientated Endpoints', 'Standardized JSON Errors', 'FastAPI Pydantic & DRF Serializers'],
      icon: 'api'
    },
    {
      title: 'SQL Query Optimization',
      category: 'Database Engineering',
      description: 'Tuning complex queries, eliminating redundant joins, utilizing proper indexes, analyzing execution plans (EXPLAIN ANALYZE), and preventing ORM N+1 queries.',
      keyPoints: ['Select/Prefetch Related in ORM', 'Index Optimization', '35-40% Execution Time Reduction at Infosys'],
      icon: 'database'
    },
    {
      title: 'WebSockets & Async Processing',
      category: 'Real-Time Architecture',
      description: 'Bi-directional low-latency client-server communication using Django Channels, Daphne, Redis channel layers, and WebSockets for real-time sync.',
      keyPoints: ['Event-Driven Messages', 'Broadcasting & Room Groups', 'Reconnection & Heartbeats'],
      icon: 'activity'
    },
    {
      title: 'JWT Auth & Role-Based Access (RBAC)',
      category: 'Security',
      description: 'Stateless authentication using signed JSON Web Tokens (Access + Refresh tokens), password hashing (Bcrypt/Argon2), and backend permission guards.',
      keyPoints: ['Claims-based Token Verification', 'Role Guards (Customer, Agent, Admin)', 'Automatic Token Refresh Flows'],
      icon: 'lock'
    },
    {
      title: 'Distributed System Simulation & Queues',
      category: 'System Design',
      description: 'Understanding request routing, load balancing algorithms (Round-Robin, Least Connections), message queues (RabbitMQ/Kafka), and worker pool concurrency.',
      keyPoints: ['NodeLabCanvas Playground', 'Asynchronous Task Processing', 'Fault Tolerance & Retries'],
      icon: 'cpu'
    }
  ] as ConceptItem[],

  timeline: [
    {
      year: '2018 - 2022',
      title: 'B.Tech in Computer Science',
      organization: 'Computer Science & Engineering',
      description: 'Graduated with 8.39 CGPA. Focused on Data Structures, OOP, Database Systems, and Web Engineering.',
      type: 'education'
    },
    {
      year: '2022 - 2025',
      title: 'System Engineer',
      organization: 'Infosys (Bhubaneswar, India)',
      description: 'Optimized production database queries (50-70m to 30-45m) during 2 Years & 6 Months at Infosys, analyzed enterprise data flows, resolved production incidents, and built validation SQL automation.',
      type: 'work'
    },
    {
      year: '2024 - 2025',
      title: 'Advanced Full-Stack & System Design Projects',
      organization: 'NodeLabCanvas, ConnectNest, TicketFlow',
      description: 'Architected distributed system simulator (NodeLabCanvas), AI semantic search (ConnectNest), and FastAPI multi-role ticket engine.',
      type: 'project'
    },
    {
      year: '2026',
      title: 'Python Backend Developer',
      organization: 'Targeting Scalable Backend Engineering Roles',
      description: 'Building high-performance microservices, API gateways, database optimizations, and distributed tools.',
      type: 'milestone'
    }
  ] as TimelineEvent[]
};

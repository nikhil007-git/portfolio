import { ProfileData } from '@/types/portfolio';

export const portfolioData: ProfileData = {
  name: 'Nikhil Kumar',
  role: 'Full-Stack Developer & AI Explorer',
  headline: 'I build thoughtful web experiences and explore what AI can make possible.',
  tagline: 'B.Tech CSE student (Class of 2029) engineering scalable full-stack applications with modern web technologies and emerging AI workflows.',
  bio: [
    'I am a Computer Science & Engineering undergraduate at Vishveshwarya Group of Institutions (VGI), Greater Noida. My technical focus spans clean full-stack web engineering, API design, responsive user interfaces, and hands-on experimentation with modern AI systems.',
    'I believe great engineering comes from understanding fundamentals: clean data models, resilient backends, intuitive interfaces, and transparent software design. Whether building campus management systems or agricultural support platforms, I strive to turn real-world problems into polished digital solutions.',
    'Outside of active coding, I continuously practice data structures and algorithms on LeetCode and GeeksforGeeks, explore modern developer tooling, and prototype new tools.'
  ],
  locationDisplay: 'Greater Noida, India',
  availability: 'Available for Summer Internships & Freelance Opportunities',
  email: 'nikhil9508821695@gmail.com',
  education: {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science & Engineering',
    institution: 'Vishveshwarya Group of Institutions (VGI)',
    location: 'Greater Noida, Uttar Pradesh, India',
    startYear: 2025,
    expectedGraduation: 2029,
    highlights: [
      'Core focus on Computer Science foundations, Data Structures, and Software Engineering.',
      'Active contributor to campus developer initiatives and digital project prototyping.',
      'Maintaining consistent academic and practical coding momentum across competitive platforms.'
    ],
    relevantCoursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems',
      'Web Development Fundamentals',
      'Operating Systems & Networks Foundations'
    ]
  },
  socials: [
    {
      platform: 'github',
      label: 'GitHub (Primary)',
      url: 'https://github.com/nikhil007-git',
      username: 'nikhil007-git',
      primary: true
    },
    {
      platform: 'github',
      label: 'GitHub (Secondary)',
      url: 'https://github.com/nikhilkumar95f',
      username: 'nikhilkumar95f',
      primary: false
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/nikhil-kumar-0n7',
      username: 'nikhil-kumar-0n7',
      primary: true
    },
    {
      platform: 'leetcode',
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Nikhil_kumar_10/',
      username: 'Nikhil_kumar_10',
      primary: true
    },
    {
      platform: 'geeksforgeeks',
      label: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/profile/nikhil950qj4g',
      username: 'nikhil950qj4g'
    },
    {
      platform: 'x',
      label: 'X (Twitter)',
      url: 'https://x.com/NikhilK86017698',
      username: '@NikhilK86017698'
    },
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/nikhil.007n/',
      username: 'nikhil.007n'
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:nikhil9508821695@gmail.com',
      username: 'nikhil9508821695@gmail.com',
      primary: true
    }
  ],
  skills: [
    {
      category: 'Frontend',
      description: 'Building accessible, fast, and responsive user interfaces with component-driven architectures.',
      skills: [
        { name: 'React', stage: 'Active Working', highlight: true },
        { name: 'Next.js', stage: 'Active Working', highlight: true },
        { name: 'JavaScript (ES6+)', stage: 'Proficient', highlight: true },
        { name: 'Tailwind CSS', stage: 'Proficient', highlight: true },
        { name: 'HTML5 & Semantic Markup', stage: 'Proficient' },
        { name: 'CSS3 & Modern Layouts', stage: 'Proficient' },
        { name: 'TypeScript', stage: 'Active Working' }
      ]
    },
    {
      category: 'Backend',
      description: 'Designing RESTful web services, routing logic, and modular server architectures.',
      skills: [
        { name: 'Node.js', stage: 'Active Working', highlight: true },
        { name: 'Express.js', stage: 'Active Working', highlight: true },
        { name: 'REST API Design', stage: 'Active Working', highlight: true },
        { name: 'Middleware Architecture', stage: 'Active Working' },
        { name: 'Authentication Basics', stage: 'Active Working' }
      ]
    },
    {
      category: 'Languages',
      description: 'Writing structured, algorithmic code for problem solving and backend application logic.',
      skills: [
        { name: 'Python', stage: 'Active Working', highlight: true },
        { name: 'Java', stage: 'Active Working', highlight: true },
        { name: 'C / C++', stage: 'Foundational', highlight: true },
        { name: 'JavaScript', stage: 'Proficient', highlight: true }
      ]
    },
    {
      category: 'Data & Databases',
      description: 'Modeling data entities, writing relational queries, and managing document schemas.',
      skills: [
        { name: 'MySQL', stage: 'Active Working', highlight: true },
        { name: 'MongoDB', stage: 'Active Working', highlight: true },
        { name: 'SQL Querying', stage: 'Active Working' },
        { name: 'Mongoose ODM', stage: 'Active Working' }
      ]
    },
    {
      category: 'Tools & DevOps',
      description: 'Version control, development environments, API testing, and deployment pipelines.',
      skills: [
        { name: 'Git', stage: 'Proficient', highlight: true },
        { name: 'GitHub', stage: 'Proficient', highlight: true },
        { name: 'VS Code', stage: 'Proficient' },
        { name: 'Postman', stage: 'Active Working' },
        { name: 'Vercel Deployment', stage: 'Active Working' },
        { name: 'npm / package management', stage: 'Proficient' }
      ]
    },
    {
      category: 'AI & Machine Learning',
      description: 'Active learning stage: exploring model integration, prompt architectures, and intelligent web interfaces.',
      skills: [
        { name: 'LLM API Integration', stage: 'Exploring', highlight: true },
        { name: 'Prompt Engineering', stage: 'Exploring', highlight: true },
        { name: 'RAG Concepts (Retrieval)', stage: 'Exploring' },
        { name: 'AI Assistant Design', stage: 'Active Working', highlight: true }
      ]
    }
  ],
  projects: [
    {
      id: 'kisanmitra',
      title: 'KisanMitra',
      subtitle: 'Agricultural Advisory & Farmer Support Platform',
      description: 'A dedicated web platform designed to empower agricultural workers with real-time weather alerts, crop health guidelines, and practical market insights.',
      category: 'Full-Stack',
      featured: true,
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API', 'Weather Integration'],
      githubUrl: 'https://github.com/nikhil007-git/KisanMitra',
      highlights: [
        'Accessible, multi-device interface tailored for agricultural workflows.',
        'Real-time weather data integration with advisory tips for irrigation and harvest timing.',
        'Structured modular backend for storing crop advisories and localized query inputs.'
      ],
      caseStudy: {
        contextProblem: 'Smallholder farmers frequently lack timely, consolidated digital advisories tailored to sudden weather shifts and crop management best practices.',
        goals: [
          'Create a clutter-free, responsive web portal accessible on entry-level mobile devices.',
          'Consolidate weather forecasts and actionable farming guidance into one interface.',
          'Design an extensible backend service for future regional language additions.'
        ],
        roleContribution: 'Sole developer — spearheaded system architecture, UI wireframes, REST API endpoints, and third-party meteorological API integration.',
        approachArchitecture: 'Client-server architecture using React on the frontend and Express.js on the backend, communicating through JSON REST endpoints with defensive error handling for external API availability.',
        keyFeatures: [
          'Localized Weather Overview with precipitation probabilities.',
          'Crop Health Advisory Directory with symptom and mitigation steps.',
          'Farmer Query Submission form with status tracking.',
          'High-contrast layout optimized for outdoor readability.'
        ],
        techChoices: [
          { tech: 'React', reason: 'Component reusability for weather widgets and modular guidance cards.' },
          { tech: 'Node.js & Express', reason: 'Lightweight asynchronous API routing and seamless external API fetching.' },
          { tech: 'MongoDB', reason: 'Flexible document schema for variable advisory categories and farmer feedback.' }
        ],
        challengesLearning: 'Handling intermittent network connectivity in rural environments highlighted the importance of aggressive client-side caching and graceful API fallback states.',
        outcome: 'Functional full-stack prototype ready for field evaluation with verified API pipelines and responsive layouts.',
        futureImprovements: [
          'Add voice-to-text input for hands-free queries while farming.',
          'Incorporate vernacular language localization (Hindi and regional dialects).',
          'Deploy offline-first Progressive Web App (PWA) service worker.'
        ]
      }
    },
    {
      id: 'vgi-canteen',
      title: 'VGI Canteen System',
      subtitle: 'Campus Food Ordering & Management Solution',
      description: 'A multi-part campus canteen digital portal featuring decoupled student ordering interfaces and administrative order tracking to eliminate peak-hour cafeteria queues.',
      category: 'Full-Stack',
      featured: true,
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Full-Stack Architecture'],
      githubUrl: 'https://github.com/nikhil007-git/VGI-Canteen-frontend',
      githubUrlSecondary: 'https://github.com/nikhil007-git/VGI-Canteen-backend',
      highlights: [
        'Dual-repository decoupled architecture separating student client from backend API.',
        'Live order queue state management and digital token generation.',
        'Tailored specifically for Vishveshwarya Group of Institutions campus dynamics.'
      ],
      caseStudy: {
        contextProblem: 'High lunch-break crowding at the college canteen resulted in lengthy queues, misplaced orders, and delayed food preparation cycles for students and staff.',
        goals: [
          'Streamline student ordering via a quick mobile-optimized menu selection.',
          'Provide canteen operators with a structured incoming order board.',
          'Cut down peak waiting times by issuing digital pickup tokens.'
        ],
        roleContribution: 'Full-Stack Architect & Developer — created both the frontend repository and the Node.js/Express backend service, designing data models for orders and menus.',
        approachArchitecture: 'Decoupled frontend (React + Tailwind) and backend (Express + MongoDB) communicating via RESTful endpoints with order status lifecycle (Pending -> Preparing -> Ready -> Completed).',
        keyFeatures: [
          'Interactive Digital Menu with category filtering and item availability indicators.',
          'Real-time Cart & Checkout with token generation.',
          'Canteen Operator Dashboard for updating item status and clearing queues.',
          'Clean, modern responsive UI designed for swift one-thumb mobile ordering.'
        ],
        techChoices: [
          { tech: 'Decoupled Architecture', reason: 'Allows independent deployments and potential future native mobile clients sharing the same API.' },
          { tech: 'Tailwind CSS', reason: 'Rapid styling of clean UI with high contrast and smooth feedback states.' },
          { tech: 'Express & MongoDB', reason: 'High throughput for burst traffic during college lunch break rush.' }
        ],
        challengesLearning: 'Managing order concurrency and preventing duplicate orders during unstable mobile data connections in basement cafeteria areas.',
        outcome: 'Successfully established working client and backend repositories modeling real campus ordering behavior.',
        futureImprovements: [
          'Integrate real-time WebSocket push notifications for order ready status.',
          'Add UPI payment gateway simulation/integration.',
          'Incorporate student roll number authentication.'
        ]
      }
    },
    {
      id: 'weather-application',
      title: 'Real-Time Weather Web App',
      subtitle: 'Atmospheric Metrics & Forecast Visualizer',
      description: 'A dynamic meteorological web application that delivers real-time weather metrics, multi-day forecasting, and dynamic atmospheric UI transitions based on live conditions.',
      category: 'Frontend',
      featured: true,
      tags: ['JavaScript', 'Weather API', 'CSS Grid', 'Geolocation', 'Responsive Design'],
      githubUrl: 'https://github.com/nikhil007-git/Weather-Application',
      highlights: [
        'Dynamic contextual backgrounds adapting to rainfall, sunshine, and night states.',
        'Browser Geolocation API integration for seamless instant local forecast detection.',
        'Comprehensive breakdown: humidity, wind speed, UV index, and atmospheric pressure.'
      ],
      caseStudy: {
        contextProblem: 'Many standard weather apps are weighed down by heavy ad scripts and slow page weight, delaying simple weather lookups.',
        goals: [
          'Build a lightweight, lightning-fast weather dashboard that loads in under 1 second.',
          'Implement fluid visual status cues reflecting current weather parameters.',
          'Support both global city searches and one-click GPS coordinate lookups.'
        ],
        roleContribution: 'Solo developer — built complete frontend interface, asynchronous API ingestion, and condition-based theme switching.',
        approachArchitecture: 'Pure client-side single page app consuming OpenWeather/Weather API endpoints with asynchronous fetch handling, data transformation, and responsive CSS Grid presentation.',
        keyFeatures: [
          'Instant GPS-based weather lookup via HTML5 Geolocation API.',
          'Global city search with input debouncing and query history.',
          'Detailed atmospheric metrics grid (visibility, pressure, dew point, wind vectors).',
          'Responsive design adapting gracefully from 320px screens to 4K displays.'
        ],
        techChoices: [
          { tech: 'Modern Vanilla JS / React', reason: 'Minimized runtime overhead for maximum client responsiveness.' },
          { tech: 'CSS Custom Properties', reason: 'Fast programmatic theme swaps corresponding to diurnal and weather states.' }
        ],
        challengesLearning: 'Handling asynchronous rate limits and normalizing varied error codes returned by external weather APIs when invalid city names were searched.',
        outcome: 'Clean, reliable utility deployed on GitHub Pages with instant load performance.',
        futureImprovements: [
          'Add 7-day hourly temperature trend graphs using Chart.js.',
          'Add severe weather push notification simulation.'
        ]
      }
    },
    {
      id: 'aot-experience',
      title: 'AOT (Attack on Titan Interactive)',
      subtitle: 'Immersive Fandom & Reactive Media Experience',
      description: 'A creative web tribute and character exploration hub featuring rich micro-animations, thematic typography, and reactive interactive elements celebrating the Attack on Titan universe.',
      category: 'Interactive',
      featured: false,
      tags: ['HTML5', 'CSS3 Animations', 'JavaScript', 'Audio Sync', 'Creative Web'],
      githubUrl: 'https://github.com/nikhil007-git/AOT',
      highlights: [
        'Custom animation timelines crafted with performant CSS transitions.',
        'Interactive character and lore exploration panels with synchronized audio cues.',
        'Dark cinematic visual aesthetic.'
      ],
      caseStudy: {
        contextProblem: 'Translating complex visual media and high-energy anime aesthetics into a smooth, stutter-free browser interface.',
        goals: [
          'Explore creative web animation techniques, transform keyframes, and layered visual depth.',
          'Build an engaging fan experience that balances rich media without sacrificing mobile performance.',
          'Ensure strict audio control honoring user autoplay restrictions.'
        ],
        roleContribution: 'Creator & frontend developer — designed graphic layouts, asset compression pipelines, and interactive logic.',
        approachArchitecture: 'Single page narrative experience structured with semantic HTML sections, hardware-accelerated CSS transforms, and opt-in media playback.',
        keyFeatures: [
          'Cinematic Hero Section with particle effects and layered typography.',
          'Interactive Titan & Character Roster with expandable lore cards.',
          'Opt-in sound effects and soundtrack controls with prominent mute toggle.',
          'High frame rate scroll-triggered reveals.'
        ],
        techChoices: [
          { tech: 'CSS Keyframe Transitions', reason: 'Leverages GPU acceleration (transform and opacity) to preserve 60fps on mobile.' },
          { tech: 'Modular JavaScript', reason: 'Clean event delegation for sound triggers and panel expansions.' }
        ],
        challengesLearning: 'Respecting user motion sensitivities and handling browser autoplay restrictions required building robust fallback states and a visible mute controller.',
        outcome: 'High-engagement interactive site demonstrating creative UI and animation capabilities.',
        futureImprovements: [
          'Incorporate Three.js 3D model viewer for 3D Maneuver Gear inspection.',
          'Add interactive trivia game with score leaderboard.'
        ]
      }
    },
    {
      id: 'bmi-calculator',
      title: 'BMI Health Calculator',
      subtitle: 'Accurate Metric/Imperial Health Utility',
      description: 'A clean, accessible health utility providing instant Body Mass Index calculation, health categorization, ideal weight range estimations, and personalized fitness pointers.',
      category: 'Utility & Web',
      featured: false,
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Form Validation', 'Accessibility'],
      githubUrl: 'https://github.com/nikhil007-git/bmi_cal',
      highlights: [
        'Dual unit support: seamless toggling between Metric (cm/kg) and Imperial (ft-in/lbs).',
        'Visual gauge scale illustrating WHO health classifications (Underweight to Obese).',
        'Instant calculations with reactive input feedback and zero page reloads.'
      ],
      caseStudy: {
        contextProblem: 'Many online BMI tools are cluttered with pop-up ads, confusing unit conversions, and lack immediate actionable context.',
        goals: [
          'Design an instant, lightweight calculator with zero friction and clear visual feedback.',
          'Provide clear health category context beyond just a raw numerical value.',
          'Ensure full keyboard accessibility and screen reader friendliness.'
        ],
        roleContribution: 'Solo developer — built calculation algorithms, input normalization, dynamic SVG gauge visualizer, and keyboard accessibility.',
        approachArchitecture: 'Lightweight reactive frontend with pure mathematical calculation routines, real-time input sanitization, and state-driven DOM updates.',
        keyFeatures: [
          'Dynamic unit toggle with automatic value conversion between systems.',
          'Visual gauge indicator with color-coded risk bands based on WHO criteria.',
          'Ideal healthy weight range output tailored to user height.',
          'Comprehensive accessible form labels and aria-live announcements for screen readers.'
        ],
        techChoices: [
          { tech: 'Vanilla JavaScript', reason: 'Immediate execution and minimal bundle size for a standalone utility.' },
          { tech: 'Accessible HTML Form Controls', reason: 'Strict adherence to WCAG form guidelines and keyboard navigation.' }
        ],
        challengesLearning: 'Precision floating-point rounding between imperial and metric units required clean normalization algorithms to prevent UI jitter.',
        outcome: 'Compact, dependable health utility with 100% Lighthouse accessibility score.',
        futureImprovements: [
          'Add BMR (Basal Metabolic Rate) and daily caloric requirement calculator.',
          'Provide local storage history to track weight progression over time.'
        ]
      }
    }
  ],
  milestones: [
    {
      period: '2025 - Present',
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Vishveshwarya Group of Institutions (VGI), Greater Noida',
      description: 'Commenced undergraduate engineering studies focusing on computer science fundamentals, data structures, algorithms, and collaborative software projects.',
      badge: 'Academic Journey'
    },
    {
      period: '2025 - 2026',
      title: 'Full-Stack Web Development & System Architecture',
      subtitle: 'Building End-to-End Real-World Applications',
      description: 'Built KisanMitra and the VGI Canteen digital ordering system, mastering decoupled React frontends, Node.js REST services, and database persistence.',
      badge: 'Engineering Milestone'
    },
    {
      period: '2026 - Present',
      title: 'Algorithmic Problem Solving & AI Exploration',
      subtitle: 'LeetCode, GeeksforGeeks, and Intelligent Agents',
      description: 'Active problem solving on competitive coding platforms alongside hands-on prototyping of LLM APIs, retrieval-augmented workflows, and conversational assistants.',
      badge: 'Current Focus'
    }
  ],
  currentlyExploring: [
    {
      title: 'Next.js 15 Server Components & Server Actions',
      focus: 'Performance & Architecture',
      description: 'Mastering modern hybrid rendering, edge computing, streaming SSR, and zero-bundle server logic.',
      status: 'In Progress',
      tags: ['Next.js 15', 'React 19', 'RSC', 'Server Actions']
    },
    {
      title: 'Agentic AI & Retrieval-Augmented Generation (RAG)',
      focus: 'Applied Artificial Intelligence',
      description: 'Investigating how multi-step reasoning agents and grounded vector contexts can enhance web applications.',
      status: 'Prototyping',
      tags: ['LLMs', 'Vector Databases', 'Prompt Chains', 'Function Calling']
    },
    {
      title: 'System Design & Database Optimization',
      focus: 'Backend Reliability',
      description: 'Deepening knowledge in indexing strategies, caching layers (Redis), and resilient API gateway design.',
      status: 'Researching',
      tags: ['PostgreSQL', 'Redis', 'Microservices', 'Docker']
    }
  ]
};

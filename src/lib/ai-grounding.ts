import { portfolioData } from '@/content/portfolioData';

export const AI_SYSTEM_PROMPT = `You are "Ask Nikhil AI", an intelligent, humble, and highly knowledgeable portfolio assistant for Nikhil Kumar.
Your purpose is to answer visitor questions strictly based on the verified portfolio facts provided below.

RULES:
1. Always maintain a polite, friendly, and professional tone.
2. Speak as Nikhil's assistant (e.g., "Nikhil is a B.Tech CSE student...", "He built KisanMitra using...").
3. DO NOT invent, hallucinate, or exaggerate any experience, awards, corporate jobs, senior roles, or credentials.
4. If a visitor asks about something not mentioned in the verified facts (e.g., "Has Nikhil worked at Google?", "What is Nikhil's phone number?"), politely state that this information is not in the portfolio, and encourage them to reach out directly via email at ${portfolioData.email} or LinkedIn (${portfolioData.socials.find(s => s.platform === 'linkedin')?.url}).
5. Keep answers concise, clear, and structured (using short paragraphs or bullet points).
6. Disclose that you are an AI assistant grounded in Nikhil's published portfolio data.

VERIFIED FACTS:
- Name: ${portfolioData.name}
- Role: ${portfolioData.role}
- Headline: "${portfolioData.headline}"
- Education: 
  * Class X (Secondary School): Completed in 2023
  * Class XII (Senior Secondary - Science / PCM): Completed in 2025
  * Bachelor of Technology (B.Tech) in Computer Science & Engineering: Vishveshwarya Group of Institutions (VGI), Greater Noida (2025 – 2029, Expected Graduation: 2029)
- Location: ${portfolioData.locationDisplay}
- Availability: ${portfolioData.availability}
- Email: ${portfolioData.email}
- Key Links:
  * Primary GitHub: https://github.com/nikhil007-git
  * Secondary GitHub: https://github.com/nikhilkumar95f
  * LinkedIn: https://linkedin.com/in/nikhil-kumar-0n7
  * LeetCode: https://leetcode.com/u/Nikhil_kumar_10/
  * GeeksforGeeks: https://www.geeksforgeeks.org/profile/nikhil950qj4g
  * X / Twitter: https://x.com/NikhilK86017698
  * Instagram: https://www.instagram.com/nikhil.007n/
- Skills:
${portfolioData.skills.map(g => `  * ${g.category}: ${g.skills.map(s => `${s.name} (${s.stage})`).join(', ')}`).join('\n')}
- Featured Projects:
${portfolioData.projects.map(p => `  * ${p.title} (${p.category}): ${p.description} Tech: ${p.tags.join(', ')}. Repo: ${p.githubUrl || 'N/A'}. Key highlight: ${p.highlights[0]}`).join('\n')}
- Currently Exploring:
${portfolioData.currentlyExploring.map(e => `  * ${e.title}: ${e.description} (${e.status})`).join('\n')}
`;

export interface FallbackAnswer {
  keywords: string[];
  answer: string;
}

export const FALLBACK_FAQ: FallbackAnswer[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'start'],
    answer: `Hello! 👋 I am **Ask Nikhil AI**, an assistant grounded in Nikhil Kumar's verified portfolio. You can ask me about his tech stack (React, Next.js, Node.js), featured projects (KisanMitra, VGI Canteen), education (10th in 2023, 12th in 2025, B.Tech CSE 2025-2029 at VGI), or how to contact him. How can I help you today?`
  },
  {
    keywords: ['who are you', 'what are you', 'your name', 'about yourself', 'what can you do'],
    answer: `I am **Ask Nikhil AI**, an AI assistant built specifically for Nikhil Kumar's personal portfolio. I can answer questions about his engineering projects, technical stack, problem-solving journey, education, and contact links.`
  },
  {
    keywords: ['who is nikhil', 'about nikhil', 'tell me about nikhil', 'overview', 'introduce', 'background', 'bio', 'profile'],
    answer: `Nikhil Kumar is a Full-Stack Developer and B.Tech Computer Science & Engineering student at Vishveshwarya Group of Institutions (VGI), Greater Noida (Class of 2029). He completed Class X in 2023 and Class XII (Science/PCM) in 2025.\n\nHe specializes in building scalable web applications with React, Next.js, Node.js, Express, and MongoDB, while actively exploring modern AI workflows and practicing algorithmic problem solving on LeetCode.`
  },
  {
    keywords: ['education', 'college', 'university', 'study', 'studied', 'degree', 'vgi', 'graduation', '10th', '12th', 'school', 'matriculation', 'intermediate', 'class 10', 'class 12'],
    answer: `Nikhil's verified academic trajectory:\n• **Class X (Secondary School):** Completed in 2023 with core focus on mathematics and science.\n• **Class XII (Senior Secondary):** Completed in 2025 in the Science (PCM) stream.\n• **B.Tech in Computer Science & Engineering:** Vishveshwarya Group of Institutions (VGI), Greater Noida (2025 – 2029, currently in progress).`
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technologies', 'languages', 'react', 'next', 'python', 'frontend', 'backend', 'node', 'express', 'mongodb', 'mysql', 'javascript', 'typescript', 'java', 'c++'],
    answer: `Nikhil's technical stack includes:\n• **Frontend:** React, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, TypeScript\n• **Backend:** Node.js, Express.js, REST API architecture\n• **Programming Languages:** Python, Java, C/C++, JavaScript\n• **Databases:** MongoDB, MySQL\n• **Tools & Platforms:** Git, GitHub, Postman, VS Code, Vercel\n• **AI/ML (Active Learning):** LLM integration, prompt engineering, and RAG concepts.`
  },
  {
    keywords: ['kisanmitra', 'farmer', 'agriculture'],
    answer: `**KisanMitra** is Nikhil's agricultural support platform built using React, Node.js, Express, and MongoDB. It provides smallholder farmers with localized meteorological advisories, crop health recommendations, and a direct inquiry module.\n• Repository: https://github.com/nikhil007-git/KisanMitra`
  },
  {
    keywords: ['canteen', 'vgi canteen', 'food ordering', 'cafeteria'],
    answer: `The **VGI Canteen System** is a full-stack campus cafeteria ordering portal created for Vishveshwarya Group of Institutions. Built with a decoupled React + Tailwind client and an Express + MongoDB backend, it features live order queue tracking and digital pickup tokens to minimize peak lunch hour queues.\n• Frontend: https://github.com/nikhil007-git/VGI-Canteen-frontend\n• Backend: https://github.com/nikhil007-git/VGI-Canteen-backend`
  },
  {
    keywords: ['weather', 'weather app', 'forecast'],
    answer: `Nikhil built a **Real-Time Weather Web App** featuring HTML5 Geolocation, live atmospheric metrics (humidity, pressure, wind vectors), and dynamic condition-adaptive UI backgrounds based on ambient weather.\n• Repository: https://github.com/nikhil007-git/Weather-Application`
  },
  {
    keywords: ['aot', 'attack on titan'],
    answer: `**AOT (Attack on Titan Interactive)** is an immersive web fandom experience showcasing high-performance CSS keyframe animations, audio synchronization, and responsive interactive character lore cards.\n• Repository: https://github.com/nikhil007-git/AOT`
  },
  {
    keywords: ['bmi', 'calculator', 'health'],
    answer: `The **BMI Health Calculator** is a clean, accessible health utility supporting Metric and Imperial units, real-time WHO classification gauges, and ideal healthy weight estimates.\n• Repository: https://github.com/nikhil007-git/bmi_cal`
  },
  {
    keywords: ['project', 'projects', 'work', 'built', 'portfolio', 'apps'],
    answer: `Nikhil's core engineering projects include:\n1. **KisanMitra:** Agricultural advisory platform with real-time weather integration.\n2. **VGI Canteen System:** Decoupled campus cafeteria ordering system with live queue tracking.\n3. **Real-Time Weather Web App:** Atmospheric visualizer adapting to live meteorological conditions.\n4. **AOT Interactive:** 60fps web animation and media experience.\n5. **BMI Health Calculator:** Accessible health utility with WHO scales.\n\nYou can click on any project card on this site to open its complete 10-point technical case study!`
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'message', 'internship', 'freelance', 'talk', 'connect', 'phone'],
    answer: `You can reach Nikhil directly through:\n• **Email:** nikhil9508821695@gmail.com\n• **LinkedIn:** https://linkedin.com/in/nikhil-kumar-0n7\n• **GitHub:** https://github.com/nikhil007-git\n• **Contact Form:** Use the contact form at the bottom of this portfolio.\n\nHe is currently open to Summer Internships and Freelance collaborations!`
  },
  {
    keywords: ['github', 'repo', 'repositories', 'code', 'git'],
    answer: `Nikhil maintains two GitHub profiles:\n• **Primary:** https://github.com/nikhil007-git\n• **Secondary:** https://github.com/nikhilkumar95f\nCheck out repositories including KisanMitra, VGI Canteen, and Weather Application.`
  },
  {
    keywords: ['leetcode', 'dsa', 'geeksforgeeks', 'problem solving', 'gfg', 'coding profile'],
    answer: `Nikhil actively solves data structures and algorithmic problems on:\n• **LeetCode:** https://leetcode.com/u/Nikhil_kumar_10/\n• **GeeksforGeeks:** https://www.geeksforgeeks.org/profile/nikhil950qj4g`
  },
  {
    keywords: ['resume', 'cv', 'download resume'],
    answer: `You can review and download Nikhil's resume directly via the **Resume** button in the top navigation bar or the Hero section of this site!`
  },
  {
    keywords: ['location', 'where', 'city', 'address', 'based'],
    answer: `Nikhil is located in **Greater Noida, Uttar Pradesh, India**, and is available for both remote and on-site internship opportunities.`
  },
  {
    keywords: ['ai', 'exploring', 'learning', 'future', 'rag', 'llm'],
    answer: `Nikhil is currently deepening his knowledge in:\n• Next.js 15 Server Components & Server Actions\n• Agentic AI workflows and Retrieval-Augmented Generation (RAG)\n• System Design, Database Indexing, and Caching (Redis/PostgreSQL).`
  }
];

export const STARTER_QUESTIONS = [
  'What is Nikhil\'s technical stack?',
  'Tell me about the KisanMitra project',
  'How does the VGI Canteen system work?',
  'Where does Nikhil study and when does he graduate?',
  'How can I get in touch with Nikhil?'
];

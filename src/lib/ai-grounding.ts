import { portfolioData } from '@/content/portfolioData';

export const AI_SYSTEM_PROMPT = `You are "Ask Nikhil AI", an intelligent, humble, and highly knowledgeable portfolio assistant for Nikhil Kumar.
Your purpose is to answer visitor questions strictly based on the verified portfolio facts provided below.

RULES:
1. Always maintain a polite, friendly, and professional tone.
2. Speak as Nikhil's assistant (e.g., "Nikhil is a B.Tech CSE student...", "He built KisanMitra using...").
3. DO NOT invent, hallucinate, or exaggerate any experience, awards, corporate jobs, senior roles, or credentials.
4. Education timeline is verified:
   - 10th Grade: Completed in 2023
   - 12th Grade: Completed in 2025
   - Undergraduate: Bachelor of Technology (B.Tech) in Computer Science & Engineering (2025–2029) at Vishveshwarya Group of Institutions (VGI), Greater Noida.
5. All source code is hosted on GitHub: https://github.com/nikhil007-git
6. If a visitor asks about something not mentioned in the verified facts, politely state that this information is not in the portfolio, and encourage them to reach out directly via email at ${portfolioData.email} or LinkedIn (https://linkedin.com/in/nikhil-kumar-0n7).
7. Keep answers concise, clear, and structured (using short paragraphs or bullet points).
8. If the user greets you (e.g., "hi", "hello"), greet them warmly and offer to answer questions about Nikhil's projects, skills, education, or contact info.

VERIFIED FACTS:
- Name: ${portfolioData.name}
- Role: ${portfolioData.role}
- Headline: "${portfolioData.headline}"
- Education Timeline:
  * 10th Grade: Completed in 2023
  * 12th Grade: Completed in 2025
  * Bachelor of Technology (B.Tech) in Computer Science & Engineering (2025–2029) at Vishveshwarya Group of Institutions (VGI), Greater Noida, Uttar Pradesh, India.
- Location: ${portfolioData.locationDisplay}
- Availability: ${portfolioData.availability}
- Email: ${portfolioData.email}
- Key Links:
  * GitHub: https://github.com/nikhil007-git
  * LinkedIn: https://linkedin.com/in/nikhil-kumar-0n7
  * LeetCode: https://leetcode.com/u/Nikhil_kumar_10/
  * GeeksforGeeks: https://www.geeksforgeeks.org/profile/nikhil950qj4g
  * X / Twitter: https://x.com/NikhilK86017698
  * Instagram: https://www.instagram.com/nikhil.007n/
- Skills:
${portfolioData.skills.map(g => `  * ${g.category}: ${g.skills.map(s => `${s.name} (${s.stage})`).join(', ')}`).join('\n')}
- Featured Projects & Live Demos:
  * KisanMitra: https://kisan-mitra-brown.vercel.app (Repo: https://github.com/nikhil007-git/KisanMitra)
  * VGI Canteen System: https://vgi-canteen-frontend.vercel.app (Repos: https://github.com/nikhil007-git/Vgi-canteen-frontend & https://github.com/nikhil007-git/Vgi-canteen-backend)
  * Full-Stack LeaderBoard Platform: https://leader-board-backend-hcv2.vercel.app/ (Repos: https://github.com/nikhil007-git/LeaderBoard_Frontend & https://github.com/nikhil007-git/LeaderBoard_Backend)
  * Chess Multiplayer: https://chess-two-orpin.vercel.app (Repo: https://github.com/nikhil007-git/Chess)
  * Location Finder: https://location-finder-by-pincode.vercel.app (Repo: https://github.com/nikhil007-git/location-finder-by-pincode)
  * AOT Experience: https://aot-virid.vercel.app (Repo: https://github.com/nikhil007-git/AOT)
  * BMI Calculator: https://bmi-cal-ebon.vercel.app (Repo: https://github.com/nikhil007-git/BMI-Cal)
`;

export interface FallbackAnswer {
  keywords: string[];
  answer: string;
}

export const FALLBACK_FAQ: FallbackAnswer[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'hola', 'namaste', 'morning', 'evening', 'sup', 'greetings'],
    answer: `Hello! I'm **Ask Nikhil AI**, an assistant trained on Nikhil Kumar's verified portfolio. You can ask me about:\n\n• His technical skills & stack\n• Live projects (KisanMitra, VGI Canteen, Leaderboard, etc.)\n• Academic background (10th, 12th, B.Tech CSE)\n• Contact & internship availability\n\nHow can I help you today?`
  },
  {
    keywords: ['who are you', 'what can you do', 'what is this', 'help', 'bot', 'assistant', 'capabilities'],
    answer: `I am **Ask Nikhil AI**, Nikhil Kumar's interactive portfolio assistant. I can help answer questions about his technical experience, live deployed applications, educational milestones, and how to get in touch with him.`
  },
  {
    keywords: ['who is', 'about nikhil', 'tell me about', 'introduce', 'background', 'bio', 'profile', 'overview'],
    answer: `Nikhil Kumar is a Full-Stack Web Developer and B.Tech Computer Science & Engineering student at Vishveshwarya Group of Institutions (VGI), Greater Noida (Class of 2029). He builds production-ready web apps with React, Next.js, Node.js, and modern databases, while exploring practical AI workflows.`
  },
  {
    keywords: ['10th', '12th', 'school', 'matriculation', 'intermediate', 'schooling', 'education', 'college', 'university', 'study', 'degree', 'vgi', 'btech', 'graduation', '2023', '2025', '2029'],
    answer: `Here is Nikhil's academic timeline:\n• **B.Tech in Computer Science & Engineering**: Vishveshwarya Group of Institutions (VGI), Greater Noida (2025 – 2029)\n• **12th Standard**: Completed in 2025\n• **10th Standard**: Completed in 2023\n\nHis primary focus is computer science foundations, algorithms, and full-stack software development.`
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technologies', 'languages', 'react', 'next', 'python', 'java', 'c++', 'frontend', 'backend', 'fullstack', 'database', 'mongo', 'node', 'express', 'tailwind'],
    answer: `Nikhil's core technical stack includes:\n• **Frontend**: React, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, HTML5/CSS3\n• **Backend**: Node.js, Express.js, RESTful API Design\n• **Languages**: Python, Java, C/C++, JavaScript\n• **Databases**: MongoDB, MySQL, Mongoose ODM\n• **DevOps & Tools**: Git, GitHub, VS Code, Postman, Vercel\n• **AI Exploration**: LLM API integration, prompt engineering, RAG concepts`
  },
  {
    keywords: ['kisanmitra', 'kisan', 'farmer', 'agriculture', 'weather', 'crop'],
    answer: `**KisanMitra** is Nikhil's agricultural support platform built with React, Node.js, Express, and MongoDB. It provides farmers with live localized weather advisories, crop health recommendations, and query submission.\n• **Live Demo**: https://kisan-mitra-brown.vercel.app\n• **Source Code**: https://github.com/nikhil007-git/KisanMitra`
  },
  {
    keywords: ['canteen', 'vgi canteen', 'food', 'order', 'cafeteria', 'token'],
    answer: `The **VGI Canteen System** is a campus dining portal designed for Vishveshwarya Group of Institutions. Built with a decoupled React frontend and Express/MongoDB backend, students can place orders, view live queues, and receive digital pickup tokens.\n• **Live Demo**: https://vgi-canteen-frontend.vercel.app\n• **Frontend Repo**: https://github.com/nikhil007-git/Vgi-canteen-frontend\n• **Backend Repo**: https://github.com/nikhil007-git/Vgi-canteen-backend`
  },
  {
    keywords: ['leaderboard', 'rank', 'contest', 'scoring', 'competition'],
    answer: `The **Full-Stack LeaderBoard Platform** is a competitive scoring and ranking system built with React, Vite, Tailwind CSS, Node.js, Express, and MongoDB.\n• **Live Demo**: https://leader-board-backend-hcv2.vercel.app/\n• **Frontend Repo**: https://github.com/nikhil007-git/LeaderBoard_Frontend\n• **Backend Repo**: https://github.com/nikhil007-git/LeaderBoard_Backend`
  },
  {
    keywords: ['chess', 'board game', 'multiplayer'],
    answer: `The **Chess Multiplayer Platform** is an interactive web chess platform with move validation, legal trajectories, and responsive board presentation.\n• **Live Demo**: https://chess-two-orpin.vercel.app\n• **Source Code**: https://github.com/nikhil007-git/Chess`
  },
  {
    keywords: ['location', 'pincode', 'pin code', 'postal', 'area'],
    answer: `The **PIN Code Location Finder** allows instant retrieval of postal jurisdiction and area details with reactive UI feedback.\n• **Live Demo**: https://location-finder-by-pincode.vercel.app\n• **Source Code**: https://github.com/nikhil007-git/location-finder-by-pincode`
  },
  {
    keywords: ['aot', 'attack on titan', 'anime'],
    answer: `The **AOT Experience** is an immersive anime web tribute featuring rich micro-animations, typography, and reactive media.\n• **Live Demo**: https://aot-virid.vercel.app\n• **Source Code**: https://github.com/nikhil007-git/AOT`
  },
  {
    keywords: ['bmi', 'calculator', 'health', 'fitness'],
    answer: `The **BMI Health Calculator** calculates body mass index with instant category classification and health indicators.\n• **Live Demo**: https://bmi-cal-ebon.vercel.app\n• **Source Code**: https://github.com/nikhil007-git/BMI-Cal`
  },
  {
    keywords: ['project', 'projects', 'work', 'built', 'apps', 'portfolio', 'live', 'demo'],
    answer: `Nikhil has 7 live deployed projects on Vercel:\n1. **KisanMitra**: https://kisan-mitra-brown.vercel.app\n2. **VGI Canteen**: https://vgi-canteen-frontend.vercel.app\n3. **LeaderBoard**: https://leader-board-backend-hcv2.vercel.app/\n4. **Chess Platform**: https://chess-two-orpin.vercel.app\n5. **Location Finder**: https://location-finder-by-pincode.vercel.app\n6. **AOT Experience**: https://aot-virid.vercel.app\n7. **BMI Calculator**: https://bmi-cal-ebon.vercel.app\n\nAll source code is on GitHub: https://github.com/nikhil007-git`
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'message', 'internship', 'freelance', 'phone', 'call', 'connect', 'opportunity'],
    answer: `You can connect with Nikhil directly:\n• **Email**: nikhil9508821695@gmail.com\n• **LinkedIn**: https://linkedin.com/in/nikhil-kumar-0n7\n• **GitHub**: https://github.com/nikhil007-git\n\nHe is actively open to summer internships and freelance engineering opportunities!`
  },
  {
    keywords: ['github', 'repo', 'repositories', 'code'],
    answer: `All of Nikhil's source code and open-source contributions are hosted on his GitHub account:\nhttps://github.com/nikhil007-git`
  },
  {
    keywords: ['leetcode', 'dsa', 'geeksforgeeks', 'gfg', 'problem solving', 'coding'],
    answer: `Nikhil actively solves data structures and algorithmic challenges on:\n• **LeetCode**: https://leetcode.com/u/Nikhil_kumar_10/\n• **GeeksforGeeks**: https://www.geeksforgeeks.org/profile/nikhil950qj4g`
  },
  {
    keywords: ['resume', 'cv', 'download', 'pdf'],
    answer: `You can view and download Nikhil's resume directly using the 'Resume' button in the navigation bar and hero section of this site.`
  },
  {
    keywords: ['ai', 'exploring', 'learning', 'future', 'rag', 'llm'],
    answer: `Nikhil is currently exploring Next.js Server Components, Agentic AI architectures with tool calling, Retrieval-Augmented Generation (RAG), and high-performance backend systems.`
  }
];

export const STARTER_QUESTIONS = [
  'What is Nikhil\'s technical stack?',
  'Tell me about the KisanMitra project',
  'What is Nikhil\'s education timeline?',
  'How can I get in touch with Nikhil?'
];

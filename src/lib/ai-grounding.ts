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
- Education: ${portfolioData.education.degree} in ${portfolioData.education.field} from ${portfolioData.education.institution}, ${portfolioData.education.location} (Expected graduation: ${portfolioData.education.expectedGraduation}).
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
    keywords: ['who is', 'overview', 'introduce', 'background', 'profile'],
    answer: `Nikhil Kumar is a Full-Stack Developer and B.Tech Computer Science & Engineering student at Vishveshwarya Group of Institutions (VGI), Greater Noida (Class of 2029). He focuses on full-stack web engineering with React, Next.js, Node.js, and exploring practical AI integrations.`
  },
  {
    keywords: ['skill', 'stack', 'tech', 'technologies', 'languages', 'react', 'next', 'python', 'frontend', 'backend'],
    answer: `Nikhil's core technical stack includes:\n• Frontend: React, Next.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, TypeScript\n• Backend: Node.js, Express.js, REST APIs\n• Languages: Python, Java, C/C++, JavaScript\n• Databases: MySQL, MongoDB\n• Tools: Git, GitHub, Postman, VS Code, Vercel\n• AI/ML: Exploring LLM API integration, prompt engineering, and RAG concepts.`
  },
  {
    keywords: ['kisanmitra', 'farmer', 'agriculture', 'weather'],
    answer: `KisanMitra is Nikhil's agricultural support platform built with React, Node.js, Express, and MongoDB. It connects farmers with localized weather forecasts, advisory tips for irrigation/harvest, and a direct query submission module. You can check the repository at: https://github.com/nikhil007-git/KisanMitra`
  },
  {
    keywords: ['canteen', 'vgi', 'food', 'order'],
    answer: `The VGI Canteen System is a full-stack campus food ordering portal designed for Vishveshwarya Group of Institutions. Built with a decoupled React + Tailwind frontend and an Express + MongoDB backend, it enables students to order meals, track live queues, and receive digital pickup tokens, reducing cafeteria wait times.`
  },
  {
    keywords: ['weather', 'forecast'],
    answer: `Nikhil created a Real-Time Weather Web App featuring HTML5 Geolocation, live atmospheric metrics (humidity, pressure, wind vectors), and dynamic condition-adaptive UI backgrounds. Repository: https://github.com/nikhil007-git/Weather-Application`
  },
  {
    keywords: ['project', 'projects', 'work', 'built', 'portfolio'],
    answer: `Nikhil has built several key engineering projects:\n1. KisanMitra (Agricultural advisory & weather support platform)\n2. VGI Canteen System (Decoupled campus cafeteria ordering system)\n3. Real-Time Weather Web App (Dynamic meteorological visualizer)\n4. AOT Interactive Experience (High-performance web animation showcase)\n5. BMI Health Calculator (Accessible health utility with WHO scales)\nExplore the 'Projects' section for complete case studies!`
  },
  {
    keywords: ['education', 'college', 'university', 'study', 'degree', 'vgi', 'graduation'],
    answer: `Nikhil is pursuing his Bachelor of Technology (B.Tech) in Computer Science & Engineering at Vishveshwarya Group of Institutions (VGI), Greater Noida, with expected graduation in 2029.`
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'message', 'internship', 'freelance'],
    answer: `You can reach Nikhil directly via:\n• Email: nikhil9508821695@gmail.com\n• LinkedIn: https://linkedin.com/in/nikhil-kumar-0n7\n• GitHub: https://github.com/nikhil007-git\nHe is currently open to summer internships and freelance collaborations!`
  },
  {
    keywords: ['github', 'repo', 'repositories', 'code'],
    answer: `Nikhil actively maintains two GitHub accounts:\n• Primary: https://github.com/nikhil007-git\n• Secondary: https://github.com/nikhilkumar95f\nTake a look at his repositories including KisanMitra, VGI Canteen, and Weather Application.`
  },
  {
    keywords: ['leetcode', 'dsa', 'geeksforgeeks', 'problem solving', 'gfg'],
    answer: `Nikhil regularly practices data structures and algorithmic problem solving on:\n• LeetCode: https://leetcode.com/u/Nikhil_kumar_10/\n• GeeksforGeeks: https://www.geeksforgeeks.org/profile/nikhil950qj4g`
  },
  {
    keywords: ['resume', 'cv'],
    answer: `You can review and download Nikhil's resume directly via the 'Resume' button in the navigation bar and hero section of this portfolio!`
  },
  {
    keywords: ['ai', 'exploring', 'learning', 'future'],
    answer: `Nikhil is currently exploring Next.js 15 Server Components & Server Actions, Agentic AI workflows with multi-step reasoning, Retrieval-Augmented Generation (RAG), and backend system design optimization.`
  }
];

export const STARTER_QUESTIONS = [
  'What is Nikhil\'s technical stack?',
  'Tell me about the KisanMitra project',
  'How does the VGI Canteen system work?',
  'Where does Nikhil study and when does he graduate?',
  'How can I get in touch with Nikhil?'
];

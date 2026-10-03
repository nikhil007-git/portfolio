import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { portfolioData } from '@/content/portfolioData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${portfolioData.name} — Full-Stack Developer & AI Explorer`,
  description: `${portfolioData.name} is a Full-Stack Developer & B.Tech CSE student (2025–2029) at Vishveshwarya Group of Institutions. Explore projects like KisanMitra and VGI Canteen.`,
  keywords: [
    'Nikhil Kumar',
    'Full-Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Node.js',
    'Vishveshwarya Group of Institutions',
    'VGI Greater Noida',
    'B.Tech CSE',
    'KisanMitra',
    'Portfolio'
  ],
  authors: [{ name: portfolioData.name, url: 'https://github.com/nikhil007-git' }],
  creator: portfolioData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikhilkumar.dev',
    title: `${portfolioData.name} — Full-Stack Developer & AI Explorer`,
    description: portfolioData.headline,
    siteName: `${portfolioData.name} Portfolio`
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolioData.name} — Full-Stack Developer`,
    description: portfolioData.headline,
    creator: '@NikhilK86017698'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema for search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    jobTitle: 'Full-Stack Developer',
    description: portfolioData.headline,
    email: portfolioData.email,
    affiliation: {
      '@type': 'EducationalOrganization',
      name: portfolioData.education.institution,
      address: portfolioData.education.location
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: portfolioData.education.institution
    },
    sameAs: [
      'https://github.com/nikhil007-git',
      'https://github.com/nikhilkumar95f',
      'https://linkedin.com/in/nikhil-kumar-0n7',
      'https://leetcode.com/u/Nikhil_kumar_10/',
      'https://www.geeksforgeeks.org/profile/nikhil950qj4g',
      'https://x.com/NikhilK86017698'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

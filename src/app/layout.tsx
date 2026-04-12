import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { profile } from '../data/profile';
import './globals.css';

export const metadata: Metadata = {
  title: `${profile.basics.displayName} Portfolio`,
  description: `${profile.basics.title} portfolio for distributed systems, Java, Go, and AI agent work.`,
  authors: [{ name: profile.basics.displayName }],
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            {profile.basics.displayName}
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/#about">About</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>{profile.basics.displayName}</p>
          <p>{profile.basics.location}</p>
        </footer>
      </body>
    </html>
  );
}

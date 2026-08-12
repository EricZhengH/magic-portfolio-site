import Link from 'next/link';
import { profile } from '../data/profile';

const primarySkills = profile.skills.slice(0, 4);
const highlightedExperience = profile.experience.slice(0, 3);
const featuredProjects = profile.projects.slice(0, 5);
const focusItems = profile.currentFocus.slice(0, 4);
const linkedIn = profile.socialLinks.find((link) => link.label === 'LinkedIn');

function dateRange(startDate: string, endDate: string) {
  if (!startDate && !endDate) {
    return 'Dates TODO';
  }

  return `${startDate || 'TODO'} - ${endDate || 'Present'}`;
}

export default function HomePage() {
  return (
    <main>
      <section className="hero section-band" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">Developer Portfolio</p>
          <h1 id="hero-heading">{profile.basics.displayName}</h1>
          <p className="hero-title">{profile.basics.title}</p>
          <p className="hero-summary">
            Java and Go engineer focused on high-concurrency distributed systems, performance
            optimization, data platforms, and practical AI agent integration.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/resume">
              View Resume
            </Link>
            <a className="button secondary" href={profile.basics.github}>
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Network equipment in a data center"
          />
        </div>
      </section>

      <section className="section-band" id="about" aria-labelledby="about-heading">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-heading">Distributed systems, data platforms, and backend execution.</h2>
        </div>
        <div className="about-grid">
          <p>{profile.basics.summary}</p>
          <dl className="facts">
            <div>
              <dt>Location</dt>
              <dd>{profile.basics.location}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{profile.basics.yearsOfExperience}</dd>
            </div>
            <div>
              <dt>English</dt>
              <dd>IELTS 6.5</dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd>
                {profile.basics.website ? <a href={profile.basics.website}>ericzhengh.com</a> : 'TODO'}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section-band" aria-labelledby="experience-heading">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-heading">Production systems with measurable scale.</h2>
        </div>
        <div className="timeline">
          {highlightedExperience.map((item) => (
            <article className="timeline-item" key={item.organization}>
              <p className="date">{dateRange(item.startDate, item.endDate)}</p>
              <h3>{item.organization}</h3>
              <p className="role">{item.role}</p>
              <ul>
                {item.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" id="projects" aria-labelledby="projects-heading">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-heading">Open source work and current technical focus.</h2>
        </div>
        <div className="project-list">
          {featuredProjects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <div className="project-meta">
                <p>{project.technologies.join(' / ')}</p>
                <a href={project.url}>Repository</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" aria-labelledby="focus-heading">
        <div className="section-heading">
          <p className="eyebrow">Current Focus</p>
          <h2 id="focus-heading">AI integration themes found in the source profile.</h2>
        </div>
        <div className="focus-grid">
          {focusItems.map((item) => (
            <article className="focus-card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
              {item.todo ? <p className="todo">{item.todo}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" aria-labelledby="skills-heading">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading">Technical stack from the extracted resume content.</h2>
        </div>
        <div className="skills-grid">
          {primarySkills.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band contact-band" id="contact" aria-labelledby="contact-heading">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-heading">Melbourne-based backend and fullstack developer.</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.basics.email}`}>
            {profile.basics.email}
          </a>
          <a className="button secondary" href={`tel:${profile.basics.phone.replaceAll(' ', '')}`}>
            {profile.basics.phone}
          </a>
          {profile.basics.website ? (
            <a className="button secondary" href={profile.basics.website}>
              Website
            </a>
          ) : null}
          <a className="button secondary" href={profile.basics.github}>
            GitHub
          </a>
          {linkedIn?.url ? (
            <a className="button secondary" href={linkedIn.url}>
              LinkedIn
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}

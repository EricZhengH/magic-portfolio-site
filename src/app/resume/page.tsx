import Link from 'next/link';
import { profile } from '../../data/profile';

function dateRange(startDate: string, endDate: string) {
  if (!startDate && !endDate) {
    return 'Dates TODO';
  }

  return `${startDate || 'TODO'} - ${endDate || 'Present'}`;
}

export default function ResumePage() {
  return (
    <main className="resume-page">
      <section className="section-band resume-intro" aria-labelledby="resume-heading">
        <p className="eyebrow">Resume</p>
        <h1 id="resume-heading">{profile.basics.displayName}</h1>
        <p>{profile.basics.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href="mailto:zhenghangtxdyr@gmail.com">
            Email
          </a>
          <Link className="button secondary" href="/#projects">
            Projects
          </Link>
        </div>
      </section>

      <section className="section-band" aria-labelledby="resume-experience-heading">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2 id="resume-experience-heading">Professional history</h2>
        </div>
        <div className="resume-stack">
          {profile.experience.map((item) => (
            <article className="resume-entry" key={`${item.organization}-${item.startDate}`}>
              <div>
                <h3>{item.organization}</h3>
                <p className="role">{item.role}</p>
              </div>
              <p className="date">{dateRange(item.startDate, item.endDate)}</p>
              <ul>
                {item.bullets.slice(0, 4).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-band" aria-labelledby="resume-education-heading">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2 id="resume-education-heading">Education and achievements</h2>
        </div>
        <div className="education-list">
          {profile.education.map((item) => (
            <article className="focus-card" key={`${item.institution}-${item.credential}`}>
              <h3>{item.institution}</h3>
              <p>
                {item.credential}, {item.field}
              </p>
              <p className="date">{dateRange(item.startDate, item.endDate)}</p>
              {item.todo ? <p className="todo">{item.todo}</p> : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

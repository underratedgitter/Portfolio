import { certifications, education, profile } from "../data/content";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

export function About() {
  return (
    <section id="about" className="surface-paper section-y relative scroll-mt-14">
      <Rule ink />
      <Reveal className="wrap grid gap-x-[var(--space-2xl)] gap-y-[var(--space-xl)] lg:grid-cols-12">
        <h2 className="display text-[3rem] sm:text-[4.5rem] lg:col-span-5">Reliable by default, from pipeline to production.</h2>

        <div className="space-y-4 body-copy text-ink-mute lg:col-span-4 lg:col-start-6 lg:pt-3">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-col gap-[var(--space-xl)] lg:col-span-3 lg:col-start-10 lg:pt-3">
          <a href="/Suraj_Patel_Resume.pdf" target="_blank" rel="noreferrer" className={`display self-start text-[2rem] leading-none border-b border-ink/35 pb-1 transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:opacity-70`}>
            Download résumé
          </a>
          <div>
            <h3 className="label text-ink-mute">Education</h3>
            <p className="mt-3 text-[15px] leading-snug">{education.degree}</p>
            <p className="label mt-2 text-ink-mute">
              {education.school.split(",")[0]}, {education.range}
            </p>
          </div>
          <div>
            <h3 className="label text-ink-mute">Certifications</h3>
            <ul className="mt-3 space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-[14px] leading-snug">
                  {cert.name}
                  <span className="label ml-2 text-ink-mute">{cert.org}</span>
                </li>
              ))}
            </ul>
            <a href={profile.linkedinCertifications} target="_blank" rel="noreferrer" className={`label mt-5 inline-block border-b border-ink/35 pb-1 transition-colors duration-200 hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink active:opacity-70`}>
              View credentials on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

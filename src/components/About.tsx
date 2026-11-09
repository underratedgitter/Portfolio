import { certifications, education, profile } from "../data/content";
import { LabelCell } from "./LabelCell";
import { Reveal } from "./Reveal";
import { Rule } from "./Rule";

export function About() {
  return (
    <section>
      <LabelCell
        id="about"
        index="04"
        align="end"
        note="Bharuch, India"
        title={
          <>
            About <em>me</em>
          </>
        }
      />
      <div className="relative grid lg:grid-cols-12">
        <Rule />
        <Reveal className="relative px-4 pb-10 pt-5 sm:px-6 lg:col-span-5">
          <Rule className="lg:hidden" />
          <Rule side="right" className="hidden lg:block" />
          <p className="label text-faint">In short</p>
          <p className="display mt-6 text-[2.6rem] leading-[0.98] sm:text-[3.2rem]">
            Reliable by <em>default</em>, from pipeline to production.
          </p>
        </Reveal>

        <Reveal className="relative px-4 pb-10 pt-5 sm:px-6 lg:col-span-4">
          <Rule className="lg:hidden" />
          <Rule side="right" className="hidden lg:block" />
          <p className="label text-faint">Story</p>
          <div className="mt-6 space-y-4 body-copy text-paper/85">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex flex-col gap-8 px-4 pb-10 pt-5 sm:px-6 lg:col-span-3">
          <a href="/Suraj_Patel_Resume.pdf" target="_blank" rel="noreferrer" className="group">
            <p className="label text-faint">Résumé</p>
            <p className="display mt-3 text-[2.2rem] leading-none">
              Download <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </p>
          </a>
          <div>
            <p className="label text-faint">Education</p>
            <p className="mt-3 text-[15px] leading-snug text-paper/85">{education.degree}</p>
            <p className="label mt-2 text-faint">
              {education.school.split(",")[0]} · {education.range}
            </p>
          </div>
          <div>
            <p className="label text-faint">Certifications</p>
            <ul className="mt-3 space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-[14px] leading-snug">
                  {cert.name}
                  <span className="label ml-2 text-faint">{cert.org}</span>
                </li>
              ))}
            </ul>
            <a
              href={profile.linkedinCertifications}
              target="_blank"
              rel="noreferrer"
              className="group label mt-5 inline-flex items-center gap-2 border-b border-line-strong pb-1 transition-colors duration-200 hover:border-accent"
            >
              View credentials on LinkedIn
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

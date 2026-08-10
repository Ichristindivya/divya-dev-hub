import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Award,
  FolderCode,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christin Divya I — Python Developer & MCA Student Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Christin Divya I, MCA student and aspiring Python developer skilled in PHP, MySQL, Java, Python, RDBMS and UI/UX design.",
      },
      { property: "og:title", content: "Christin Divya I — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "MCA student and aspiring Python developer. Internships in IoT, data analytics and hardware troubleshooting.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const contacts = [
  { icon: Phone, label: "9944845218", href: "tel:+919944845218" },
  { icon: Mail, label: "christindivya112@gmail.com", href: "mailto:christindivya112@gmail.com" },
  { icon: Github, label: "Ichristindivya", href: "https://github.com/Ichristindivya" },
  {
    icon: Linkedin,
    label: "christin-divya",
    href: "https://www.linkedin.com/in/christin-divya-0abb16416",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (PG)",
    place: "Holy Cross College",
    meta: "2025 – 2027",
  },
  {
    degree: "Bachelor of Computer Applications (UG)",
    place: "St. Antony's College of Arts and Sciences for Women",
    meta: "2022 – 2025",
  },
  {
    degree: "Higher Secondary (12th)",
    place: "Little Flower Girls' Higher Secondary School",
    meta: "70%",
  },
  {
    degree: "SSLC (10th)",
    place: "Little Flower Girls' Higher Secondary School",
    meta: "67%",
  },
];

const internships = [
  { org: "Gandhigram Institute", role: "Hardware & Troubleshooting Internship", year: "2024" },
  { org: "HCC-IICT", role: "Internet of Things (IoT) Internship", year: "2025" },
  { org: "T4TEQ", role: "Data Analytics Internship", year: "2025" },
];

const certificates = [
  { name: "MongoDB", year: "2024" },
  { name: "Microsoft Fabric", year: "2024" },
  { name: "NPTEL – Database Management System", year: "2023" },
  { name: "NPTEL – The Psychology of Language", year: "2025" },
  { name: "Typewriting English (Senior)", year: "2022" },
  { name: "Typewriting Tamil (Junior)", year: "2023" },
];

const skills = ["PHP", "MySQL", "Advanced Java", "C", "Python", "RDBMS", "UI/UX Design"];

const strengths = [
  "Problem Solving",
  "Self-Learning",
  "Quick Learner",
  "Team Collaboration",
  "Time Management",
];

function SectionHeading({ icon: Icon, eyebrow, title }: { icon: typeof Award; eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      {/* Hero */}
      <header className="surface relative overflow-hidden p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-3 text-4xl leading-tight font-semibold sm:text-6xl">
          Christin <span className="text-gradient">Divya I</span>
        </h1>
        <p className="mt-3 text-lg text-accent">MCA Student · Aspiring Python Developer</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Motivated MCA student with a strong foundation in Python development, databases and web
          technologies. Passionate about learning new technologies and building practical
          applications, and seeking an opportunity to contribute technical and problem-solving
          skills while gaining professional experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {contacts.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </div>
        </div>

      </header>


      {/* Skills + strengths */}
      <section className="mt-16">
        <SectionHeading icon={Sparkles} eyebrow="What I bring" title="Skills & Strengths" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="surface p-6">
            <h3 className="text-lg font-semibold">Technical Skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="surface p-6">
            <h3 className="text-lg font-semibold">Strengths</h3>
            <ul className="mt-4 space-y-2.5">
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mt-16">
        <SectionHeading icon={GraduationCap} eyebrow="Academics" title="Education" />
        <div className="space-y-4 border-l border-border pl-6">
          {education.map((e) => (
            <div key={e.degree} className="relative surface p-5">
              <span className="absolute -left-[31px] top-7 size-2.5 rounded-full bg-primary" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{e.degree}</h3>
                <span className="text-sm text-primary">{e.meta}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internships */}
      <section className="mt-16">
        <SectionHeading icon={Briefcase} eyebrow="Experience" title="Internships" />
        <div className="grid gap-5 sm:grid-cols-3">
          {internships.map((i) => (
            <div key={i.org} className="surface p-6">
              <span className="text-sm text-accent">{i.year}</span>
              <h3 className="mt-2 text-lg font-semibold">{i.org}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project */}
      <section className="mt-16">
        <SectionHeading icon={FolderCode} eyebrow="Work" title="Project" />
        <article className="surface p-8">
          <h3 className="text-2xl font-semibold">E-Commerce Online Shopping Website</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {["PHP", "MySQL", "HTML", "CSS", "JavaScript"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-accent/40 px-3 py-1 text-xs text-accent"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Developed a responsive online shopping platform featuring secure user authentication,
            interactive product catalog management, a dynamic shopping cart system, and relational
            database integration.
          </p>
        </article>
      </section>

      {/* Certificates */}
      <section className="mt-16">
        <SectionHeading icon={Award} eyebrow="Credentials" title="Certificates" />
        <div className="grid gap-4 sm:grid-cols-2">
          {certificates.map((c) => (
            <div
              key={c.name}
              className="surface flex items-center justify-between gap-4 px-5 py-4"
            >
              <span className="text-sm font-medium">{c.name}</span>
              <span className="text-sm text-primary">{c.year}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>Let's connect — </p>
        <a
          href="mailto:christindivya112@gmail.com"
          className="mt-1 inline-block text-base text-primary hover:underline"
        >
          christindivya112@gmail.com
        </a>
        <p className="mt-6 text-xs">© 2026 Christin Divya I</p>
      </footer>
    </main>
  );
}

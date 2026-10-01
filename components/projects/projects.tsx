import {
  ArrowRight,
  Bot,
  Camera,
  ExternalLink,
  FileText,
  Globe,
  Layers,
  Mail,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "bird-species",
    icon: Camera,
    iconLabel: "COMPUTER VISION & DEEP LEARNING",
    title: "Bird Species Identification from Image",
    description:
      "A deep learning computer vision system utilizing Convolutional Neural Networks (CNN) and OpenCV to classify bird species from uploaded photos. Features an interactive Flask web application that provides instant predictions and confidence ratings.",
    meta: "Python • CNN • OpenCV • Flask • Team of 4 (Final Project)",
    imageRatio: 16 / 9,
    image: "/projects/bird-species.jpg",
    imageAlt: "Bird Species Identification from Image dashboard mockup",
    githubUrl: "https://github.com/hacker6171/Bachelor-s-Final-Project",
  },
  {
    id: "resume-processor",
    icon: FileText,
    iconLabel: "AI & TALENT MATCHING",
    title: "Resume Processor for Talent Matching",
    description:
      "Automated resume screening and candidate evaluation tool. Parses PDF and DOCX files to extract applicant credentials, calculates keyword-based relevance rankings, and integrates Hugging Face NLP models to output structured JSON for recruitment pipelines.",
    meta: "Python • NLP • Hugging Face API • PyPDF2 • Jupyter",
    imageRatio: 16 / 9,
    image: "/projects/resume-processor.jpg",
    imageAlt: "Resume Processor for Talent Matching AI interface mockup",
    githubUrl: "https://github.com/hacker6171/ResumeProcessor",
  },
  {
    id: "job-tracker",
    icon: Mail,
    iconLabel: "WORKFLOW AUTOMATION",
    title: "Job Application Tracker – Automated Email Sending & Recruiter Log",
    description:
      "Python automation tool designed to streamline recruiter outreach. Sends personalized application emails via SMTP and maintains an automated tracking log in Excel with contact details, delivery dates, and follow-up timelines.",
    meta: "Python • SMTP Automation • openpyxl • Workflow Tooling",
    imageRatio: 16 / 9,
    image: "/projects/job-tracker.jpg",
    imageAlt: "Job Application Tracker and automated email sending dashboard mockup",
    githubUrl:
      "https://github.com/hacker6171/Job-Application-Tracker-Automated-Email-Sending-and-Recruiter-Log",
  },
  {
    id: "telegram-bot",
    icon: Bot,
    iconLabel: "CLOUD & BOT AUTOMATION",
    title: "AI-Powered Telegram Automation Bot",
    description:
      "Architected and deployed responsive Telegram automation bots for startup operations. Features custom Q&A workflows, feedback collection pipelines, interactive quizzes, and webhook integrations deployed on Microsoft Azure Functions and Web Apps.",
    meta: "Python • Flask • Telegram Bot API • Azure Functions & Webhooks",
    imageRatio: 16 / 9,
    image: "/projects/telegram-bot.jpg",
    imageAlt: "AI-Powered Telegram Bot automation interface mockup",
  },
  {
    id: "temple-web",
    icon: Globe,
    iconLabel: "CLIENT WEB PLATFORM",
    title: "Sri Prasanna Venkateswara Swamy Devasthanam Web Portal",
    description:
      "Delivered a community web portal for Sridevi Bhoodevi Sametha Sri Prasanna Venkateswara Swamy Devasthanam, Balabhadrapuram. Includes daily pooja and darshan schedules, temple history, seva information, and community announcements.",
    meta: "Web Development • Client Delivery • OmniTensors",
    imageRatio: 16 / 9,
    image: "/projects/temple-web.jpg",
    imageAlt: "Sri Prasanna Venkateswara Swamy Devasthanam temple website mockup",
  },
  {
    id: "cloud-microservices",
    icon: Layers,
    iconLabel: "CLOUD INFRASTRUCTURE",
    title: "Healthcare Cloud & Microservices Backend",
    description:
      "Contributed to cloud microservices development, performance monitoring, and production deployment workflows on client engagements with Express Scripts by Evernorth through Trinitiii, LLC across multi-cloud environments.",
    meta: "AWS • Microsoft Azure • Microservices • Performance Monitoring",
    imageRatio: 16 / 9,
    image: "/projects/cloud-microservices.jpg",
    imageAlt: "Cloud Operations and Microservices Monitoring dashboard mockup",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Featured projects
            </h2>
            <p className="max-w-[36ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              A showcase of machine learning models, cloud systems, and Python automation workflows I&rsquo;ve built and deployed.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card group relative flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5 transition-colors hover:border-foreground/20">
        <header className="flex items-center justify-between gap-2.5 px-1 pt-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold tracking-wider text-foreground/80 uppercase truncate">
              {project.iconLabel}
            </span>
          </div>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-foreground/10 bg-foreground/3 px-2.5 py-1 text-xs font-medium text-foreground/75 hover:bg-foreground/8 hover:text-foreground transition-colors shrink-0"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="h-3.5 w-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
            </a>
          ) : null}
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50 font-mono">
            {project.meta}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}

import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Vighneswara Manda</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                A <strong className="font-semibold text-foreground">Software Engineer &amp; Python Developer</strong> specializing in automation workflows, intelligent backend systems, and cloud-supported architectures. Holding an <strong className="font-semibold text-foreground">AWS Certified Solutions Architect – Associate</strong> certification and a Master of Science in Computer Technology &amp; Information Systems (GPA 3.9/4) from Eastern Illinois University.
              </p>
              <p>
                My experience spans building practical applications with <strong className="font-semibold text-foreground">Python, SQL, AWS, Microsoft Azure, and Docker</strong>. I have architected and deployed diverse solutions ranging from Hugging Face AI-powered resume processing pipelines and automated outreach engines to enterprise Telegram bots hosted on Azure Web Apps &amp; Functions.
              </p>
              <p>
                Currently co-founding <strong className="font-semibold text-foreground">OmniTensors</strong>, a technology initiative delivering custom software, process automation, and web platforms. Beyond engineering, I covered campus stories and university events as a freelance photographer for <strong className="font-semibold text-foreground">The Daily Eastern News</strong>.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}

"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

import Image from "next/image";

type Polaroid = {
  id: string;
  rotate: number;
  src: string;
  alt: string;
};

const PHOTOS: Polaroid[] = [
  {
    id: "a",
    rotate: -8,
    src: "/photos/campus-hall.jpg",
    alt: "Historic campus clock tower at golden hour",
  },
  {
    id: "b",
    rotate: 6,
    src: "/photos/graduation.jpg",
    alt: "University commencement ceremony celebration",
  },
  {
    id: "c",
    rotate: -4,
    src: "/photos/library.jpg",
    alt: "University library study evening",
  },
  {
    id: "d",
    rotate: 7,
    src: "/photos/athletics.jpg",
    alt: "Collegiate soccer championship action",
  },
  {
    id: "e",
    rotate: -6,
    src: "/photos/autumn.jpg",
    alt: "Autumn campus walk under golden trees",
  },
  {
    id: "f",
    rotate: 5,
    src: "/photos/concert.jpg",
    alt: "Live student festival music concert",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      initial={{ opacity: 0, y: -120, filter: "blur(18px)", rotate: photo.rotate }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotate: photo.rotate }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      style={{
        x: tx,
        y: ty,
        rotate: photo.rotate,
      }}
      className="group relative aspect-[3/4] w-[clamp(6rem,11vw,9rem)] shrink-0 overflow-hidden rounded-2xl border-6 border-neutral-300/40 bg-white p-1.5 shadow-md dark:border-white/15 dark:bg-neutral-900 transition-transform duration-300 hover:scale-105 hover:z-20 cursor-pointer"
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 110px, 150px"
          className="object-cover select-none transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex flex-wrap w-full items-start justify-center gap-1 px-4 sm:gap-1.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}

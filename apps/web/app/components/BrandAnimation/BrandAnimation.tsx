"use client";

import { MotionConfig, motion } from "motion/react";
import { useId, useMemo } from "react";
import styles from "./BrandAnimation.module.css";
import { cn } from "@/utils/cn";

type BrandAnimationProps = {
  className?: string;
};

export function BrandAnimation({ className }: BrandAnimationProps) {
  const id = useId().replace(/:/g, "");
  const gradientOneId = `brand-gradient-one-${id}`;
  const gradientTwoId = `brand-gradient-two-${id}`;
  const blurOneId = `brand-blur-one-${id}`;
  const blurTwoId = `brand-blur-two-${id}`;
  const seedBase = useMemo(() => hashString(id), [id]);

  const xOne = useMemo(() => makeRandomSeries(seedBase + 11, 6, -76.5, 76.5, 0), [seedBase]);
  const yOne = useMemo(() => makeRandomSeries(seedBase + 23, 6, -63, 63, 0), [seedBase]);
  const rOne = useMemo(() => makeRandomSeries(seedBase + 37, 6, 86, 95, 90), [seedBase]);

  const xTwo = useMemo(() => makeRandomSeries(seedBase + 47, 6, -67.5, 67.5, 0), [seedBase]);
  const yTwo = useMemo(() => makeRandomSeries(seedBase + 59, 6, -54, 54, 0), [seedBase]);
  const rTwo = useMemo(() => makeRandomSeries(seedBase + 71, 6, -95, -85, -90), [seedBase]);

  const polyShapes = useMemo(
    () =>
      rotateArray(
        [
          "70,260 450,70 450,450",
          "91,248 432,88 457,435",
          "58,275 452,64 432,463",
          "85,234 438,92 462,426",
          "64,286 460,72 426,470",
        ],
        seedBase % 5
      ),
    [seedBase]
  );

  const pathShapes = useMemo(
    () =>
      rotateArray(
        [
          "M90 280 Q40 180 90 80 L490 280 L90 480 Q40 380 90 280 Z",
          "M108 280 Q64 195 108 95 L478 280 L108 465 Q64 365 108 280 Z",
          "M78 280 Q31 168 78 68 L502 280 L78 492 Q31 392 78 280 Z",
          "M98 280 Q48 170 98 74 L482 280 L98 486 Q48 394 98 280 Z",
          "M82 280 Q35 190 82 92 L500 280 L82 468 Q35 366 82 280 Z",
        ],
        (seedBase + 2) % 5
      ),
    [seedBase]
  );

  return (
    <MotionConfig reducedMotion="never">
    <div className={cn(styles.root, className, 'z-2')} aria-hidden="true">
      <motion.span
        className={styles.shapeOne}
        initial={{ rotate: 90 }}
        animate={{
          x: xOne,
          y: yOne,
          rotate: rOne,
        }}
        transition={{
          duration: 15.7,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 520 520" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientOneId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="27.71%" stopColor="#79DFAF" />
              <stop offset="50.6%" stopColor="#72A5E8" />
              <stop offset="77.53%" stopColor="#1C1C1C" />
            </linearGradient>
            <filter id={blurOneId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="57" />
            </filter>
          </defs>
          <g filter={`url(#${blurOneId})`}>
            <motion.polygon
              points="70,260 450,70 450,450"
              fill={`url(#${gradientOneId})`}
              animate={{
                points: [...polyShapes, polyShapes[0]],
              }}
              transition={{
                duration: 17.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        </svg>
      </motion.span>
      <motion.span
        className={styles.shapeTwo}
        initial={{ rotate: -90 }}
        animate={{
          x: xTwo,
          y: yTwo,
          rotate: rTwo,
        }}
        transition={{
          duration: 19.4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={gradientTwoId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="28.07%" stopColor="#E98EDD" />
              <stop offset="50.85%" stopColor="#72A5E8" />
              <stop offset="79.51%" stopColor="#1C1C1C" />
            </linearGradient>
            <filter id={blurTwoId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="57" />
            </filter>
          </defs>
          <g filter={`url(#${blurTwoId})`} opacity="0.8">
            <motion.path
              d="M90 280 Q40 180 90 80 L490 280 L90 480 Q40 380 90 280 Z"
              fill={`url(#${gradientTwoId})`}
              animate={{
                d: [...pathShapes, pathShapes[0]],
              }}
              transition={{
                duration: 21.1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        </svg>
      </motion.span>
    </div>
    </MotionConfig>
  );
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) || 1;
}

function mulberry32(seed: number) {
  return function rand() {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeRandomSeries(
  seed: number,
  count: number,
  min: number,
  max: number,
  startAndEnd: number
): number[] {
  const rand = mulberry32(seed);
  const values = [startAndEnd];

  for (let i = 0; i < count - 2; i += 1) {
    values.push(min + (max - min) * rand());
  }

  values.push(startAndEnd);
  return values;
}

function rotateArray<T>(arr: T[], by: number): T[] {
  const offset = ((by % arr.length) + arr.length) % arr.length;
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}

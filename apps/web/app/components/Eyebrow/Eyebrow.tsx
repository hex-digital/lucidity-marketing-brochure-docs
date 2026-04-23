import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import styles from "./Eyebrow.module.css";

export type EyebrowVariant =
  | "rose-blush"
  | "blush-iris"
  | "iris-haze"
  | "haze-mist"
  | "mist-dew"
  | "dew-rose";

const variantClassMap: Record<EyebrowVariant, string> = {
  "rose-blush": styles.variantRoseBlush,
  "blush-iris": styles.variantBlushIris,
  "iris-haze": styles.variantIrisHaze,
  "haze-mist": styles.variantHazeMist,
  "mist-dew": styles.variantMistDew,
  "dew-rose": styles.variantDewRose,
};

export type EyebrowProps = {
  variant?: EyebrowVariant;
  /** Plain string label (optional if you pass `children` instead). */
  label?: string;
  children?: ReactNode;
  className?: string;
};

export function Eyebrow({
  variant = "blush-iris",
  label,
  children,
  className,
}: EyebrowProps) {
  const content = children ?? label;

  return (
    <div className={cn(styles.root, variantClassMap[variant], className)}>
      <p className={styles.text}>{content}</p>
    </div>
  );
}

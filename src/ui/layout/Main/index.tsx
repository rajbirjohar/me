'use client';

import { PropsWithChildren } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/utils/cn';           // ← your helper
import styles from './styles.module.css'; // optional – keep the old .main rules

type Props = PropsWithChildren<{
  className?: string;
  /** percentage of page where the animation should start (0-1) */
  startAt?: number;
  /** target radius in px */
  maxRadius?: number;
}>;

export default function Main({
  children,
  className,
  startAt = 0.75,   // begin in the last 25 % of the page
  maxRadius = 32,   // end value
}: Props) {
  // Global scroll (no target) = whole document progress 0-1
  const { scrollYProgress } = useScroll();

  // Map [startAt → 1]   to   [0 → maxRadius]
  const radius = useTransform(
    scrollYProgress,
    [startAt, 1],
    [0, maxRadius]
  );

  return (
    <motion.main
      // re-use your `.main` class so other styles stay intact
      className={cn(styles.main, className)}
      style={{
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      }}
    >
      {children}
    </motion.main>
  );
}

import { Accordion as FumaAccordion } from 'fumadocs-ui/components/accordion';
import { cn } from '@/lib/cn';
import styles from './accordion.module.css';

export const Accordion: typeof FumaAccordion = (props) => (
  <FumaAccordion {...props} className={cn(styles.accordion, props.className)} />
);

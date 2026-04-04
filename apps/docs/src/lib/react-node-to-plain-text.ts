import { Children, isValidElement, type ReactElement, type ReactNode } from 'react';

/**
 * Flattens React node trees to plain text (for JSON-LD, metadata, etc.).
 * Skips script/style; recurses through children of elements.
 */
export function reactNodeToPlainText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') {
    return '';
  }
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(reactNodeToPlainText).filter(Boolean).join(' ');
  }
  if (!isValidElement(node)) {
    return '';
  }

  const { type, props } = node;
  if (type === 'script' || type === 'style') {
    return '';
  }

  const p = props as {
    children?: ReactNode;
    dangerouslySetInnerHTML?: unknown;
  };

  if (p.dangerouslySetInnerHTML) {
    return '';
  }

  if (p.children != null) {
    return reactNodeToPlainText(p.children);
  }

  return '';
}

/** Collapses whitespace to single spaces (schema.org Answer.text is plain text). */
export function normalizePlainText(s: string): string {
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Maps Accordion children to FAQ entries. Skips non-Accordion elements.
 */
export function accordionChildrenToFaqEntries(
  children: ReactNode,
  isAccordion: (el: ReactElement) => boolean,
): { question: string; answer: string }[] {
  const out: { question: string; answer: string }[] = [];

  // Children.toArray preserves keys and flattens fragments — needed for MDX accordion lists.
  // eslint-disable-next-line react-core/no-children-to-array -- intentional iteration over MDX children
  for (const child of Children.toArray(children)) {
    if (!isValidElement(child) || !isAccordion(child)) {
      continue;
    }
    const { title, children: body } = child.props as {
      title?: ReactNode;
      children?: ReactNode;
    };
    const question = normalizePlainText(reactNodeToPlainText(title ?? ''));
    const answer = normalizePlainText(reactNodeToPlainText(body ?? ''));
    if (question && answer) {
      out.push({ question, answer });
    }
  }

  return out;
}

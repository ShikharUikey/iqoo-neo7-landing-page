'use client';

import { RefObject, useEffect, useState } from 'react';

interface UseInViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options: UseInViewOptions = {}
): boolean {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!ref.current) return;

    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              observer.disconnect();
            }
          } else {
            if (!triggerOnce) {
              setIsInView(false);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, triggerOnce]);

  return isInView;
}

import { useEffect, useState } from 'react';

type UseSystemThemeDetectorReturn = 'light' | 'dark';

const mediaQueryMatcher = '(prefers-color-scheme: dark)';

const useSystemThemeDetector = (): UseSystemThemeDetectorReturn => {
  const getCurrentTheme = () => window.matchMedia(mediaQueryMatcher).matches;
  const [isDark, setIsDark] = useState<boolean | undefined>(undefined);

  const mediaQueryListener = ((e: MediaQueryList, _: MediaQueryListEvent) => {
    setIsDark(e.matches);
  });

  useEffect(() => {
    if (isDark === undefined)
      setIsDark(getCurrentTheme());

    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkMediaQuery.addEventListener("change", mediaQueryListener as unknown as EventListenerObject);
  }, [isDark]);



  return isDark ? 'dark' : 'light';
}

export default useSystemThemeDetector;
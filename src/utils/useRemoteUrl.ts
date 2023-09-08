import { useEffect, useState } from 'react';

export const useRemoteUrl = (url?: string): { isReady: boolean; isFailed: boolean } => {
  const [isReady, setIsReady] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  useEffect(() => {
    if (!url) {
      return;
    }

    const script = document.createElement('script');

    script.src = url;
    script.type = 'text/javascript';
    script.async = true;

    setIsReady(false);
    setIsFailed(false);

    script.onload = (): void => {
      console.log(`[useRemoteUrl] Dynamic Script Loaded: ${url}`);
      setIsReady(true);
    };

    script.onerror = (): void => {
      console.error(`[useRemoteUrl] Dynamic Script Error: ${url}`);
      setIsReady(false);
      setIsFailed(true);
    };

    document.head.appendChild(script);

    return (): void => {
      console.log(` [useRemoteUrl] Dynamic Script Removed: ${url}`);
      document.head.removeChild(script);
    };
  }, [url]);

  return {
    isReady,
    isFailed,
  };
};
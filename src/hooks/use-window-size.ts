import { useState, useEffect } from "react";
import type { UseWindowSize } from "types";

function useWindowSize(): UseWindowSize {
  const [windowSize, setWindowSize] = useState<UseWindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;

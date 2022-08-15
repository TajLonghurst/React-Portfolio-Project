import { useEffect, useState, useRef } from "react";

const useAnimationTimer = (state: boolean, timeDuration: number) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const secondRender = useRef(false);

  useEffect(() => {
    if (secondRender.current) {
      if (state) {
        const timer = setTimeout(() => setIsAnimated(false), timeDuration);
        setIsAnimated(true);
        return () => {
          clearTimeout(timer);
        };
      }
    } else {
      secondRender.current = true;
    }
  }, [state, timeDuration]);

  return { isAnimated };
};

export default useAnimationTimer;

import { type FC, type ReactNode, useEffect, useRef } from "react";
import { useInView, type UseInViewOptions } from "motion/react";
import { Box } from "@chakra-ui/react";
import { transformStyle } from "@/libraries/fadeTransition";
import type { FadeTransition } from "@/types/fadeTransition";

type Props = UseInViewOptions &
  FadeTransition & {
    children: ReactNode;
    onInView?: (isInView: boolean) => void;
  };

const ScrollFadeInContainer: FC<Props> = ({
  children,
  onInView,
  direction = "Y",
  offset = "200px",
  duration = 500,
  ...useInViewOptions
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, useInViewOptions);

  useEffect(() => onInView?.(isInView), [isInView]);

  return (
    <Box
      ref={ref}
      transition={`opacity ${duration}ms, transform ${duration}ms`}
      css={{
        ...(isInView
          ? {
              opacity: 1,
              transform: "none",
            }
          : {
              opacity: 0,
              transform: transformStyle(direction, offset),
            }),
      }}
    >
      {children}
    </Box>
  );
};

export default ScrollFadeInContainer;

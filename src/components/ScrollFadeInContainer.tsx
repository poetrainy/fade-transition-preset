"use client";

import { type FC, type ReactNode, useRef } from "react";
import { useInView, type UseInViewOptions } from "motion/react";
import { Box } from "@chakra-ui/react";
import { transformStyle } from "@/libraries/fadeTransition";
import type { FadeTransition } from "@/types/fadeTransition";

type Props = UseInViewOptions &
  FadeTransition & {
    children: ReactNode;
  };

const ScrollFadeTransitionContainer: FC<Props> = ({
  children,
  direction = "Y",
  offset = "200px",
  duration = 500,
  ...useInViewOptions
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, useInViewOptions);

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

export default ScrollFadeTransitionContainer;

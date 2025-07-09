"use client";

import { type FC, type ReactNode, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { transformStyle } from "@/libraries/fadeTransition";
import type { FadeTransition } from "@/types/fadeTransition";

type Props = FadeTransition & {
  children: ReactNode;
};

const PageFadeTransitionContainer: FC<Props> = ({
  children,
  direction = "Y",
  offset = "200px",
  duration = 500,
}) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (!isInView) {
      setIsInView(true);
    }
  }, [isInView]);

  return (
    <Box
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

export default PageFadeTransitionContainer;

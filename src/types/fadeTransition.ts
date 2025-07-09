export type FadeTransition = {
  /**
   * Direction of the fade transition.
   *
   * - x: horizontal
   * - y: vertical
   */
  direction?: "x" | "y" | "X" | "Y";
  /**
   * Offset distance from the starting point of the fade transition. (e.g., "24px")
   */
  offset?: string;
  /**
   * Duration of the fade transition.
   *
   * Unit: ms
   */
  duration?: number;
};

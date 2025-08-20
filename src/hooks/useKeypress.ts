"use client";

import { useEffect, useCallback } from "react";

/**
 * A React 19-compatible hook for handling keypress events.
 * 
 * @param targetKey - The key or array of keys to listen for (e.g., 'Enter', 'ArrowLeft', ['Escape', 'q'])
 * @param handler - Function to call when the target key is pressed
 * @param options - Additional options for the event listener
 */
function useKeypress(
  targetKey: string | string[],
  handler: (event: KeyboardEvent) => void,
  options?: {
    /** Whether to prevent the default behavior when the key is pressed */
    preventDefault?: boolean;
    /** Whether to stop event propagation when the key is pressed */
    stopPropagation?: boolean;
    /** Whether to only trigger on keydown (default) or keyup */
    eventType?: "keydown" | "keyup";
    /** Whether the hook should be active */
    enabled?: boolean;
  }
): void {
  const {
    preventDefault = false,
    stopPropagation = false,
    eventType = "keydown",
    enabled = true,
  } = options || {};

  // Memoize the handler to prevent unnecessary re-renders
  const memoizedHandler = useCallback(
    (event: KeyboardEvent) => {
      const keys = Array.isArray(targetKey) ? targetKey : [targetKey];
      
      if (keys.includes(event.key)) {
        if (preventDefault) {
          event.preventDefault();
        }
        if (stopPropagation) {
          event.stopPropagation();
        }
        handler(event);
      }
    },
    [targetKey, handler, preventDefault, stopPropagation]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    // Add event listener to the document
    document.addEventListener(eventType, memoizedHandler);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener(eventType, memoizedHandler);
    };
  }, [memoizedHandler, eventType, enabled]);
}

export default useKeypress;

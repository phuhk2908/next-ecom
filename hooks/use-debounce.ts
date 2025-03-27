import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Custom hook for debouncing values
 * @param {*} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {*} Debounced value
 */
const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * A custom hook that creates a debounced version of a callback function
 *
 * @param callback - The function to be debounced
 * @param delay - The delay in milliseconds (default is 300ms)
 * @returns A memoized debounced version of the callback
 */
const useDebounceCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 300,
): T => {
  // Use a ref to store the timeout ID
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Create a debounced version of the callback
  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout
      timeoutRef.current = setTimeout(() => {
        // Execute the callback with the provided arguments
        callback(...args);

        // Clear the timeout ref
        timeoutRef.current = null;
      }, delay);
    },
    [callback, delay],
  ) as T;

  // Return the debounced callback
  return debouncedCallback;
};
export { useDebounce, useDebounceCallback };

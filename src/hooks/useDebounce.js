
import { useState, useEffect } from "react";

export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    // Cleanup: cancel previous timer on each keystroke
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

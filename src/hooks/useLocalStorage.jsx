import { useEffect, useState } from "react";

export function useLocalStorage(key, mode = "dark") {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      const stored = localStorage.getItem(key);
      stored ? (currentValue = JSON.parse(stored)) : (currentValue = mode);
    } catch (error) {
      console.log(error);
      currentValue = mode;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

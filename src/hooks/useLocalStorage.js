import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue) {
  // Initialize state with a function to retrieve data from localStorage
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get stored item by key from localStorage
      const item = window.localStorage.getItem(key);
      // Parse JSON stored item or return initialValue if not found
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Handle errors if any and log them
      console.error(error);
      // Return initialValue in case of error
      return initialValue;
    }
  });

  // Function to update storedValue and localStorage value
  const setValue = (value) => {
    try {
      // Allow value to be a function to update state based on previous value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Update state
      setStoredValue(valueToStore);
      // Store value in localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Handle errors if any and log them
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

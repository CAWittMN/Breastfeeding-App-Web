import { useState, useEffect } from "react";

/** Hook for keeping state data synced with local storage */
const useLocalStorage = (key, initialValue = null) => {
  const initialData = localStorage.getItem(key) || initialValue;
  const [data, setData] = useState(initialData);
  useEffect(() => {
    !data ? localStorage.removeItem(key) : localStorage.setItem(key, data);
  }, [data, key]);

  return [data, setData];
};

export default useLocalStorage;

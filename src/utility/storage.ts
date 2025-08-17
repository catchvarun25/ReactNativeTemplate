import { MMKV, useMMKVString, useMMKVObject } from "react-native-mmkv";
import { useEffect, useState } from "react";

// Initialize MMKV instance
export const storage = new MMKV({
  id: "my-app-storage",
});

/**
 * Set a value in storage
 */
export const setStorage = (key: string, value: string | object) => {
  if (typeof value === "string") {
    storage.set(key, value);
  } else {
    storage.set(key, JSON.stringify(value));
  }
};

/**
 * Get a value from storage
 */
export const getStorage = (key: string): string | object | null => {
  const storedValue = storage.getString(key);
  if (!storedValue) return null;

  if (typeof storedValue === "string") {
    return storedValue as string;
  } else {
    try {
      return JSON.parse(storedValue) as object;
    } catch {
      return null;
    }
  }
};

/**
 * Delete a value
 */
export const removeStorage = (key: string) => {
  storage.delete(key);
};

/**
 * Check if a key exists
 */
export const containsStorageKey = (key: string): boolean => {
  return storage.contains(key);
};

/**
 * Clear all keys
 */
export const clearStorage = () => {
  storage.clearAll();
};

//TODO: Below Hooks will be used after updating the veriosn to be >=2.6.0
/**
 * To observe the change in value of any key
 */

// export const useStorageString = (key: string) => {
//   // Custom hook logic to use storage
//   return useMMKVString(key, storage);
// };

// export const useStorageObject = <T>(key: string) => {
//   // Custom hook logic to use storage
//   return useMMKVObject<T>(key, storage);
// };

export const useStorage = (key: string) => {
  const [value, setValue] = useState<string | object | null>(() => {
    const storedValue = getStorage(key);
    return storedValue;
  });
  useEffect(() => {
    const listner = storage.addOnValueChangedListener((changedKey) => {
      if (changedKey == key) {
        const newValue = getStorage(key);
        setValue(newValue);
      }
    });
    return () => {
      listner.remove();
    };
  }, [key]);

  const updateValue = (newValue: string | object) => {
    setStorage(key, newValue);
  };

  return [value, updateValue];
};

export enum EStorageKeys {
  LayoutMode = "layoutMode",
}

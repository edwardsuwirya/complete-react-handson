import {useState} from "react";

export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return value;
            } else {
                if (defaultValue !== null) {
                    window.localStorage.setItem(keyName, defaultValue);
                }
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue) => {
        if (newValue === null) {
            window.localStorage.removeItem(keyName);
            return
        }
        try {
            window.localStorage.setItem(keyName, newValue);
        } catch (err) {
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
}

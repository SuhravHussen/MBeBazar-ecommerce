export default function localStorageManager(key: string, data?: any) {
    if (data) {
        // If data is provided, set it to local storage
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        // If data is not provided, get it from local storage
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
    }
    return true;
}

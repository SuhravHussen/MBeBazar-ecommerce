const getLocalStorage = (key: string, type: 'array' | 'object') => {
    const data = localStorage.getItem(key);
    const parsedData = type === 'array' ? JSON.parse(data || '[]') : JSON.parse(data || '{}');

    return parsedData;
};

export default getLocalStorage;

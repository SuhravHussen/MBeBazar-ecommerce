const getLocalStorage = (key: string, type: 'array' | 'object') => {
  const data = localStorage.getItem(key);
  let parsedData = null;
  console.log(null === null);

  if (data === 'undefined' || data === null) return null;
  else {
    console.log(data);
    parsedData = type === 'array' ? JSON.parse(data || '[]') : JSON.parse(data || '{}');
  }

  return parsedData;
};

export default getLocalStorage;

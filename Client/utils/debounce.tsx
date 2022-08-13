let debounceTimer: any;

const debounceSearch = (time: number, callback: any, ...arg: any[]) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(() => callback(...arg), time);
};

export default debounceSearch;

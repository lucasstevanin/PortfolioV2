let cache = {};

export const saveCache = () => {
  const serializedState = JSON.stringify(cache);
  sessionStorage.setItem("cache", serializedState);
};

export const loadCache = () => {
  const serializedState = sessionStorage.getItem("cache");
  if (serializedState === null) {
    return undefined;
  }
  return JSON.parse(serializedState);
};

export const setCache = (key, value) => {
  cache[key] = value;
};

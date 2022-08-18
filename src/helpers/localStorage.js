import { LOCAL_STORAGE_KEY } from "../constants";

export const save = (data) => {
  if (!window.localStorage) return false;
  const savingData = {
    ...data,
    savedAt: +new Date(),
  };
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savingData));
  return true;
};

export const load = () => {
  if (!window.localStorage) return {};
  const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(raw);
};
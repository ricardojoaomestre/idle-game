import { LOCAL_STORAGE_KEY } from "../constants";

export const save = (data) => {
  if (!window.localStorage) return false;
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  return true;
};

export const load = () => {
  if (!window.localStorage) return {};
  const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  return JSON.parse(raw);
};

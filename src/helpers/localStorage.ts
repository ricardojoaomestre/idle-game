// @ts-nocheck
import { LOCAL_STORAGE_KEY } from "../constants";

export const save = (data: GameConfig): boolean => {
  if (!window.localStorage) return false;
  const savingData: GameConfig = {
    ...data,
    savedAt: +new Date(),
  };
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savingData));
  return true;
};

export const load = (): GameConfig | null => {
  if (!window.localStorage) return null;

  const raw: string = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!raw) return null;

  const parsedData: GameConfig = JSON.parse(raw);
  return parsedData;
};

export const reset = (): boolean => {
  if (!window.localStorage) return false;

  window.localStorage.removeItem(LOCAL_STORAGE_KEY);

  return true;
};

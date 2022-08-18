export const interger = (value) => value.toFixed(0);
export const float = (value) =>
  value.toLocaleString("en-US", { maximumFractionDigits: 0 });

export const integer = (value) => value.toFixed(0);
export const float = (value) => {
  const lookup = [
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return value >= item.value;
    });
  return item
    ? `${(value / item.value).toFixed(2)} ${item.symbol}`
    : integer(value);
};

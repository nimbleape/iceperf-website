export const roundNumber = (n, precision) => {
  if (!n) {
    return 0;
  }
  if (!precision) {
    return Math.floor(n);
  }
  const power = Math.pow(10, precision)
  return Math.floor(n * power) / power;
};

export const fixedDecimals = (n, precision) => {
  if (!precision) {
    return roundNumber(n);
  }
  return roundNumber(n, precision).toFixed(precision);
};

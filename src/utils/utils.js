export const formatCurrency = (totalResult) => {
  const rounded = Math.ceil(totalResult);
  return `${rounded}.00`;
};

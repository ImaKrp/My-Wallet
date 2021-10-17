const formatAmountValue = (value: number): string => {
  return value.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
};

export default formatAmountValue;

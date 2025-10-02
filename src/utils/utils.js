export const generatePhoneNumber = () => {
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const areaCode = getRandom(100, 999);
  const prefix = getRandom(100, 999);
  const suffix = getRandom(1000, 9999);
  const extension = getRandom(10000, 99999);

  return `1-${areaCode}-${prefix}-${suffix} x${extension}`;
};

const generateRandomHexColor = () => {
  const getTwoDigitRandomHexValue = () =>
    Math.floor(Math.random() * 255)
      .toString(16)
      .padStart(2, '0');

  const r = getTwoDigitRandomHexValue(),
    g = getTwoDigitRandomHexValue(),
    b = getTwoDigitRandomHexValue();

  return `#${r}${g}${b}`;
};

const hexToRgbArray = (hexColorCode) => {
  const r = hexColorCode.slice(1, 3),
    g = hexColorCode.slice(3, 5),
    b = hexColorCode.slice(5, 7);

  return [r, g, b].map((i) => parseInt(i, 16));
};

export { generateRandomHexColor, hexToRgbArray };

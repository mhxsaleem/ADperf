export const phone_number_format = (str, mask): string => {
  if (!mask) return str;

  const numeric = str.replaceAll(/[^\d]/g, '');

  let idx = 0;

  const formated = mask.split('').map((el) => {
    if (el === '#') {
      el = numeric[idx];
      idx++;
    }
    return el;
  });

  return formated.join('');
};

export const randStr = () => {
  let len = 5;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let s = '';
  while (len--) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
};

export const randNum = () => {
  let len = 5;
  const chars = '1234567890987654321';
  let s = '';
  while (len--) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
};

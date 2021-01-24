const customTrim = (value: string): string => {
  return value.trim().replace(/(\s*)/g, '');
};

export default customTrim;
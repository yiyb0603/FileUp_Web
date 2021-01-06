const customTrim = (value: string): string => {
  return value.replace(/(\s*)/g, '');
};

export default customTrim;
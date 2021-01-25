import customTrim from "./CustomTrim";

export default (value: string | any): boolean => {
  if (Array.isArray(value)) {
    if (value.length <= 0) {
      return true;
    }
  }

  if (customTrim(value).length <= 0 || !value) {
    return true;
  }
  
  return false;
};
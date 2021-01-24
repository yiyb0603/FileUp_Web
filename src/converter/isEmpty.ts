import customTrim from "./CustomTrim";

const isEmpty = (value: string | any): boolean => {
  if (Array.isArray(value)) {
    if (value.length <= 0) {
      return true;
    }
  }

  if (customTrim(value).length <= 0) {
    return true;
  }

  if (!value) {
    return true;
  }
  
  return false;
};

export default isEmpty;
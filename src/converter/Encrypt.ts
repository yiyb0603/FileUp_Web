import { sha512 } from 'js-sha512';

export const convertSha512 = (value: string): string => {
  return sha512(value);
}
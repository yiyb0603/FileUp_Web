import { TOKEN_NAME } from 'constants/Constants';
import * as jwt from 'jsonwebtoken';
import { getCookie } from 'lib/Cookie';

export const decodeToken = (token: string) => {
  return jwt.decode(token);
}

export const getToken = () => {
  const token: string = getCookie(TOKEN_NAME);
  return token;
}
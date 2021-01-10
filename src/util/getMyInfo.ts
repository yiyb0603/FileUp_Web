import { decodeToken, getToken } from "./Token";

const getMyInfo = () => {
  const token = getToken();
  const myInfo = decodeToken(token);

  return myInfo;
};

export default getMyInfo;
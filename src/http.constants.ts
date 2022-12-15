import axios from 'axios';

export const postAxios = async (url :string, data: any): Promise<string> => {
  const {
    data: { access_token: accessToken },
  } = await axios({
    method: 'POST',
    url: url,
    data: data,
  });
  return accessToken;
};
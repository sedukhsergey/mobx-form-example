import axios from 'axios';
import ENV from './env';
type Account = {
  email: string,
  password: string,
}

type AccountData = {
  photo?: string,
  name?: string,
}


export const registrationAccount = async (data: Account) => {
  try {
    const response = await axios.post(
      `${ENV.BACKEND_URL}/auth/registration`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

export const loginAccount = async (data: Account) => {
  try {
    const response = await axios.post(
      `${ENV.BACKEND_URL}/auth/log-in`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

export const fetchAccount = async (accessToken: string) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${ENV.BACKEND_URL}/api/account`,
      responseType: 'json',
      withCredentials: true,
      headers: { Authorization: accessToken },
    });
    return response;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

export const updateAccountData = async (accessToken: string, data: AccountData) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${ENV.BACKEND_URL}/api/account`,
      responseType: 'json',
      data,
      headers: { Authorization: accessToken },
    });
    return response;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};



export const updateAccountFile = async (accessToken: string, data: any) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${ENV.BACKEND_URL}/api/account/file-upload`,
      responseType: 'json',
      data,
      headers: { Authorization: accessToken },
    });
    return response;
  } catch (err) {
    return Promise.reject(err.response || err);
  }
};

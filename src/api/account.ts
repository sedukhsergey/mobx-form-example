import axios from 'axios';
import SELECTED from '../env';

// import { BACKAEND_URL } from 'env';
type Account = {
  email: string,
  password: string,
}


export const registrationAccount = async (data: Account) => {
  try {
    const response = await axios.post(
      `${SELECTED.BACKEND_URL}/auth/registration`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

export const loginAccount = async (data: Account) => {
  try {
    const response = await axios.post(
      `${SELECTED.BACKEND_URL}/auth/log-in`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

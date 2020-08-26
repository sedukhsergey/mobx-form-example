import axios from 'axios';


// import { BACKAEND_URL } from 'env';
type Account = {
  email: string,
  password: string,
}


export const registrationAccount = async (data: Account) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/auth`,
      data,
      { withCredentials: true }
    );
    return response.data;
  } catch (err) {
    return Promise.reject(err.response);
  }
};

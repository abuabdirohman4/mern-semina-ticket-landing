import { toast } from 'react-toastify';

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      if (typeof message === 'string') toast.error(message);
      // console.log("error", error)
      // return error
      return Promise.reject(error);
    }
  }
}

import baseAxios from 'axios';
import { ENV } from '../constants/app.constants';

export const axios = baseAxios.create({
  baseURL: ENV.BACKEND_URL,
});

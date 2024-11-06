import { formDataPost } from "./base";
import { PHOTO_URL } from '../constants/api';

export const postPhotosApi = async (data) => {
  const response = await formDataPost(PHOTO_URL.upload, data);
  return response;
}

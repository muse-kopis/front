import axios from 'axios';

export const API_BASE = 'https://likelion-running.store';

const axiosClient = axios.create({
  baseURL: API_BASE,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const get = (url, config) => {
  const response = axiosClient.get(url, config || {});
  return response;
};

export const post = async (url, data) => {
  const response = await axiosClient.post(url, data);
  return response;
}

export const del = async (url, data) => {
  const response = await axiosClient.delete(url, { data });
  return response;
}

export const patch = async (url, data) => {
  const response = await axiosClient.patch(url, data);
  return response;
}

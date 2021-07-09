import axios from 'axios';

const uApi = 'http://localhost:5000/users';

export const FetchUser = async (id) => {
  id = id || '';
  return await axios.get(`${uApi}/${id}`);
};

export const SingleUser = async (user) => {
  return await axios.post(`${uApi}/add`, user);
};

export const UserDet = async (id, user) => {
  return await axios.put(`${uApi}/${id}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${uApi}/${id}`);
};

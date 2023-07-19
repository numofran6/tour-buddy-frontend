import { useQuery } from 'react-query';
import { apiPath } from '../utils/urlPath';
import axios from 'axios';

export const useFetch = (id, url) => {
  return useQuery([id], () => {
    return axios.get(`${apiPath}${url}`).then((res) => res.data);
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
};
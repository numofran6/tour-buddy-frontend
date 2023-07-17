import { useQuery } from 'react-query';
import axios from 'axios';

export const useFetch = (id, url) => {
  return useQuery([id], () => {
    return axios.get(url).then((res) => res.data);
  }, {
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
};
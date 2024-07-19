import axios, { AxiosResponse } from 'axios';
import { Employee } from '../types/types';

const url = `http://localhost:3001/employees`;

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    const response: AxiosResponse<Employee[]> = await axios.get(url);
    console.log('DATA: ', response.data);
    return response.data;
  } catch (error) {
    console.error('erro no metodo GET da API', error);
    throw error;
  }
};

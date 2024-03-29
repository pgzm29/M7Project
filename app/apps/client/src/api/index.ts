import axios, { type AxiosInstance } from 'axios';

const URL = import.meta.env.VITE_API_URL || '';

class AxiosClient {
  private static instance: AxiosInstance | null = null;

  private constructor() {
    // Private constructor to prevent instantiation
  }

  public static getInstance(): AxiosInstance {
    if (!AxiosClient.instance) {
      AxiosClient.instance = axios.create({
        baseURL: `${URL}/api`,
      });
    }

    return AxiosClient.instance;
  }
}

export const axiosClient: AxiosInstance = AxiosClient.getInstance();

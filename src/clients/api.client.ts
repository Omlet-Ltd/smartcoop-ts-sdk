import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://x107.omlet.co.uk/api/v1';

export function createApiClient(token: string): AxiosInstance {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
}
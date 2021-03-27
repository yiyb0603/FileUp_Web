import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { SERVER } from 'config/config.json';
import { getToken } from 'util/Token';

const customAxios: AxiosInstance = axios.create({
	baseURL: SERVER,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Token: getToken(),
	},
});

export const getResponse = async (url: string) => {
	try {
		const { data }: AxiosResponse = await customAxios.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};

export const postRequest = async (url: string, request: any) => {
	try {
		const { data }: AxiosResponse = await customAxios.post(url, request);
		return data;
	} catch (error) {
		throw error;
	}
};

export const modifyRequest = async (url: string, request: any) => {
	try {
		const { data }: AxiosResponse = await customAxios.put(url, request);
		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteRequest = async (url: string) => {
	try {
		const { data }: AxiosResponse = await customAxios.delete(url);
		return data;
	} catch (error) {
		throw error;
	}
};

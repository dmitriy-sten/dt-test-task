import axios from 'axios';

export const apiLCient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

apiLCient.interceptors.request.use(
    (config) => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        if (apiKey) {

            const url = new URL(config.url!, config.baseURL);
            url.searchParams.append('apiKey', apiKey);
            config.url = url.toString();
        }


        console.log(config.url);
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


import axios from "axios";

console.log(import.meta.env);
const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

const send = async (method, url, data, config) => {
    const response = await httpRequest.request({
        method,
        url,
        data,
        ...config,
    });

    if (response.status >= 200 && response.status < 400) {
        return response.data;
    }
};

export const get = (url, config) => {
    return send("get", url, null, config);
};

export const post = (url, data, config) => {
    return send("post", url, data, config);
};

export const put = (url, data, config) => {
    return send("put", url, data, config);
};

export const patch = (url, data, config) => {
    return send("patch", url, data, config);
};

export const del = (url, config) => {
    return send("del", url, null, config);
};

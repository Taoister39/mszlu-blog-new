export const getToken = () => localStorage.getItem("token");

export const setToken = (item) => localStorage.setItem("token", item);

export const removeToken = () => localStorage.removeItem("token");

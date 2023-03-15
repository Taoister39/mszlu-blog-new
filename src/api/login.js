import request from "@/request/index.js";

export const login = (account, password) =>
  request.post("/login", { account, password });

export const logout = (token) =>
  request.get("/logout", {
    headers: { Authorization: token },
  });

export const register = (account, nickname, password) =>
  request.post("/register", { account, nickname, password });

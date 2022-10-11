import req from "./req";

/**
 * 账号密码登录
 * @param params 参数
 * @returns
 */
export function userLogin(params: {}) {
  return req.post("/user/login", params);
}

export function getUserProfile(params: {} = {}) {
  return req.get("/user/profile", params);
}

export function getAllActiveUser(params: {} = {}) {
  return req.get("/user/all/active", params);
}



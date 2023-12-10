export const API_DOMAIN = NEXT_PUBLIC_API;
const BASE_USER_API = API_DOMAIN + "/auth";

export const USER_URL = {
    signup: BASE_USER_API + "/signup",
    login: BASE_USER_API + "/login",
};

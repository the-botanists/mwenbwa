import axios from "axios";
const headers = {
    "Content-Type": "application/json",
};
const burl = "http://localhost";

export default {
    login(email, password) {
        return axios.post(
            `${burl}/api/auth/login`,
            {
                email,
                password,
            },
            {
                headers,
            },
        );
    },
    signup(send) {
        return axios.post(`${burl}/api/auth/signup`, send, {headers});
    },

    isAuth() {
        return localStorage.getItem("token") !== null;
    },
    logout() {
        localStorage.clear();
    },
};

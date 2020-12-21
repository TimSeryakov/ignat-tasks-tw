import axios from "axios";

const NEKO_BACK_API = axios.create({
        baseURL: "https://neko-cafe-back.herokuapp.com/auth/test"
    }
)

export const API = {
    sendData(data: boolean) {
        return NEKO_BACK_API.post("", {success: data})
            .then(response => response.data)
            .catch(err => err.response.data)
    }
}
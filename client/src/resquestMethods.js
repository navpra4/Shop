import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YTBjZjgwZDM0NDQ2NjI2MWU5YzFkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODI1NzU0NiwiZXhwIjoxNzA4NTE2NzQ2fQ.lgDLBi82khHYAtkCiaC4aMqlz5D_b7U9WaPeoLQQ51M"
export const publicrequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`},
});
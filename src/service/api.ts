import axios from 'axios';


export const api = axios.create({
    baseURL: "ec2-3-81-172-156.compute-1.amazonaws.com:8080",
    headers: {
        "Content-Type": "application/json"
    }
})
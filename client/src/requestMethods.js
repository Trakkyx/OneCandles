import axios from "axios";

const BASE_URL= "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmJiOTk3ZWNkN2Y3MjEzMmVlZTAxMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDI0ODc4OSwiZXhwIjoxNjQ0NTA3OTg5fQ.Kc8M8qdFsVSvBChIDkmKlnEm14BuPc280XbVM5_EsuA"
export const publicRequest = axios.create({
baseURL:BASE_URL,

});

export const userRequest = axios.create({
baseURL:BASE_URL,
header:{authorization:`${TOKEN}`},

});
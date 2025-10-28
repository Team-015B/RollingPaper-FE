import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
});


// http.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("인증이 필요합니다.");
//     }
//     return Promise.reject(error);
//   }
// );
import axios from "axios";

const city = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllCity = async () => {
  try {
    let { data } = await city("/api/city");
    return data.city;
  } catch (error) {
    return [];
  }
};

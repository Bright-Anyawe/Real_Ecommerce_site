import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  console.log(response.data);

  return response.data;
};

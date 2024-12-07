


export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  console.log(response.data);

  return response.data;
};

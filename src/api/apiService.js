import axios from "axios";
import { Beta_URL, Domain } from "./constant";

// Product
export const getProductDetails = async (id) => {
  const response = await axios.get(`${Domain[Beta_URL]}/product/${id}`);
  return response.data;
};
export const getProducts = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/product`);
  return response.data;
};
export const getProductByCategory = async (category) => {
  const response = await axios.get(`${Domain[Beta_URL]}/product/get/?category=${category}`);
  return response.data;
};
export const getProductPagination = async (limit, page = 1) => {
  const response = await axios.get(
    `${Domain[Beta_URL]}/product/paginate/?limit=${limit}&page=${page}`
  );
  return response.data;
};
export const getAllProducts = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/product/get`);
  return response.data;
};
export const reviewProduct = async (id, data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/product/review/${id}`, data);
  return response.data;
};
export const rateProduct = async (id, data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/product/rating/${id}`, data);
  return response.data;
};

// Category
export const getCategory = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/category`);
  return response.data;
};

// User
export const getUserDetails = async () => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/info`);
  return response.data;
};
export const UserApi = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/login`, data, { 
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return response.data;
};
export const refreshToken = async () => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/token`, {  credentials: 'include' });
  return response.data;
};
export const logoutUserApi = async () => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/logout`);
  return response.data;
};
export const UpdateUserApi = async (data) => {
  const response = await axios.put(`${Domain[Beta_URL]}/user/update`, data);
  return response.data;
};
export const changePasswordApi = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/change`, data);
  return response.data;
};
export const forgotPasswordApi = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/forgot`, data);
  return response.data;
};
export const forgotPasswordTokenApi = async (id, token) => {
  const response = await axios.get(`${Domain[Beta_URL]}/user/${id}/forgot/${token}`);
  return response.data;
};
export const forgotUserPasswordApi = async (id, token, data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/user/${id}/forgot/${token}`, data);
  return response.data;
};
export const verifyTokenApi = async (id, token) => {
  const response = await axios.get(`${Domain[Beta_URL]}/user/${id}/verify/${token}`);
  return response.data;
};

// Banner
export const getBanners = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/banner`);
  return response.data;
};

// Cart
export const getCart = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/cart`);
  return response.data;
};
export const addToCart = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/cart/add`, data);
  return response.data;
};
export const removeFromCart = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/cart/remove`, data);
  return response.data;
};
export const removeUserCart = async () => {
  const response = await axios.delete(`${Domain[Beta_URL]}/cart/delete`);
  return response.data;
};

// Wishlist
export const getWishlist = async (id) => {
  const response = await axios.post(`${Domain[Beta_URL]}/wishlist/${id}`);
  return response.data;
};
export const addWishlist = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/wishlist/add`, data);
  return response.data;
};
export const removeWishlist = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/wishlist/remove`, data);
  return response.data;
};
export const allWishlist = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/wishlist/all`);
  return response.data;
};

// Address
export const getUserAddress = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/address`);
  return response.data;
};
export const getAddress = async (id) => {
  const response = await axios.get(`${Domain[Beta_URL]}/address/${id}`);
  return response.data;
};
export const addAddress = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/address/add`, data);
  return response.data;
};
export const deleteAddress = async (id) => {
  const response = await axios.delete(`${Domain[Beta_URL]}/address/delete/${id}`);
  return response.data;
};
export const updateAddress = async (id, data) => {
  const response = await axios.put(`${Domain[Beta_URL]}/address/update/${id}`, data);
  return response.data;
};

//payment
export const paymentApi = async (amount) => {
  const response = await axios.post(`${Domain[Beta_URL]}/payment/create`, {
    amount,
  });
  return response.data;
};

//Order
export const addnewOrder = async (data) => {
  const response = await axios.post(`${Domain[Beta_URL]}/order/new`, data);
  return response.data;
};
export const getAllOrder = async () => {
  const response = await axios.get(`${Domain[Beta_URL]}/order`);
  return response.data;
};
export const updateOrder = async (id) => {
  const response = await axios.put(`${Domain[Beta_URL]}/order/update/${id}`, data);
  return response.data;
};
export const deleteOrder = async (id) => {
  const response = await axios.delete(`${Domain[Beta_URL]}/order/delete/${id}`, data);
  return response.data;
};
export const cancelOrder = async (id) => {
  const response = await axios.post(`${Domain[Beta_URL]}/order/cancel/${id}`, data);
  return response.data;
};
export const getOrder = async (id) => {
  const response = await axios.get(`${Domain[Beta_URL]}/order/${id}`);
  return response.data;
};

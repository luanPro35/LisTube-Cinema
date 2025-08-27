import axios from "axios";

const API_URL = "/api/auth"; // Replace with your actual API endpoint

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data; // Assuming response.data contains user info and token
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Re-throw to be caught by the caller
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

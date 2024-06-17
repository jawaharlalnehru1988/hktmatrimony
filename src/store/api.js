

      // src/service/App.js

import axiosInstance from './axiosConfig'; // Import the configured Axios instance

export const getData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data', error);
    throw error;
  }
};

// Add more methods for PUT, DELETE, etc., as needed

// Example usage of getData and postData

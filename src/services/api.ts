import axios from 'axios';

const API_URL = 'https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/INR';

export const fetchRates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Error fetching rates', error);
    throw error;
  }
};

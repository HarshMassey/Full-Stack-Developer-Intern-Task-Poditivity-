// src/services/api.ts
import axios from 'axios';

export const fetchFeedData = async (page: number, category: string) => {
  try {
    const response = await axios.get('https://example.com/feed', {
      params: { page, category }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching feed data:', error);
    return [];
  }
};
